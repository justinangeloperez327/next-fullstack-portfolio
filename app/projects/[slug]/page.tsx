import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string };
}

const projects = {
  "job-board-platform": {
    title: "Job Board Platform",
    description:
      "A scalable job platform with filters, authentication, and an admin dashboard built using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    image: "/projects/job-board.jpg",
    link: "https://jobboard-demo.vercel.app",
    repo: "https://github.com/yourname/job-board",
  },
  "real-estate-crm": {
    title: "Real Estate CRM",
    description:
      "A Laravel + React-based CRM tailored for real estate companies to manage listings, leads, and client interactions.",
    tech: ["Laravel", "React", "PostgreSQL", "Inertia.js"],
    image: "/projects/real-estate.jpg",
    link: "",
    repo: "",
  },
  // Add more projects here
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) return notFound();

  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg mb-6 shadow"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 border px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
