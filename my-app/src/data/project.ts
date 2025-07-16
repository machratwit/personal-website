export interface ProjectItem {
  title: string;
  stack: string[];
  link: string;
  description: string;
}

export const Project: ProjectItem[] = [
  {
    title: "Ezpub",
    stack: ["React", "Tailwind CSS", "TypeScript", "Vite", "Python", "JWT"],
    link: "https://github.com/angelomelo01/EZPub",
    description: "An EPUB file reader that converts your ebooks into audiobooks."
  },
  {
    title: "Skribble",
    stack: ["React", "Tailwind CSS", "TypeScript", "Vite", "JavaScript", "Docker"],
    link: "https://github.com/Alex-wit-2025/seniorproject",
    description: "A note taking application with collaborative editing and LaTeX solutions."
  },
  {
    title: "Personal Website",
    stack: ["React", "Tailwind CSS", "TypeScript", "AWS"],
    link: "https://github.com/machratwit/personal-website",
    description: "A personal website"
  }
];
