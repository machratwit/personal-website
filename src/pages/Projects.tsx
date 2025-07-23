import ProjectCard from "../components/ProjectCard";
import { Project } from "../data/project";
import FadeInSection from "../components/FadeInSection";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 max-w-6xl pt-24 mx-auto scroll-mt-24 "
    >
      <FadeInSection>
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h1>
      </FadeInSection>

      <FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Project.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
