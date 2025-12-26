export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    appstore?: string;
    playstore?: string;
  };
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}
