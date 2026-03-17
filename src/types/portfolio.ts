export interface Profile {
  id: string;
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: 'Hi, I am Irfanul Huda. I am currently a Final Year Undergrad Student in CSE at SUST. I like researching about AI/ML topics, learning about the depths of deployment and integrations. Welcome to my Portofolio.';
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  period: string;
  order_index: number;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  technologies: string;
  description: string;
  period: string;
  order_index: number;
  created_at: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string;
  order_index: number;
  created_at: string;
}

export interface Achievement {
  id: string;
  category: string;
  description: string;
  order_index: number;
  created_at: string;
}

export interface Certification {
  id: string;
  title: string;
  year: string;
  order_index: number;
  created_at: string;
}

export interface Activity {
  id: string;
  role: string;
  organization: string;
  period: string;
  order_index: number;
  created_at: string;
}
