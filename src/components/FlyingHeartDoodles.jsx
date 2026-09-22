import { useState, useEffect } from 'react';

// Cute hand-drawn doodle heart SVG variants
function HeartDoodle({ type = 0, className = '' }) {
  switch (type % 5) {
    case 0:
      // Cute sketched outline heart
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 27 C11 22 4 17 4 10 C4 5.5 7.5 3 12 3.5 C14.5 4 15.5 5.5 16 6.5 C16.5 5.5 17.5 4 20 3.5 C24.5 3 28 5.5 28 10 C28 17 21 22 16 27 Z" />
        </svg>
      );
    case 1:
      // Double-stroke scribble doodle heart
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
          <path d="M16 26 C11.5 21.5 5 16.5 5 10.5 C5 6.5 8 4.5 12 4.5 C14.5 4.5 15.5 6 16 7 C16.5 6 17.5 4.5 20 4.5 C24 4.5 27 6.5 27 10.5 C27 16.5 20.5 21.5 16 26 Z" />
          <path d="M14 23 C10 19 6.5 15 6.5 11 C6.5 8 8.5 6.5 11 6.5 C13 6.5 14.5 8 15 9" opacity="0.6" strokeWidth="1.4" />
        </svg>
      );
    case 2:
      // Soft semi-filled watercolor style heart
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
          <path d="M16 26.5 L14.5 25.1 C8.5 19.6 4.5 15.8 4.5 11 C4.5 7.2 7.4 4.5 11 4.5 C13.2 4.5 15.1 5.6 16 7.2 C16.9 5.6 18.8 4.5 21 4.5 C24.6 4.5 27.5 7.2 27.5 11 C27.5 15.8 23.5 19.6 17.5 25.1 L16 26.5 Z" opacity="0.65" />
        </svg>
      );
    case 3:
      // Playful heart with tiny sparkle accent
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className}>
          <path d="M15 26 C10.5 21.5 5 16.5 5 10.5 C5 6.5 8 4.5 11.5 4.5 C13.8 4.5 14.8 5.8 15 6.8 C15.2 5.8 16.2 4.5 18.5 4.5 C22 4.5 25 6.5 25 10.5 C25 16.5 19.5 21.5 15 26 Z" />
          <path d="M26 3 L26 7 M24 5 L28 5" strokeWidth="1.6" />
        </svg>
      );
    case 4:
    default:
      // Cute classic open-tail cursive heart
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 26 C12 22 5 17 5 10 C5 5.5 8.5 3.5 12.5 4 C14.5 4.5 15.5 6 16 7 C16.5 6 17.5 4.5 19.5 4 C23.5 3.5 27 5.5 27 10 C27 17 20 22 16 26" />
          <path d="M15 25.5 C15.5 26.5 16.5 28 17.5 29" strokeWidth="1.8" />
        </svg>
      );
  }
}

// 18 statically positioned ambient hearts with staggered negative delays
const AMBIENT_DOODLES = [
  { id: 1, left: 4, size: 22, duration: 13, delay: -2, type: 0, color: '#C92A42' },
  { id: 2, left: 11, size: 18, duration: 16, delay: -8, type: 1, color: '#FDA4AF' },
  { id: 3, left: 18, size: 26, duration: 14, delay: -5, type: 2, color: '#FB7185' },
  { id: 4, left: 26, size: 16, duration: 18, delay: -11, type: 3, color: '#8B3A4F' },
  { id: 5, left: 33, size: 24, duration: 12, delay: -3, type: 4, color: '#F472B6' },
  { id: 6, left: 41, size: 20, duration: 15, delay: -9, type: 0, color: '#FDA4AF' },
  { id: 7, left: 49, size: 28, duration: 17, delay: -6, type: 1, color: '#C92A42' },
  { id: 8, left: 56, size: 18, duration: 13, delay: -13, type: 2, color: '#F43F5E' },
  { id: 9, left: 63, size: 22, duration: 16, delay: -4, type: 3, color: '#E11D48' },
  { id: 10, left: 71, size: 26, duration: 14, delay: -10, type: 4, color: '#8B3A4F' },
  { id: 11, left: 79, size: 17, duration: 19, delay: -7, type: 0, color: '#FDA4AF' },
  { id: 12, left: 86, size: 24, duration: 13, delay: -1, type: 1, color: '#FB7185' },
  { id: 13, left: 93, size: 20, duration: 15, delay: -12, type: 2, color: '#C92A42' },
  { id: 14, left: 22, size: 20, duration: 20, delay: -15, type: 0, color: '#F472B6' },
  { id: 15, left: 38, size: 16, duration: 17, delay: -14, type: 4, color: '#FDA4AF' },
  { id: 16, left: 60, size: 25, duration: 18, delay: -16, type: 1, color: '#8B3A4F' },
  { id: 17, left: 75, size: 19, duration: 12, delay: -17, type: 3, color: '#C92A42' },
  { id: 18, left: 90, size: 23, duration: 15, delay: -18, type: 2, color: '#FB7185' },
];

export default function FlyingHeartDoodles() {
  const [tapBursts, setTapBursts] = useState([]);

  // Spawn mini floating heart burst on user tap/click
  useEffect(() => {
    const handlePointerDown = (e) => {
      // Don't trigger if clicking interactive modal close or form controls
      if (e.target.closest('button, input, textarea, a')) return;

      const x = e.clientX;
      const y = e.clientY;
      const newHearts = Array.from({ length: 3 }).map((_, i) => ({
        id: Date.now() + Math.random(),
        x: x + (Math.random() * 30 - 15),
        y: y + (Math.random() * 20 - 10),
        size: 18 + Math.floor(Math.random() * 12),
        type: Math.floor(Math.random() * 5),
        color: ['#C92A42', '#FB7185', '#FDA4AF', '#8B3A4F', '#F472B6'][Math.floor(Math.random() * 5)],
        driftX: (i - 1) * 22 + (Math.random() * 16 - 8),
      }));

      setTapBursts((prev) => [...prev.slice(-15), ...newHearts]);

      setTimeout(() => {
        setTapBursts((prev) => prev.filter((item) => !newHearts.some((nh) => nh.id === item.id)));
      }, 1200);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
      {/* Ambient Floating Heart Doodles */}
      {AMBIENT_DOODLES.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-doodle"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            color: heart.color,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <HeartDoodle type={heart.type} className="w-full h-full drop-shadow-2xs opacity-70" />
        </div>
      ))}

      {/* Tap/Click Burst Hearts */}
      {tapBursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{
            left: `${burst.x}px`,
            top: `${burst.y}px`,
            width: `${burst.size}px`,
            height: `${burst.size}px`,
            color: burst.color,
            animation: 'burstFloat 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            '--drift-x': `${burst.driftX}px`,
          }}
        >
          <HeartDoodle type={burst.type} className="w-full h-full drop-shadow-xs" />
        </div>
      ))}
    </div>
  );
}
