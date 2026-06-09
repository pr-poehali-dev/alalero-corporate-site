import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t, lang } = useLang();
  const f = t.footer;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#partners', label: t.nav.partners },
    { href: '#contacts', label: t.nav.contacts },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="border border-white/20 inline-flex px-3 py-2 mb-4">
              <span className="font-montserrat font-bold text-white text-sm tracking-[0.2em] uppercase">
                AlAero Group
              </span>
            </div>
            <p className="font-ibmplex text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              {f.description}
            </p>
            <p className="font-ibmplex text-white/20 text-xs">
              {lang === 'ru' ? 'Штаб-квартира: Международный аэропорт Кольцово, Екатеринбург' : 'HQ: Koltsovo International Airport, Yekaterinburg'}
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-montserrat font-bold text-white/30 text-xs tracking-[0.2em] uppercase block mb-4">
              {f.quickLinks}
            </span>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-ibmplex text-white/50 text-sm text-left hover:text-white transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <span className="font-montserrat font-bold text-white/30 text-xs tracking-[0.2em] uppercase block mb-4">
              {f.contactsTitle}
            </span>
            <div className="space-y-2">
              <p className="font-ibmplex text-white/50 text-sm leading-relaxed">
                📍 {lang === 'ru'
                  ? 'г. Екатеринбург, ул. Бахчиванджи, 55А'
                  : '55A Bakhchivandji St., Yekaterinburg'}
              </p>
              <a
                href="tel:+73433825575"
                className="font-ibmplex text-white/50 text-sm block hover:text-white transition-colors"
              >
                📞 +7 (343) 382 55 75
              </a>
              <a
                href="mailto:press@umc.aero"
                className="font-ibmplex text-white/50 text-sm block hover:text-white transition-colors"
              >
                ✉️ press@umc.aero
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 space-y-3">
          <p className="font-ibmplex text-white/30 text-xs">{f.legal}</p>

          <div className="space-y-1">
            {f.legalEntities.map((entity, i) => (
              <p key={i} className="font-ibmplex text-white/20 text-xs">{entity}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
            <Link
              to="/privacy-policy"
              className="font-ibmplex text-white/30 text-xs hover:text-white/60 transition-colors underline"
            >
              {f.privacyPolicy}
            </Link>
            <Link
              to="/media-info"
              className="font-ibmplex text-white/30 text-xs hover:text-white/60 transition-colors underline"
            >
              {f.mediaInfo}
            </Link>
          </div>

          <div className="pt-1 border-t border-white/5">
            <p className="font-ibmplex text-white/15 text-xs leading-relaxed">
              {lang === 'ru'
                ? 'СМИ «TRANSAERO» | Свидетельство ЭЛ № ФС77-86800 от 05.02.2024 | Учредитель: ООО «ТРАНСАЭРО СЕРВИС» | Гл. редактор: Нечипуренко А.Д. | 18+'
                : 'Media TRANSAERO | Certificate ЭЛ № ФС77-86800 dated 05.02.2024 | Founder: TRANSAERO SERVICES LLC | Editor: A.D. Nechipurenko | 18+'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
