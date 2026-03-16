import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import ContactoPage from '@/pages-src/ContactoPage'

interface Props {
  seo: RankMathSeo | null
}

export default function Page({ seo }: Props) {
  const defaults = pageSeoDefaults['/contacto']
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
              '@type': 'ContactPage',
              '@id': 'https://thevoiceclone.com/contacto/#contactpage',
              name: 'Contacto — The Voice Clone',
              description: defaults.description,
              url: 'https://thevoiceclone.com/contacto',
              mainEntity: { '@id': 'https://thevoiceclone.com/#organization' },
            }),
          }}
        />
      </Head>
      <ContactoPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const seo = await getSeoByUri('/contacto/')
  return { props: { seo } }
}
