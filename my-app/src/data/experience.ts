// export default [
//     {
//         company: "Quincy Public Schools",
//         role: "Information Technology Technician’s Assistant",
//         duration: "January 2024 - April 2024",
//         location: "Quincy, MA"
//     },
//     {
//         company: "Quincy Public Schools",
//         role: "Technical Support Specialist",
//         duration: "September 2024 - December 2024",
//         location: "Cambridge, MA"
//     }
// ];
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Quincy Public Schools",
    role: "Information Technology Technician’s Assistant",
    duration: "January 2024 - April 2024",
    location: "Quincy, MA",
    description: "WORK"
  },
  {
    company: "Whitehead Institute of Biomedical Research",
    role: "Technical Support Specialist",
    duration: "September 2024 - December 2024",
    location: "Cambridge, MA",
    description: "WORK"
  },
];
