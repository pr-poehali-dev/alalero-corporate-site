import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';

const PartnersSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partners" className="bg-black py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal mb-6">
          <span className="font-montserrat text-white/30 text-xs tracking-[0.3em] uppercase">
            {t.partners.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-white/30" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="reveal font-montserrat font-black text-white text-4xl lg:text-5xl leading-tight mb-8">
              {t.partners.title}
            </h2>
            <p className="reveal reveal-delay-1 font-ibmplex text-white/50 text-base lg:text-lg leading-relaxed mb-8">
              {t.partners.text}
            </p>
            <p className="reveal reveal-delay-2 font-ibmplex text-white/30 text-sm italic mb-10">
              {t.partners.note}
            </p>
            <div className="reveal reveal-delay-3">
              <button
                onClick={() => scrollTo('#contacts')}
                className="bg-white text-black font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/90 active:scale-95 transition-all duration-200"
              >
                {t.partners.btnPartner}
              </button>
            </div>
          </div>

          <div>
            <div className="space-y-0">
              {t.partners.contracts.map((contract, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 py-5 border-b border-white/10`}
                >
                  <span className="font-montserrat text-white/20 text-xs tabular-nums mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="font-ibmplex text-white/60 text-sm leading-relaxed">
                    {contract}
                  </span>
                </div>
              ))}
            </div>

            {/* Big number highlight */}
            <div className="reveal mt-12 border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 font-montserrat font-black text-white/5 text-9xl select-none">
                35
              </div>
              <div className="relative">
                <div className="font-montserrat font-black text-white text-6xl mb-2">35+</div>
                <div className="font-ibmplex text-white/40 text-sm tracking-wide uppercase">
                  {t.stats[1].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
