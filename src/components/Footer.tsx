import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const { t, lang } = useLang();
  const f = t.footer;
  const c = t.contacts;

  return (
    <footer id="contacts" className="bg-black border-t border-white/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        {/* Contact heading */}
        <div className="mb-16">
          <h2 className="font-montserrat font-light text-white text-4xl lg:text-5xl leading-tight">
            {c.sectionLabel}
          </h2>
          <div className="mt-4 w-12 h-px bg-white/30" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <img src="/logo/logo-white.png" alt="AlAero Group" className="h-8 w-auto mb-5" />
            <p className="font-ibmplex text-white/40 text-sm leading-relaxed max-w-xs">
              {f.description}
            </p>
          </div>

          {/* HQ / Address */}
          <div>
            <span className="font-montserrat font-bold text-white/30 text-xs tracking-[0.2em] uppercase block mb-5">
              {c.hqTitle}
            </span>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Icon name="MapPin" size={16} className="text-white/30 mt-0.5 shrink-0" />
                <div>
                  <p className="font-ibmplex text-white/60 text-sm leading-relaxed">{c.address}</p>
                  <p className="font-ibmplex text-white/30 text-xs mt-1">{c.airport}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Clock" size={16} className="text-white/30 mt-0.5 shrink-0" />
                <span className="font-ibmplex text-white/60 text-sm">{c.workHours}</span>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <span className="font-montserrat font-bold text-white/30 text-xs tracking-[0.2em] uppercase block mb-5">
              {f.contactsTitle}
            </span>
            <div className="space-y-3">
              <a
                href={`tel:${c.phone.replace(/[\s()]/g, '')}`}
                className="flex gap-3 font-ibmplex text-white/60 text-sm hover:text-white transition-colors"
              >
                <Icon name="Phone" size={16} className="text-white/30 mt-0.5 shrink-0" />
                {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex gap-3 font-ibmplex text-white/60 text-sm hover:text-white transition-colors"
              >
                <Icon name="Mail" size={16} className="text-white/30 mt-0.5 shrink-0" />
                {c.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-ibmplex text-white/30 text-xs">{f.legal}</p>
          <Link
            to="/privacy-policy"
            className="font-ibmplex text-white/30 text-xs hover:text-white/60 transition-colors underline"
          >
            {f.privacyPolicy}
          </Link>
        </div>

        <p className="font-ibmplex text-white/15 text-xs mt-4">
          {lang === 'ru'
            ? 'Штаб-квартира: Международный аэропорт Кольцово, Россия, Екатеринбург'
            : 'HQ: Koltsovo International Airport, Russia, Yekaterinburg'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;