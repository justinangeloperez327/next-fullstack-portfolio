import { notFound } from "next/navigation";
import Image from "next/image";

import { getProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectSlugs((await params).slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-2xl">{project.description}</p>

        <Image
          src={project.imgSrc || "/fallback-image.jpg"}
          alt={project.imgAlt || "Project image"}
          className="w-full rounded-lg mb-6 shadow"
          width={800}
          height={600}
        />

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-lg border px-3 py-1 rounded-full">
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
              className="text-xl px-4 py-2 rounded bg-slate-600 hover:bg-slate-400"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-slate- px-4 py-2 rounded bg-slate-600 hover:bg-slate-400"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
