import { useState, useRef, useEffect } from 'react';
import { romcomData } from '../data/romcomData';

export default function SplashScreen({ onEnter }) {
  const { splashScreen } = romcomData;
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  useEffect(() => {
    if (videoRef.current) {
      // Try playing with audio; if browser blocks unmuted autoplay, mute and play immediately
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, []);

  return (
    <div
      id="splash-screen-overlay"
      onClick={handleFinish}
      className={`fixed inset-0 z-[999] bg-black flex items-center justify-center cursor-pointer select-none transition-opacity duration-500 ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Pure video only - No text, no buttons, no overlays */}
      <div className="relative w-full h-full max-w-[450px] overflow-hidden flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={splashScreen.video}
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleFinish}
          onTimeUpdate={(e) => {
            const v = e.target;
            if (v.duration > 0 && v.currentTime >= v.duration - 0.15) {
              handleFinish();
            }
          }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
