import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Globe, Timer, Type, Users, Languages, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import humanAiCollaborationSrc from "@/assets/SUBTITULADO MULTILINGUE SERVICIO.webp";
const humanAiCollaboration = typeof humanAiCollaborationSrc === "string" ? humanAiCollaborationSrc : (humanAiCollaborationSrc as { src: string }).src;

const sections: { id: string; title: string; navLabel: string; intro: string; subsections: { heading: string; text: string }[] }[] = [
  {
    id: "subtitulado-multilingue",
    title: "Subtitulado multilingüe: escalabilidad con coherencia global",
    navLabel: "Subtitulado multilingüe: escalabilidad y rigor.",
    intro:
      "Centralizamos la traducción y el subtitulado de tus vídeos eliminando la gestión dispersa de proveedores locales. Diseñamos procesos que aseguran la fidelidad del mensaje original y una calidad técnica homogénea en todos los idiomas de forma simultánea.",
    subsections: [],
  },
  {
    id: "metodologia-hibrida",
    title: "Metodología híbrida: el equilibrio entre IA y revisión humana",
    navLabel: "El equilibrio entre automatización y revisión experta.",
    intro:
      "La IA acelera la generación inicial de subtítulos en proyectos de alto volumen como e-learning corporativo. Sin embargo, aplicamos revisión humana estratégica para asegurar que la terminología técnica y el contexto cultural sean perfectos, logrando una eficiencia inalcanzable de forma manual.",
    subsections: [],
  },
  {
    id: "externalizar-subtitulado",
    title: "Externalizar el subtitulado simplifica los procesos corporativos",
    navLabel: "Externalizar el subtitulado simplifica tu expansión.",
    intro:
      "Delegar la gestión de subtítulos permite que tu equipo se centre en la estrategia mientras nosotros garantizamos la precisión y los tiempos de entrega. Accedes a tecnología avanzada y transformas la complejidad logística en un flujo de trabajo predecible y profesional.",
    subsections: [],
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre subtitulado automático y profesional?",
    a: "El automático es generado por software sin supervisión, lo que conlleva errores de contexto y sincronización. El profesional incluye revisión humana, adaptación cultural y control de calidad lingüístico.",
  },
  {
    q: "¿Por qué es necesaria la revisión humana en los subtítulos?",
    a: "La IA a menudo falla en detectar matices culturales, terminología técnica de empresa o desajustes temporales sutiles. Los expertos aseguran que el mensaje sea exacto y coherente con la marca.",
  },
  {
    q: "¿Cuándo es recomendable usar un workflow híbrido?",
    a: "Es ideal para lanzamientos internacionales, formación global y proyectos con gran volumen de vídeo donde se requiere la velocidad de la IA pero la precisión certificada de un humano.",
  },
  {
    q: "¿Pueden adaptar los subtítulos a mi manual de marca?",
    a: "Sí. Aseguramos que el estilo, la terminología y el tono sean consistentes con tu identidad corporativa en todos los mercados.",
  },
];

