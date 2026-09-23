import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  theme: 'dark' | 'light';
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';
    const particleColor = isDark ? '103, 232, 249' : '12, 129, 199';
    const lineColor = isDark ? '56, 189, 248' : '3, 105, 161';

    // Mouse tracking for interactive particles
    const mouse = { x: -9999, y: -9999 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    const particleCount = Math.min(70, Math.floor(width / 22));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.5 + 0.25
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        // Gentle attraction toward mouse — "liquid" pull
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 220 && mdist > 0.001) {
          p.vx += (mdx / mdist) * 0.012;
          p.vy += (mdy / mdist) * 0.012;
        }

        // Damping keeps drift calm
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * (isDark ? 0.7 : 0.45)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 140) * (isDark ? 0.14 : 0.07);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base vignette */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          dark
            ? 'bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0)_0%,rgba(2,6,23,0.6)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0)_0%,rgba(241,245,249,0.7)_100%)]'
        }`}
      />

      {/* Aurora blobs — liquid, morphing, drifting */}
      <div
        className="aurora-blob absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-60"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(34,211,238,0.20) 0%, rgba(34,211,238,0) 70%)'
            : 'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 70%)',
          animation: 'aurora-drift-1 26s ease-in-out infinite'
        }}
      />
      <div
        className="aurora-blob absolute top-1/4 -right-48 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-60"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 70%)',
          animation: 'aurora-drift-2 32s ease-in-out infinite'
        }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0) 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0) 70%)',
          animation: 'aurora-drift-3 38s ease-in-out infinite'
        }}
      />

      {/* Fine grid texture */}
      <div
        className={`absolute inset-0 ${
          dark ? 'opacity-[0.06]' : 'opacity-[0.09]'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />

      {/* Interactive particle canvas */}
      <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${dark ? 'opacity-75' : 'opacity-45'}`} />
    </div>
  );
};
