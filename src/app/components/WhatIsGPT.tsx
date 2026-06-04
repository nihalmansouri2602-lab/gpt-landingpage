import { motion } from 'motion/react';
import { HelpCircle, ChevronRight, Zap, Target, BookOpen } from 'lucide-react';
import { WHAT_IS_GPT_FEATURES } from '../data';

export default function WhatIsGPT() {
  return (
    <section id="what-is-gpt" className="relative py-20 overflow-hidden bg-[#040C18]">
      {/* Absolute Ambient Background Lights for continuous gradient coloring */}
      <div className="absolute -top-10 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-950/35 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-fuchsia-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-[#ff4820]/5 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Section Card wrapping the original iconic GPT-3 container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-zinc-700 bg-[#082C52] overflow-hidden shadow-2xl"
        >
          {/* Neon upper horizontal accent lines */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-700 via-orange-500 to-zinc-700" />
          
          <div className="absolute -top-12 -left-12 h-36 w-36 rounded-full bg-orange-505/5 blur-2xl pointer-events-none animate-pulse" />

          {/* First Row: What is GPT heading + Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
            
            <div className="md:col-span-4 relative">
              {/* Subtle accent bar */}
              <div className="h-[2px] w-12 bg-gradient-to-r from-zinc-350 to-orange-500 mb-3" />
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                <HelpCircle size={20} className="text-[#FF4820]" /> What is GPT-3
              </h2>
            </div>

            <div className="md:col-span-8">
              <p className="text-sm sm:text-base text-[#81AFDD] leading-relaxed font-light">
               We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
              </p>
            </div>

          </div>

          {/* Second Row: Mid Feature Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16">
            <h3
              className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-transparent bg-clip-text max-w-md"
              style={{
                animationDuration: '6s',
                backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
              }}
            >
              The possibilities are beyond your imagination
            </h3>
            <button
              onClick={() => {
                const el = document.getElementById('library');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group whitespace-nowrap text-xs font-mono tracking-wider font-semibold text-[#FF4820] hover:text-[#ff5a38] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              Explore The Library <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Third Row: Bottom Features Cards columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHAT_IS_GPT_FEATURES.map((feat, index) => {
              // Icon maps based on index
              const icons = [
                <Zap size={20} className="text-[#FF4820]" />,
                <Target size={20} className="text-[#FF4820]" />,
                <BookOpen size={20} className="text-sky-350" />
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-[#031d38] border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent group-hover:via-orange-500/50 transition-all" />

                  <div className="h-10 w-10 rounded-lg bg-[#040C18] border border-zinc-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {icons[index]}
                  </div>

                  <h4 className="text-base font-semibold font-display text-white mb-3 tracking-snug">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#81AFDD] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
