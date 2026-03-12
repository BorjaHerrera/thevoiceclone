import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://thevoiceclone.com/wp/graphql'
)

export interface RankMathSeo {
  title: string
  metaDesc: string
  canonical: string
  fullHead: string
  opengraphTitle: string
  opengraphDescription: string
  opengraphImage?: { sourceUrl: string }
  twitterTitle: string
  twitterDescription: string
  twitterImage?: { sourceUrl: string }
}

const SEO_QUERY = `
  query GetSeoByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on ContentNode {
        seo {
          title
          metaDesc
          canonical
          fullHead
          opengraphTitle
          opengraphDescription
          opengraphImage { sourceUrl }
          twitterTitle
          twitterDescription
          twitterImage { sourceUrl }
        }
      }
    }
  }
`

export async function getSeoByUri(uri: string): Promise<RankMathSeo | null> {
  try {
    const data = await client.request<{ nodeByUri: { seo: RankMathSeo } }>(
      SEO_QUERY,
      { uri }
    )
    return data?.nodeByUri?.seo ?? null
  } catch {
    return null
  }
}

export const defaultSeo = {
  title: 'The Voice Clone | Localización Multimedia con IA',
  metaDesc: 'Agencia de localización multimedia que combina IA y precisión humana para vídeo, voice over, subtitulado y traducción profesional.',
  canonical: 'https://thevoiceclone.com',
  opengraphTitle: 'The Voice Clone',
  opengraphDescription: 'IA Escalable. Precisión Humana.',
  twitterTitle: 'The Voice Clone',
  twitterDescription: 'Localización multimedia con IA y revisión humana.',
}
