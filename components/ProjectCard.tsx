import { Project } from "@/data/projects";
import Link from "next/link";
import React from "react";

const ProjectCard = (project: Project) => {
  return (
    <Link key={project.slug} href={`/projects/${project.slug}`}>
      <div className="border p-6 rounded-lg hover:shadow-xl transition">
        <h2 className="text-4xl font-semibold mb-2 ">{project.title}</h2>
        <p className=" text-2xl mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.technologies.map((t) => (
            <span key={t} className="border px-2 py-1 rounded-full text-lg">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
