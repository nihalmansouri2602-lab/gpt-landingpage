import { motion } from 'motion/react';

export default function CaseStudies() {
  const features = [
    {
      title: 'Improving end distrusts instantly',
      description: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      description: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      description: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      description: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 overflow-hidden bg-[#040C18]">
      <div className="absolute top-1/3 -left-48 h-[600px] w-[500px] rounded-full bg-[#ff4820]/5 blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-0 h-[450px] w-[450px] rounded-full bg-indigo-950/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-fuchsia-950/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-extrabold font-display leading-[1.2] text-transparent bg-clip-text tracking-tight"
                style={{ backgroundImage: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)' }}
              >
                The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.
              </motion.h2>
              
              <motion.button
                onClick={() => {
                  const el = document.getElementById('home');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm font-semibold text-[#FF8A71] hover:text-white tracking-wider transition-colors mt-8 inline-block cursor-pointer"
              >
                Request Early Access to Get Started
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10 sm:space-y-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start text-left border-b border-zinc-800/20 pb-8 sm:pb-10 last:border-none"
              >
                <div className="sm:col-span-5">
                  <div className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-[#ff4820] mb-3" />
                  <h3 className="text-sm sm:text-base font-extrabold font-display text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="sm:col-span-7">
                  <p className="text-xs sm:text-sm text-[#81AFDD] leading-relaxed font-light font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
