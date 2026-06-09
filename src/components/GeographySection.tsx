import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const GeographySection = () => {
  const { t } = useLang();
  const ref = useRevealAll();

  return (
    <section className="bg-[#f5f5f5] py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal mb-16">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {t.geography.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
          <h2 className="font-montserrat font-black text-black text-4xl lg:text-5xl leading-tight mt-6">
            {t.geography.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Russia */}
          <div className="reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" size={16} className="text-black/40" />
              <span className="font-montserrat font-bold text-black text-sm tracking-[0.2em] uppercase">
                {t.geography.russia}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {t.geography.russianCities.map((city, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-black/10 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black transition-colors duration-200 shrink-0" />
                  <span className="font-ibmplex text-black/70 text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International */}
          <div className="reveal reveal-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Globe" size={16} className="text-black/40" />
              <span className="font-montserrat font-bold text-black text-sm tracking-[0.2em] uppercase">
                {t.geography.international}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-0 mb-8">
              {t.geography.intlCities.map((city, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-black/10 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black transition-colors duration-200 shrink-0" />
                  <span className="font-ibmplex text-black/70 text-sm">{city}</span>
                </div>
              ))}
            </div>
            <p className="font-ibmplex text-black/40 text-sm leading-relaxed italic">
              {t.geography.note}
            </p>
          </div>
        </div>

        {/* Map placeholder visualization */}
        <div className="reveal mt-16">
          <div className="border border-black/10 p-8 flex items-center justify-center min-h-[200px] relative overflow-hidden bg-white">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="font-montserrat font-bold text-black text-sm tracking-widest uppercase">
                  10+ {t.geography.russia === 'Россия' ? 'городов' : 'cities'}
                </span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[...t.geography.russianCities, ...t.geography.intlCities].map((c, i) => (
                  <span
                    key={i}
                    className="font-ibmplex text-xs text-black/40 border border-black/10 px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
