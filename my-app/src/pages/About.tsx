// const About = () => {
//   return (
//     <>
//       <br></br>
//       <div id="about" className="px-6 py-12 max-w-4xl mx-auto text-white">
//         <h2 className="text-3xl font-bold mb-4">About Me</h2>
//         <p className="text-lg mb-8">
//           Hi, I’m Rodney{/* {name}, a {role}. {intro} */}
//         </p>
//       </div>
//     </>
//   );
// };
// export default About;
import { experience, type ExperienceItem } from "../data/experience";
import { education, type EducationItem } from "../data/education";
import { skills } from "../data/skills";

export default function About() {
  const name = "Rodney";
  const role = "Frontend Developer";
  const intro = "I enjoy building beautiful, accessible web experiences.";

  return (
    <section id="about" className="px-6 py-12 max-w-4xl mx-auto text-white">
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
              <p className="text-sm text-gray-600">{item.date}</p>
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
