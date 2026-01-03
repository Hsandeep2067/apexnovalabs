export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type ValuePillar = {
  title: string;
  headline: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  deliverables: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  summary: string;
  industry: string;
  platform: string;
  services: string[];
  challenge: string[];
  solution: string[];
  results: { label: string; value: string; description: string }[];
  quote: {
    statement: string;
    author: string;
    role: string;
  };
  stack: string[];
};

export type ApproachPhase = {
  slug: string;
  name: string;
  description: string;
  activities: string[];
  artifacts: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Logo = {
  name: string;
  svg: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
};
