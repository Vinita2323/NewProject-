import { romcomData } from '../data/romcomData';

export default function Section02OpeningScene() {
  const { openingScene } = romcomData;

  return (
    <section id="section-opening-scene" className="pt-3 pb-8 px-5 sm:px-6 flex flex-col items-start text-left">
      {/* SCENE 01 Pill Badge matching reference */}
      <div className="inline-block rotate-[-2deg] mb-1">
        <span className="px-3 py-0.5 rounded-full bg-[#FCE7F3] text-[#8B3A4F] text-[10px] font-mono tracking-widest uppercase font-semibold shadow-2xs">
          {openingScene.tag}
        </span>
      </div>

      {/* Heading: How it all started. */}
      <h1 className="font-editorial text-3xl sm:text-4xl text-stone-900 tracking-tight font-normal leading-[1.12] mt-1 mb-3">
        {openingScene.heading}
      </h1>

      {/* Compact Polaroid Card with Washi Tape and Hand-drawn Doodles */}
      <div className="w-full flex justify-center my-2">
        <div className="relative w-[190px] sm:w-[210px]">
          {/* Left Hand-Drawn Arrow Doodle */}
          <div className="absolute -left-6 sm:-left-7 top-2/3 -translate-y-1/2 select-none pointer-events-none">
            <svg width="22" height="30" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-700 stroke-current rotate-[-15deg]">
              <path d="M4 8C10 16 16 22 24 28M24 28L18 27M24 28L21 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 4C2 9 6 11 8 7" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>

          {/* Right Hand-Drawn Heart & "plot twist: it actually worked." Note */}
          <div className="absolute -right-16 sm:-right-20 top-1/2 -translate-y-1/2 flex flex-col items-start select-none z-10 pointer-events-none">
            <span className="font-handwriting text-base text-stone-700 -rotate-6 mb-0.5">
              ♡
            </span>
            <p className="font-handwriting text-sm sm:text-base text-stone-800 leading-[1.12] rotate-[3deg] whitespace-nowrap">
              plot twist:<br />
              it actually<br />
              worked.
            </p>
          </div>

          {/* Polaroid Frame */}
          <div className="bg-white p-2.5 pb-6 shadow-lg rounded-xs rotate-[-2.5deg] border border-stone-200/50 relative">
            {/* Beige Washi Tape */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#E8DECA]/90 shadow-2xs rotate-[2deg] backdrop-blur-xs z-10 clip-path-tape" />

            {/* Photo Container */}
            <div className="aspect-square w-full rounded-xs overflow-hidden bg-stone-100 relative">
              <img
                src={openingScene.photo}
                alt="How it all started"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* White Doodle Heart in Top Right of Photo */}
              <span className="absolute top-2 right-2 text-white/95 text-base font-handwriting select-none drop-shadow-xs">
                ♡
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Below Photo matching reference image */}
      <div className="mt-3 w-full max-w-sm">
        {/* Paragraph 1 */}
        <p className="font-editorial text-base sm:text-lg text-stone-900 leading-snug font-normal">
          {openingScene.lead}
        </p>

        {/* Paragraph 2 */}
        <p className="text-xs sm:text-[13px] text-stone-600 font-sans leading-relaxed mt-2.5 font-light">
          {openingScene.story}
        </p>

        {/* Bottom Heart and Divider Line */}
        <div className="flex items-center gap-2 mt-4">
          <span className="font-handwriting text-sm text-[#D4A5A5] select-none">
            ♡
          </span>
          <div className="w-40 h-px bg-[#E8DCDB]" />
        </div>
      </div>
    </section>
  );
}
