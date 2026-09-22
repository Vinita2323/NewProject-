import { useState } from 'react';
import { X } from 'lucide-react';
import { romcomData } from '../data/romcomData';

export default function Section04CameraRoll() {
  const { cameraRoll } = romcomData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="section-camera-roll" className="py-10 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6 max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold block mb-1">
          UNFILTERED ARCHIVE
        </span>
        <h2 className="font-editorial text-xl sm:text-2xl text-stone-900 tracking-tight font-normal leading-tight">
          PROOF THAT WE GO OUT SOMETIMES
        </h2>
      </div>

      {/* Compact Asymmetric Pinterest Collage */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-2.5 sm:gap-3">
        {cameraRoll.map((item, idx) => {
          const isLarge = idx === 0 || idx === 3;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`film-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${item.rotate} ${
                isLarge ? 'col-span-2' : 'col-span-1'
              } flex flex-col bg-white`}
            >
              {/* Image Container */}
              <div className={`w-full overflow-hidden bg-stone-100/60 flex items-center justify-center ${item.aspect}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${item.fit || 'object-contain'} ${item.position || 'object-center'}`}
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="p-2 text-center bg-white border-t border-stone-100">
                <span className="font-handwriting text-sm font-semibold text-stone-800 block leading-tight">
                  "{item.title}"
                </span>
                <span className="text-[9px] text-stone-400 font-mono block mt-0.5">
                  {item.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="relative max-w-xs sm:max-w-sm w-full bg-white p-4 pb-5 rounded-2xl shadow-2xl">
            <button
              id="btn-close-gallery-modal"
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1C1917] text-white flex items-center justify-center shadow-lg hover:bg-[#5C1324] transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="aspect-4/5 rounded-xl overflow-hidden bg-stone-100/60 mb-2.5 flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center">
              <h4 className="font-editorial text-lg text-stone-900">
                "{selectedPhoto.title}"
              </h4>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
