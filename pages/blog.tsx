import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import BlogPage from '@/pages-src/BlogPage'
import BlogEnPage from '@/pages-src/en/BlogEnPage'

interface Props {
  seo: RankMathSeo | null
  locale: string
}

export default function Page({ seo, locale }: Props) {
  if (locale === 'en') {
    const enTitle = 'Blog | AI Multimedia Localisation & Production | The Voice Clone'
    const enDescription = 'Articles on multimedia localisation, AI and global content production for enterprise teams.'

    return (
      <>
        <NextSeo
          title={enTitle}
          description={enDescription}
          canonical="https://thevoiceclone.com/en/blog"
          openGraph={{ title: enTitle, description: enDescription }}
          twitter={{ cardType: 'summary_large_image' }}
        />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Blog',
                '@id': 'https://thevoiceclone.com/en/blog/#blog',
                name: 'Blog — The Voice Clone',
                description: enDescription,
                url: 'https://thevoiceclone.com/en/blog',
                publisher: { '@id': 'https://thevoiceclone.com/#organization' },
              }),
            }}
          />
        </Head>
        <BlogEnPage />
      </>
    )
  }

  const defaults = pageSeoDefaults['/blog']
  const title = seo?.title || defaults.title
  const description = seo?.metaDesc || defaults.description

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo?.canonical}
        openGraph={{
          title: seo?.opengraphTitle || title,
          description: seo?.opengraphDescription || description,
          ...(seo?.opengraphImage && { images: [{ url: seo.opengraphImage.sourceUrl }] }),
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              '@id': 'https://thevoiceclone.com/blog/#blog',
              name: 'Blog — The Voice Clone',
              description: defaults.description,
              url: 'https://thevoiceclone.com/blog',
              publisher: { '@id': 'https://thevoiceclone.com/#organization' },
            }),
          }}
        />
      </Head>
      <BlogPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const seo = locale === 'es' ? await getSeoByUri('/blog/') : null
  return { props: { seo, locale: locale || 'es' } }
}
