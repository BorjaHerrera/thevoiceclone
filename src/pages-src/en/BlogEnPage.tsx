import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import type { WPPost } from "@/lib/wordpress";

interface Props {
  posts: WPPost[];
}

const BlogEnPage = ({ posts }: Props) => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16">
      <div className="container px-4 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6"
        >
          Our <GradientText>Blog</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          Articles on multimedia localisation, artificial intelligence and
          global content production.
        </motion.p>
      </div>
    </section>

    {/* Grid */}
    <section className="pb-24">
      <div className="container px-4 lg:px-8 max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-muted-foreground"
          >
            Coming soon: new articles.
          </motion.p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/en/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
                >
                  {post.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    {post.category && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-lg font-heading font-bold leading-snug text-card-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>

    <Footer />
  </div>
);

export default BlogEnPage;
