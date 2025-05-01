import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Angelo Perez | Web Developer",
  description:
    "Portfolio of Justin Angelo Perez, a creative full stack web developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-6 ">
      <h1 className="text-6xl font-bold text-center mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto text-2xl space-y-4">
        <p>
          I`m a full stack developer with a passion for clean code, elegant
          design, and impactful solutions. With experience in Laravel, React,
          Next.js, and modern backend systems, I build scalable and secure apps.
        </p>
        <p>
          I`ve collaborated with startups, SMEs, and real estate platforms in
          the UAE and Australia. I enjoy solving complex problems, learning new
          tools, and helping businesses grow through technology.
        </p>
        <p>
          Outside coding, I enjoy architectural design, exploring Scripture, and
          mentoring junior devs.
        </p>
      </div>
    </main>
  );
}