const SubtituladoProfesionalVideoPage = () => {
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
        { rootMargin: "-40% 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[55%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(237, 94, 166, 0.45) 0%, rgba(123, 73, 223, 0.4) 25%, rgba(0, 99, 204, 0.35) 50%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />
        <div className="container relative z-10 px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-foreground mb-8"
            >
              Subtitulado de vídeo con revisión humana
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Impulsa la accesibilidad y la internacionalización de tus vídeos corporativos. No utilizamos herramientas
              automáticas sin control: gestionamos un proceso integral que combina precisión lingüística, adaptación
              cultural y revisión experta para proteger la identidad de tu marca en cada mercado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contacto"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors"
              >
                Agenda una demo
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => {
                  const firstH2 = document.querySelector("section:nth-of-type(2) h2");
                  if (firstH2) {
                    const top = firstH2.getBoundingClientRect().top + window.scrollY - 160;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer bg-transparent border-none p-2"
                aria-label="Scroll hacia abajo"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronsDown className="w-12 h-12 text-foreground/70" strokeWidth={1.5} />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
                Calidad profesional en cada línea: <GradientText>Olvídate de los errores de la automatización pura.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Muchas empresas dependen de generadores automáticos que producen errores de sincronización y terminología.
                En The Voice Clone, nuestro flujo híbrido asegura que el subtitulado no sea solo un proceso técnico, sino
                una adaptación fiel que respeta el contexto cultural y los estándares internacionales de comunicación
                corporativa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IA + Human Section – Full Width Split */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center px-6 md:px-12 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-0"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-foreground mb-8">
                Precisión lingüística con rapidez IA. Máxima eficiencia en tu contenido global.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Escala tu comunicación audiovisual con una solución que optimiza tiempos y presupuestos en{" "}
                <strong>vídeos corporativos, e-learning y campañas de marketing</strong>. Nuestra metodología permite
                reducir drásticamente los costes de producción manteniendo una precisión milimétrica en los tiempos y el
                lenguaje, sin necesidad de inversión inicial en infraestructura.
              </p>
              <div
                className="h-[4px] w-full mb-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
                }}
              />
              <a
                href="#contacto"
                className="inline-block bg-yellow-400 text-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors text-center min-w-[220px]"
              >
                Saber más
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[400px] lg:h-[600px]"
          >
            <img
              src={humanAiCollaboration}
              alt="Subtitulado Multilingüe"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="El ecosistema definitivo para tu subtitulado profesional"
        description="Combinamos eficiencia tecnológica y revisión humana para ofrecer subtítulos impecables en cualquier formato."
        cards={[
          {
            icon: Timer,
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            title: "Precisión en Tiempos",
            text: "Ajustamos la sincronización de cada frase para garantizar una legibilidad perfecta y una experiencia de usuario fluida.",
          },
          {
            icon: Globe,
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            title: "Adaptación Cultural",
            text: "Expertos nativos adaptan el mensaje para asegurar que los matices y modismos locales sean culturalmente relevantes.",
          },
          {
            icon: Type,
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            title: "Coherencia de Estilo",
            text: "Mantenemos el tono y la terminología corporativa en todos los idiomas, protegiendo la integridad de tu marca.",
          },
          {
            icon: Users,
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-400",
            title: "Accesibilidad Global",
            text: "Cumplimos con los estándares internacionales para asegurar que tu contenido sea inclusivo y accesible para todas las audiencias.",
          },
          {
            icon: Languages,
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            title: "Escalabilidad Multilingüe",
            text: "Gestión centralizada que permite traducir y subtitular grandes volúmenes de vídeo en tiempo récord.",
          },
          {
            icon: ShieldCheck,
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            title: "Control de Calidad",
            text: "Revisión humana final para detectar y corregir errores de contexto o gramática que la IA suele omitir.",
          },
        ]}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  Un modelo que une tecnología de vanguardia y rigor lingüístico.
                </h2>
                <nav className="flex flex-col gap-6">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(section.id);
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 160;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }}
                      className={`text-lg font-semibold leading-tight transition-all duration-300 no-underline decoration-transparent text-foreground ${
                        activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      {section.navLabel}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex flex-col">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="pb-32 last:pb-0 scroll-mt-40"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-tight tracking-tight text-foreground mb-8">
                    {section.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl">{section.intro}</p>
                  {section.subsections.map((sub, j) => (
                    <div key={j} className="mb-10 last:mb-0">
                      <h3 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground mt-8 mb-4">
                        {sub.heading}
                      </h3>
                      <p className="text-base text-foreground/60 leading-relaxed max-w-3xl">{sub.text}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estrategias / Visibilidad */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              The Voice Clone: Donde el subtitulado se convierte en una <GradientText>ventaja estratégica.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Producir subtítulos internamente implica errores técnicos y costes ocultos. Al confiar en nuestro servicio
              gestionado, obtienes activos de vídeo listos para su publicación global con costes optimizados.
              Transformamos el subtitulado en una herramienta de internacionalización potente, eliminando la fricción
              operativa y asegurando resultados profesionales certificados.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio />

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
              Preguntas <GradientText>Frecuentes</GradientText>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="surface-elevated rounded-xl border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
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

export default SubtituladoProfesionalVideoPage;
