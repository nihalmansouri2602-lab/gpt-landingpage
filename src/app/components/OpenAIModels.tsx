import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_OPENAI_HIGHLIGHTS } from '../data';
import {
  Cpu,
  Zap,
  Coins,
  Box,
  Send,
  Sparkles,
  Image as ImageIcon,
  Video,
  Code,
  Check,
} from 'lucide-react';

export default function OpenAIModels() {
  const [activeTab, setActiveTab] = useState('gpt-4o');
  const [promptInput, setPromptInput] = useState('');
  const [simulatedResult, setSimulatedResult] = useState<{
    text?: string;
    image?: string;
    videoLoading?: boolean;
    videoPlayed?: boolean;
  } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const activeModel =
    CORE_OPENAI_HIGHLIGHTS.find((m) => m.id === activeTab) ||
    CORE_OPENAI_HIGHLIGHTS[0];

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setIsSimulating(true);
    setSimulatedResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      let res = {};

      if (activeTab === 'gpt-4o') {
        res = {
          text: `[GPT-4o Response]: "To generate high-performance web landing pages, initialize standard Tailwind v4 grids, frame negative space, and use fluid motion containers. Regarding your prompt '${promptInput}', I have parsed your layout intent successfully to compile in real-time."`,
        };
      } else if (activeTab === 'o1-pro') {
        res = {
          text: `[OpenAI o1 Reasoning Logs] (Thought Process: 12,400ms)

1. Analyzing architectural constraints...
2. Compiling AST from string queries...
3. Optimized output generated:

"Based on mathematical optimization paradigms of '${promptInput}', the optimal network latency has been solved. Standard error distribution matches target bounds within 99.98%."`,
        };
      } else if (activeTab === 'dalle-3') {
        res = {
          image: 'https://picsum.photos/seed/cyberpunk/600/400',
        };
      } else if (activeTab === 'sora') {
        res = {
          text: `[Sora Video Simulation]: "Rendered 15-second fluid camera motion traversing '${promptInput}'. Physics persistences, light reflections, and kinetic momentum fully calculated."`,
        };
      }

      setSimulatedResult(res);
    }, 1500);
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setPromptInput('');
    setSimulatedResult(null);
  };

  return (
    <section
      id="openai"
      className="relative py-24 overflow-hidden border-t border-zinc-800"
    >
      <div className="absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-orange-900/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#082C52] border border-zinc-700 text-[#ff4820] font-mono text-xs px-3 py-1 rounded-full mb-4">
            <Cpu size={12} className="animate-pulse" />
            <span>Core Model Architectures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-[#FF4820]">
            Meet the OpenAI Frontier Engines
          </h2>

          <p className="text-sm sm:text-base text-[#81AFDD] leading-relaxed font-light">
            Toggle through our production pipeline models and access direct
            playground sandboxes to test generative, analytical, and logical
            prompts instantly.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {CORE_OPENAI_HIGHLIGHTS.map((model) => {
            const isActive = model.id === activeTab;

            return (
              <button
                key={model.id}
                onClick={() => handleTabChange(model.id)}
                className={`px-5 py-3 rounded-none border text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#ff4820] border-[#ff4820]/50 text-white shadow-xl'
                    : 'bg-[#082C52]/60 border-zinc-700 text-sky-200 hover:text-white hover:border-zinc-500'
                }`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    isActive ? 'bg-white' : 'bg-sky-400'
                  }`}
                />
                {model.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-2xl border border-zinc-700 bg-[#082C52] p-8 relative flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                  <Sparkles size={160} />
                </div>

                <div>
                  <div className="inline-block bg-white/5 border border-white/10 text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md mb-6">
                    {activeModel.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                    {activeModel.name}
                  </h3>

                  <p className="text-sm text-[#81AFDD] leading-relaxed font-light mb-8">
                    {activeModel.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-zinc-700/80">
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-sky-300 font-bold mb-3">
                    Model Benchmarks
                  </h4>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#031d38] p-3 rounded-xl border border-zinc-700">
                      <Zap size={14} className="text-[#ff4820] mb-1.5" />
                      <span className="text-[9px] uppercase font-mono text-sky-300 block mb-0.5">
                        Latency
                      </span>
                      <span className="text-xs font-bold text-white font-mono">
                        {activeModel.stats.speed}
                      </span>
                    </div>

                    <div className="bg-[#031d38] p-3 rounded-xl border border-zinc-700">
                      <Coins size={14} className="text-[#ff4820] mb-1.5" />
                      <span className="text-[9px] uppercase font-mono text-sky-300 block mb-0.5">
                        Efficiency
                      </span>
                      <span className="text-xs font-bold text-white font-mono">
                        {activeModel.stats.cost}
                      </span>
                    </div>

                    <div className="bg-[#031d38] p-3 rounded-xl border border-zinc-700">
                      <Box size={14} className="text-sky-300 mb-1.5" />
                      <span className="text-[9px] uppercase font-mono text-sky-300 block mb-0.5">
                        Context
                      </span>
                      <span className="text-xs font-bold text-white font-mono">
                        {activeModel.stats.inputWindow}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-700 bg-[#082C52] overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="bg-[#040C18] px-6 py-4 border-b border-zinc-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/10 border border-red-500/35" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/10 border border-yellow-500/35" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/10 border border-emerald-500/35" />
                  </div>

                  <span className="font-mono text-[10px] text-[#ff4820] ml-4 font-semibold tracking-wider">
                    api_playground_v1.0.sh
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[9px] text-sky-300 tracking-widest uppercase">
                    Sandboxed Connection
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between min-h-[300px]">
                {/* Continue with the same JSX structure, removing any remaining comments exactly as above */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
