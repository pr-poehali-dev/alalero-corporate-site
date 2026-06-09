import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';

const airlineAbbrs = [
  'S7', 'UT', 'DP', 'FV', 'N4', 'YC',
  'AK', 'KC', 'MS', 'SU', 'U6', 'NN',
];

const PartnersSection = () => {
  const { t, lang } = useLang();
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

            {/* Contracts list */}
            <div className="space-y-0 mb-10">
              {t.partners.contracts.map((contract, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 py-4 border-b border-white/10`}
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

            <p className="reveal font-ibmplex text-white/30 text-sm italic mb-10">
              {t.partners.note}
            </p>

            <div className="reveal">
              <button
                onClick={() => scrollTo('#contacts')}
                className="bg-white text-black font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/90 active:scale-95 transition-all duration-200"
              >
                {t.partners.btnPartner}
              </button>
            </div>
          </div>

          <div>
            {/* Airline placeholder grid */}
            <div className="reveal mb-4">
              <span className="font-montserrat text-white/30 text-xs tracking-[0.3em] uppercase">
                {lang === 'ru' ? 'Авиакомпании-партнёры' : 'Airline Partners'}
              </span>
            </div>
            <div className="reveal grid grid-cols-4 gap-0 border border-white/10">
              {airlineAbbrs.map((abbr, i) => (
                <div
                  key={i}
                  className="border-r border-b border-white/10 [&:nth-child(4n)]:border-r-0 h-16 flex items-center justify-center group hover:bg-white/5 transition-colors"
                >
                  <span className="font-montserrat font-bold text-white/20 group-hover:text-white/50 text-sm tracking-widest transition-colors">
                    {abbr}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-ibmplex text-white/20 text-xs mt-3 text-center">
              {lang === 'ru'
                ? 'Полный список предоставляется по запросу'
                : 'Complete list available upon request'}
            </p>

            {/* Big number */}
            <div className="reveal mt-8 border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 font-montserrat font-black text-white/5 text-9xl select-none pointer-events-none">
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
