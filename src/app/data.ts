import { CaseStudy, LibraryItem, FeatureItem } from './types';

export const WHAT_IS_GPT_FEATURES: FeatureItem[] = [
  {
    title: 'Chatbots',
    description: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  },
  {
    title: 'Knowledgebase',
    description: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
  {
    title: 'Education',
    description: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  }
];

export const CORE_OPENAI_HIGHLIGHTS = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    badge: 'Flagship Multimodal',
    description: 'Our most versatile multimodal model, seamlessly blending text, voice, and vision. Ideal for complex tasks requiring real-time, highly intelligent decision making.',
    stats: { speed: '2x Faster', cost: '50% Cheaper', inputWindow: '128k context' },
    gradient: 'from-[#FF8A71] to-[#FF4820]'
  },
  {
    id: 'o1-pro',
    name: 'OpenAI o1',
    badge: 'Reasoning Model',
    description: 'A specialized model designed for highly complex mathematical, scientific, and coding validation. Excels at logical deduction and detailed code execution.',
    stats: { speed: 'Deep Thinker', cost: 'Dynamic Compute', inputWindow: '200k context' },
    gradient: 'from-[#ae3ec9] to-[#7048e8]'
  },
  {
    id: 'dalle-3',
    name: 'DALL-E 3',
    badge: 'Creative Engine',
    description: 'State-of-the-art visual generation model that translates nuance and complex written prompts into sharp, gorgeous, production-grade imagery.',
    stats: { speed: 'Instant Gen', cost: 'Standard Pricing', inputWindow: 'Vibrant Details' },
    gradient: 'from-[#15aabf] to-[#12b886]'
  },
  {
    id: 'sora',
    name: 'Sora',
    badge: 'World Simulator',
    description: 'Our revolutionary video generation model. Beautifully crafts up to 60 seconds of high-fidelity video matching complex physically persistent scenes.',
    stats: { speed: 'GPU Parallel', cost: 'Enterprise API', inputWindow: '1080p Resolution' },
    gradient: 'from-[#f76707] to-[#e8590c]'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'duolingo',
    category: 'Education Technologies',
    title: 'Duolingo doubles student speaking practice with conversational GPT chatbots',
    description: 'By embedding real-time generative agents into their learning queues, Duolingo allowed students to practice speaking in foreign scenarios with open-ended diagnostic feedback.',
    metrics: { label: 'Fluency Practice Increase', value: '+120%' },
    company: 'Duolingo',
    logo: 'Duolingo AI Lab',
    readTime: '4 min read'
  },
  {
    id: 'stripe',
    category: 'Financial Infrastructure',
    title: 'Stripe streamlines developer support and counters fraud with GPT embeddings',
    description: 'Stripe integrated advanced OpenAI tooling to search extensive developer document networks and index customer profiles, reducing ticket resolution time dramatically.',
    metrics: { label: 'Frictionless Ticket Resolution', value: '38% Faster' },
    company: 'Stripe',
    logo: 'Stripe Core AI',
    readTime: '6 min read'
  },
  {
    id: 'morgan-stanley',
    category: 'Wealth Management',
    title: 'Morgan Stanley leverages AI-curated custom search to support advisory roles',
    description: 'Using specialized semantic models, financial advisors query a private database of 100,000+ top-tier research documents, rendering deep market insights instantly.',
    metrics: { label: 'Advisor Prep Efficiency', value: '4.8/5.0 Rating' },
    company: 'Morgan Stanley',
    logo: 'Morgan Stanley Inc.',
    readTime: '8 min read'
  }
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'lib-1',
    category: 'Research',
    title: 'Model Spec: Designing AI behaviors aligned with human preferences',
    excerpt: 'Detailed review of OpenAI’s guidelines for instructing large models, managing user style choices, and maintaining high ethical boundaries.',
    date: 'May 18, 2026',
    readingTime: '12 min read',
    icon: 'BookOpen',
    tags: ['Safety', 'Alignment', 'Fine Tuning']
  },
  {
    id: 'lib-2',
    category: 'API',
    title: 'Introducing Structured Outputs in the OpenAI Assistant API',
    excerpt: 'Ensure JSON schemas match model responses exactly. Learn how the runtime guarantees 100% adherence to complex nested JSON schemas.',
    date: 'Apr 25, 2026',
    readingTime: '5 min read',
    icon: 'Code2',
    tags: ['JSON Schema', 'Assistant API', 'Type Safety']
  },
  {
    id: 'lib-3',
    category: 'Guides',
    title: 'Production Cookbook: Optimizing context windows and prompt caching',
    excerpt: 'Actionable tactics to reduce latency and infrastructure costs by up to 80% with prompt caching, contextual truncation, and model routing.',
    date: 'Mar 12, 2026',
    readingTime: '9 min read',
    icon: 'Compass',
    tags: ['Latency', 'Caching', 'Cost Reduction']
  },
  {
    id: 'lib-4',
    category: 'Research',
    title: 'o3-mini: Deep reasoning on logical verification at lightning speeds',
    excerpt: 'An inside look at our fast-reasoning o-series models, featuring custom-optimized search trees and reinforcement learning pipelines.',
    date: 'Feb 15, 2026',
    readingTime: '15 min read',
    icon: 'Cpu',
    tags: ['Reasoning', 'Reinforcement Learning', 'o3-mini']
  },
  {
    id: 'lib-5',
    category: 'Guides',
    title: 'DALL-E 3 Prompt Craft: Leveraging aspect ratios and direct text rendering',
    excerpt: 'Learn the advanced lexical structures that allow DALL-E 3 to accurately paint readable typography and exact layout boundaries within graphics.',
    date: 'Jan 20, 2026',
    readingTime: '7 min read',
    icon: 'Sparkles',
    tags: ['DALL-E 3', 'Creative Prompts', 'Typography']
  },
  {
    id: 'lib-6',
    category: 'API',
    title: 'Getting started with Realtime API: audio streaming and vision sync',
    excerpt: 'A comprehensive starter guide to integrating low-latency bidirectional audio streams using WebSockets into your server environments.',
    date: 'Jan 11, 2026',
    readingTime: '10 min read',
    icon: 'Mic',
    tags: ['Realtime API', 'WebSockets', 'Audio Stream']
  }
];
