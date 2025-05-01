import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

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
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}
