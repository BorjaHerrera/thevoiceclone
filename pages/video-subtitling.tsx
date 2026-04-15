import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import VideoSubtitlingPage from '@/pages-src/en/VideoSubtitlingPage'

export default function Page() {
  const defaults = pageSeoDefaults['/video-subtitling']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/video-subtitling"
        openGraph={{
          title: defaults.title,
          description: defaults.description,
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
              '@id': 'https://thevoiceclone.com/en/video-subtitling/#service',
              name: 'Professional Video Subtitling',
              description: defaults.description,
              url: 'https://thevoiceclone.com/en/video-subtitling',
              serviceType: 'Video Subtitling',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              availableLanguage: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese'],
            }),
          }}
        />
      </Head>
      <VideoSubtitlingPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/subtitulado-video', permanent: true } }
  }
  return { props: {} }
}
