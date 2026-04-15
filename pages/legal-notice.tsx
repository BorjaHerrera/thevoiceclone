import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import LegalNoticeEnPage from '@/pages-src/en/LegalNoticeEnPage'

export default function Page() {
  const defaults = pageSeoDefaults['/legal-notice']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/legal-notice"
        openGraph={{
          title: defaults.title,
          description: defaults.description,
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />
      <LegalNoticeEnPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/aviso-legal', permanent: false } }
  }
  return { props: {} }
}
