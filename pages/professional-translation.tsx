import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import ProfessionalTranslationPage from '@/pages-src/en/ProfessionalTranslationPage'

export default function Page() {
  const defaults = pageSeoDefaults['/professional-translation']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/professional-translation"
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
              '@id': 'https://thevoiceclone.com/en/professional-translation/#service',
              name: 'Professional Translation Services',
              description: defaults.description,
              url: 'https://thevoiceclone.com/en/professional-translation',
              serviceType: 'Professional Translation',
              provider: { '@id': 'https://thevoiceclone.com/#organization' },
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              availableLanguage: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese'],
            }),
          }}
        />
      </Head>
      <ProfessionalTranslationPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/traduccion-profesional', permanent: true } }
  }
  return { props: {} }
}
