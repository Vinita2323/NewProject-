import { useState } from 'react';
import confetti from 'canvas-confetti';
import { romcomData } from '../data/romcomData';

export default function Section10Letter() {
  const { letter } = romcomData;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#D4A5A5', '#F5E6E8', '#5C1324', '#FAF7F2'],
      });
    } catch {
      // Ignore
    }
  };

  return (
    <section id="section-letter" className="py-12 px-5 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6 max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold block mb-0.5">
          PERSONAL DISPATCH
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 tracking-tight font-normal leading-tight">
          {letter.heading}
        </h2>
      </div>

      <div className="w-full max-w-sm">
        {!isOpen ? (
          /* Elegant Closed Envelope */
          <div
            id="envelope-wrapper"
            onClick={handleOpenLetter}
            className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Minimal Wax Stamp Detail */}
            <div className="w-12 h-12 rounded-full bg-[#5C1324] text-white flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform">
              <span className="font-editorial text-base italic">us</span>
            </div>

            <span className="font-editorial text-lg text-stone-800 tracking-wide">
              {letter.recipient}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400 mt-0.5">
              Strictly Confidential
            </span>

            <button
              id="btn-open-letter"
              onClick={handleOpenLetter}
              className="mt-4 px-5 py-2 rounded-full bg-[#1C1917] hover:bg-[#5C1324] text-white text-[11px] font-mono font-medium tracking-wider uppercase transition cursor-pointer"
            >
              {letter.buttonText}
            </button>
          </div>
        ) : (
          /* Opened Handwritten Letter Paper */
          <article
            id="letter-content"
            className="lined-paper rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-lg animate-fadeIn relative"
          >
            <div className="washi-note" />

            {/* Recipient */}
            <h3 className="font-handwriting text-2xl font-bold text-[#5C1324] mb-2.5">
              {letter.recipient}
            </h3>

            {/* Letter Body Paragraphs */}
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              {letter.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Closing & Signature */}
            <div className="mt-6 pt-3 border-t border-dashed border-stone-200 flex flex-col items-end">
              <span className="font-handwriting text-base text-stone-500">
                {letter.closing}
              </span>
              <span className="font-handwriting text-xl font-bold text-[#5C1324]">
                {letter.sender}
              </span>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
