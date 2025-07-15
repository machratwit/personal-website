import { experience, type ExperienceItem } from "../data/experience";
import { education, type EducationItem } from "../data/education";
import { skills } from "../data/skills";

export default function About() {
  const name = "Rodney Mach";
  const role = "college Student";
  const intro = `I love building clean, user-friendly websites that look good and work well.
  I'm especially interested in cybersecurity and solving problems with simple solutions.
  When I'm not coding, you’ll probably find me building custom PCs or learning about new tech.
  I enjoy taking on challenges and turning ideas into real, usable things people enjoy.`;

  return (
    <section
      id="about"
      className="px-6 py-12 max-w-4xl pt-24 scroll-mt-24 mx-auto text-white"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-8">
        Hi, I’m {name}, a {role}. {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {experience.map((item: ExperienceItem, index: number) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium">
                {item.role} at {item.company}
              </h4>
              <p className="text-sm text-gray-600">{item.duration}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education + Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          {education.map((item: EducationItem, index: number) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium">{item.degree}</h4>
              <p className="text-sm text-gray-600">
                {item.school}, {item.duration}
              </p>
            </div>
          ))}

          <h3 className="text-2xl font-semibold mb-2 mt-6">Skills</h3>
          <ul className="list-disc list-inside text-sm">
            {skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
