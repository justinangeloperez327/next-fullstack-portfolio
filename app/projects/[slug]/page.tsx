import { notFound } from "next/navigation";
import Image from "next/image";

import { getProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectSlugs(params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <Image
          src={project.imgSrc || "/fallback-image.jpg"}
          alt={project.imgAlt || "Project image"}
          className="w-full rounded-lg mb-6 shadow"
          width={800}
          height={600}
        />

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
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
          {project.github && (
            <a
              href={project.github}
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
