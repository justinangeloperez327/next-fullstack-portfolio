import Link from "next/link";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
      <p className="text-center text-[var(--color-glitch-purple)] mb-12 max-w-xl mx-auto">
        A selection of full stack applications I’ve built across industries
        including job tech, real estate, and GIS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="border border-[var(--color-glitch-purple)] p-6 rounded-lg hover:border-[var(--color-clover)] hover:shadow-xl transition">
              <h2 className="text-xl font-semibold mb-2 text-[var(--color-clover)]">
                {project.title}
              </h2>
              <p className="text-[var(--color-glitch-purple)] text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-[var(--color-base-bg)] border border-[var(--color-glitch-purple)] text-[var(--color-base-text)] px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
