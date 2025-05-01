import Link from "next/link";

export default function HomePage() {
  const techStacks = [
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Git",
    "GitHub",
  ];

  return (
    <section className="flex flex-col justify-center items-center text-center py-32 px-6">
      <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight">
        Hi, I’m <span className="t">Justin</span>
        <br />
        Full Stack Web Developer
      </h1>
      <p className="text-xl md:text-4xl max-w-2xl mb-8 text-[var(--color-glitch-purple)]">
        I build scalable, elegant, and modern web applications using Next.js,
        Laravel, Node.js, and more.
      </p>
      <Link
        href="/projects"
        className="bg-slate-600 hover:bg-slate-400 px-6 py-3 rounded-full text-2xl"
      >
        View My Projects
      </Link>

      <div className="py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-10">
          My Stack in 2025
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStacks.map((tech) => (
            <span
              key={tech}
              className="border bg-neutral-600 hover:border-slate-400 px-5 py-2 rounded-full shadow-sm text-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="py-28 text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-6">
          Let’s build something impactful together.
        </h3>
        <p className="mb-8 text-2xl max-w-xl mx-auto">
          I’m available for freelance work, contract roles, or collaboration on
          open-source and real-world tech solutions.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-slate-600 hover:bg-slate-400  px-8 py-3 rounded-full text-2xl"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
