export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string };
  company: string;
  logo: string;
  readTime: string;
}

export interface LibraryItem {
  id: string;
  category: 'Research' | 'API' | 'Guides' | 'All';
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  icon: string;
  tags: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
}
