import React from 'react';

interface BackgroundEffectsProps {
  theme: 'dark' | 'light';
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme }) => {
  const dark = theme === 'dark';

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
    </div>
  );
};
