import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  theme: 'dark' | 'light';
}

/* 3D soft cloud field: depth-sorted cloud clusters drifting through
   perspective space with mouse-based camera parallax. */
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

    interface Puff { dx: number; dy: number; r: number; top: boolean }
    interface Cloud {
      x: number; y: number; z: number; speed: number;
      puffs: Puff[]; phase: number;
    }

    // Build a cloud: puffs arranged along an arc, bigger toward the middle
    const makeCloud = (z: number): Cloud => {
      const puffCount = 5 + Math.floor(Math.random() * 3);
      const spread = 300 * (0.7 + z * 0.6);
      const puffs: Puff[] = [];
      for (let j = 0; j < puffCount; j++) {
        const t = puffCount === 1 ? 0.5 : j / (puffCount - 1);
        puffs.push({
          dx: (t - 0.5) * spread + (Math.random() - 0.5) * 60,
          dy: -Math.sin(t * Math.PI) * 44 * (0.6 + z * 0.5) + (Math.random() - 0.5) * 26,
          r: (55 + Math.random() * 55) * (0.65 + z * 0.55) * (1 - Math.abs(t - 0.5) * 0.35),
          top: Math.random() > 0.55
        });
      }
      return {
        x: Math.random() * (width + 700) - 350,
        y: height * (0.10 + Math.random() * 0.55),
        z,
        speed: 0.06 + z * 0.22, // nearer clouds drift faster (parallax)
        puffs,
        phase: Math.random() * Math.PI * 2
      };
    };

    // Depth layers: a few far, some mid, a couple near for real 3D feel
    const clouds: Cloud[] = [
      ...Array.from({ length: 3 }, () => makeCloud(0.2 + Math.random() * 0.15)),
      ...Array.from({ length: 3 }, () => makeCloud(0.45 + Math.random() * 0.15)),
      ...Array.from({ length: 2 }, () => makeCloud(0.75 + Math.random() * 0.2))
    ];

    // Camera parallax from mouse (lerped for smoothness)
    const mouse = { tx: 0, ty: 0, x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.tx = (e.clientX / width - 0.5) * 2; // -1..1
      mouse.ty = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawClouds = (time: number) => {
      // Ease camera toward target
      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Far clouds first, near clouds last (painter's algorithm = depth)
      const sorted = [...clouds].sort((a, b) => a.z - b.z);

      for (const cloud of sorted) {
        cloud.x += cloud.speed;
        if (cloud.x > width + 400) cloud.x = -400;

        const bob = Math.sin(time * 0.00028 + cloud.phase) * 12 * cloud.z;
        // Camera parallax: near clouds shift more
        const px = mouse.x * -34 * cloud.z;
        const py = mouse.y * -18 * cloud.z;

        const baseAlpha = (dark ? 0.14 : 0.35) + cloud.z * (dark ? 0.16 : 0.25);

        for (const puff of cloud.puffs) {
          const cx = cloud.x + puff.dx + px;
          const cy = cloud.y + puff.dy + bob + py;
          if (cx < -300 || cx > width + 300) continue;

          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, puff.r);
          if (puff.top) {
            // Lit top — bright cyan-tinted highlight
            grad.addColorStop(0, `rgba(${dark ? '224, 247, 255' : '255, 255, 255'}, ${Math.min(baseAlpha * 1.9, 0.75)})`);
            grad.addColorStop(0.55, `rgba(${dark ? '125, 211, 252' : '255, 255, 255'}, ${baseAlpha * 0.7})`);
          } else {
            // Shaded body — visible slate mist in dark, soft white in light
            grad.addColorStop(0, `rgba(${dark ? '186, 200, 224' : '255, 255, 255'}, ${baseAlpha})`);
            grad.addColorStop(0.55, `rgba(${dark ? '120, 133, 163' : '226, 232, 240'}, ${baseAlpha * 0.6})`);
          }
          grad.addColorStop(1, 'rgba(148, 163, 184, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, puff.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const render = (time: number) => {
      drawClouds(time);
      animationFrameId = requestAnimationFrame(render);
    };

    if (reducedMotion) {
      drawClouds(0); // single static frame
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
      {/* Base vignette for depth */}
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

      {/* 3D cloud field — screen blend makes clouds glow over the dark bg */}
      <canvas ref={canvasRef} className={`absolute inset-0 ${dark ? 'mix-blend-screen' : ''}`} />
    </div>
  );
};
