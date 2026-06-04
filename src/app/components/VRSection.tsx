import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function VRSection() {
  return (
    <section id="openai" className="relative py-24 bg-[#040C18] overflow-hidden">
      {/* Absolute Ambient Background Lights for deep cosmic matching gradient */}
      <div className="absolute top-1/4 -right-24 h-[600px] w-[500px] rounded-full bg-fuchsia-950/25 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-950/30 blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 right-1/3 h-[400px] w-[400px] rounded-full bg-[#ff4820]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* VR Experience Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Image with concentric overlay & Floating "My Apps" card & chat bubble */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Concentric waves circles overlay vector behind image */}
            <div className="absolute -top-12 -left-12 h-80 w-80 pointer-events-none z-0 opacity-15">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-sky-450">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            
            {/* Image container styled beautifully */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
              style={{
                width: '546px',
                height: '607.5271606445312px',
                opacity: 1,
                transform: 'rotate(180deg)',
              }}
            >
              <img
                src="/images/FeatureImage.png"
                alt="VR Experience Visual"
                className="w-full h-auto object-cover rounded-2xl border border-sky-500/10 filter saturate-110 contrast-105 brightness-95 scale-140"
                referrerPolicy="no-referrer"
              />

              {/* Floating chat icon on the top-left corner */}
              <div className="absolute top-10 -left-6 h-12 w-12 bg-[#040C18] border border-zinc-700/80 rounded-xl flex items-center justify-center text-sky-400 shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <MessageSquare size={18} />
              </div>
            </motion.div>

          </div>

          {/* Right Column: VR Heading, Info Copy & Link */}
          <div className="lg:col-span-7 text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold tracking-wide text-sky-305 font-mono block mb-3 text-[#81AFDD]"
            >
              Request Early Access to Get Started
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-display leading-[1.25] tracking-tight text-transparent bg-clip-text mb-6"
              style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
            >
              The possibilities are <br /> beyond your imagination
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#81AFDD] leading-relaxed max-w-xl font-light mb-8"
            >
               Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </motion.p>

            <motion.button
              onClick={() => {
                const el = document.getElementById('home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-sm font-semibold text-[#FF8A71] hover:text-[#ff4820] tracking-wide transition-colors inline-block cursor-pointer"
            >
              Request Early Access to Get Started
            </motion.button>
          </div>

        </div>

        {/* CTA Banner Bar (Call To Action Register Box) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden shadow-2xl"
          style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
        >
          {/* Subtle noise grid overlay */}
          <div className="absolute inset-0 bg-[#000]/5 opacity-10 pointer-events-none" />

          {/* Left Text group */}
          <div className="text-left z-10">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#040C18] uppercase">
              Request Early Access to Get Started
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#040C18] mt-2 tracking-tight leading-snug">
              Register today & start exploring the endless possiblities.
            </h3>
          </div>

          {/* Right Action button */}
          <div className="shrink-0 z-10 text-left md:text-right">
            <button
              onClick={() => {
                const el = document.getElementById('home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#040C18] hover:bg-black text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider cursor-pointer font-mono uppercase"
            >
              Get Started
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
