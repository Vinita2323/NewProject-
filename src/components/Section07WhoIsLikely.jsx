import { useState } from 'react';
import { romcomData } from '../data/romcomData';

export default function Section07WhoIsLikely() {
  const { whoIsMoreLikely } = romcomData;
  const [selected, setSelected] = useState({});

  const chooseOption = (questionId, choice) => {
    setSelected(prev => ({
      ...prev,
      [questionId]: choice
    }));
  };

  return (
    <section id="section-quiz" className="py-10 px-5 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-5 max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold block mb-0.5">
          INTERACTIVE INQUISITION
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 tracking-tight font-normal">
          BE HONEST.
        </h2>
        <p className="mt-0.5 text-xs font-sans text-stone-500 italic">
          No diplomatic immunity. Pick a side.
        </p>
      </div>

      {/* Cards List */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {whoIsMoreLikely.map((item, idx) => {
          const currentPick = selected[item.id];

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3.5 border border-stone-200/70 shadow-xs hover:border-stone-300 transition-all duration-300"
            >
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-[9px] font-mono text-stone-400">
                  Q{String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-medium text-stone-900 text-xs sm:text-sm leading-snug font-sans">
                  {item.question}
                </h3>
              </div>

              {/* Minimal Stylish ME / THEM Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  id={`btn-${item.id}-me`}
                  onClick={() => chooseOption(item.id, 'me')}
                  className={`py-1.5 px-3 rounded-xl text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    currentPick === 'me'
                      ? 'bg-[#5C1324] text-white shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/60'
                  }`}
                >
                  ME
                </button>

                <button
                  id={`btn-${item.id}-them`}
                  onClick={() => chooseOption(item.id, 'them')}
                  className={`py-1.5 px-3 rounded-xl text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    currentPick === 'them'
                      ? 'bg-[#C92A42] text-white shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/60'
                  }`}
                >
                  THEM
                </button>
              </div>

              {/* Playful Micro-Feedback */}
              {currentPick && (
                <div className="mt-2.5 p-2 rounded-xl bg-stone-50/80 border border-stone-100 animate-fadeIn text-center">
                  <p className="font-handwriting text-xs text-stone-700 font-medium leading-tight">
                    {currentPick === 'me' ? item.meReaction : item.themReaction}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
