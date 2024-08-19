import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As I bring creative concepts to life with clean, efficient code, my focus remains on delivering web experiences that are not only beautiful but also intuitive and highly responsive.`;

export const ABOUT_TEXT = `I’m 24 and I’ve been in the IT game for about 3 years now, mostly on my own. I started out as a Python developer while juggling another job with the Belgian Defense. I’m still with the Defense, but these days I’m diving into Full Stack JavaScript development, and I’m always working on my Back-end skills. My goal? To create modern, intuitive web apps that users love.

I turn coffee into code and pixels into perfection. When I’m not busy taming wild CSS or hunting down JavaScript bugs, you’ll probably find me at the gym or attempting to cook something (emphasis on attempting). I’m all about making the web a more beautiful and functional place—one line of code at a time. Let’s build something awesome together (and maybe share a few memes along the way)!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "JS Full Stack Developer",
    company: "La Défense",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "Tailwind"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Student",
    description: `Designed and developed user interfaces for web applications using Next.js and React. `,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Git",
      "GitHub",
      "JQuery",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
