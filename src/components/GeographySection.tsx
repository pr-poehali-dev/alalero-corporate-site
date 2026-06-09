import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const locations = [
  { ru: 'Екатеринбург', en: 'Yekaterinburg', airport: 'Кольцово (SVX)', hq: true, intl: false },
  { ru: 'Омск', en: 'Omsk', airport: 'Омск-Центральный (OMS)', hq: false, intl: false },
  { ru: 'Красноярск', en: 'Krasnoyarsk', airport: 'Емельяново (KJA)', hq: false, intl: false },
  { ru: 'Новосибирск', en: 'Novosibirsk', airport: 'Толмачёво (OVB)', hq: false, intl: false },
  { ru: 'Тюмень', en: 'Tyumen', airport: 'Рощино (TJM)', hq: false, intl: false },
  { ru: 'Казань', en: 'Kazan', airport: 'Казань (KZN)', hq: false, intl: false },
  { ru: 'Саратов', en: 'Saratov', airport: 'Гагарин (GSV)', hq: false, intl: false },
  { ru: 'Мурманск', en: 'Murmansk', airport: 'Мурманск (MMK)', hq: false, intl: false },
  { ru: 'Астана', en: 'Astana', airport: 'Нурсултан Назарбаев (NQZ)', hq: false, intl: true },
  { ru: 'Каир', en: 'Cairo', airport: 'Каир (CAI)', hq: false, intl: true },
];

const GeographySection = () => {
  const { t, lang } = useLang();
  const ref = useRevealAll();

  const russianLocations = locations.filter(l => !l.intl);
  const intlLocations = locations.filter(l => l.intl);

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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Russia */}
          <div className="reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" size={16} className="text-black/40" />
              <span className="font-montserrat font-bold text-black text-sm tracking-[0.2em] uppercase">
                {t.geography.russia}
              </span>
            </div>
            <div className="space-y-0">
              {russianLocations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3.5 border-b border-black/10 group hover:bg-black/[0.02] -mx-2 px-2 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {loc.hq
                      ? <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                      : <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors shrink-0" />
                    }
                    <div>
                      <span className="font-montserrat font-semibold text-black text-sm">
                        {lang === 'ru' ? loc.ru : loc.en}
                      </span>
                      {loc.hq && (
                        <span className="ml-2 font-montserrat text-xs text-black/30 uppercase tracking-wider">
                          {lang === 'ru' ? 'штаб-квартира' : 'HQ'}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-ibmplex text-black/30 text-xs tabular-nums">{loc.airport}</span>
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
            <div className="space-y-0 mb-10">
              {intlLocations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3.5 border-b border-black/10 group hover:bg-black/[0.02] -mx-2 px-2 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors shrink-0" />
                    <span className="font-montserrat font-semibold text-black text-sm">
                      {lang === 'ru' ? loc.ru : loc.en}
                    </span>
                  </div>
                  <span className="font-ibmplex text-black/30 text-xs tabular-nums">{loc.airport}</span>
                </div>
              ))}
            </div>
            <p className="font-ibmplex text-black/40 text-sm leading-relaxed italic">
              {t.geography.note}
            </p>

            {/* Summary stats */}
            <div className="mt-10 grid grid-cols-2 gap-0 border border-black/10 bg-white">
              <div className="p-6 border-r border-black/10 text-center">
                <div className="font-montserrat font-black text-black text-3xl mb-1">8</div>
                <div className="font-ibmplex text-black/40 text-xs uppercase tracking-wide">
                  {lang === 'ru' ? 'городов РФ' : 'Russian cities'}
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="font-montserrat font-black text-black text-3xl mb-1">2</div>
                <div className="font-ibmplex text-black/40 text-xs uppercase tracking-wide">
                  {lang === 'ru' ? 'зарубежных офиса' : 'international offices'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
