import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Insights, market analysis, and expert guidance on property development, investment, and bespoke home building across Scotland's Central Belt.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Journal | Torridon Homes",
    description:
      "Expert insights on Scottish property development, investment, and bespoke home building.",
    url: "https://torridon-homes.co.uk/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-torridon-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-torridon-gold rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 italic leading-tight">
            The Torridon Journal.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-sans max-w-2xl leading-relaxed">
            Market analysis, development guidance, and practical advice for buyers,
            investors, and landowners across Scotland&apos;s Central Belt.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-torridon-green">
                  {posts[0].category}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-widest text-torridon-gold font-bold">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} />
                    {new Date(posts[0].date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={12} />
                    {posts[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-torridon-green mb-6 italic group-hover:text-torridon-gold transition-colors duration-500 leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-torridon-green/60 font-sans leading-relaxed mb-8">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-torridon-green text-torridon-gold flex items-center justify-center text-sm font-serif italic">
                    IM
                  </div>
                  <div>
                    <div className="text-sm font-serif text-torridon-green italic">
                      {posts[0].author}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-torridon-gold font-bold">
                      {posts[0].authorRole}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4 text-torridon-gold uppercase tracking-[0.2em] text-[10px] font-bold group-hover:gap-6 transition-all duration-500">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="py-16 md:py-24 bg-torridon-cream border-y border-torridon-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-torridon-green">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-[10px] uppercase tracking-widest text-torridon-gold font-bold">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-torridon-green mb-3 italic group-hover:text-torridon-gold transition-colors duration-500 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-torridon-green/60 font-sans leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-torridon-green mb-6 italic">
            Have a Question?
          </h2>
          <p className="text-torridon-green/60 font-sans mb-10 max-w-lg mx-auto">
            Our team is available to discuss development opportunities, investment
            access, or land appraisals across the Central Belt.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-12 py-6 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold transition-all duration-500 shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
