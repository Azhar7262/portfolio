import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  theme: 'dark' | 'light';
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(60, Math.floor(width / 25));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const particleColor = isDark ? '56, 189, 248' : '14, 165, 233'; // Cyan / Sky blue
      const lineColor = isDark ? '14, 165, 233' : '3, 105, 161';

      // Move & draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * (isDark ? 0.6 : 0.4)})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 130) * (isDark ? 0.15 : 0.08);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background glow radial shapes */}
      <div
        className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
        }`}
      />
      <div
        className={`absolute top-2/3 -right-32 w-[30rem] h-[30rem] rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-400/15'
        }`}
      />
      <div
        className={`absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-sky-500/10' : 'bg-sky-300/15'
        }`}
      />
      {/* Interactive particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
