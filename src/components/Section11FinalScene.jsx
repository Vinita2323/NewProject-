import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romcomData } from '../data/romcomData';

export default function Section11FinalScene({ onStartAgain }) {
  const { finalScene, couple } = romcomData;

  useEffect(() => {
    // Celebratory confetti burst at the finale
    try {
      confetti({
        particleCount: 30,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#D4A5A5', '#5C1324', '#FAF7F2', '#C92A42'],
      });
    } catch {
      // Ignore
    }
  }, []);

  return (
    <section
      id="section-final"
      className="py-14 px-5 flex flex-col justify-center items-center text-center relative"
    >
      {/* Top Tagline */}
      <span className="text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase font-semibold mb-2">
        {finalScene.subheading}
      </span>

      {/* Large Heading */}
      <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal tracking-tight leading-[1.15] max-w-xs sm:max-w-sm">
        AND THIS IS JUST<br />
        <span className="italic text-[#5C1324]">OUR STORY SO FAR.</span>
      </h2>

      {/* Best Couple Portrait Card */}
      <div className="w-full max-w-[240px] sm:max-w-[260px] my-5 relative">
        <div className="film-border rounded-2xl overflow-hidden bg-stone-100 aspect-3/4 shadow-lg">
          <img
            src={finalScene.photo}
            alt="Our story so far"
            className="w-full h-full object-cover object-[center_28%]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Couple Names */}
      <div className="font-editorial text-lg sm:text-xl text-stone-900 tracking-wider">
        ♡ {couple.displayNames} ♡
      </div>

      {/* Playful Final Line */}
      <p className="mt-2 text-xs font-sans text-stone-500 max-w-xs italic">
        {finalScene.tagline}
      </p>

      {/* Start Again Replay CTA */}
      <button
        id="btn-start-again"
        onClick={onStartAgain}
        className="mt-6 px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#5C1324] text-white text-[11px] font-mono font-semibold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer"
      >
        <RotateCcw className="w-3 h-3" />
        <span>{finalScene.replayCta}</span>
      </button>

      {/* Tiny Footer */}
      <div className="mt-10 text-[9px] font-mono text-stone-400">
        pratham & vini • made with love ♡
      </div>
    </section>
  );
}
