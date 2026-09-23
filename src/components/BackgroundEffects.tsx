import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  theme: 'dark' | 'light';
}

/* ------------------------------------------------------------------
   Cloud Computing background — a living AWS-style diagram:
   digital cloud platforms built from glowing network nodes,
   server pods hanging beneath them, and data packets traveling
   the connections. Three depth layers + mouse camera parallax.
------------------------------------------------------------------- */

interface RingNode { dx: number; dy: number; r: number }
interface Pod { dx: number; dy: number; w: number; h: number }
interface Packet { a: number; b: number; speed: number; offset: number }
interface CloudPlatform {
  x: number;
  y: number;
  z: number;
  speed: number;
  phase: number;
  seed: number;
  nodes: RingNode[];
  pods: Pod[];
  packets: Packet[];
}

const makePlatform = (z: number, width: number, height: number): CloudPlatform => {
  const scale = 0.55 + z * 0.9;
  const count = 12 + Math.floor(Math.random() * 4); // ring resolution
  const seed = Math.random() * Math.PI * 2;
  const rx = 150 * scale;
  const ry = 62 * scale;

  // Cloud silhouette ring: bumpy top, flatter bottom
  const nodes: RingNode[] = [];
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const topHalf = Math.sin(t) < 0;
    const bump = topHalf
      ? 1 + 0.17 * Math.sin(t * 3 + seed) + 0.07 * Math.sin(t * 5 + seed * 2)
      : 1 + 0.05 * Math.sin(t * 4 + seed);
    nodes.push({
      dx: Math.cos(t) * rx * bump,
      dy: Math.sin(t) * ry * bump - 12 * scale,
      r: (2 + Math.random() * 1.6) * scale
    });
  }

  // Server pods hanging under the platform
  const podCount = 2 + Math.floor(Math.random() * 2);
  const pods: Pod[] = [];
  for (let i = 0; i < podCount; i++) {
    const spread = rx * 0.8;
    pods.push({
      dx: ((i / Math.max(podCount - 1, 1)) - 0.5) * spread + (Math.random() - 0.5) * 30,
      dy: ry + 34 * scale + Math.random() * 22 * scale,
      w: (18 + Math.random() * 8) * scale,
      h: (11 + Math.random() * 4) * scale
    });
  }

  // Data packets traveling along ring edges and down to pods
  const packets: Packet[] = [];
  const packetCount = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < packetCount; i++) {
    if (Math.random() < 0.35 && pods.length > 0) {
      // ring node → pod
      packets.push({
        a: Math.floor(Math.random() * count),
        b: count + Math.floor(Math.random() * podCount),
        speed: 0.25 + Math.random() * 0.4,
        offset: Math.random()
      });
    } else {
      // ring edge
      const a = Math.floor(Math.random() * count);
      packets.push({ a, b: (a + 1) % count, speed: 0.25 + Math.random() * 0.4, offset: Math.random() });
    }
  }

  return {
    x: Math.random() * (width + 500) - 250,
    y: height * (0.12 + Math.random() * 0.5),
    z,
    speed: 0.05 + z * 0.18,
    phase: Math.random() * Math.PI * 2,
    seed,
    nodes,
    pods,
    packets
  };
};

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Depth layers: far / mid / near platforms
    const platforms: CloudPlatform[] = [
      ...Array.from({ length: 2 }, () => makePlatform(0.22 + Math.random() * 0.12, width, height)),
      ...Array.from({ length: 2 }, () => makePlatform(0.48 + Math.random() * 0.12, width, height)),
      ...Array.from({ length: 1 }, () => makePlatform(0.8 + Math.random() * 0.1, width, height))
    ];

    const mouse = { tx: 0, ty: 0, x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.tx = (e.clientX / width - 0.5) * 2;
      mouse.ty = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = (time: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;
      ctx.clearRect(0, 0, width, height);

      const lineAlpha = dark ? 0.16 : 0.4;
      const nodeAlpha = dark ? 0.55 : 0.65;
      const fillAlpha = dark ? 0.05 : 0.14;

      const lineColor = dark ? '103, 232, 249' : '2, 132, 199';      // cyan-300 / sky-600
      const nodeColor = dark ? '165, 243, 252' : '3, 105, 161';      // bright / deep
      const podColor = dark ? '129, 140, 248' : '79, 70, 229';       // indigo
      const packetColor = dark ? '224, 252, 255' : '2, 132, 199';

      for (const platform of platforms) {
        platform.x += platform.speed;
        if (platform.x > width + 300) platform.x = -300;

        const bob = Math.sin(time * 0.0004 + platform.phase) * 10 * platform.z;
        const px = mouse.x * -36 * platform.z;
        const py = mouse.y * -20 * platform.z;
        const ox = platform.x + px;
        const oy = platform.y + bob + py;

        // Interior soft fill (gives the cloud volume)
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, 190 * (0.55 + platform.z * 0.9));
        grad.addColorStop(0, `rgba(${lineColor}, ${fillAlpha})`);
        grad.addColorStop(1, `rgba(${lineColor}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, 190 * (0.55 + platform.z * 0.9), 0, Math.PI * 2);
        ctx.fill();

        // Ring connections (closed polygon)
        ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha * (0.5 + platform.z)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        platform.nodes.forEach((n, i) => {
          const x = ox + n.dx;
          const y = oy + n.dy;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.stroke();

        // Nodes
        ctx.fillStyle = `rgba(${nodeColor}, ${nodeAlpha * (0.5 + platform.z)})`;
        for (const n of platform.nodes) {
          ctx.beginPath();
          ctx.arc(ox + n.dx, oy + n.dy, n.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // Pods hanging below with connector lines
        ctx.strokeStyle = `rgba(${podColor}, ${lineAlpha * (0.5 + platform.z)})`;
        ctx.fillStyle = `rgba(${podColor}, ${lineAlpha + 0.08})`;
        platform.pods.forEach((pod, podIdx) => {
          const anchor = platform.nodes[(podIdx * 4) % platform.nodes.length];
          const bx = ox + anchor.dx;
          const by = oy + anchor.dy;
          const cxp = ox + pod.dx;
          const cyp = oy + pod.dy;

          // Connector
          ctx.beginPath();
          ctx.moveTo(bx, by);
          ctx.lineTo(cxp, cyp - pod.h / 2);
          ctx.stroke();

          // Server box
          ctx.beginPath();
          ctx.roundRect(cxp - pod.w / 2, cyp - pod.h / 2, pod.w, pod.h, 2);
          ctx.fill();
          // Vents
          ctx.strokeRect(cxp - pod.w / 2 + 2, cyp - 2, pod.w - 4, 1.2);
        });

        // Data packets traveling the network
        ctx.shadowColor = `rgba(${packetColor}, 0.9)`;
        ctx.shadowBlur = 8 * platform.z + 4;
        ctx.fillStyle = `rgba(${packetColor}, ${dark ? 0.9 : 0.8})`;
        for (const packet of platform.packets) {
          const t = (time * 0.001 * packet.speed + packet.offset) % 1;
          let ax: number, ay: number, bx2: number, by2: number;
          if (packet.b >= platform.nodes.length) {
            const pod = platform.pods[packet.b - platform.nodes.length];
            if (!pod) continue;
            const anchor = platform.nodes[packet.a];
            ax = ox + anchor.dx; ay = oy + anchor.dy;
            bx2 = ox + pod.dx; by2 = oy + pod.dy;
          } else {
            const na = platform.nodes[packet.a];
            const nb = platform.nodes[packet.b];
            ax = ox + na.dx; ay = oy + na.dy;
            bx2 = ox + nb.dx; by2 = oy + nb.dy;
          }
          ctx.beginPath();
          ctx.arc(lerp(ax, bx2, t), lerp(ay, by2, t), 1.6 + platform.z * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }
    };

    const render = (time: number) => {
      draw(time);
      animationFrameId = requestAnimationFrame(render);
    };

    if (reducedMotion) {
      draw(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base vignette */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          dark
            ? 'bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0)_0%,rgba(2,6,23,0.55)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0)_0%,rgba(241,245,249,0.6)_100%)]'
        }`}
      />

      {/* Soft glow one — top left, cool cyan */}
      <div
        className="aurora-blob absolute -top-32 -left-32 w-[38rem] h-[38rem] rounded-full blur-3xl"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(34,211,238,0) 70%)'
            : 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, rgba(34,211,238,0) 70%)',
          animation: 'aurora-drift-1 34s ease-in-out infinite'
        }}
      />

      {/* Soft glow two — bottom right, deep indigo */}
      <div
        className="aurora-blob absolute -bottom-40 -right-40 w-[44rem] h-[44rem] rounded-full blur-3xl"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, rgba(99,102,241,0) 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0) 70%)',
          animation: 'aurora-drift-2 42s ease-in-out infinite'
        }}
      />

      {/* Cloud computing network field */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
