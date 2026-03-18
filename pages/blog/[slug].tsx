import { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, User } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug, getPostSlugs, type WPPost } from '@/lib/wordpress'

interface Props {
  post: WPPost | null
  locale: string
}

export default function BlogPostPage({ post, locale }: Props) {
  const isEn = locale === 'en'
  const blogHref = isEn ? '/en/blog' : '/blog'
  const homeHref = isEn ? '/en' : '/'
  const contactHref = isEn ? '/en/contact' : '/contacto'
  const homeLabel = isEn ? 'Home' : 'Inicio'
  const notFoundLabel = isEn ? 'Article not found' : 'Artículo no encontrado'
  const backLabel = isEn ? '← More articles' : '← Más artículos'
  const contactLabel = isEn ? 'Contact us' : 'Contactar con nosotros'

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-heading font-extrabold mb-4">{notFoundLabel}</h1>
          <Link href={blogHref} className="text-primary font-semibold hover:underline">
            {backLabel}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const canonical = isEn
    ? `https://thevoiceclone.com/en/blog/${post.slug}`
    : `https://thevoiceclone.com/blog/${post.slug}`

  return (
    <div className="min-h-screen bg-background">
      <NextSeo
        title={`${post.title} | The Voice Clone`}
        description={post.excerpt}
        canonical={canonical}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          ...(post.image && { images: [{ url: post.image, alt: post.imageAlt }] }),
        }}
      />
      <Navbar />

      <article className="pt-28 pb-24">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto">

          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 flex-wrap"
          >
            <Link href={homeHref} className="hover:text-foreground transition-colors">{homeLabel}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={blogHref} className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium truncate max-w-[280px] md:max-w-md">{post.title}</span>
          </motion.nav>

          {/* Category */}
          {post.category && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4"
            >
              {post.category}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6 text-foreground"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          {post.author && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10"
            >
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
            </motion.div>
          )}

          {/* Featured image */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="rounded-2xl overflow-hidden mb-12"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full aspect-[16/9] object-cover"
              />
            </motion.div>
          )}

          {/* Content — WP HTML rendered directly (images stripped; featured image shown above) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none bg-transparent prose-headings:font-heading prose-headings:font-extrabold prose-headings:uppercase prose-a:text-primary [&_figure]:hidden [&_img]:hidden [&_mark]:bg-transparent [&_mark]:text-current"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '')
                .replace(/<img[^>]*\/?>/gi, ''),
            }}
          />

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <Link
              href={blogHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {backLabel}
            </Link>
            <Link
              href={contactHref}
              className="gradient-bg text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
            >
              {contactLabel}
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs()
  // Generate paths for both ES and EN locales
  const paths = slugs.flatMap((slug) => [
    { params: { slug }, locale: 'es' },
    { params: { slug }, locale: 'en' },
  ])
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string
  const post = await getPostBySlug(slug, locale as 'es' | 'en')
  return {
    props: { post: post ?? null, locale: locale ?? 'es' },
    revalidate: 60,
  }
}
