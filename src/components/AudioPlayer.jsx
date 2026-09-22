import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { romcomData } from '../data/romcomData';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioElRef = useRef(null);

  const startSynthChimes = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      // Soft romantic pentatonic arpeggio (C, E, G, B, D)
      const notes = [261.63, 329.63, 392.0, 493.88, 587.33, 493.88, 392.0];
      let step = 0;

      const playChime = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = notes[step % notes.length];
        step++;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2.5);

        synthTimerRef.current = setTimeout(playChime, 1500);
      };

      playChime();
    } catch {
      // Ignore if blocked
    }
  };

  const stopSynthChimes = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.suspend();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (romcomData.music.audioUrl && audioElRef.current) {
        audioElRef.current.pause();
      } else {
        stopSynthChimes();
      }
      setIsPlaying(false);
    } else {
      if (romcomData.music.audioUrl && audioElRef.current) {
        audioElRef.current.play().catch(() => startSynthChimes());
      } else {
        startSynthChimes();
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopSynthChimes();
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      {romcomData.music.audioUrl && (
        <audio ref={audioElRef} src={romcomData.music.audioUrl} loop />
      )}
      <button
        id="btn-music-player"
        onClick={toggleAudio}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer border shadow-sm ${
          isPlaying
            ? 'bg-[#5C1324] text-white border-[#5C1324] shadow-md scale-105'
            : 'bg-white/80 text-stone-700 border-stone-200/80 hover:bg-white hover:text-[#C92A42]'
        }`}
        title={isPlaying ? 'Pause soundtrack' : 'Play romantic soundtrack'}
        aria-label="Toggle Soundtrack"
      >
        <span className="text-sm font-serif">{isPlaying ? '♫' : '♫'}</span>
      </button>
    </div>
  );
}
