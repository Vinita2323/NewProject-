export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full px-6 py-4 flex items-center justify-between bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/40">
      <div
        className="flex items-center gap-1.5 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-editorial text-lg sm:text-xl text-stone-800 font-medium tracking-tight">
          Our Story
        </span>
        <span className="text-sm">💖</span>
      </div>

      <div className="flex items-center select-none">
        <span className="font-handwriting text-base sm:text-lg text-[#8B3A4F] font-bold tracking-wide">
          love you always ♡
        </span>
      </div>
    </header>
  );
}
