'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsGPT from './components/WhatIsGPT';
import VRSection from './components/VRSection';
import CaseStudies from './components/CaseStudies';
import Library from './components/Library';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [currentUser, setCurrentUser] = useState<string | null>(null); 
  const [notification, setNotification] = useState<string | null>(null);


  useEffect(() => {
    const saved = localStorage.getItem('gpt_currentUser');
    if (saved) setCurrentUser(saved);
    triggerNotification('GPT-3 Sandbox active. Explore neural specifications below.');
  }, []);

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleOpenAuth = (tab: 'signin' | 'signup') => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  const handleOpenAuthWithEmail = (email: string) => {
    setAuthTab('signup');
    setIsAuthOpen(true);
    triggerNotification(`Registration session opened for: ${email}`);
  };

  const handleAuthSuccess = (email: string, name?: string) => {
    const displayName = name || email;
    setCurrentUser(displayName);
    localStorage.setItem('gpt_currentUser', displayName);
    triggerNotification(`Verified successfully. Welcome back, ${displayName}!`);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('gpt_currentUser');
    triggerNotification('Developer session completed. Key revoked.');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-150 selection:bg-[#4f46e5] selection:text-white font-sans overflow-x-hidden">
      
      <div className="absolute top-0 right-0 left-0 h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-[#4f46e5]/5 blur-[150px]" />
        <div className="absolute -top-[200px] -left-[100px] w-[700px] h-[700px] rounded-full bg-zinc-650/5 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenAuth={handleOpenAuth} currentUser={currentUser} onSignOut={handleSignOut} />
        <Hero onOpenAuthWithEmail={handleOpenAuthWithEmail} currentUser={currentUser} />

        <div className="py-12 bg-[#040C18] border-t border-b border-zinc-800/40 relative z-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center animate-fade-in">

            
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 select-none">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/images/google.png" 
                alt="Google Logo" 
                referrerPolicy="no-referrer"
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/images/slack.png" 
                alt="Slack Logo" 
                referrerPolicy="no-referrer"
                className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/Atlassian_Logo.svg" 
                alt="Atlassian" 
                referrerPolicy="no-referrer"
                className="h-4 sm:h-5 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/images/dropbox.png" 
                alt="Dropbox Logo" 
                referrerPolicy="no-referrer"
                className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/images/shopify.png" 
                alt="Shopify Logo" 
                referrerPolicy="no-referrer"
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
            </div>
          </div>
        </div>

        <WhatIsGPT />
        <CaseStudies />
        <VRSection />
        <Library />
        <Footer />
      </div>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialTab={authTab}
        onAuthSuccess={handleAuthSuccess}
      />

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm overflow-hidden rounded-xl border border-zinc-800 bg-[#161619] p-4.5 shadow-2xl"
          >
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-550 via-[#4f46e5] to-indigo-700" />
            <div className="flex items-start gap-3">
              <div className="h-7 w-7 rounded bg-zinc-900 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5 border border-zinc-850">
                <Terminal size={14} className="animate-pulse" />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] font-bold text-white flex items-center gap-1">
                  <Sparkles size={11} className="text-indigo-450" /> SYSTEM RESOLUTION LOG
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{notification}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}