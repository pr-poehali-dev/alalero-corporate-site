import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';

const AboutPageSection = () => {
  const { t, lang } = useLang();
  const ref = useRevealAll();
  const a = t.aboutPage;

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-black/10">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {a.heroLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
        </div>

        {/* History + Mission */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="reveal">
            <h3 className="font-montserrat font-black text-black text-2xl mb-6 uppercase tracking-tight">
              {a.historyTitle}
            </h3>
            <p className="font-ibmplex text-black/60 text-base leading-relaxed">{a.historyText}</p>
          </div>
          <div className="reveal reveal-delay-1">
            <h3 className="font-montserrat font-black text-black text-2xl mb-6 uppercase tracking-tight">
              {a.missionTitle}
            </h3>
            <p className="font-ibmplex text-black/60 text-base leading-relaxed italic">{a.missionText}</p>
          </div>
        </div>

        {/* Companies */}
        <div className="reveal mb-6">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {a.companiesTitle}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
        </div>
        <div className="grid lg:grid-cols-3 gap-0 border border-black/10 mb-24">
          {a.companies.map((company, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} p-8 border-r border-black/10 last:border-r-0 hover:bg-black/[0.02] transition-colors duration-200`}
            >
              <span className="font-montserrat text-black/20 text-xs tracking-widest uppercase block mb-4">
                {company.nameEn}
              </span>
              <h4 className="font-montserrat font-bold text-black text-base mb-3 leading-tight">
                {company.name}
              </h4>
              <p className="font-ibmplex text-black/50 text-sm leading-relaxed mb-4">
                {company.desc}
              </p>
              {company.inn !== '—' && (
                <div className="space-y-1 pt-4 border-t border-black/10">
                  <div className="font-ibmplex text-black/30 text-xs">ИНН: {company.inn}</div>
                  <div className="font-ibmplex text-black/30 text-xs">ОГРН: {company.ogrn}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="reveal mb-6">
              <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
                {a.certsTitle}
              </span>
              <div className="mt-3 w-12 h-px bg-black" />
            </div>
            <div className="space-y-0">
              {a.certs.map((cert, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex gap-4 py-4 border-b border-black/10`}>
                  <span className="font-montserrat text-black/20 text-xs mt-0.5 tabular-nums shrink-0">0{i + 1}</span>
                  <span className="font-ibmplex text-black/70 text-sm leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="reveal mb-6">
              <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
                {lang === 'ru' ? 'Аккредитации' : 'Accreditations'}
              </span>
              <div className="mt-3 w-12 h-px bg-black" />
            </div>
            <div className="space-y-0">
              {a.accreds.map((acc, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex gap-4 py-4 border-b border-black/10`}>
                  <span className="font-montserrat text-black/20 text-xs mt-0.5 tabular-nums shrink-0">0{i + 1}</span>
                  <span className="font-ibmplex text-black/70 text-sm leading-relaxed">{acc}</span>
                </div>
              ))}
            </div>
            <div className="reveal mt-6 bg-black/[0.03] border border-black/10 p-5">
              <div className="font-montserrat font-bold text-black text-xs tracking-widest uppercase mb-1">
                {lang === 'ru' ? 'Образовательная лицензия' : 'Education License'}
              </div>
              <div className="font-ibmplex text-black/60 text-sm">{a.educLicense}</div>
              <div className="font-ibmplex text-black/40 text-xs mt-1">{a.educLicenseDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageSection;