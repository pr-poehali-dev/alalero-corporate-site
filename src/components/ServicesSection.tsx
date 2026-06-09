import { useState } from 'react';
import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();
  const [active, setActive] = useState<string | null>(null);

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
          <h2 className="font-montserrat font-black text-white text-4xl lg:text-5xl leading-tight">
            {t.services.title}
          </h2>
        </div>
        <p className="reveal reveal-delay-1 font-ibmplex text-white/40 text-base lg:text-lg max-w-2xl mb-16 leading-relaxed">
          {t.services.intro}
        </p>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-0 border border-white/10">
          {t.services.list.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${(i % 3) + 1} border-r border-b border-white/10 last:border-r-0 [&:nth-child(3n)]:border-r-0 p-8 cursor-pointer group transition-colors duration-300 ${
                active === service.id ? 'bg-white' : 'hover:bg-white/5'
              }`}
              onClick={() => setActive(active === service.id ? null : service.id)}
            >
              <div className="mb-6">
                <Icon
                  name={service.icon as 'Plane'}
                  size={24}
                  className={`transition-colors duration-300 ${
                    active === service.id ? 'text-black' : 'text-white/40 group-hover:text-white'
                  }`}
                />
              </div>

              <div className="mb-2">
                <span className={`font-montserrat text-xs tracking-widest uppercase ${active === service.id ? 'text-black/40' : 'text-white/20'}`}>
                  {service.titleEn}
                </span>
              </div>

              <h3 className={`font-montserrat font-bold text-lg mb-3 leading-tight transition-colors ${
                active === service.id ? 'text-black' : 'text-white'
              }`}>
                {service.title}
              </h3>

              <p className={`font-ibmplex text-sm leading-relaxed transition-colors ${
                active === service.id ? 'text-black/60' : 'text-white/40'
              }`}>
                {service.desc}
              </p>

              {/* Expanded details */}
              {active === service.id && (
                <div className="mt-6 space-y-4">
                  {service.details.map((block, bi) => (
                    <div key={bi}>
                      <div className="font-montserrat font-semibold text-black text-xs tracking-widest uppercase mb-2">
                        {block.subtitle}
                      </div>
                      <ul className="space-y-1">
                        {block.items.map((item, ii) => (
                          <li key={ii} className="font-ibmplex text-black/60 text-xs flex gap-2">
                            <span className="text-black/30 shrink-0">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className={`mt-4 flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase transition-colors ${
                active === service.id ? 'text-black/40' : 'text-white/20 group-hover:text-white/40'
              }`}>
                {active === service.id ? (
                  <>
                    <Icon name="ChevronUp" size={12} />
                    <span>{t.nav.services === 'Услуги' ? 'Свернуть' : 'Collapse'}</span>
                  </>
                ) : (
                  <>
                    <Icon name="ChevronDown" size={12} />
                    <span>{t.nav.services === 'Услуги' ? 'Подробнее' : 'Details'}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
