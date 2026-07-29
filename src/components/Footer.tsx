import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t, lang } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo/logo-white.png" alt="AlAero Group" className="h-8 w-auto mb-4" />
            <p className="font-ibmplex text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              {f.description}
            </p>
            <p className="font-ibmplex text-white/20 text-xs">
              {lang === 'ru'
                ? 'Штаб-квартира: Международный аэропорт Кольцово, Россия, Екатеринбург'
                : 'HQ: Koltsovo International Airport, Russia, Yekaterinburg'}
            </p>
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

          <div className="pt-2">
            <Link
              to="/privacy-policy"
              className="font-ibmplex text-white/30 text-xs hover:text-white/60 transition-colors underline"
            >
              {f.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
