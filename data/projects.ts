const githubUrl = process.env.GITHUB_PROFILE;
export interface Project {
  slug: string;
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  imgSrc?: string;
  imgAlt?: string;
}

export const projects: Project[] = [
  {
    slug: "stars-align",
    id: "1",
    title: "Job Board App",
    description:
      "A job board application that allows users to post and apply for jobs.",
    technologies: [
      "React Js",
      "Express Js",
      "MONGODB",
      "Tailwind CSS",
      "Node.js",
    ],
    link: "https://stars-align.vercel.app/",
    github: `${githubUrl}/job-board-app-frontend`,
    imgSrc: "/images/job-board-app.png",
    imgAlt: "Job Board App",
  },
  {
    slug: "real-estate",
    id: "2",
    title: "Real Estate App",
    description:
      "A real estate application that allows users to search and filter properties.",
    technologies: ["Next Js", "Supabase", "Tailwind CSS", "Node.js"],
    link: "https://justin-real-estate.vercel.app/",
    github: `${githubUrl}/real-estate-app-frontend`,
    imgSrc: "/images/real-estate-app.png",
    imgAlt: "Real Estate App",
  },
];
