import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import CookiePolicyEnPage from '@/pages-src/en/CookiePolicyEnPage'

export default function Page() {
  const defaults = pageSeoDefaults['/cookie-policy']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/cookie-policy"
        openGraph={{
          title: defaults.title,
          description: defaults.description,
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />
      <CookiePolicyEnPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/politica-cookies', permanent: false } }
  }
  return { props: {} }
}
