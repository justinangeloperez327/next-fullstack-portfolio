import { notFound } from "next/navigation";

interface BlogProps {
  params: { slug: string[] };
}

export default async function BlogPost({ params }: BlogProps) {
  const slug = params.slug?.join("/") || "";

  // Simulate MDX content loading or use MDX remote
  const posts: Record<string, string> = {
    "first-post": "# Hello World\nThis is my first blog post written in MDX.",
  };

  const content = posts[slug];

  if (!content) return notFound();

  return (
    <main className="prose lg:prose-xl px-6 py-20 mx-auto">
      <article>
        <h1 className="text-3xl font-bold">
          Blog: {slug.replaceAll("-", " ")}
        </h1>
        <p className="mt-4">MDX rendering coming soon...</p>
      </article>
    </main>
  );
}
