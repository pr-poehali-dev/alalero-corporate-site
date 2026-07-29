import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

const HeroSection = () => {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-px h-40 bg-gradient-to-t from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Main title */}
          <h1
            className={`text-white mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="inline-flex flex-col items-center leading-none">
              <span className="font-montserrat font-light text-5xl sm:text-6xl lg:text-8xl tracking-tight">
                AlAero
              </span>
              <span className="font-montserrat font-normal text-white/30 text-2xl sm:text-3xl lg:text-4xl tracking-[0.12em] -mt-2">
                Group
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-montserrat text-white/80 text-xl lg:text-2xl font-medium tracking-tight mb-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.35s' }}
          >
            {t.hero.subtitle}
          </p>

          <p
            className={`font-ibmplex text-white/50 text-base lg:text-lg max-w-xl mb-12 leading-relaxed transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.45s' }}
          >
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <button
              onClick={() => scrollTo('#services')}
              className="bg-white text-black font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/90 active:scale-95 transition-all duration-200"
            >
              {t.hero.btnServices}
            </button>
            <button
              onClick={() => scrollTo('#contacts')}
              className="border border-white/40 text-white font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/5 hover:border-white active:scale-95 transition-all duration-200"
            >
              {t.hero.btnContact}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <span className="font-ibmplex text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;