import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LangProvider, useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const content = {
  ru: {
    back: 'На главную',
    docLabel: 'Юридический документ',
    title: 'Политика конфиденциальности',
    updated: 'Дата вступления в силу: 1 января 2024 года',
    sections: [
      {
        title: '1. Общие положения',
        paragraphs: [
          'Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении сайта alaero.group (далее — «Сайт») и разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и Федеральным законом от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации».',
          'Сайт носит исключительно информационный характер. Он предназначен для ознакомления посетителей с деятельностью и услугами группы компаний AlAero и не предусматривает регистрацию, авторизацию, заполнение форм, отправку сообщений или иную передачу данных со стороны пользователя.',
        ],
      },
      {
        title: '2. Персональные данные',
        paragraphs: [
          'Сайт не осуществляет сбор, запись, систематизацию, накопление, хранение, использование или иную обработку персональных данных пользователей.',
          'Пользователь может только просматривать и читать размещённую на Сайте информацию. Никакие поля для ввода данных, формы обратной связи, регистрации или заказа на Сайте не предусмотрены.',
        ],
      },
      {
        title: '3. Файлы cookie и техническая информация',
        paragraphs: [
          'Для обеспечения корректной работы Сайта могут использоваться технические файлы cookie, необходимые для отображения страниц и сохранения выбранного языка интерфейса. Такие файлы не позволяют идентифицировать пользователя как физическое лицо.',
          'Сайт может использовать обезличенную статистику посещений (например, сервисы веб-аналитики) исключительно в агрегированном виде для оценки удобства и улучшения работы Сайта. Эти данные не относятся к персональным и не используются для идентификации конкретного пользователя.',
          'Вы можете отключить использование файлов cookie в настройках вашего браузера. Это не влияет на возможность просмотра информации Сайта.',
        ],
      },
      {
        title: '4. Информация и интеллектуальная собственность',
        paragraphs: [
          'Вся информация, размещённая на Сайте, носит справочный характер и предоставляется «как есть». Материалы Сайта, включая тексты, графические изображения и фирменную символику, являются объектами интеллектуальной собственности группы компаний AlAero.',
        ],
      },
      {
        title: '5. Ссылки на сторонние ресурсы',
        paragraphs: [
          'Сайт может содержать ссылки на внешние ресурсы. Администрация Сайта не несёт ответственности за содержание и политику конфиденциальности сторонних сайтов. Рекомендуем ознакомиться с их правилами при переходе.',
        ],
      },
      {
        title: '6. Изменение Политики',
        paragraphs: [
          'Администрация Сайта вправе вносить изменения в настоящую Политику. Актуальная редакция всегда размещается на данной странице. Продолжение использования Сайта после внесения изменений означает согласие с обновлённой Политикой.',
        ],
      },
      {
        title: '7. Контакты',
        paragraphs: [
          'По вопросам, связанным с настоящей Политикой и работой Сайта, вы можете обратиться:',
        ],
        contacts: true,
      },
    ],
    contactsLabel: { email: 'Email', phone: 'Телефон' },
    footer: 'Документ подготовлен в соответствии с законодательством Российской Федерации.',
  },
  en: {
    back: 'Back to Home',
    docLabel: 'Legal document',
    title: 'Privacy Policy',
    updated: 'Effective date: 1 January 2024',
    sections: [
      {
        title: '1. General Provisions',
        paragraphs: [
          'This Privacy Policy (hereinafter — the "Policy") applies to the alaero.group website (hereinafter — the "Website") and is developed in accordance with Federal Law No. 152-FZ dated 27.07.2006 "On Personal Data" and Federal Law No. 149-FZ dated 27.07.2006 "On Information, Information Technologies and Information Protection".',
          'The Website is purely informational. It is intended to introduce visitors to the activities and services of AlAero Group and does not provide for registration, authorization, form filling, message sending or any other data submission by the user.',
        ],
      },
      {
        title: '2. Personal Data',
        paragraphs: [
          'The Website does not collect, record, organize, accumulate, store, use or otherwise process users\' personal data.',
          'Users may only view and read the information posted on the Website. No data entry fields, contact forms, registration or ordering features are provided on the Website.',
        ],
      },
      {
        title: '3. Cookies and Technical Information',
        paragraphs: [
          'To ensure the correct operation of the Website, technical cookies may be used, which are necessary for displaying pages and saving the selected interface language. Such files do not allow identifying the user as an individual.',
          'The Website may use anonymized visit statistics (for example, web analytics services) exclusively in aggregated form to assess usability and improve the Website. This data is not personal and is not used to identify a specific user.',
          'You can disable the use of cookies in your browser settings. This does not affect the ability to view the Website information.',
        ],
      },
      {
        title: '4. Information and Intellectual Property',
        paragraphs: [
          'All information posted on the Website is for reference only and is provided "as is". The Website materials, including texts, graphic images and corporate symbols, are the intellectual property of AlAero Group.',
        ],
      },
      {
        title: '5. Links to Third-Party Resources',
        paragraphs: [
          'The Website may contain links to external resources. The Website administration is not responsible for the content and privacy policies of third-party websites. We recommend reviewing their rules when following such links.',
        ],
      },
      {
        title: '6. Changes to the Policy',
        paragraphs: [
          'The Website administration reserves the right to amend this Policy. The current version is always posted on this page. Continued use of the Website after changes are made constitutes acceptance of the updated Policy.',
        ],
      },
      {
        title: '7. Contacts',
        paragraphs: [
          'For questions related to this Policy and the operation of the Website, you may contact us:',
        ],
        contacts: true,
      },
    ],
    contactsLabel: { email: 'Email', phone: 'Phone' },
    footer: 'This document is prepared in accordance with the legislation of the Russian Federation.',
  },
};

const PrivacyContent = () => {
  const { lang, setLang } = useLang();
  const t = content[lang];

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

        <div className="flex items-center gap-5">
          {/* Language switcher */}
          <div className="flex items-center border border-white/20 overflow-hidden">
            <button
              onClick={() => setLang('ru')}
              className={`px-3 py-1.5 text-xs font-montserrat tracking-widest transition-colors duration-200 ${
                lang === 'ru' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-montserrat tracking-widest transition-colors duration-200 ${
                lang === 'en' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Link to="/" className="hidden sm:flex items-center gap-2 font-ibmplex text-white/50 text-sm hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={14} />
            {t.back}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="mb-12">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {t.docLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
          <h1 className="font-montserrat font-light text-black text-3xl lg:text-4xl mt-6">
            {t.title}
          </h1>
          <p className="font-ibmplex text-black/40 text-sm mt-4">{t.updated}</p>
        </div>

        <div className="space-y-10 font-ibmplex text-black/70 text-base leading-relaxed">
          {t.sections.map((section, si) => (
            <section key={si}>
              <h2 className="font-montserrat font-bold text-black text-sm tracking-widest uppercase mb-4">
                {section.title}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className={pi > 0 ? 'mt-3' : ''}>{p}</p>
              ))}
              {'contacts' in section && section.contacts && (
                <div className="mt-3 space-y-1">
                  <p>
                    {t.contactsLabel.email}:{' '}
                    <a href="mailto:info@alaero.group" className="text-black hover:underline">info@alaero.group</a>
                  </p>
                  <p>
                    {t.contactsLabel.phone}:{' '}
                    <a href="tel:+73432297755" className="text-black hover:underline">+7 (343) 229-77-55</a>
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/10">
          <p className="font-ibmplex text-black/30 text-xs">{t.footer}</p>
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