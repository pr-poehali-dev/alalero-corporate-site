import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

const useCountUp = (target: number, duration = 1600, active: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
};

const StatItem = ({
  value,
  label,
  delay,
  active,
}: {
  value: string;
  label: string;
  delay: number;
  active: boolean;
}) => {
  const numericPart = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/\d/g, '');
  const count = useCountUp(numericPart, 1400 + delay * 100, active);

  return (
    <div
      className={`border-r border-white/10 last:border-r-0 px-6 py-8 lg:py-10 text-center transition-all duration-700`}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay * 0.12}s`,
      }}
    >
      <div className="font-montserrat text-white font-black text-4xl lg:text-5xl mb-2 tabular-nums">
        {active ? `${count}${suffix}` : value}
      </div>
      <div className="font-ibmplex text-white/40 text-xs lg:text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
};

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
            <StatItem
              key={i}
              value={stat.value}
              label={stat.label}
              delay={i}
              active={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
