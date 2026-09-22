import { useState } from 'react';
import { romcomData } from '../data/romcomData';

const CARD_THEMES = [
  {
    bg: 'bg-gradient-to-br from-[#FFF5F7] via-[#FFEBF0] to-[#FFF0F5]',
    border: 'border-[#FBCFE8]',
    badgeBg: 'bg-[#FFE4E6]/90 text-[#9E1C36] border-[#FDA4AF]/60',
    badge: '💌 our secret dialect',
    emoji: '♡',
    shadow: 'shadow-pink-100/50',
  },
  {
    bg: 'bg-gradient-to-br from-[#FFFDF7] via-[#FFF7ED] to-[#FFEDD5]/70',
    border: 'border-[#FED7AA]',
    badgeBg: 'bg-[#FFEDD5]/90 text-[#9A3412] border-[#FDBA74]/60',
    badge: '🍕 daily debate',
    emoji: '🤤',
    shadow: 'shadow-amber-100/50',
  },
  {
    bg: 'bg-gradient-to-br from-[#FFF5F8] via-[#FDF2F8] to-[#FCE7F3]/70',
    border: 'border-[#FBCFE8]',
    badgeBg: 'bg-[#FCE7F3]/90 text-[#9D174D] border-[#F472B6]/60',
    badge: '📸 blackmail archive',
    emoji: '🙈',
    shadow: 'shadow-rose-100/50',
  },
  {
    bg: 'bg-gradient-to-br from-[#FAF5FF] via-[#F5F3FF] to-[#EDE9FE]/70',
    border: 'border-[#DDD6FE]',
    badgeBg: 'bg-[#EDE9FE]/90 text-[#6B21A8] border-[#C084FC]/60',
    badge: '🗣️ zero filter',
    emoji: '✨',
    shadow: 'shadow-purple-100/50',
  },
  {
    bg: 'bg-gradient-to-br from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3]/60',
    border: 'border-[#FDA4AF]',
    badgeBg: 'bg-[#FFE4E6]/90 text-[#BE123C] border-[#FB7185]/60',
    badge: '🥺 clingy hours',
    emoji: '💕',
    shadow: 'shadow-rose-100/50',
  },
];

export default function Section05ChaosReport() {
  const { chaosReport } = romcomData;
  const [tapped, setTapped] = useState({});
  const [floatingHearts, setFloatingHearts] = useState([]);

  const handleCardTap = (idx, e) => {
    setTapped(prev => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 1,
    }));

    // Spawn floating heart effect on tap
    const heartEmojis = ['💖', '💕', '✨', '🥰', '🌸', '💌'];
    const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : 20;

    const newHeart = {
      id: Date.now() + Math.random(),
      cardIdx: idx,
      emoji: randomEmoji,
      x,
      y,
    };

    setFloatingHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <section id="section-chaos" className="py-6 px-4 flex flex-col items-center relative">
      {/* Lovey-Dovey Section Header */}
      <div className="text-center mb-3.5 max-w-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFE4E8]/80 border border-[#FDA4AF]/60 text-[#9E1C36] text-[11px] font-handwriting font-bold tracking-wide shadow-xs mb-1.5">
          <span>✨</span>
          <span>our silly little universe</span>
          <span>♡</span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 tracking-tight font-normal">
          The Chemistry & Chaos <span className="text-rose-500 font-serif">💕</span>
        </h2>
        <p className="mt-0.5 text-xs font-sans text-stone-500 italic">
          Scientifically proven: we are completely ridiculous together.
        </p>
      </div>

      {/* Romantic Pastel Cards Grid */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-2.5">
        {chaosReport.stats.map((stat, idx) => {
          const isWide = idx === 0;
          const count = tapped[idx] || 0;
          const theme = CARD_THEMES[idx % CARD_THEMES.length];
          const activeHearts = floatingHearts.filter(h => h.cardIdx === idx);

          if (isWide) {
            return (
              <div
                key={idx}
                onClick={(e) => handleCardTap(idx, e)}
                className={`col-span-2 ${theme.bg} rounded-2xl p-3 sm:p-3.5 border ${theme.border} shadow-sm ${theme.shadow} transition-all duration-300 cursor-pointer active:scale-[0.98] relative overflow-hidden group`}
              >
                {/* Floating Heart Particles */}
                {activeHearts.map(h => (
                  <span
                    key={h.id}
                    style={{ left: `${h.x}px`, top: `${h.y}px` }}
                    className="absolute pointer-events-none text-base animate-bounce -translate-y-6 opacity-90 transition-all duration-700"
                  >
                    {h.emoji}
                  </span>
                ))}

                {/* Top Badge & Love Counter */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-handwriting font-bold border ${theme.badgeBg}`}>
                    {theme.badge}
                  </span>
                  <span className="text-[10px] font-handwriting text-[#9E1C36] font-semibold flex items-center gap-1">
                    {count > 0 ? (
                      <span className="animate-pulse">loved ×{count} 💖</span>
                    ) : (
                      <span className="text-rose-400 group-hover:text-rose-600 transition">tap for love ♡</span>
                    )}
                  </span>
                </div>

                {/* Horizontal Content */}
                <div className="flex items-center justify-between gap-3">
                  <div className="shrink-0">
                    <div className="font-editorial text-3xl text-[#7A1528] font-normal tracking-tight leading-none mb-1 flex items-center gap-1.5">
                      <span>{stat.value}</span>
                      <span className="text-xl font-handwriting text-rose-500">♡</span>
                    </div>
                    <div className="text-xs font-semibold text-stone-800">
                      {stat.label}
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-800 font-medium font-sans text-right max-w-[170px] leading-snug italic">
                    "{stat.note}"
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              onClick={(e) => handleCardTap(idx, e)}
              className={`col-span-1 ${theme.bg} rounded-2xl p-3 border ${theme.border} shadow-sm ${theme.shadow} transition-all duration-300 cursor-pointer active:scale-[0.98] relative overflow-hidden flex flex-col justify-between h-full group`}
            >
              {/* Floating Heart Particles */}
              {activeHearts.map(h => (
                <span
                  key={h.id}
                  style={{ left: `${h.x}px`, top: `${h.y}px` }}
                  className="absolute pointer-events-none text-sm animate-bounce -translate-y-5 opacity-90 transition-all duration-700"
                >
                  {h.emoji}
                </span>
              ))}

              <div>
                {/* Badge & Mini Love Counter */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9.5px] font-handwriting font-bold border ${theme.badgeBg}`}>
                    {stat.badge || theme.badge}
                  </span>
                  {count > 0 && (
                    <span className="text-[9px] font-handwriting text-[#9E1C36] font-bold">
                      ×{count} 💖
                    </span>
                  )}
                </div>

                {/* Value & Label */}
                <div className="my-1.5">
                  <div
                    className={`font-editorial text-[#7A1528] font-normal tracking-tight leading-none flex items-center gap-1 ${
                      stat.value.length > 5 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    <span>{stat.value}</span>
                    <span className="text-sm font-handwriting text-rose-500">{stat.emoji || theme.emoji}</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-800 leading-snug mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="text-[10.5px] text-stone-800 font-medium font-sans leading-snug mt-2 pt-1.5 border-t border-rose-200/60 italic">
                "{stat.note}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
