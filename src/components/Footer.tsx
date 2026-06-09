import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t } = useLang();
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
            <p className="font-ibmplex text-white/40 text-sm leading-relaxed max-w-xs">
              {f.description}
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
              <p className="font-ibmplex text-white/50 text-sm">
                📍 {t.contacts.address.split(',').slice(-2).join(',')}
              </p>
              <a
                href={`tel:${t.contacts.phone.replace(/\s/g, '')}`}
                className="font-ibmplex text-white/50 text-sm block hover:text-white transition-colors"
              >
                📞 {t.contacts.phone}
              </a>
              <a
                href={`mailto:${t.contacts.email}`}
                className="font-ibmplex text-white/50 text-sm block hover:text-white transition-colors"
              >
                ✉️ {t.contacts.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 space-y-3">
          <p className="font-ibmplex text-white/30 text-xs">{f.legal}</p>
          {f.legalEntities.map((entity, i) => (
            <p key={i} className="font-ibmplex text-white/20 text-xs">{entity}</p>
          ))}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="font-ibmplex text-white/20 text-xs hover:text-white/40 transition-colors underline">
              {f.privacyPolicy}
            </button>
            <button className="font-ibmplex text-white/20 text-xs hover:text-white/40 transition-colors underline">
              {f.mediaInfo}
            </button>
          </div>
          <p className="font-ibmplex text-white/15 text-xs">{f.mediaLabel}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
