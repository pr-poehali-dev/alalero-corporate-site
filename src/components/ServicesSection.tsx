import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();

  return (
    <section id="services" className="bg-black py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal mb-6">
          <span className="font-montserrat text-white/30 text-xs tracking-[0.3em] uppercase">
            {t.services.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-white/30" />
        </div>
        <div className="reveal mb-6">
          <h2 className="font-montserrat font-light text-white text-4xl lg:text-5xl leading-tight">
            {t.services.title}
          </h2>
        </div>
        <p className="reveal reveal-delay-1 font-ibmplex text-white/40 text-base lg:text-lg max-w-2xl mb-16 leading-relaxed">
          {t.services.intro}
        </p>

        {/* Services list */}
        <div className="border-t border-white/10">
          {t.services.list.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${(i % 5) + 1} border-b border-white/10 p-6 lg:p-8 flex items-start sm:items-center gap-5 lg:gap-8 hover:bg-white/5 transition-colors duration-300`}
            >
              <Icon
                name={service.icon as 'Plane'}
                size={24}
                className="shrink-0 text-white/40"
              />

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="font-montserrat font-bold text-lg leading-tight text-white">
                    {service.title}
                  </h3>
                  <span className="font-montserrat text-xs tracking-widest uppercase shrink-0 text-white/20">
                    {service.titleEn}
                  </span>
                </div>
                <p className="font-ibmplex text-sm leading-relaxed mt-1 text-white/40">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;