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
    github: "https://github.com/justinangeloperez327/react-stars-align",
    imgSrc: "/images/stars-align.png",
    imgAlt: "Stars Align",
  },
  {
    slug: "real-estate",
    id: "2",
    title: "Real Estate App",
    description:
      "A real estate application that allows users to search and filter properties.",
    technologies: [
      "Next Js",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    link: "https://justin-real-estate.vercel.app/",
    github: "https://github.com/justinangeloperez327/next-real-estate",
    imgSrc: "/images/real-estate-app.png",
    imgAlt: "Real Estate App",
  },
];

export const getProjectSlugs = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};
