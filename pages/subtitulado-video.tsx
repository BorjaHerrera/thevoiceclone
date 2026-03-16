import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import SubtituladoVideoPage from '@/pages-src/SubtituladoProfesionalVideoPage'

interface Props {
  seo: RankMathSeo | null
}

export default function Page({ seo }: Props) {
  const defaults = pageSeoDefaults['/subtitulado-video']
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
              '@type': 'Service',
              '@id': 'https://thevoiceclone.com/subtitulado-video/#service',
              name: 'Subtitulado Profesional de Vídeo',
              description: defaults.description,
              url: 'https://thevoiceclone.com/subtitulado-video',
              serviceType: 'Video Subtitling',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              availableLanguage: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese'],
            }),
          }}
        />
      </Head>
      <SubtituladoVideoPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const seo = await getSeoByUri('/subtitulado-video/')
  return { props: { seo } }
}
