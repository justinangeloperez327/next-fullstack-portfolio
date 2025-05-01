export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
  tags: string[];
};

export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    content:
      "Next.js is a powerful React framework for building web applications...",
    date: "2023-01-15",
    tags: ["Next.js", "React", "JavaScript"],
    featured: true,
    readTime: "5 min read",
    excerpt:
      "Next.js is a powerful React framework for building web applications...",
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    content:
      "TypeScript is a superset of JavaScript that adds static typing...",
    date: "2023-02-10",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: false,
    readTime: "7 min read",
    excerpt:
      "TypeScript is a superset of JavaScript that adds static typing...",
  },
  {
    id: 3,
    title: "Building a Full-Stack Portfolio",
    slug: "building-a-full-stack-portfolio",
    content: "A full-stack portfolio showcases your skills as a developer...",
    date: "2023-03-05",
    tags: ["Portfolio", "Full-Stack", "Web Development"],
    featured: false,
    readTime: "6 min read",
    excerpt: "A full-stack portfolio showcases your skills as a developer...",
  },
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
