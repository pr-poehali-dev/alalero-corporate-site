import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const CapabilitiesSection = () => {
  const { t } = useLang();
  const ref = useRevealAll();

  return (
    <section id="capabilities" className="bg-[#f5f5f5] py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal mb-6">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {t.capabilities.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
        </div>
        <h2 className="reveal font-montserrat font-black text-black text-4xl lg:text-5xl leading-tight mb-16">
          {t.capabilities.title}
        </h2>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-black/10 bg-white mb-0">
          {t.capabilities.items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 5) + 1} p-8 border-black/10 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 group hover:bg-black hover:border-black transition-all duration-300`}
            >
              <Icon
                name={item.icon as 'Building2'}
                size={28}
                className="text-black/30 group-hover:text-white/60 mb-6 transition-colors duration-300"
              />
              <h3 className="font-montserrat font-bold text-black group-hover:text-white text-base mb-3 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-ibmplex text-black/50 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;