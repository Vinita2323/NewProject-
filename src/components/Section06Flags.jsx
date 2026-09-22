import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { romcomData } from '../data/romcomData';

export default function Section06Flags() {
  const { flags } = romcomData;
  const [filter, setFilter] = useState('all');

  return (
    <section id="section-flags" className="py-10 px-5 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-5 max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold block mb-0.5">
          EVALUATION SUMMARY
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 tracking-tight font-normal leading-tight">
          {flags.heading}
        </h2>

        {/* Tab Switcher */}
        <div className="mt-3.5 inline-flex items-center p-1 rounded-full bg-stone-200/60 text-[11px] font-medium">
          <button
            id="tab-flags-all"
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full transition cursor-pointer ${
              filter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
            }`}
          >
            All
          </button>
          <button
            id="tab-flags-green"
            onClick={() => setFilter('green')}
            className={`px-2.5 py-1 rounded-full transition cursor-pointer flex items-center gap-1 ${
              filter === 'green' ? 'bg-[#5C1324] text-white shadow-xs' : 'text-stone-500'
            }`}
          >
            <span>Green</span>
            <span>💚</span>
          </button>
          <button
            id="tab-flags-red"
            onClick={() => setFilter('red')}
            className={`px-2.5 py-1 rounded-full transition cursor-pointer flex items-center gap-1 ${
              filter === 'red' ? 'bg-[#C92A42] text-white shadow-xs' : 'text-stone-500'
            }`}
          >
            <span>Flags</span>
            <span>🚩</span>
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        {/* GREEN FLAGS */}
        {(filter === 'all' || filter === 'green') && (
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-stone-100">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">💚</span>
                <h3 className="font-editorial text-base text-stone-900 font-semibold tracking-wide">
                  GREEN FLAGS
                </h3>
              </div>
              <span className="text-[9px] font-mono tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                APPROVED
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {flags.greenFlags.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-50/70 border border-stone-100 text-xs text-stone-800"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-2 h-2" />
                  </div>
                  <span className="font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUESTIONABLE BEHAVIOUR */}
        {(filter === 'all' || filter === 'red') && (
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-stone-100">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🚩</span>
                <h3 className="font-editorial text-base text-stone-900 font-semibold tracking-wide">
                  QUESTIONABLE BEHAVIOUR
                </h3>
              </div>
              <span className="text-[9px] font-mono tracking-wider text-[#C92A42] bg-rose-50 px-2 py-0.5 rounded-full">
                UNDER REVIEW
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {flags.questionableBehaviour.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-rose-50/40 border border-rose-100/60 text-xs text-stone-800"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-100 text-[#C92A42] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-2 h-2" />
                  </div>
                  <span className="font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
