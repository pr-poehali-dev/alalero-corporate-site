import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';

const AboutSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="reveal mb-16">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {t.about.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: title + text */}
          <div>
            <h2 className="reveal font-montserrat font-black text-black text-4xl lg:text-5xl leading-tight mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-5">
              <p className="reveal reveal-delay-1 font-ibmplex text-black/60 text-base lg:text-lg leading-relaxed">
                {t.about.p1}
              </p>
              <p className="reveal reveal-delay-2 font-ibmplex text-black/60 text-base lg:text-lg leading-relaxed">
                {t.about.p2}
              </p>
              <p className="reveal reveal-delay-3 font-ibmplex text-black/60 text-base lg:text-lg leading-relaxed">
                {t.about.p3}
              </p>
            </div>
          </div>

          {/* Right: advantages */}
          <div className="space-y-0">
            <div className="reveal mb-6">
              <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
                {t.advantages.sectionLabel}
              </span>
            </div>
            {t.advantages.items.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} border-t border-black/10 py-6 group hover:bg-black/[0.02] -mx-4 px-4 transition-colors duration-200`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-montserrat text-black/20 text-xs font-bold mt-1 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-bold text-black text-sm tracking-wide uppercase mb-1">
                      {item.title}
                    </h3>
                    <p className="font-ibmplex text-black/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
