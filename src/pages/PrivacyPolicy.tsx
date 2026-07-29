import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LangProvider, useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const PrivacyContent = () => {
  const { lang } = useLang();
  const isRu = lang === 'ru';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-black px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-5 h-px bg-white/40 group-hover:bg-white transition-colors duration-200" />
          <span className="font-montserrat text-white/90 group-hover:text-white text-sm tracking-[0.25em] uppercase transition-colors duration-200">
            AlAero Group
          </span>
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
            {isRu ? 'Политика конфиденциальности' : 'Privacy Policy'}
          </h1>
        </div>

        <div className="space-y-10 font-ibmplex text-black/70 text-base leading-relaxed">
          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              1. {isRu ? 'Общие положения' : 'General Provisions'}
            </h2>
            <p>
              {isRu
                ? 'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта alaero.group.'
                : 'This Privacy Policy defines the procedure for processing and protecting personal data of alaero.group website users.'}
            </p>
            <div className="mt-4 space-y-2">
              <p className="font-medium text-black">{isRu ? 'Оператор персональных данных:' : 'Personal Data Operator:'}</p>
              <ul className="space-y-1 pl-4">
                <li className="flex gap-2"><span className="text-black/30">—</span> {isRu ? 'Группа компаний AlAero' : 'AlAero Group'}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              2. {isRu ? 'Какие данные мы собираем' : 'Data We Collect'}
            </h2>
            <ul className="space-y-2 pl-4">
              {(isRu
                ? ['Имя и контактная информация', 'Название компании', 'Email и номер телефона', 'Cookies и данные о посещении сайта']
                : ['Name and contact information', 'Company name', 'Email and phone number', 'Cookies and website visit data']
              ).map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-black/30">—</span>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              3. {isRu ? 'Для чего мы используем данные' : 'How We Use Data'}
            </h2>
            <ul className="space-y-2 pl-4">
              {(isRu
                ? ['Обработка обращений и запросов', 'Предоставление информации о наших услугах', 'Улучшение работы сайта', 'Выполнение требований законодательства РФ']
                : ['Processing inquiries and requests', 'Providing information about our services', 'Improving website performance', 'Compliance with Russian legislation']
              ).map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-black/30">—</span>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              4. {isRu ? 'Защита данных' : 'Data Protection'}
            </h2>
            <p>
              {isRu
                ? 'Мы используем единую защищённую архитектуру информационных сетей с применением средств криптографической защиты информации (СКЗИ). Персональные данные хранятся в защищённых системах с ограниченным доступом.'
                : 'We use a unified secure information network architecture with cryptographic data protection tools (CIPF). Personal data is stored in secure systems with restricted access.'}
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              5. {isRu ? 'Ваши права' : 'Your Rights'}
            </h2>
            <p className="mb-3">
              {isRu
                ? 'В соответствии с ФЗ-152 «О персональных данных» вы вправе:'
                : 'In accordance with Federal Law No. 152-FZ "On Personal Data" you have the right to:'}
            </p>
            <ul className="space-y-2 pl-4">
              {(isRu
                ? ['Получить информацию об обработке ваших данных', 'Потребовать исправления или удаления данных', 'Отозвать согласие на обработку персональных данных', 'Обратиться с жалобой в Роскомнадзор']
                : ['Receive information about processing of your data', 'Request correction or deletion of data', 'Withdraw consent to personal data processing', 'File a complaint with Roskomnadzor']
              ).map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-black/30">—</span>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
              6. {isRu ? 'Контакты' : 'Contacts'}
            </h2>
            <p>{isRu ? 'По вопросам обработки персональных данных:' : 'For personal data processing inquiries:'}</p>
            <div className="mt-3 space-y-1">
              <p>Email: <a href="mailto:info@alaero.group" className="text-black hover:underline">info@alaero.group</a></p>
              <p>{isRu ? 'Телефон:' : 'Phone:'} <a href="tel:+73432297755" className="text-black hover:underline">+7 (343) 229-77-55</a></p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10">
          <p className="font-ibmplex text-black/30 text-xs">
            {isRu
              ? 'Документ соответствует требованиям ФЗ-152 «О персональных данных» Российской Федерации.'
              : 'This document complies with Russian Federal Law No. 152-FZ "On Personal Data".'}
          </p>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => (
  <LangProvider>
    <PrivacyContent />
  </LangProvider>
);

export default PrivacyPolicy;