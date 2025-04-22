export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  link: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  educationList: Education[];
  experienceList: Experience[];
  skills: string;
  projectsList: Project[];
}

export interface SettingsData {
  paperSize: 'letter' | 'a4' | 'legal';
  fontStyle: 'modern' | 'classic' | 'contemporary' | 'elegant';
}

export const defaultPersonalInfo: PersonalInfo = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "(555) 123-4567",
  location: "New York, NY",
  summary: "Experienced software developer with a passion for building user-friendly applications. Skilled in JavaScript, TypeScript, React, and Node.js with 5+ years of industry experience."
};

export const defaultEducation: Education = {
  id: crypto.randomUUID(),
  school: "New York University",
  degree: "Bachelor of Science",
  fieldOfStudy: "Computer Science",
  startDate: "2015-09",
  endDate: "2019-05",
  gpa: "3.8"
};

export const defaultExperience: Experience = {
  id: crypto.randomUUID(),
  jobTitle: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  startDate: "2019-06",
  endDate: "2023-04",
  description: "• Led frontend development for a SaaS platform with 100k+ users\n• Improved application performance by 40% through code optimization\n• Mentored junior developers and implemented best practices\n• Created and maintained component library using React and TypeScript"
};

export const defaultExperienceSecond: Experience = {
  id: crypto.randomUUID(),
  jobTitle: "Frontend Developer",
  company: "WebDev Solutions",
  location: "New York, NY",
  startDate: "2017-08",
  endDate: "2019-05",
  description: "• Developed responsive web applications using React, Redux, and SCSS\n• Collaborated with UX designers to implement user-friendly interfaces\n• Optimized web performance and improved SEO rankings\n• Participated in code reviews and maintained coding standards"
};

export const defaultProject: Project = {
  id: crypto.randomUUID(),
  title: "E-commerce Platform",
  link: "https://github.com/johndoe/ecommerce-platform",
  description: "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features like product search, filtering, cart management, checkout process, and user authentication."
};

export const defaultSkills = "JavaScript, TypeScript, React, Redux, Node.js, Express, HTML5, CSS3, SCSS, Tailwind CSS, Git, Jest, React Testing Library, RESTful APIs, GraphQL, Agile/Scrum, Webpack, Performance Optimization";

export const defaultResumeData: ResumeData = {
  personalInfo: defaultPersonalInfo,
  educationList: [defaultEducation],
  experienceList: [defaultExperience, defaultExperienceSecond],
  skills: defaultSkills,
  projectsList: [defaultProject]
};

export const defaultSettings: SettingsData = {
  paperSize: 'letter',
  fontStyle: 'modern'
};
