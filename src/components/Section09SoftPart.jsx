import { romcomData } from '../data/romcomData';

export default function Section09SoftPart() {
  const { softPart } = romcomData;

  return (
    <section id="section-soft" className="py-12 px-5 flex flex-col items-center">

      {/* Small Lead Text */}
      <div className="text-center max-w-sm">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#C92A42] uppercase font-semibold block mb-1.5">
          {softPart.subtext}
        </span>

        {/* Large Heading */}
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight leading-[1.18]">
          {softPart.heading}
        </h2>

        <div className="w-8 h-px bg-stone-300 mx-auto my-4" />

        {/* Emotional Paragraph with Whitespace */}
        <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-sans font-normal text-center">
          {softPart.paragraph}
        </p>
      </div>
    </section>
  );
}
