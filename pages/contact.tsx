import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import ContactEnPage from '@/pages-src/en/ContactEnPage'

export default function Page() {
  const defaults = pageSeoDefaults['/contact']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/contact"
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
              '@type': 'ContactPage',
              '@id': 'https://thevoiceclone.com/en/contact/#contactpage',
              name: 'Contact — The Voice Clone',
              description: defaults.description,
              url: 'https://thevoiceclone.com/en/contact',
              mainEntity: { '@id': 'https://thevoiceclone.com/#organization' },
            }),
          }}
        />
      </Head>
      <ContactEnPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/contacto', permanent: true } }
  }
  return { props: {} }
}
