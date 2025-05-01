import { Project } from "@/data/projects";
import Link from "next/link";
import React from "react";

const ProjectCard = (project: Project) => {
  return (
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
  );
};

export default ProjectCard;
