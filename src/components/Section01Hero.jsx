import { ArrowDown } from 'lucide-react';
import { romcomData } from '../data/romcomData';

export default function Section01Hero({ onEnterStory }) {
  const { hero } = romcomData;

  return (
    <section
      id="section-hero"
      className="min-h-[85vh] sm:min-h-0 py-8 px-5 flex flex-col justify-center items-center text-center relative"
    >
      {/* Decorative Tiny Doodles */}
      <span className="absolute top-4 left-6 text-xs font-handwriting text-[#D4A5A5] select-none">
        ✦
      </span>
      <span className="absolute top-12 right-14 text-sm font-handwriting text-[#D4A5A5] rotate-12 select-none">
        ♡
      </span>

      {/* Top Editorial Label */}
      <div className="flex flex-col items-center mb-3">
        <span className="text-[10px] font-mono tracking-[0.25em] text-stone-500 uppercase font-semibold">
          {hero.label}
        </span>
        <div className="w-6 h-px bg-stone-300 mt-1" />
      </div>

      {/* Main Editorial Heading */}
      <div className="mb-3 relative max-w-xs">
        <h1 className="font-editorial text-3xl sm:text-4xl text-stone-900 leading-[1.12] tracking-tight font-normal">
          Somehow,<br />
          we became<br />
          <span className="italic font-normal text-[#5C1324]">
            a whole story.
          </span>
        </h1>

        {/* Small Handwritten Note & Arrow */}
        <div className="mt-1.5 flex items-center justify-center gap-1">
          <span className="font-handwriting text-base text-[#C92A42] rotate-[-1deg]">
            {hero.handwrittenNote}
          </span>
          <span className="font-handwriting text-sm text-[#C92A42]">→</span>
        </div>
      </div>

      {/* Hero Photo - Compact Film Frame */}
      <div className="w-full max-w-[240px] sm:max-w-[260px] my-2 relative">
        <div className="film-border rounded-2xl overflow-hidden bg-stone-100 aspect-4/3 sm:aspect-16/10 shadow-md shadow-stone-900/5">
          <img
            src={hero.photo}
            alt="An Unofficial Love Story"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {/* Film Frame Detail Badge */}
        <div className="absolute -bottom-2.5 right-3 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[9px] font-mono text-stone-600 border border-stone-200/80 shadow-xs">
          ACT I • THE INTRO
        </div>
      </div>

      {/* Cinematic CTA Button */}
      <div className="mt-5 flex flex-col items-center gap-1.5">
        <button
          id="btn-enter-story"
          onClick={onEnterStory}
          className="group px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#5C1324] text-white text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-md"
        >
          <span>{hero.cta}</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <span className="text-[10px] font-handwriting text-stone-400">
          scroll to read scene 01
        </span>
      </div>
    </section>
  );
}
