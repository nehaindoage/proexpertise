export type PageId = 'home' | 'services' | 'work' | 'about' | 'contact';

export type ServiceCategory =
  | 'cinematography'
  | 'photography'
  | 'digital-marketing'
  | 'social-media'
  | 'graphic-design';

export interface ServiceItem {
  id: ServiceCategory;
  num: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  equipment: string[];
  process: string[];
  image: string;
  badge: string;
  startingRange: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  categoryLabel: string;
  year: string;
  duration?: string;
  location: string;
  headline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  gearUsed: string[];
  image: string;
  secondaryImage?: string;
  videoPoster?: string;
  directorQuote?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  credentials: string;
  avatar: string;
}

export interface ClientTestimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  projectType: string;
  year: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  client: string;
  service: ServiceCategory;
  serviceLabel: string;
  aspectRatio: 'aspect-[16/9]' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-square' | 'aspect-[16/10]';
  camera: string;
  lens: string;
  location: string;
  year: string;
  tag: string;
}
