import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSeoByUri, defaultSeo, type RankMathSeo } from '@/lib/seo'
import ProduccionVideoIAPage from '@/pages-src/ProduccionVideoIAPage'

interface Props {
  seo: RankMathSeo | null
}

export default function Page({ seo }: Props) {
  const title = seo?.title || defaultSeo.title
  const description = seo?.metaDesc || defaultSeo.metaDesc

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {seo?.canonical && <link rel="canonical" href={seo.canonical} />}
        <meta property="og:title" content={seo?.opengraphTitle || title} />
        <meta property="og:description" content={seo?.opengraphDescription || description} />
        {seo?.opengraphImage && <meta property="og:image" content={seo.opengraphImage.sourceUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.twitterTitle || title} />
        <meta name="twitter:description" content={seo?.twitterDescription || description} />
        {seo?.twitterImage && <meta name="twitter:image" content={seo.twitterImage.sourceUrl} />}
      </Head>
      <ProduccionVideoIAPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const seo = await getSeoByUri('/produccion-video-con-ia/')
  return { props: { seo } }
}
