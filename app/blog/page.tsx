"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "From Nobody to Somebody: My University Journey",
    excerpt: "How I went from being invisible in school to becoming one of the most recognized faces on campus—and what I learned from losing the election.",
    date: "October 10, 2025",
    readTime: "8 min read",
    tags: ["Personal Growth", "Leadership", "University Life"],
    slug: "from-nobody-to-somebody",
  },
  {
    id: 2,
    title: "Post-Graduation Blues: Finding Direction in the Unknown",
    excerpt: "Navigating the uncertainty after graduation, exploring new paths, and why I'm considering starting a YouTube channel.",
    date: "October 23, 2025",
    readTime: "6 min read",
    tags: ["Life", "Career", "Self-Discovery"],
    slug: "post-graduation-blues",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-primary" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Hero Section with Grid Background */}
      <section className="relative pt-32 pb-8 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl text-primary mb-4 tracking-tight" style={{ fontFamily: "var(--font-bungee), Impact, sans-serif", fontWeight: 400 }}>
              PERSONAL BLOG
            </h1>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Thoughts & Learnings
            </p>
          </motion.div>
        </div>

        {/* Grid background - brighter */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#CFFFE2 1px, transparent 1px), linear-gradient(90deg, #CFFFE2 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20">

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="border border-primary/10 rounded-xl p-8 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl mb-3 group-hover:text-secondary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {post.title}
                  </h2>

                  <p className="text-accent/70 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-accent/50">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="font-sans">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="font-sans">{post.readTime}</span>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-primary font-sans whitespace-nowrap"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 p-8 border border-primary/10 rounded-xl"
        >
          <p className="text-xl text-accent/70 mb-2 font-sans">
            More posts coming soon! 📝
          </p>
          <p className="text-accent/50 font-sans">
            I'm constantly learning and sharing my journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
