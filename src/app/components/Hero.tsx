import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  onOpenAuthWithEmail: (email: string) => void;
  currentUser: string | null;
}

export default function Hero({ onOpenAuthWithEmail, currentUser }: HeroProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a structured email address.');
      return;
    }
    
    setError('');
    setSubscribed(true);
    
    setTimeout(() => {
      onOpenAuthWithEmail(email);
      setSubscribed(false);
      setEmail('');
    }, 1200);
  };

  const avatars = [
    { name: 'Alice', bg: 'bg-gradient-to-r from-cyan-400 to-blue-500', initial: 'A' },
    { name: 'Boris', bg: 'bg-gradient-to-r from-[#FF8A71] to-[#FF4820]', initial: 'B' },
    { name: 'Chloe', bg: 'bg-gradient-to-r from-[#ae3ec9] to-indigo-500', initial: 'C' },
    { name: 'Daniel', bg: 'bg-gradient-to-r from-emerald-400 to-teal-500', initial: 'D' },
    { name: 'Emily', bg: 'bg-gradient-to-r from-yellow-450 to-orange-500', initial: 'E' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#040C18]">
      <div className="absolute top-1/10 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-950/45 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 h-[600px] w-[500px] rounded-full bg-fuchsia-950/30 blur-[130px] pointer-events-none" />
      <div className="absolute -top-36 right-1/4 h-[400px] w-[400px] rounded-full bg-[#ff4820]/10 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161619_1px,transparent_1px),linear-gradient(to_bottom,#161619_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold font-display leading-[1.12] tracking-tight text-[#ff4820] mb-6"
            >
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
              >
                Let’s Build Something amazing with GPT-3 OpenAI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#81AFDD] leading-relaxed max-w-xl mb-10 font-sans font-light"
            >
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              {currentUser ? (
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#161619] border border-zinc-800 p-4 rounded-xl max-w-lg">
                  <div className="flex h-10 w-10 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/30 items-center justify-center text-emerald-400">
                    <Check size={18} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-white">Signed In Successfully</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Your sandbox key is active. Start running integration payloads in the sections below.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-1 sm:gap-0 max-w-xl relative">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      disabled={subscribed}
                      className="w-full bg-[#082C52]/50 text-white rounded-none border border-zinc-700 focus:border-[#ff4820] pr-4 pl-5 py-4 text-sm focus:outline-none placeholder-zinc-400 transition-all font-sans"
                    />
                    {error && (
                      <span className="absolute left-5 -bottom-5 text-[10px] text-red-400 font-mono">
                        {error}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={subscribed}
                    className="bg-[#ff4820] hover:bg-[#ff5a38] text-white font-semibold px-8 py-4 text-sm rounded-none transition-all shadow-lg shadow-[#ff4820]/25 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {subscribed ? (
                      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1.5 font-mono text-xs">
                        <Check size={16} /> Preparing workspace...
                      </motion.div>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        Get Started <ArrowRight size={16} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-5 mt-4"
            >
              <div className="flex -space-x-3 overflow-hidden">
                {avatars.map((ava, i) => (
                  <div
                    key={i}
                    className={`inline-block h-9 w-9 rounded-full ring-2 ring-[#050505] select-none ${ava.bg} flex items-center justify-center font-bold text-[11px] text-white`}
                    title={ava.name}
                  >
                    {ava.initial}
                  </div>
                ))}
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050505] bg-[#161619] border border-zinc-800 flex items-center justify-center font-bold text-[10px] text-indigo-400">
                  +99
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs text-[#81AFDD] font-medium">
                  1,600 people requested access a visit in last 24 hours
                </p>
              </div>
            </motion.div>

          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute h-72 w-72 md:h-96 md:w-96 rounded-full bg-gradient-to-tr from-indigo-500/10 via-zinc-900/10 to-indigo-700/10 blur-2xl animate-pulse pointer-events-none" />
            <div className="absolute h-56 w-56 rounded-full border border-dashed border-zinc-800 pointer-events-none anim-spin" style={{ animationDuration: '40s' }} />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[420px] z-10"
            >
              <img
                src="/images/HeaderIllustration.png"
                alt="OpenAI Cyber Face Mask"
                className="w-full h-auto object-cover rounded-2xl select-none scale-140"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
