import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-black border border-white/20 flex items-center justify-center hover:bg-white hover:border-white group transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <Icon name="ArrowUp" size={16} className="text-white group-hover:text-black transition-colors" />
    </button>
  );
};

export default ScrollToTop;
