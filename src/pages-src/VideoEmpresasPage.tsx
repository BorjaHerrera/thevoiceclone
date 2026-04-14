import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ChevronsDown,
  Globe,
  Zap,
  Video,
  Timer,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import GradientText from '@/components/GradientText';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeatureGridSection from '@/components/FeatureGridSection';
import VideoPortfolio from '@/components/VideoPortfolio';
import humanAiCollaborationSrc from '@/assets/human-ai-collaboration.webp';
const humanAiCollaboration =
  typeof humanAiCollaborationSrc === 'string'
    ? humanAiCollaborationSrc
    : (humanAiCollaborationSrc as { src: string }).src;

const sections = [
  {
    id: 'localizacion',
    title: 'Localización de vídeo para empresas globales',
    navLabel: 'Localización de vídeo para empresas globales',
    intro:
      'Adaptamos tu contenido audiovisual a cualquier mercado internacional con un enfoque híbrido que combina inteligencia artificial y supervisión humana experta. Subtítulos, doblaje profesional y adaptación cultural completa para que tu mensaje conecte con cada audiencia como si fuera local.',
    subsections: [
      {
        heading: 'Impacto local con precisión global',
        text: 'Cada mercado tiene sus propios códigos culturales, matices lingüísticos y expectativas de calidad. Nuestro equipo de revisores nativos, apoyado por herramientas de IA de última generación, garantiza que cada vídeo localizado mantenga la intención original y resuene con la audiencia de destino. Ya sea para onboarding internacional, cursos e-learning o vídeos corporativos multilingües, el resultado es siempre un contenido que se siente auténtico.'
      },
      {
        heading: 'Expansión internacional sin multiplicar costes',
        text: 'La automatización inteligente de transcripción, traducción y sincronización reduce drásticamente los tiempos de entrega y los costes operativos. Esto te permite escalar tu presencia audiovisual a decenas de idiomas de forma simultánea sin comprometer la calidad ni la coherencia de marca en ningún mercado.'
      }
    ]
  },
  {
    id: 'produccion',
    title: 'Producción de vídeo escalable y corporativa',
    navLabel: 'Producción de vídeo escalable y corporativa',
    intro:
      'Producción audiovisual asistida por IA que reduce costes y tiempos automatizando tareas repetitivas, con validación experta de marca en cada entrega. Desde marketing multilingüe hasta comunicación interna y formación corporativa.',
    subsections: [
      {
        heading: 'Contenido que escala al ritmo de tu negocio',
        text: 'Las empresas globales necesitan producir contenido audiovisual a un ritmo que los métodos tradicionales no pueden seguir. Nuestra integración de IA en los flujos de producción permite generar, editar y adaptar vídeos con una velocidad y eficiencia sin precedentes, optimizando el time-to-market en cada campaña global.'
      },
      {
        heading: 'El estándar de oro en consistencia audiovisual',
        text: 'Cada entrega cumple con los más altos estándares de calidad gracias a plantillas estandarizadas, flujos de revisión automatizados y supervisión humana en los puntos críticos. El resultado es una producción audiovisual uniforme y profesional que refuerza tu identidad de marca en cualquier formato y canal.'
      }
    ]
  },
  {
    id: 'contenido-ia',
    title: 'Contenido multilingüe y generación con IA',
    navLabel: 'Contenido multilingüe y generación con IA',
    intro:
      'Genera contenido audiovisual multilingüe a gran escala con tecnología de IA avanzada y supervisión humana que garantiza calidad y coherencia de marca. Avatares IA para presentaciones corporativas, vídeos formativos escalables y mucho más.',
    subsections: [
      {
        heading: 'Innovación audiovisual: IA con criterio humano',
        text: 'La generación automática de contenido con IA acelera la producción, pero es la supervisión humana la que asegura que cada pieza mantenga el tono, la precisión y la coherencia que tu marca exige. Nuestro enfoque híbrido combina lo mejor de ambos mundos: velocidad digital con criterio experto.'
      },
      {
        heading: 'Control total, calidad global y rapidez digital',
        text: 'Workflows automatizados con puntos de control humano en cada fase eliminan errores y garantizan entregas impecables. Desde avatares inteligentes que presentan en cualquier idioma hasta vídeos formativos adaptados a cada mercado, tienes el control total sobre tu producción audiovisual global.'
      }
    ]
  }
];

