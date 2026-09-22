import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'section-opening-scene', label: 'Story' },
  { id: 'section-camera-roll', label: 'Memories' },
  { id: 'section-chaos', label: 'Fun' },
  { id: 'section-letter', label: 'Letter' },
];

export default function FloatingNav() {
  const [activeTab, setActiveTab] = useState('section-opening-scene');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const item of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-stone-200/70 shadow-lg shadow-stone-900/5 flex items-center gap-1.5">
      {NAV_LINKS.map((link) => {
        const isActive = activeTab === link.id;
        return (
          <button
            key={link.id}
            id={`nav-${link.id}`}
            onClick={() => scrollTo(link.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              isActive
                ? 'bg-[#5C1324] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
            }`}
          >
            {link.label}
          </button>
        );
      })}
    </nav>
  );
}
