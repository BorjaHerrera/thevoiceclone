import { NextSeo, OrganizationJsonLd } from 'next-seo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import Index from '@/pages-src/Index'
import IndexEnPage from '@/pages-src/en/IndexEnPage'

interface Props {
  seo: RankMathSeo | null
  locale: string
}

export default function Page({ seo, locale }: Props) {
  if (locale === 'en') {
    const defaults = pageSeoDefaults['/en']
    const title = seo?.title || defaults.title
    const description = seo?.metaDesc || defaults.description

    return (
      <>
        <NextSeo
          title={title}
          description={description}
          canonical="https://www.thevoiceclone.com/en"
          openGraph={{
            title: seo?.opengraphTitle || title,
            description: seo?.opengraphDescription || description,
            ...(seo?.opengraphImage && { images: [{ url: seo.opengraphImage.sourceUrl }] }),
          }}
          twitter={{ cardType: 'summary_large_image' }}
        />
        <OrganizationJsonLd
          type="Corporation"
          id="https://thevoiceclone.com/#organization"
          name="The Voice Clone"
          legalName="DANI VOICE OVERS, S.L."
          url="https://thevoiceclone.com"
          logo="https://thevoiceclone.com/wp-content/react-app/assets/logo_transparente-BnFsTZ2r.png"
          sameAs={[
            'https://www.linkedin.com/company/the-voice-clone/',
            'https://www.youtube.com/@TheVoiceClone',
          ]}
          address={{
            streetAddress: 'C/ Santiago Rodríguez Conde, 23F',
            addressLocality: 'Alpedrete',
            addressRegion: 'Madrid',
            postalCode: '28430',
            addressCountry: 'ES',
          }}
          contactPoint={[
            {
              telephone: '+34-911-368-927',
              contactType: 'customer service',
              email: 'hello@thevoiceclone.com',
              availableLanguage: ['Spanish', 'English'],
            },
          ]}
        />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://thevoiceclone.com/#website',
                name: 'The Voice Clone',
                url: 'https://thevoiceclone.com',
                publisher: { '@id': 'https://thevoiceclone.com/#organization' },
              }),
            }}
          />
        </Head>
        <IndexEnPage />
      </>
    )
  }

  const defaults = pageSeoDefaults['/']
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
      <OrganizationJsonLd
        type="Corporation"
        id="https://thevoiceclone.com/#organization"
        name="The Voice Clone"
        legalName="DANI VOICE OVERS, S.L."
        url="https://thevoiceclone.com"
        logo="https://thevoiceclone.com/wp-content/react-app/assets/logo_transparente-BnFsTZ2r.png"
        sameAs={[
          'https://www.linkedin.com/company/the-voice-clone/',
          'https://www.youtube.com/@TheVoiceClone',
        ]}
        address={{
          streetAddress: 'C/ Santiago Rodríguez Conde, 23F',
          addressLocality: 'Alpedrete',
          addressRegion: 'Madrid',
          postalCode: '28430',
          addressCountry: 'ES',
        }}
        contactPoint={[
          {
            telephone: '+34-911-368-927',
            contactType: 'customer service',
            email: 'hello@thevoiceclone.com',
            availableLanguage: ['Spanish', 'English'],
          },
        ]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://thevoiceclone.com/#website',
              name: 'The Voice Clone',
              url: 'https://thevoiceclone.com',
              publisher: { '@id': 'https://thevoiceclone.com/#organization' },
            }),
          }}
        />
      </Head>
      <Index />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const uri = locale === 'en' ? '/en/' : '/'
  const seo = await getSeoByUri(uri)
  return { props: { seo, locale: locale || 'es' } }
}
