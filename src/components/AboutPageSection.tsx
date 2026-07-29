import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';

const AboutPageSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();
  const a = t.aboutPage;

  return (
    <section id="about" className="bg-white py-24 lg:py-32 border-t border-black/10">
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

        {/* Advantages */}
        <div className="mb-24">
          <div className="reveal mb-6">
            <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
              {t.advantages.sectionLabel}
            </span>
            <div className="mt-3 w-12 h-px bg-black" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
            {t.advantages.items.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-8 border-r border-black/10 last:border-r-0 hover:bg-black/[0.02] transition-colors duration-200`}
              >
                <span className="font-montserrat text-black/20 text-xs font-bold tabular-nums block mb-3">
                  0{i + 1}
                </span>
                <h4 className="font-montserrat font-bold text-black text-sm tracking-wide uppercase mb-2">
                  {item.title}
                </h4>
                <p className="font-ibmplex text-black/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates, Accreditations & Licenses */}
        <div>
          <div className="reveal mb-6">
            <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
              {a.certsTitle}
            </span>
            <div className="mt-3 w-12 h-px bg-black" />
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12">
            {a.certsAll.map((cert, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 py-4 border-b border-black/10`}>
                <span className="font-montserrat text-black/20 text-xs mt-0.5 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-ibmplex text-black/70 text-sm leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
          <p className="reveal font-ibmplex text-black/40 text-sm italic mt-6">
            {a.certsNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageSection;