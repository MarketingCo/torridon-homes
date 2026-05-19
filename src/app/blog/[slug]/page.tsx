import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import ShareButton from "@/components/ShareButton";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Torridon Homes`,
      description: post.excerpt,
      url: `https://torridon-homes.co.uk/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul
          key={`list-${elements.length}`}
          className="space-y-3 mb-8 text-torridon-forest/70 font-torridon-sans leading-relaxed"
        >
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={idx}
          className="text-2xl md:text-3xl font-torridon-serif text-torridon-forest mt-16 mb-6 italic leading-tight"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={idx}
          className="text-xl md:text-2xl font-torridon-serif text-torridon-forest mt-12 mb-4 italic leading-tight"
        >
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      flushList();
      elements.push(
        <p
          key={idx}
          className="text-lg font-torridon-sans text-torridon-forest font-semibold mb-4"
        >
          {trimmed.replace(/\*\*/g, "")}
        </p>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      flushList();
      const text = trimmed.replace(/^\d+\.\s/, "");
      const parts = text.split("**");
      elements.push(
        <p key={idx} className="text-torridon-forest/70 font-torridon-sans leading-relaxed mb-4">
          <span className="font-semibold text-torridon-forest">
            {trimmed.match(/^\d+/)?.[0]}.
          </span>{" "}
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-torridon-forest">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    } else if (trimmed.startsWith("- ")) {
      inList = true;
      const text = trimmed.replace("- ", "");
      const parts = text.split("**");
      listItems.push(
        <li key={idx} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 bg-torridon-gold rounded-full mt-2 flex-shrink-0" />
          <span>
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="text-torridon-forest">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </span>
        </li>
      );
    } else {
      flushList();
      const parts = trimmed.split("**");
      elements.push(
        <p
          key={idx}
          className="text-torridon-forest/70 font-torridon-sans leading-relaxed mb-6"
        >
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-torridon-forest">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = allPosts
    .filter((_, i) => i !== currentIndex)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-torridon-forest/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20 w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-torridon-gold text-sm font-medium tracking-wide mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Journal
            </Link>
            <div className="flex items-center gap-6 mb-4 text-sm font-medium tracking-wide text-torridon-gold">
              <span className="bg-white/10 px-3 py-1">{post.category}</span>
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-torridon-serif text-white italic leading-tight max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Author */}
          <div className="flex items-center gap-4 mb-12 pb-12 border-b border-torridon-gold/10">
            <div className="w-12 h-12 bg-torridon-forest text-torridon-gold flex items-center justify-center text-base font-torridon-serif italic">
              IM
            </div>
            <div>
              <div className="text-base font-torridon-serif text-torridon-forest italic">
                {post.author}
              </div>
              <div className="text-sm font-medium tracking-wide text-torridon-gold">
                {post.authorRole}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-torridon-forest/80 font-torridon-serif italic leading-relaxed mb-12">
              {post.excerpt}
            </p>
            {formatContent(post.content)}
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-torridon-gold/10 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 border border-torridon-gold/20 text-torridon-gold text-sm font-medium tracking-wide"
                >
                  {kw}
                </span>
              ))}
            </div>
            <ShareButton
              title={post.title}
              text={post.excerpt}
              url={`/blog/${post.slug}`}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-torridon-cream border-t border-torridon-gold/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-torridon-serif text-torridon-forest mb-12 italic">
              Related Articles.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-3 gap-6 items-center"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-4 mb-3 text-sm font-medium tracking-wide text-torridon-gold">
                      <span>{rp.category}</span>
                      <span>{rp.readTime}</span>
                    </div>
                    <h3 className="text-lg font-torridon-serif text-torridon-forest italic group-hover:text-torridon-gold transition-colors duration-500 leading-tight">
                      {rp.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-torridon-serif text-torridon-forest mb-6 italic">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-torridon-forest/60 font-torridon-sans mb-10 max-w-lg mx-auto">
            Whether you are buying, investing, or exploring land development, our
            team is here to help.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-12 py-6 bg-torridon-forest text-white font-torridon-sans text-sm font-medium tracking-wide hover:bg-torridon-gold transition-all duration-500 shadow-2xl"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
