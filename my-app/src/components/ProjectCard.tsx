import type { ProjectItem } from "../data/project";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 border border-blue-200 rounded-4xl p-6 shadow-md hover:shadow-lg transition-shadow text-white space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-sm text-zinc-300">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full border border-zinc-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition"
      >
        View Project →
      </a>
    </div>
  );
}
