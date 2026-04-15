import { NextSeo, FAQPageJsonLd } from 'next-seo'
import { GetServerSideProps } from 'next'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import FaqEnPage from '@/pages-src/en/FaqEnPage'

export default function Page() {
  const defaults = pageSeoDefaults['/faq']

  return (
    <>
      <NextSeo
        title={defaults.title}
        description={defaults.description}
        canonical="https://www.thevoiceclone.com/en/faq"
        openGraph={{
          title: defaults.title,
          description: defaults.description,
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'What is multimedia localisation and how does it differ from production?',
            acceptedAnswerText: 'Localisation adapts existing content (subtitles, dubbing, cultural references) for new markets, while production creates content from scratch (corporate videos, e-learning or marketing campaigns).',
          },
          {
            questionName: 'What advantages does your managed service have over automatic tools?',
            acceptedAnswerText: 'Unlike fully automatic apps, we offer comprehensive oversight, brand consistency, linguistic quality control (QA) and cultural adaptation that AI alone cannot achieve.',
          },
          {
            questionName: 'Does AI replace the human creative or linguistic team?',
            acceptedAnswerText: 'No. AI handles repetitive and technical tasks (base editing, pre-translation). However, every project includes human supervision to guarantee tone, terminological accuracy and brand identity.',
          },
          {
            questionName: 'Do AI voices and avatars sound natural?',
            acceptedAnswerText: 'Yes. We use state-of-the-art technology and, most importantly, our experts fine-tune rhythm, intonation and technical clarity to deliver a professional, corporate-grade result.',
          },
          {
            questionName: 'Can content be localised into more than 10 languages simultaneously?',
            acceptedAnswerText: 'Yes. Our workflows are designed to scale and manage complex multilingual projects simultaneously, maintaining consistency across all markets.',
          },
          {
            questionName: 'What types of content and platforms do you support?',
            acceptedAnswerText: 'From e-learning videos and corporate training to social media campaigns (LinkedIn, Instagram, TikTok) and high-level B2B presentations.',
          },
          {
            questionName: 'Do you offer voice cloning services?',
            acceptedAnswerText: 'No. We focus exclusively on professional voice over and corporate avatars for B2B communications. We do not offer voice cloning or services for entertainment or fiction.',
          },
          {
            questionName: 'How much can you save with AI-assisted production?',
            acceptedAnswerText: 'Automating technical processes can reduce operational costs by up to 60% and dramatically shorten delivery times, allowing you to produce more volume with fewer resources.',
          },
          {
            questionName: 'How do you ensure brand consistency across different countries?',
            acceptedAnswerText: 'We centralise management, rigorously apply your style guides and terminology glossaries, ensuring your brand speaks with one voice in any language.',
          },
          {
            questionName: "What's the difference between your subtitling and automatic subtitles from platforms like YouTube?",
            acceptedAnswerText: 'Automatic subtitles make context and synchronisation errors. Our professional service includes cultural adaptation, precise timing adjustments and expert review to ensure the message is accurate.',
          },
          {
            questionName: 'Can you adapt content to my specific brand guidelines?',
            acceptedAnswerText: 'Absolutely. We ensure that style, technical terminology and tone are consistent with your predefined corporate identity.',
          },
        ]}
      />
      <FaqEnPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale !== 'en') {
    return { redirect: { destination: '/preguntas-frecuentes', permanent: false } }
  }
  return { props: {} }
}
