import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

const StatsSection = () => {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black border-t border-white/10">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className={`border-r border-white/10 last:border-r-0 px-6 py-8 lg:py-10 text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="font-montserrat text-white font-black text-4xl lg:text-5xl mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="font-ibmplex text-white/40 text-xs lg:text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
