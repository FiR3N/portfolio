export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrls: IGithubUrl[];
  demoUrl?: string;
  image: string;
}

export interface ISkill {
  name: string;
  color: string;
  icon: React.ReactNode;
}

export interface IGithubUrl {
  id: number;
  name: string;
  url: string;
}

export type Theme = "light" | "dark";
