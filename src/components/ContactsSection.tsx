import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRevealAll } from '@/hooks/useReveal';
import { useLang } from '@/contexts/LangContext';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  const { t, lang } = useLang();
  const ref = useRevealAll();
  const c = t.contacts;

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', message: '', consent: false,
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = lang === 'ru' ? 'Обязательное поле' : 'Required';
    if (!form.company.trim()) e.company = lang === 'ru' ? 'Обязательное поле' : 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = lang === 'ru' ? 'Некорректный email' : 'Invalid email';
    if (!form.phone.trim()) e.phone = lang === 'ru' ? 'Обязательное поле' : 'Required';
    if (!form.message.trim()) e.message = lang === 'ru' ? 'Обязательное поле' : 'Required';
    if (!form.consent) e.consent = lang === 'ru' ? 'Необходимо согласие' : 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot — бот заполнил скрытое поле
    if (validate()) {
      setSent(true);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b ${
      errors[field] ? 'border-red-500' : 'border-black/20 focus:border-black'
    } py-3 font-ibmplex text-black text-sm outline-none transition-colors duration-200 placeholder:text-black/30`;

  return (
    <section id="contacts" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal mb-6">
          <span className="font-montserrat text-black/30 text-xs tracking-[0.3em] uppercase">
            {c.sectionLabel}
          </span>
          <div className="mt-3 w-12 h-px bg-black" />
        </div>
        <h2 className="reveal font-montserrat font-black text-black text-4xl lg:text-5xl leading-tight mb-16">
          {c.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <div className="reveal mb-8">
              <span className="font-montserrat font-bold text-black text-xs tracking-[0.2em] uppercase mb-4 block">
                {c.hqTitle}
              </span>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="MapPin" size={16} className="text-black/30 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-ibmplex text-black/70 text-sm leading-relaxed">{c.address}</p>
                    <p className="font-ibmplex text-black/40 text-xs mt-1">{c.airport}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Phone" size={16} className="text-black/30 mt-0.5 shrink-0" />
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="font-ibmplex text-black/70 text-sm hover:text-black transition-colors"
                  >
                    {c.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Icon name="Mail" size={16} className="text-black/30 mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${c.email}`}
                    className="font-ibmplex text-black/70 text-sm hover:text-black transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Icon name="Clock" size={16} className="text-black/30 mt-0.5 shrink-0" />
                  <span className="font-ibmplex text-black/70 text-sm">{c.workHours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <span className="font-montserrat font-bold text-black text-xs tracking-[0.2em] uppercase mb-8 block">
              {c.formTitle}
            </span>

            {sent ? (
              <div className="border border-black/10 p-8 text-center">
                <Icon name="CheckCircle" size={32} className="text-black mx-auto mb-4" />
                <p className="font-ibmplex text-black/70 text-base">{c.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder={c.fields.name + ' *'}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass('name')}
                    />
                    {errors.name && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={c.fields.company + ' *'}
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className={inputClass('company')}
                    />
                    {errors.company && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.company}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder={c.fields.email + ' *'}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass('email')}
                    />
                    {errors.email && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={c.fields.phone + ' *'}
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder={c.fields.message + ' *'}
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.message}</span>}
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                        form.consent ? 'bg-black border-black' : 'border-black/30 group-hover:border-black/60'
                      }`}
                      onClick={() => setForm({ ...form, consent: !form.consent })}
                    >
                      {form.consent && <Icon name="Check" size={10} className="text-white" />}
                    </div>
                    <span className="font-ibmplex text-black/50 text-xs leading-relaxed">
                      {lang === 'ru' ? 'Я согласен на обработку персональных данных в соответствии с ' : 'I agree to the processing of personal data in accordance with the '}
                      <Link to="/privacy-policy" className="underline hover:text-black transition-colors">
                        {lang === 'ru' ? 'Политикой конфиденциальности' : 'Privacy Policy'}
                      </Link>
                    </span>
                  </label>
                  {errors.consent && <span className="font-ibmplex text-red-500 text-xs mt-1 block">{errors.consent}</span>}
                </div>

                {/* Honeypot — скрыто от людей, видно ботам */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={e => setForm({ ...form, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white font-montserrat font-semibold text-sm tracking-widest uppercase py-4 hover:bg-black/80 active:scale-[0.98] transition-all duration-200"
                >
                  {c.fields.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;