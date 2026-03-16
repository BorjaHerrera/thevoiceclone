import { NextSeo, FAQPageJsonLd } from 'next-seo'
import { GetServerSideProps } from 'next'
import { getSeoByUri, type RankMathSeo } from '@/lib/seo'
import { pageSeoDefaults } from '@/lib/seo-defaults'
import PreguntasFrecuentesPage from '@/pages-src/PreguntasFrecuentesPage'

interface Props {
  seo: RankMathSeo | null
}

export default function Page({ seo }: Props) {
  const defaults = pageSeoDefaults['/preguntas-frecuentes']
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
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: '¿Qué es la localización multimedia y en qué se diferencia de la producción?',
            acceptedAnswerText: 'La localización adapta contenido existente (subtítulos, doblaje, cultura) a nuevos mercados, mientras que la producción genera contenido desde cero (vídeos corporativos, e-learning o marketing).',
          },
          {
            questionName: '¿Qué ventajas tiene vuestro servicio gestionado frente a herramientas automáticas?',
            acceptedAnswerText: 'A diferencia de las apps 100% automáticas, ofrecemos control integral, coherencia de marca, control de calidad (QA) lingüístico y una adaptación cultural que la IA por sí sola no alcanza.',
          },
          {
            questionName: '¿La IA sustituye al equipo creativo o lingüístico humano?',
            acceptedAnswerText: 'No. La IA se encarga de las tareas repetitivas y técnicas (edición base, pre-traducción). Sin embargo, todos los proyectos cuentan con supervisión humana para garantizar el tono, la precisión terminológica y la identidad de marca.',
          },
          {
            questionName: '¿Las voces y avatares de IA suenan naturales?',
            acceptedAnswerText: 'Sí. Utilizamos tecnología de última generación y, lo más importante, nuestros expertos ajustan el ritmo, la entonación y la limpieza técnica para que el resultado sea profesional y corporativo.',
          },
          {
            questionName: '¿Se pueden localizar contenidos a más de 10 idiomas simultáneamente?',
            acceptedAnswerText: 'Sí. Nuestros flujos de trabajo están diseñados para escalar y gestionar proyectos complejos en múltiples idiomas a la vez, manteniendo la coherencia en todos los mercados.',
          },
          {
            questionName: '¿Qué tipo de contenidos y plataformas soportáis?',
            acceptedAnswerText: 'Desde vídeos e-learning y formación corporativa hasta campañas para redes sociales (LinkedIn, Instagram, TikTok) y presentaciones B2B de alto nivel.',
          },
          {
            questionName: '¿Ofrecéis servicios de clonación de voz?',
            acceptedAnswerText: 'No. Nos centramos en locución profesional y avatares corporativos; no realizamos clonación de voz ni servicios para entretenimiento o ficción.',
          },
          {
            questionName: '¿Cuánto se puede ahorrar con la producción asistida por IA?',
            acceptedAnswerText: 'La automatización de procesos técnicos puede reducir hasta un 60% los costes operativos y acortar drásticamente los tiempos de entrega, permitiendo producir más volumen con menos recursos.',
          },
          {
            questionName: '¿Cómo aseguran la coherencia de marca en distintos países?',
            acceptedAnswerText: 'Centralizamos la gestión, aplicamos tus manuales de estilo y glosarios terminológicos de forma estricta, asegurando que tu marca hable con una sola voz en cualquier idioma.',
          },
          {
            questionName: '¿Cuál es la diferencia entre vuestro subtitulado y el automático de plataformas como YouTube?',
            acceptedAnswerText: 'El automático comete errores de contexto y sincronización. Nuestro servicio profesional incluye adaptación cultural, ajuste de tiempos preciso y una revisión experta para que el mensaje sea exacto.',
          },
          {
            questionName: '¿Pueden adaptar el contenido a mi manual de marca específico?',
            acceptedAnswerText: 'Totalmente. Nos aseguramos de que el estilo, la terminología técnica y el tono sean consistentes con tu identidad corporativa predefinida.',
          },
        ]}
      />
      <PreguntasFrecuentesPage />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const seo = await getSeoByUri('/preguntas-frecuentes/')
  return { props: { seo } }
}
