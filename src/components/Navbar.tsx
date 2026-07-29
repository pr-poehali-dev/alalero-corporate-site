import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LangContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#contacts', label: t.nav.contacts },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
          >
            <span className="w-6 h-px bg-white/40 group-hover:bg-white transition-colors duration-200" />
            <span className="font-montserrat text-white/90 group-hover:text-white text-sm tracking-[0.25em] uppercase transition-colors duration-200">
              AlAero Group
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-ibmplex text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-white/20 overflow-hidden">
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1.5 text-xs font-montserrat tracking-widest transition-colors duration-200 ${
                  lang === 'ru' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 text-xs font-montserrat tracking-widest transition-colors duration-200 ${
                  lang === 'en' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-montserrat text-white text-2xl font-light tracking-widest hover:opacity-60 transition-opacity"
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setLang('ru')}
              className={`px-4 py-2 text-sm font-montserrat border transition-colors ${lang === 'ru' ? 'bg-white text-black border-white' : 'text-white border-white/30'}`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 text-sm font-montserrat border transition-colors ${lang === 'en' ? 'bg-white text-black border-white' : 'text-white border-white/30'}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;