const faqs = [
  {
    q: '¿Cómo funciona la localización de vídeo con IA?',
    a: 'Nuestro flujo combina herramientas de IA para transcripción, traducción y doblaje con revisión humana especializada. Esto permite escalar la producción sin sacrificar calidad ni coherencia cultural.'
  },
  {
    q: '¿Cómo garantizáis la coherencia de marca en múltiples idiomas?',
    a: 'Trabajamos con glosarios de marca, guías de estilo y revisores nativos especializados en cada mercado. La IA asegura consistencia terminológica y el equipo humano valida tono y contexto.'
  },
  {
    q: '¿Ofrecéis avatares o presentadores generados con IA?',
    a: 'Sí. Podemos generar presentadores virtuales con IA para vídeos corporativos, formativos o de marketing, adaptando su aspecto e idioma a cada mercado objetivo.'
  },
  {
    q: '¿Qué volúmenes de producción podéis gestionar?',
    a: 'Nuestros flujos están diseñados para escalar desde proyectos puntuales hasta producción continua de +20 vídeos mensuales en múltiples idiomas de forma simultánea.'
  },
  {
    q: '¿Cuánto tiempo tarda un proyecto de localización típico?',
    a: 'Depende del volumen y complejidad, pero gracias a la automatización con IA, los tiempos de entrega se reducen hasta un 60% respecto a procesos tradicionales.'
  }
];

const VideoEmpresasPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      {/* Hero – white bg + bottom glow */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background'>
        {/* Bottom glow effect */}
        <div
          className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[55%] pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(237, 94, 166, 0.45) 0%, rgba(123, 73, 223, 0.4) 25%, rgba(0, 99, 204, 0.35) 50%, transparent 75%)',
            filter: 'blur(100px)'
          }}
        />
        <div className='container relative z-10 px-4 lg:px-8 pt-36 pb-24 lg:pt-48 lg:pb-36'>
          <div className='max-w-5xl mx-auto text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-foreground mb-8'
            >
              Servicios de vídeo para empresas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className='text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed'
            >
              Con The Voice Clone descubrirás cómo nuestro hub centraliza la
              creación, localización y distribución de contenido audiovisual
              global. Cada servicio —desde vídeos corporativos y de formación
              hasta cursos e-learning, generación de vídeos con IA y contenido
              multilingüe— está diseñado para optimizar flujos de trabajo,
              mantener coherencia de marca y acelerar la expansión internacional
              de tu contenido audiovisual.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href='#contacto'
                className='inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors'
              >
                Agenda una demo
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-12 flex justify-center'
            >
              <button
                onClick={() => {
                  const firstH2 = document.querySelector(
                    'section:nth-of-type(2) h2'
                  );
                  if (firstH2) {
                    const top =
                      firstH2.getBoundingClientRect().top +
                      window.scrollY -
                      160;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className='cursor-pointer bg-transparent border-none p-2'
                aria-label='Scroll hacia abajo'
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <ChevronsDown
                    className='w-12 h-12 text-foreground/70'
                    strokeWidth={1.5}
                  />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className='py-20 lg:py-28 bg-secondary/50'>
        <div className='container px-4 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-10 lg:gap-20 items-start max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight'>
                EL NUEVO PARADIGMA EN{' '}
                <GradientText>PRODUCCIÓN Y LOCALIZACIÓN DE VÍDEO.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Transforma la manera en que tu empresa comunica globalmente. En
                The Voice Clone, combinamos tecnología de IA avanzada con
                supervisión humana para producir y localizar contenido
                audiovisual a escala. Ya sea mediante la adaptación de cursos de
                formación o la creación de vídeos con avatares inteligentes,
                nuestro hub garantiza procesos eficientes, entregas rápidas y
                una presencia multilingüe sin fricciones ni fallos de
                coherencia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IA + Human Section – Full Width Split */}
      <section className='py-20 lg:py-28 overflow-hidden'>
        <div className='grid lg:grid-cols-2 gap-0'>
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex items-center px-6 md:px-12 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-0'
          >
            <div className='max-w-2xl'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-foreground mb-8'>
                IA supervisada por editores de vídeo: La mejor estrategia
                audiovisual.
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                Generamos contenido audiovisual eficiente, coherente y
                multilingüe. Al unir tecnología de avatares con localización
                experta, permitimos que tu marca escale su comunicación
                corporativa y formativa con máxima agilidad y un control de
                calidad riguroso en cada paso del proceso.
              </p>
              {/* Gradient line */}
              <div
                className='h-[4px] w-full mb-10 rounded-full'
                style={{
                  background:
                    'linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)'
                }}
              />
              <a
                href='#contacto'
                className='inline-block bg-yellow-400 text-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors text-center min-w-[220px]'
              >
                Saber más
              </a>
            </div>
          </motion.div>

          {/* Image Column – Edge to Edge Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className='h-[400px] lg:h-[600px]'
          >
            <img
              src={humanAiCollaboration}
              alt='Equipo profesional colaborando con tecnología de inteligencia artificial en producción audiovisual'
              className='w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading='El nuevo estándar en producción y localización de vídeo'
        description='Adaptamos tu contenido audiovisual a cualquier mercado internacional con un enfoque híbrido que combina inteligencia artificial y supervisión humana experta. Subtítulos, doblaje profesional y adaptación cultural completa para que tu mensaje conecte con cada audiencia como si fuera local.'
        cards={[
          {
            icon: Globe,
            iconBg: 'bg-blue-500/20',
            iconColor: 'text-blue-400',
            title: 'Impacto Local',
            text: 'Garantizamos que cada vídeo localizado mantenga la intención original y resuene con la audiencia de destino mediante revisores nativos y tecnología de IA.'
          },
          {
            icon: Zap,
            iconBg: 'bg-purple-500/20',
            iconColor: 'text-purple-400',
            title: 'Escalabilidad Real',
            text: 'La automatización inteligente permite escalar tu presencia audiovisual a decenas de idiomas de forma simultánea sin multiplicar los costes operativos.'
          },
          {
            icon: Video,
            iconBg: 'bg-emerald-500/20',
            iconColor: 'text-emerald-400',
            title: 'Producción IA',
            text: 'Producción asistida por IA que reduce tiempos automatizando tareas repetitivas, con validación experta de marca en cada fase del proyecto.'
          },
          {
            icon: Timer,
            iconBg: 'bg-orange-500/20',
            iconColor: 'text-orange-400',
            title: 'Velocidad Digital',
            text: 'Nuestra integración de IA permite generar y adaptar vídeos con una rapidez sin precedentes, optimizando el time-to-market en cada campaña.'
          },
          {
            icon: ShieldCheck,
            iconBg: 'bg-red-500/20',
            iconColor: 'text-red-400',
            title: 'Garantía de Calidad',
            text: 'Producción uniforme y profesional mediante flujos de revisión automatizados y supervisión humana que refuerzan tu identidad de marca.'
          },
          {
            icon: Cpu,
            iconBg: 'bg-violet-500/20',
            iconColor: 'text-violet-400',
            title: 'Precisión Humana',
            text: 'Combinamos la velocidad de la generación digital con el criterio experto humano para asegurar que cada pieza mantenga el tono y la precisión exigidos.'
          }
        ]}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className='py-20 lg:py-28'>
        <div className='px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24'>
            {/* Left Column – Sticky Navigation (1/3) */}
            <div className='hidden lg:block'>
              <div className='sticky top-40 self-start'>
                <h2 className='text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12'>
                  NUESTRAS SOLUCIONES AUDIOVISUALES PARA EMPRESAS
                </h2>
                <nav className='flex flex-col gap-6'>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(section.id);
                        if (el) {
                          const top =
                            el.getBoundingClientRect().top +
                            window.scrollY -
                            160;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }}
                      className={`text-lg font-semibold leading-tight transition-all duration-300 no-underline decoration-transparent text-foreground ${
                        activeSection === section.id
                          ? 'opacity-100'
                          : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      {section.navLabel}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Column – Narrative Content (2/3) */}
            <div className='flex flex-col'>
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className='pb-32 last:pb-0 scroll-mt-40'
                >
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-tight tracking-tight text-foreground mb-8'>
                    {section.title}
                  </h2>
                  <p className='text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl'>
                    {section.intro}
                  </p>
                  {section.subsections.map((sub, j) => (
                    <div key={j} className='mb-10 last:mb-0'>
                      <h3 className='text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground mt-8 mb-4'>
                        {sub.heading}
                      </h3>
                      <p className='text-base text-foreground/60 leading-relaxed max-w-3xl'>
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estrategias / Visibilidad */}
      <section className='py-20 lg:py-28 bg-secondary/50'>
        <div className='container px-4 lg:px-8 max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8'>
              Visibilidad absoluta en <GradientText>todo momento</GradientText>
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto'>
              Estrategias de escalabilidad: Workflows centralizados que permiten
              control total sobre cada versión de vídeo. Plantillas y
              automatización de IA para mantener consistencia y rapidez.
              Monitoreo de KPIs de producción e integración con localización
              para optimizar costes.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio
        videoIds={['wyMLE_um2Sk', 'tbD-8HViFl4', 'S17marPSB8g']}
      />

      {/* FAQ */}
      <section className='py-20 lg:py-28'>
        <div className='px-6 md:px-12 lg:px-20 xl:px-32'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mb-12'
          >
            <h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight'>
              Preguntas <GradientText>Frecuentes</GradientText>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type='single' collapsible className='space-y-3'>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className='surface-elevated rounded-xl border border-border/50 px-6'
                >
                  <AccordionTrigger className='text-left font-heading font-semibold text-base hover:no-underline py-5'>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground leading-relaxed pb-5'>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default VideoEmpresasPage;
