import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import ProduccionVideoConIAPage from '@/pages-src/ProduccionVideoIAPage'

interface Props {
  seo: RankMathSeo | null
}

export default function Page({ seo }: Props) {
  const defaults = pageSeoDefaults['/produccion-video-con-ia']
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
              '@id': 'https://thevoiceclone.com/produccion-video-con-ia/#service',
              name: 'Producción de Vídeo con IA',
              description: defaults.description,
              url: 'https://thevoiceclone.com/produccion-video-con-ia',
              serviceType: 'AI Video Production',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
            }),
          }}
        />
      </Head>
      <ProduccionVideoConIAPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const seo = await getSeoByUri('/produccion-video-con-ia/')
  return { props: { seo } }
}
