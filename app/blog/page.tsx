import React from "react";
import Link from "next/link";
import { posts } from "@/data/posts";

const BlogPage = () => {
  // Find the featured post
  const featuredPost = posts.find((post) => post.featured);
  // Get the regular (non-featured) posts
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen py-20 px-6 container mx-auto">
      <h1 className="text-6xl font-bold mb-8 ">Blog</h1>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl uppercase tracking-wider mb-4 ">
            Featured Post
          </h2>
          <div className="bg-gray-900 border border-gray-500 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-60 md:h-auto">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold">Featured</span>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center text-lg mb-2 ">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-3">
                  {featuredPost.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-xl">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-block py-2 rounded-lg text-lg"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <h2 className="text-2xl uppercase tracking-wider mb-6 ">Latest Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 border border-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="h-40 "></div>
            <div className="p-5">
              <div className="flex items-center text-lg mb-2 ">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-3xl font-semibold mb-3">{post.title}</h3>
              <p className="text-xl mb-4 line-clamp-2">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-lg">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
