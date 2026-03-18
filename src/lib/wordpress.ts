const GRAPHQL_URL = 'https://cms.thevoiceclone.com/graphql'

export interface WPPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  imageAlt: string
  author: string
  category: string
  content: string
}

const POST_LIST_FIELDS = `
  slug
  title
  excerpt(format: RENDERED)
  date
  featuredImage {
    node {
      sourceUrl(size: LARGE)
      altText
    }
  }
  author { node { name } }
  categories { nodes { name } }
`

async function gql(query: string, variables?: Record<string, unknown>): Promise<any> {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    })
    const json = await res.json()
    if (json.errors) {
      console.error('WPGraphQL errors:', json.errors)
      return null
    }
    return json.data
  } catch (err) {
    console.error('WPGraphQL fetch error:', err)
    return null
  }
}

function formatDate(dateStr: string, locale: 'es' | 'en'): string {
  try {
    return new Date(dateStr).toLocaleDateString(locale === 'en' ? 'en-GB' : 'es-ES', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

function mapPost(node: any, locale: 'es' | 'en' = 'es'): WPPost {
  return {
    slug: node.slug ?? '',
    title: node.title ?? '',
    excerpt: (node.excerpt ?? '').replace(/<[^>]+>/g, '').trim(),
    date: formatDate(node.date, locale),
    image: node.featuredImage?.node?.sourceUrl ?? '',
    imageAlt: node.featuredImage?.node?.altText || node.title || '',
    author: node.author?.node?.name ?? '',
    category: node.categories?.nodes?.[0]?.name ?? '',
    content: node.content ?? '',
  }
}

export async function getPostList(locale: 'es' | 'en' = 'es'): Promise<WPPost[]> {
  const data = await gql(`
    query GetPosts {
      posts(first: 100, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
        nodes { ${POST_LIST_FIELDS} }
      }
    }
  `)
  return (data?.posts?.nodes ?? []).map((n: any) => mapPost(n, locale))
}

export async function getPostBySlug(slug: string, locale: 'es' | 'en' = 'es'): Promise<WPPost | null> {
  const data = await gql(`
    query GetPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        ${POST_LIST_FIELDS}
        content(format: RENDERED)
      }
    }
  `, { id: slug })
  const node = data?.post
  if (!node) return null
  return { ...mapPost(node, locale), content: node.content ?? '' }
}

export async function getPostSlugs(): Promise<string[]> {
  const data = await gql(`
    query GetSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes { slug }
      }
    }
  `)
  return (data?.posts?.nodes ?? []).map((n: any) => n.slug as string)
}
