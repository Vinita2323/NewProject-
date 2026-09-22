import { useState } from 'react';
import { romcomData } from '../data/romcomData';

export default function Section08InsideJokes() {
  const { insideJokes } = romcomData;
  const [opened, setOpened] = useState({});

  const toggleNote = (id) => {
    setOpened(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="section-jokes" className="py-10 px-5 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-5 max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold block mb-0.5">
          CLASSIFIED VAULT
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 tracking-tight font-normal leading-tight">
          THINGS ONLY WE UNDERSTAND
        </h2>
        <p className="mt-0.5 text-xs font-sans text-stone-500 italic">
          Tap any note to declassify the memory.
        </p>
      </div>

      {/* Scrapbook Notes List */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {insideJokes.map((joke, idx) => {
          const isRevealed = Boolean(opened[joke.id]);
          const rotClass = idx % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]';

          return (
            <div
              key={joke.id}
              onClick={() => toggleNote(joke.id)}
              className={`bg-white rounded-2xl p-3.5 border transition-all duration-300 cursor-pointer shadow-xs relative ${rotClass} ${
                isRevealed
                  ? 'border-[#D4A5A5] ring-2 ring-[#F5E6E8]'
                  : 'border-stone-200/70 hover:border-stone-300'
              }`}
            >
              {/* Washi Note Accent */}
              <div className="washi-note" />

              <div className="flex items-center justify-between pt-0.5">
                <h3 className="font-editorial text-sm sm:text-base text-stone-900 font-semibold tracking-wide">
                  {joke.title}
                </h3>
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  {isRevealed ? 'HIDE' : 'READ'}
                </span>
              </div>

              {isRevealed ? (
                <div className="mt-2.5 pt-2.5 border-t border-stone-100 animate-fadeIn">
                  <p className="text-xs sm:text-[13px] text-stone-800 font-medium font-sans leading-relaxed">
                    {joke.secret}
                  </p>
                </div>
              ) : (
                <p className="mt-1.5 text-xs font-handwriting font-bold text-stone-600 tracking-wide">
                  tap to reveal private context...
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
