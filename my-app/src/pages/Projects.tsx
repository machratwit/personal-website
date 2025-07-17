import ProjectCard from "../components/ProjectCard";
import { Project } from "../data/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 max-w-6xl pt-24 mx-auto scroll-mt-24 "
    >
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Project.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
