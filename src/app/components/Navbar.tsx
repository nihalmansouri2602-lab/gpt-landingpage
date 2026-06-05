import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenAuth: (tab: 'signin' | 'signup') => void;
  currentUser: string | null;
  onSignOut: () => void;
}

export default function Navbar({ onOpenAuth, currentUser, onSignOut }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home', left: 267, width: 50 },
    { name: 'What is GPT', id: 'what-is-gpt', left: 371, width: 112 },
    { name: 'OpenAI', id: 'openai', left: 517, width: 65 },
    { name: 'Case Studies', id: 'case-studies', left: 628, width: 113 },
    { name: 'Library', id: 'library', left: 775, width: 58 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 180;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040C18]/90 backdrop-blur-md border-b border-zinc-900/50 py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="hidden lg:block relative mx-auto w-[1440px] h-[130px] select-none overflow-visible">
        <div 
          className="absolute rounded-[5px] border border-zinc-800/20 bg-transparent pointer-events-none"
          style={{
            width: '1169.34px',
            height: '58px',
            top: scrolled ? '15px' : '55px',
            left: '135.66px',
            opacity: 1,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        <div 
          onClick={() => handleSmoothScroll('home')}
          className="absolute cursor-pointer text-white font-display font-extrabold text-[#fff] tracking-wide flex items-center hover:opacity-85 transition-all duration-350"
          style={{
            width: '62.56px',
            height: '16.02px',
            top: scrolled ? '34.29px' : '74.29px',
            left: '135.66px',
            opacity: 1,
            fontSize: '18px',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          GPT-3
        </div>

        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleSmoothScroll(link.id)}
            className={`absolute flex items-center justify-start text-sm transition-all duration-300 cursor-pointer ${
              activeSection === link.id
                ? 'text-white font-semibold'
                : 'text-zinc-300 hover:text-white font-normal'
            }`}
            style={{
              width: `${link.width}px`,
              height: '25px',
              top: scrolled ? '31px' : '71px',
              left: `${link.left}px`,
              opacity: 1,
              transition: 'top 300ms, color 200ms'
            }}
          >
            {link.name}
          </button>
        ))}

        <div 
          className="absolute origin-right transition-all duration-300"
          style={{
            top: scrolled ? '15px' : '55px',
            left: '1070px',
            height: '58px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {currentUser ? (
            <div className="flex items-center gap-3 bg-[#161619] border border-zinc-800/80 px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <User size={13} />
                <span className="max-w-[70px] truncate">{currentUser}</span>
              </div>
              <button
                onClick={onSignOut}
                title="Sign Out"
                className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-indigo-500/10 transition-all cursor-pointer"
              >
                <LogOut size={13} />
              </button>
            </div>
          ) : (
            <div className="flex items-center relative overflow-visible h-full w-[235px]">
              <button
                onClick={() => onOpenAuth('signin')}
                className="absolute text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center font-display"
                style={{
                  width: '57px',
                  height: '25px',
                  top: '16px',
                  left: '0px', 
                }}
              >
                Sign In
              </button>

              <button
                onClick={() => onOpenAuth('signup')}
                className="absolute text-white font-semibold text-xs transition-all duration-300 shadow-lg hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: '#FF4820',
                  borderRadius: '5px',
                  width: '152px',
                  height: '58px',
                  top: '0px',
                  left: '83px',
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between lg:hidden">
        <div 
          onClick={() => handleSmoothScroll('home')}
          className="flex items-center gap-1.5 cursor-pointer group"
        >
          <span className="font-display font-extrabold text-base tracking-wider text-white">
            GPT-3
          </span>
        </div>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-2 bg-[#161619] border border-zinc-800 px-3 py-1 rounded-full text-xs text-indigo-400 font-mono">
              <span className="max-w-[80px] truncate">{currentUser.split('@')[0]}</span>
              <button onClick={onSignOut} className="text-zinc-400 hover:text-white">
                <LogOut size={12} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onOpenAuth('signin')}
                className="text-xs font-semibold text-zinc-300 hover:text-white"
              >
                Sign In
              </button>
              <button 
                onClick={() => onOpenAuth('signup')}
                className="bg-[#ff4820] text-white text-[10px] font-bold px-3 py-1.5 rounded-[5px]"
              >
                Sign Up
              </button>
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-zinc-400 hover:text-white bg-[#101012] border border-zinc-800 rounded-lg cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden lg:hidden bg-[#0c0c0e] border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleSmoothScroll(link.id)}
                  className={`text-left text-base font-medium py-1.5 transition-colors ${
                    activeSection === link.id ? 'text-[#4f46e5] pl-2 border-l-2 border-[#4f46e5]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="h-px bg-zinc-850 my-2" />

              {currentUser ? (
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-mono text-indigo-400 flex items-center gap-2">
                    <User size={14} />
                    <span>{currentUser}</span>
                  </div>
                  <button
                    onClick={() => {
                      onSignOut();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 border border-red-950/60 bg-red-950/10 text-red-400 font-medium py-2.5 rounded-lg text-sm"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => {
                      onOpenAuth('signin');
                      setIsOpen(false);
                    }}
                    className="w-full text-center py-2.5 text-sm text-zinc-300 font-medium border border-zinc-800 rounded-lg"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onOpenAuth('signup');
                      setIsOpen(false);
                    }}
                    className="w-full text-center bg-[#ff4820] hover:bg-[#ff5a38] text-white font-semibold py-2.5 rounded-none text-sm cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
