import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import TopNav from './components/TopNav';
import FloatingNav from './components/FloatingNav';
import Section02OpeningScene from './components/Section02OpeningScene';
import Section04CameraRoll from './components/Section04CameraRoll';
import Section05ChaosReport from './components/Section05ChaosReport';
import Section06Flags from './components/Section06Flags';
import Section08InsideJokes from './components/Section08InsideJokes';
import Section09SoftPart from './components/Section09SoftPart';
import Section10Letter from './components/Section10Letter';
import Section11FinalScene from './components/Section11FinalScene';
import FlyingHeartDoodles from './components/FlyingHeartDoodles';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#1C1917] flex justify-center selection:bg-[#F5E6E8] selection:text-[#5C1324] relative">
      {/* Ambient Flying Heart Doodles across the whole screen */}
      <FlyingHeartDoodles />

      {/* Opening Video Splash Screen */}
      {showSplash && (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      )}

      {/* Desktop Ambient Glow Accents */}
      <div className="fixed inset-0 pointer-events-none hidden md:block overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F5E6E8]/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#EAE6F0]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#FAF7F2]/80 rounded-full blur-3xl" />
      </div>

      {/* Main Mobile-First Story Canvas Container */}
      <div className="w-full max-w-[450px] min-h-screen bg-[#FAF7F2] relative shadow-xl md:border-x md:border-stone-200/50 flex flex-col pb-16 overflow-x-hidden">
        {/* Top Header matching reference image: Our Story 💖 ... ♪ ☰ */}
        <TopNav />

        {/* Home Screen matching reference image: SCENE 01 - How it all started */}
        <Section02OpeningScene />

        {/* Remaining Story Chapters */}
        <Section04CameraRoll />
        <Section05ChaosReport />
        <Section06Flags />
        <Section08InsideJokes />
        <Section09SoftPart />
        <Section10Letter />
        <Section11FinalScene onStartAgain={scrollToTop} />

        {/* Minimal Translucent Bottom Navigation */}
        <FloatingNav />
      </div>
    </div>
  );
}
