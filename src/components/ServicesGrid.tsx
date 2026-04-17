import { motion } from 'framer-motion';
import { Video, Film, Layers, Mic, Subtitles, Languages } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const servicesEs = [
  {
    icon: Video,
    title: 'Localización de Vídeo',
    href: '/localizacion-de-video',
    description:
      'Procesos híbridos con IA y revisión humana que aceleran la distribución internacional manteniendo tono, terminología y consistencia cultural.'
  },
  {
    icon: Film,
    title: 'Producción de Vídeo',
    href: '/produccion-video-con-ia',
    description:
      'Producción asistida por IA que reduce costes y tiempos automatizando tareas repetitivas con validación experta de marca.'
  },
  {
    icon: Layers,
    title: 'Localización End-to-End',
    href: '/localizacion-audiovisual',
    description:
      'Flujo único que unifica vídeo, locución, subtítulos y traducción evitando errores y asegurando consistencia con un único partner estratégico.'
  },
  {
    icon: Mic,
    title: 'Locución',
    href: '/voces-ia',
    description:
      'Tecnologías de voz avanzadas con validación humana que llevan tu narrativa a cualquier idioma manteniendo voz de marca coherente, pronunciación y naturalidad impecables.'
  },
  {
    icon: Subtitles,
    title: 'Subtitulado',
    href: '/subtitulado-video',
    description:
      'Subtítulos precisos y culturalmente apropiados generados con IA y revisores expertos que garantizan legibilidad, sincronización perfecta y mejoran el engagement global.'
  },
  {
    icon: Languages,
    title: 'Traducción',
    href: '/traduccion-profesional',
    description:
      'Modelo de IA supervisada que adapta guiones y textos con rigor terminológico y estilo corporativo, optimizando velocidad y coste a gran escala.'
  }
];

const servicesEn = [
  {
    icon: Video,
    title: 'Video Localization',
    href: '/en/video-localization',
    description:
      'Hybrid AI and human review workflows that accelerate international distribution while maintaining tone, terminology and cultural consistency.'
  },
  {
    icon: Film,
    title: 'Video Production',
    href: '/en/ai-video-production',
    description:
      'AI-assisted production that reduces costs and time by automating repetitive tasks with expert brand validation.'
  },
  {
    icon: Layers,
    title: 'End-to-End Localisation',
    href: '/en/audiovisual-localization',
    description:
      'A single workflow that unifies video, voice over, subtitles and translation, avoiding handoff errors and ensuring consistency with one strategic partner.'
  },
  {
    icon: Mic,
    title: 'Voice Over',
    href: '/en/ai-voices',
    description:
      'Advanced voice technologies with human validation that take your narrative to any language while maintaining coherent brand voice, flawless pronunciation and naturalness.'
  },
  {
    icon: Subtitles,
    title: 'Subtitling',
    href: '/en/video-subtitling',
    description:
      'Precise, culturally appropriate subtitles generated with AI and expert reviewers that guarantee readability, perfect synchronisation and improve global engagement.'
  },
  {
    icon: Languages,
    title: 'Translation',
    href: '/en/professional-translation',
    description:
      'AI-supervised model that adapts scripts and texts with terminological rigour and corporate style, optimising speed and cost at scale.'
  }
];

const ServicesGrid = () => {
  const router = useRouter();
  const services = router.locale === 'en' ? servicesEn : servicesEs;

  return (
    <section id='servicios' className='py-20 lg:py-28'>
      <div className='px-6 md:px-12 lg:px-20 xl:px-32'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className='group bg-card rounded-3xl p-8 border border-border/50 hover:border-accent hover:shadow-[0_0_24px_hsl(260_70%_58%/0.18)] hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer block'
              >
                <div className='w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5'>
                  <service.icon className='w-6 h-6 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors'>
                  {service.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed text-sm'>
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
