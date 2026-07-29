import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LangProvider, useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const MediaContent = () => {
  const { lang } = useLang();
  const isRu = lang === 'ru';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rows = isRu
    ? [
        ['Наименование СМИ', 'TRANSAERO'],
        ['Тип', 'Сетевое издание'],
        ['Свидетельство о регистрации', 'ЭЛ № ФС77-86800'],
        ['Дата регистрации', '05 февраля 2024 года'],
        ['Регистрирующий орган', 'Роскомнадзор'],
        ['Доменное имя', 'UMC.AERO'],
        ['Возрастная маркировка', '18+'],
      ]
    : [
        ['Media Name', 'TRANSAERO'],
        ['Type', 'Online Publication'],
        ['Registration Certificate', 'ЭЛ № ФС77-86800'],
        ['Registration Date', 'February 5, 2024'],
        ['Registering Authority', 'Roskomnadzor'],
        ['Domain Name', 'UMC.AERO'],
        ['Age Rating', '18+'],
      ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-black px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo/logo-white.png" alt="AlAero Group" className="h-6 w-auto" />
        </Link>
        <Link to="/" className="flex items-center gap-2 font-ibmplex text-white/50 text-sm hover:text-white transition-colors">
          <Icon name="ArrowLeft" size={14} />
          {isRu ? 'На главную' : 'Back to Home'}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="mb-12">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {isRu ? 'Юридический документ' : 'Legal document'}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
          <h1 className="font-montserrat font-light text-black text-3xl lg:text-4xl mt-6">
            {isRu ? 'Информация о средстве массовой информации' : 'Media Information'}
          </h1>
        </div>

        {/* Registration data */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-6">
            {isRu ? 'Регистрационные данные' : 'Registration Details'}
          </h2>
          <div className="border border-black/10">
            {rows.map(([label, value], i) => (
              <div key={i} className={`flex ${i < rows.length - 1 ? 'border-b border-black/10' : ''}`}>
                <div className="w-1/2 px-6 py-4 bg-black/[0.02]">
                  <span className="font-ibmplex text-black/50 text-sm">{label}</span>
                </div>
                <div className="w-1/2 px-6 py-4">
                  <span className={`font-ibmplex text-sm ${value === '18+' ? 'font-bold text-black' : 'text-black/70'}`}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-6">
            {isRu ? 'Учредитель' : 'Founder'}
          </h2>
          <div className="border border-black/10 p-6 space-y-2">
            <p className="font-montserrat font-bold text-black">ООО «ТРАНСАЭРО СЕРВИС»</p>
            <p className="font-ibmplex text-black/60 text-sm">ИНН: 6685158438</p>
            <p className="font-ibmplex text-black/60 text-sm">ОГРН: 1196658004707</p>
          </div>
        </div>

        {/* Editor */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-6">
            {isRu ? 'Главный редактор' : 'Editor-in-Chief'}
          </h2>
          <div className="border border-black/10 p-6">
            <p className="font-ibmplex text-black/70 text-base">Нечипуренко Александр Дмитриевич</p>
          </div>
        </div>

        {/* Editorial contacts */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-6">
            {isRu ? 'Контакты редакции' : 'Editorial Contacts'}
          </h2>
          <div className="border border-black/10 p-6 space-y-3">
            <div className="flex gap-3">
              <Icon name="MapPin" size={16} className="text-black/30 mt-0.5 shrink-0" />
              <span className="font-ibmplex text-black/70 text-sm">
                620025, Свердловская обл., г. Екатеринбург, ул. Бахчиванджи, д. 55А
              </span>
            </div>
            <div className="flex gap-3">
              <Icon name="Mail" size={16} className="text-black/30 shrink-0" />
              <a href="mailto:press@umc.aero" className="font-ibmplex text-black/70 text-sm hover:text-black transition-colors">
                press@umc.aero
              </a>
            </div>
            <div className="flex gap-3">
              <Icon name="Phone" size={16} className="text-black/30 shrink-0" />
              <a href="tel:+73433825575" className="font-ibmplex text-black/70 text-sm hover:text-black transition-colors">
                +7 (343) 382 55 75
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="font-ibmplex text-black/30 text-xs leading-relaxed">
            {isRu
              ? 'Права, обязанности и ответственность предусмотрены ФЗ РФ от 27.12.1991 № 2124-1 «О средствах массовой информации».'
              : 'Rights, obligations and liability are governed by Federal Law of the Russian Federation dated 27.12.1991 No. 2124-1 "On Mass Media".'}
          </p>
        </div>
      </div>
    </div>
  );
};

const MediaInfo = () => (
  <LangProvider>
    <MediaContent />
  </LangProvider>
);

export default MediaInfo;