import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import AudiovisualLocalizationPage from '@/pages-src/en/AudiovisualLocalizationPage'

export default function Page() {
  const defaults = pageSeoDefaults['/audiovisual-localization']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/audiovisual-localization"
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
              '@id': 'https://thevoiceclone.com/en/audiovisual-localization/#service',
              name: 'End-to-End Audiovisual Localization',
              description: defaults.description,
              url: 'https://thevoiceclone.com/en/audiovisual-localization',
              serviceType: 'Audiovisual Localization',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              availableLanguage: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese'],
            }),
          }}
        />
      </Head>
      <AudiovisualLocalizationPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/localizacion-audiovisual', permanent: true } }
  }
  return { props: {} }
}
