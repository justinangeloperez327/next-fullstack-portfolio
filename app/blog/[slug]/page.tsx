import { notFound } from "next/navigation";
import { getPostBySlug } from "@/data/posts";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <main className="prose lg:prose-xl px-6 py-20 mx-auto">
      <article>
        <h1 className="text-3xl font-bold">Blog: {post.title}</h1>
      </article>
    </main>
  );
}
