import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import VideoLocalizationPage from '@/pages-src/en/VideoLocalizationPage'

export default function Page() {
  const defaults = pageSeoDefaults['/video-localization']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/video-localization"
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
              '@id': 'https://thevoiceclone.com/en/video-localization/#service',
              name: 'Video Localization for Business',
              description: defaults.description,
              url: 'https://thevoiceclone.com/en/video-localization',
              serviceType: 'Video Localization',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              availableLanguage: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese'],
            }),
          }}
        />
      </Head>
      <VideoLocalizationPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/localizacion-de-video', permanent: true } }
  }
  return { props: {} }
}
