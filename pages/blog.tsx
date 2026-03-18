import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import { getPostList, type WPPost } from '@/lib/wordpress'
import BlogPage from '@/pages-src/BlogPage'
import BlogEnPage from '@/pages-src/en/BlogEnPage'

interface Props {
  posts: WPPost[]
  locale: string
}

export default function Page({ posts, locale }: Props) {
  if (locale === 'en') {
    const title = 'Blog | AI Multimedia Localisation | The Voice Clone'
    const description = 'Articles on multimedia localisation, AI and global content production for enterprise teams.'
    return (
      <>
        <NextSeo
          title={title}
          description={description}
          canonical="https://thevoiceclone.com/en/blog"
          openGraph={{ title, description }}
        />
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog — The Voice Clone',
            description,
            url: 'https://thevoiceclone.com/en/blog',
            publisher: { '@id': 'https://thevoiceclone.com/#organization' },
          })}} />
        </Head>
        <BlogEnPage posts={posts} />
      </>
    )
  }

  const defaults = pageSeoDefaults['/blog']
  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://thevoiceclone.com/blog"
        openGraph={{ title: defaults.title, description: defaults.description }}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Blog — The Voice Clone',
          description: defaults.description,
          url: 'https://thevoiceclone.com/blog',
          publisher: { '@id': 'https://thevoiceclone.com/#organization' },
        })}} />
      </Head>
      <BlogPage posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getPostList(locale as 'es' | 'en')
  return {
    props: { posts, locale: locale ?? 'es' },
    revalidate: 60,
  }
}
