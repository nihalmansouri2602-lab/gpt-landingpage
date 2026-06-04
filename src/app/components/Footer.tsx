import { Sparkles, Mail, Send, Check } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setNewsEmail('');
    }, 2000);
  };

  const footerLinksCol1 = [
    { name: 'Overons', href: '#home' },
    { name: 'Social Media', href: '#home' },
    { name: 'Counters', href: '#home' },
    { name: 'Contact', href: '#home' },
  ];

  const footerLinksCol2 = [
    { name: 'Terms & Conditions', href: '#home' },
    { name: 'Privacy Policy', href: '#home' },
    { name: 'Contact', href: '#home' },
  ];

  const handleSmoothScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-[#031B34] border-t border-zinc-800 pt-20 pb-10 overflow-hidden">
      {/* Absolute Ambient Background Lights for closing footer canvas */}
      <div className="absolute top-10 right-10 h-[500px] w-[500px] rounded-full bg-fuchsia-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#ff4820]/5 blur-[110px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Upper Big Call-to-Action Callout */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-transparent bg-clip-text mb-12 tracking-tight"
            style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
          >
            Do you want to step into the future before others
          </h2>
          
          <button
            onClick={(e) => handleSmoothScroll('home', e)}
            className="bg-transparent hover:bg-white text-white hover:text-[#040C18] text-xs sm:text-sm font-semibold px-8 py-4 border border-white rounded-none transition-all duration-300 shadow-lg cursor-pointer uppercase tracking-widest font-mono inline-block"
          >
            Request Early Access
          </button>
        </div>

        {/* Footer Navigation Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column Logo & Newsletter */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={(e) => handleSmoothScroll('home', e)}>
              <div className="h-8 w-8 bg-[#082C52] border border-zinc-700 rounded flex items-center justify-center">
                <Sparkles size={15} className="text-[#ff4820]" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">GPT-3 OpenAI</span>
            </div>
            
            <p className="text-xs text-[#81AFDD] leading-relaxed font-light mb-6 max-w-sm">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved.
            </p>

            {/* In-footer simple newsletter block */}
            <form onSubmit={handleSubscribe} className="flex max-w-xs bg-[#031B34] rounded-none border border-zinc-700 overflow-hidden">
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Updates newsletter"
                disabled={success}
                className="w-full bg-transparent text-xs text-white pl-3.5 pr-2 py-3 focus:outline-none placeholder-zinc-500 font-sans"
              />
              <button
                type="submit"
                disabled={success}
                className="bg-[#ff4820] hover:bg-[#ff5a38] text-white px-4 flex items-center justify-center transition-colors border-l border-zinc-700 cursor-pointer shrink-0"
              >
                {success ? <Check size={14} className="text-emerald-400" /> : <Send size={14} />}
              </button>
            </form>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-7 text-left">
            <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4820] to-fuchsia-400">Links</h4>
            <ul className="space-y-4 text-xs font-medium text-[#81AFDD]">
              {footerLinksCol1.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleSmoothScroll('home', e)} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4820] to-fuchsia-400">Company</h4>
            <ul className="space-y-4 text-xs font-medium text-[#81AFDD]">
              {footerLinksCol2.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleSmoothScroll('home', e)} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4820] to-fuchsia-400">Get in touch</h4>
            <address className="not-italic space-y-4 text-xs font-medium text-[#81AFDD]">
              <p className="leading-relaxed font-light">Crechterwoord K12 182 DK Alknjkcb</p>
              <p className="font-mono">085-132567</p>
              <p className="font-mono hover:text-[#ff4820] transition-colors">
                <a href="mailto:info@payme.net">info@payme.net</a>
              </p>
            </address>
          </div>

         </div>
        <div className="pt-8  flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-mono text-white text-center">
          <p>© 2021 GPT-3. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
