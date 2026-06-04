'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Sparkles, Check } from 'lucide-react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'signin' | 'signup';
  onAuthSuccess: (email: string, name?: string) => void;
}

export default function AuthModal({ isOpen, onClose, initialTab, onAuthSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    setTab(initialTab);
    setError('');
    setIsSuccess(false);
  }, [initialTab, isOpen]);

  const handleSuccess = (email: string, name?: string) => {
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => {
      onAuthSuccess(email, name || undefined);
      onClose();
      setEmail('');
      setPassword('');
      setName('');
      setIsSuccess(false);
    }, 1000);
  };

  const handleFirebaseError = (code: string) => {
    const messages: Record<string, string> = {
      'auth/email-already-in-use': 'This email is already registered.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/weak-password': 'Password must be at least 6 characters.',
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/invalid-credential': 'Invalid credentials. Please try again.',
      'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
      'auth/too-many-requests': 'Too many attempts. Please try again later.',
    };
    setError(messages[code] || 'Authentication failed. Please try again.');
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (tab === 'signup' && !name) {
      setError('Please provide your name.');
      return;
    }

    setIsLoading(true);

    try {
      if (tab === 'signup') {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
        handleSuccess(cred.user.email!, name);
      } else {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        handleSuccess(cred.user.email!, cred.user.displayName || undefined);
      }
    } catch (err: any) {
      handleFirebaseError(err.code);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      handleSuccess(cred.user.email!, cred.user.displayName || undefined);
    } catch (err: any) {
      handleFirebaseError(err.code);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-[#161619] p-8 shadow-2xl"
          >
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 p-1.5 text-zinc-400 hover:text-white transition-colors rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 mb-6 text-indigo-400">
                <Sparkles size={18} className="animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase">OpenAI Platform</span>
              </div>

              <h2 className="text-2xl font-bold font-display text-white mb-2">
                {tab === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-xs text-zinc-400 mb-6">
                {tab === 'signin'
                  ? 'Access the developer dashboard and monitor sandbox limits.'
                  : 'Get instant access to OpenAI API and build the tomorrow.'}
              </p>

              <div className="flex border-b border-zinc-800 mb-6 gap-4">
                <button
                  onClick={() => { setTab('signin'); setError(''); }}
                  className={`pb-2 text-sm font-medium relative transition-colors ${
                    tab === 'signin' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Sign In
                  {tab === 'signin' && (
                    <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                  )}
                </button>
                <button
                  onClick={() => { setTab('signup'); setError(''); }}
                  className={`pb-2 text-sm font-medium relative transition-colors ${
                    tab === 'signup' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Create Account
                  {tab === 'signup' && (
                    <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                  )}
                </button>
              </div>

              {error && (
                <div className="mb-4 bg-rose-950/20 border border-rose-900/40 text-rose-300 text-xs py-2.5 px-3 rounded-lg">
                  {error}
                </div>
              )}

              {isSuccess ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-500/10 border border-indigo-500 flex items-center justify-center text-indigo-400 mb-4 animate-bounce">
                    <Check size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Success!</h3>
                  <p className="text-xs text-zinc-400">Authenticating your developer key workspace...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {tab === 'signup' && (
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">User Handle / Full Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Johnny Developer"
                          className="w-full bg-[#09090b] text-white rounded-lg pl-10 pr-4 py-2 text-sm border border-zinc-800 focus:outline-none focus:border-indigo-500 placeholder-zinc-600 transition-all font-sans"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500">
                        <Mail size={16} />
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="developers@openai.com"
                        className="w-full bg-[#09090b] text-white rounded-lg pl-10 pr-4 py-2 text-sm border border-zinc-800 focus:outline-none focus:border-indigo-500 placeholder-zinc-600 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Security Token / Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500">
                        <Lock size={16} />
                      </span>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-[#09090b] text-white rounded-lg pl-10 pr-4 py-2 text-sm border border-zinc-800 focus:outline-none focus:border-indigo-500 placeholder-zinc-600 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {tab === 'signin' && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setError('Password reset coming soon.')}
                        className="text-[10px] text-indigo-400 hover:underline"
                      >
                        Forgot Access Token?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white hover:bg-zinc-200 text-black py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    ) : (
                      <span>{tab === 'signin' ? 'Verify Credentials' : 'Provision Key'}</span>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative flex items-center gap-3 my-1">
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="text-[10px] text-zinc-600 font-mono">OR</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                  </div>

                  {/* Google Sign In */}
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer disabled:opacity-60"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}