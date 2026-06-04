import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LIBRARY_ITEMS } from '../data';
import { LibraryItem } from '../types';
import { BookOpen, Search, Filter, Bookmark, ArrowRight, Heart, X, Sparkles, MessageSquare, Code2, Cpu, Compass, Mic } from 'lucide-react';

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Research' | 'API' | 'Guides'>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<LibraryItem | null>(null);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories: ('All' | 'Research' | 'API' | 'Guides')[] = ['All', 'Research', 'API', 'Guides'];

  // Filter strategy
  const filteredItems = LIBRARY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen size={16} className="text-zinc-300" />;
      case 'Code2':
        return <Code2 size={16} className="text-indigo-400" />;
      case 'Compass':
        return <Compass size={16} className="text-indigo-500" />;
      case 'Cpu':
        return <Cpu size={16} className="text-zinc-400" />;
      case 'Sparkles':
        return <Sparkles size={16} className="text-indigo-400" />;
      case 'Mic':
        return <Mic size={16} className="text-zinc-400" />;
      default:
        return <BookOpen size={16} className="text-zinc-300" />;
    }
  };

  return (
    <section id="library" className="relative py-24 overflow-hidden bg-[#040C18]">
      {/* Absolute Ambient Background Lights for continuous gradient coloring */}
      <div className="absolute top-10 left-0 h-[500px] w-[500px] rounded-full bg-[#ff4820]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-indigo-950/30 blur-[135px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-950/20 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Left Aligned Huge Section Heading */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6.5xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
            >
              A lot is happening, <br />
              We are blogging about it.
            </span>
          </h2>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Main Tall Left Card (Article 1 from LIBRARY_ITEMS) */}
          {LIBRARY_ITEMS[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedArticle(LIBRARY_ITEMS[0])}
              className="lg:col-span-4 flex flex-col justify-between rounded-none bg-[#042c54]/40 hover:bg-[#042c54]/70 border border-zinc-700/50 hover:border-zinc-500/40 transition-all duration-300 cursor-pointer overflow-hidden group shadow-2xl h-full"
            >
              <div>
                <div className="relative h-64 sm:h-72 lg:h-[350px] w-full overflow-hidden bg-black/40">
                  <img
                    src="/images/Rectangle1.png"
                    alt={LIBRARY_ITEMS[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040C18]/80 to-transparent" />
                </div>

                <div className="p-6 md:p-8 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-sky-300 font-bold block mb-3 uppercase">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-8 group-hover:text-[#ff4820] transition-colors leading-snug">
                    GPT-3 and Open AI is the future. Let us explore how it is?
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 text-left">
                <span className="text-[11px] font-mono font-bold text-white group-hover:text-[#ff4820] transition-colors flex items-center gap-1.5">
                  Read Full Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          )}

          {/* Right 2x2 Grid of Smaller Cards (Articles 2, 3, 4, 5) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {LIBRARY_ITEMS.slice(1, 5).map((item, idx) => {
              // Unique aesthetic graphic generators for each smaller card
              const images = [
  '/images/Rectangle2.png',
  '/images/Rectangle3.png',
  '/images/Rectangle4.png',
  '/images/Rectangle5.png',
];
const image = images[idx] || '/images/Rectangle2.png';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedArticle(item)}
                  className="flex flex-col justify-between rounded-none bg-[#042c54]/40 hover:bg-[#042c54]/70 border border-zinc-700/50 hover:border-zinc-500/40 transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-black/40">
                      <img
                        src={image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040C18]/85 to-transparent" />
                    </div>

                    <div className="p-6 text-left">
                      <span className="text-[10px] font-mono tracking-widest text-sky-300 font-bold block mb-2 uppercase">
                        Sep 26, 2021
                      </span>

                      <h3 className="text-sm sm:text-base font-bold font-display text-white mb-6 group-hover:text-[#ff4820] transition-colors leading-snug line-clamp-2">
                        GPT-3 and Open AI is the future. Let us explore how it is?
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 pt-0 text-left">
                    <span className="text-[11px] font-mono font-bold text-white group-hover:text-[#ff4820] transition-colors flex items-center gap-1.5">
                      Read Full Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Reader Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-700 bg-[#082C52] p-8 md:p-10 shadow-2xl z-10 text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-700 via-orange-500 to-zinc-700" />

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-1.5 text-zinc-400 hover:text-white bg-[#040C18] rounded-lg transition-colors border border-zinc-700"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-widest bg-[#040C18] border border-zinc-700 text-[#ff4820] px-2.5 py-1 rounded uppercase font-semibold">
                  {selectedArticle.category}
                </span>
                <span className="text-[10px] font-mono text-sky-305">
                  {selectedArticle.date} • {selectedArticle.readingTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h3>

              {/* Simulated Article Body Markdown Markup */}
              <div className="text-left space-y-4 max-h-[350px] overflow-y-auto pr-2 text-sky-200 text-xs sm:text-sm leading-relaxed font-sans scrollbar-thin">
                <p className="font-semibold text-[#ff4820] flex items-center gap-1 font-mono text-xs">
                  <Sparkles size={14} /> SUMMARY OF KEY CONVERGENCE
                </p>
                <p>
                  As artificial intelligence matures from specialized static classification towards continuous generalized instruction following, developers face key structural overhead boundaries. This resource unpacks the structural paradigms introduced in the latest developer pipeline.
                </p>
                
                <h4 className="font-display font-bold text-white text-sm sm:text-base pt-3">
                  1. Real-time Latency Optimizations
                </h4>
                <p>
                  Deploying multi-agent networks demands specialized caching solutions. By avoiding repetitive compilation steps, the OpenAI caching layer decreases context billing averages while simultaneously shaving off up to 100ms of raw round-trip latency.
                </p>

                <h4 className="font-display font-bold text-white text-sm sm:text-base pt-3">
                  2. Type-Safe Client Execution
                </h4>
                <p>
                  Through native Structured Outputs configuration, response ASTs are forced mathematically to resolve into strict validation templates, eliminating the need for client-side try-catch fallback blocks when decoding server payload files.
                </p>
                
                <div className="bg-[#040C18] p-4.5 rounded-lg border border-zinc-700 font-mono text-[11px] text-sky-200 my-4 leading-normal">
                  <span className="text-sky-400/60 block mb-1"># Integration Setup Sandbox</span>
                  const config = await openai.models.configure(&#123;<br />
                  &nbsp;&nbsp;strictSchema: true,<br />
                  &nbsp;&nbsp;model: "{selectedArticle.title.toLowerCase().includes('o3-mini') ? 'o3-mini' : 'gpt-4o'}"<br />
                  &#125;);
                </div>

                <p className="text-xs text-sky-400/60 font-light italic border-t border-zinc-700 pt-3">
                  Note: This article represents simulated production documentation for developer preview evaluation within the Google AI Studio container sandbox.
                </p>
              </div>

              {/* Modal controls footer */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-zinc-700 text-xs text-sky-305">
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  <span>32 Comments</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                    className="text-[#ff4820] hover:text-[#ff5a38] font-mono font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Bookmark size={13} fill={bookmarkedIds.includes(selectedArticle.id) ? 'currentColor' : 'none'} />
                    <span>{bookmarkedIds.includes(selectedArticle.id) ? 'Bookmarked' : 'Keep Link'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-[#ff4820] hover:bg-[#ff5a38] border border-zinc-700 text-white px-5 py-2 rounded-none cursor-pointer text-xs font-semibold"
                  >
                    Close Reader
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
