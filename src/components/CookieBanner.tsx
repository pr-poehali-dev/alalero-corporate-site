import { useState } from 'react';
import { useLang } from '@/contexts/LangContext';

const CookieBanner = () => {
  const { t } = useLang();
  const [dismissed, setDismissed] = useState(
    () => typeof window !== 'undefined' && !!localStorage.getItem('cookies_accepted')
  );

  const accept = () => {
    localStorage.setItem('cookies_accepted', '1');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
      <p className="font-ibmplex text-white/60 text-sm text-center sm:text-left">
        {t.cookies.text}
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={accept}
          className="bg-white text-black font-montserrat font-semibold text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-white/90 transition-colors"
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
