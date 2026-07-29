import { useState } from 'react';
import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const teamExpertise = {
  ru: [
    'Аккредитованные агенты в системах Sirena-Travel, Sabre, Amadeus, Gabriel, ТАИС НСБ',
    'Специалисты по перевозке опасных грузов категорий 7.5 и 7.6',
    'Эксперты по человеческому фактору в авиации',
    'Аварийно-спасательная команда (сертификация Красного Креста)',
    'Внутренние аудиторы систем менеджмента ISO',
    'Специалисты по авиационной и транспортной безопасности',
  ],
  en: [
    'Accredited agents in Sirena-Travel, Sabre, Amadeus, Gabriel, TAIS NSB systems',
    'Dangerous goods specialists (categories 7.5 and 7.6)',
    'Human factors experts in aviation',
    'Emergency rescue team (Red Cross certified)',
    'Internal auditors of ISO management systems',
    'Aviation and transport security specialists',
  ],
};

const CapabilitiesSection = () => {
  const { t, lang } = useLang();
  const ref = useRevealAll();
  const [expandedTeam, setExpandedTeam] = useState(false);

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

        {/* Main 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10 bg-white mb-0">
          {t.capabilities.items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} p-8 border-r border-black/10 last:border-r-0 group hover:bg-black hover:border-black transition-all duration-300`}
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

        {/* Team expertise */}
        <div className="reveal mt-12 bg-white border border-black/10">
          <button
            className="w-full p-8 flex items-center justify-between group"
            onClick={() => setExpandedTeam(!expandedTeam)}
          >
            <div className="flex items-center gap-3">
              <Icon name="Users" size={18} className="text-black/30" />
              <span className="font-montserrat font-bold text-black text-sm tracking-[0.2em] uppercase">
                {lang === 'ru' ? 'Экспертиза команды' : 'Team Expertise'}
              </span>
            </div>
            <Icon
              name={expandedTeam ? 'ChevronUp' : 'ChevronDown'}
              size={16}
              className="text-black/30 group-hover:text-black transition-colors"
            />
          </button>
          {expandedTeam && (
            <div className="px-8 pb-8 border-t border-black/10 pt-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {teamExpertise[lang].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-montserrat text-black/20 text-xs mt-0.5 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-ibmplex text-black/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;