import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, UserCheck, BookMarked, Globe2, Cpu, Sparkles, ClipboardCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import humanAiCollaborationSrc from "@/assets/human-ai-collaboration.jpg";
const humanAiCollaboration = typeof humanAiCollaborationSrc === "string" ? humanAiCollaborationSrc : (humanAiCollaborationSrc as { src: string }).src;

const sections: { id: string; title: string; navLabel: string; intro: string; subsections: { heading: string; text: string }[] }[] = [
  {
    id: "traduccion-corporativa",
    title: "Traducción profesional: escalabilidad con coherencia terminológica",
    navLabel: "Traducción corporativa: precisión y consistencia.",
    intro:
      "Centralizamos la gestión de tus activos textuales para evitar la dispersión de estilo. Diseñamos procesos que aseguran que tus informes, contratos y manuales reflejen fielmente la profesionalidad de tu empresa en cualquier parte del mundo.",
    subsections: [],
  },
  {
    id: "metodologia-hibrida",
    title: "Metodología híbrida: el equilibrio entre IA y lingüistas nativos",
    navLabel: "El valor estratégico de la revisión humana asistida.",
    intro:
      "La IA nos permite procesar grandes volúmenes de texto en tiempo récord, pero es la supervisión humana la que garantiza la fluidez y el rigor B2B. Este enfoque permite escalar tu comunicación internacional manteniendo un control de calidad certificado.",
    subsections: [],
  },
  {
    id: "externalizar-traduccion",
    title: "Externalizar la traducción simplifica la expansión de tu negocio",
    navLabel: "Externalizar la localización para simplificar tu operativa.",
    intro:
      "Delegar la localización en un partner especializado permite que tu equipo se concentre en el core business. Transformas una tarea operativa compleja en un activo estratégico, obteniendo costes predecibles y una presencia global homogénea.",
    subsections: [],
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre un servicio profesional y un traductor automático?",
    a: "Los servicios profesionales incluyen revisión humana, control de estilo y adaptación cultural. Los traductores automáticos carecen de supervisión, lo que genera errores de contexto e inconsistencias de marca.",
  },
  {
    q: "¿Qué pasos de revisión humana realizáis tras usar IA?",
    a: "Realizamos una revisión terminológica exhaustiva, control de tono corporativo, ajuste de estilo y una validación de coherencia final para asegurar que el texto sea natural y preciso.",
  },
  {
    q: "¿Cómo garantizáis que se mantenga mi identidad de marca?",
    a: "Utilizamos glosarios corporativos personalizados y guías de estilo específicas para cada cliente. Esto, sumado a la revisión de expertos nativos, asegura que tu marca hable siempre con la misma voz.",
  },
  {
    q: "¿Qué tipo de contenidos podéis traducir?",
    a: "Estamos especializados en contenido corporativo B2B: desde documentos técnicos y contratos hasta marketing digital, sitios web y presentaciones corporativas de alto nivel.",
  },
];

const ServicioTraduccionPage = () => {
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
              Traducción profesional con IA y rigor humano
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Garantizamos que tu comunicación global mantenga la precisión y el impacto original en cada mercado. No
              dependemos de motores automáticos sin control: combinamos tecnología de IA asistida con la revisión de
              expertos nativos para asegurar una terminología uniforme y una adaptación cultural impecable.
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
                Tu identidad de marca <GradientText>protegida en cada idioma.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Muchas empresas arriesgan su reputación con traducciones automáticas que carecen de contexto y estilo
                corporativo. En The Voice Clone, nuestro flujo híbrido unifica la velocidad tecnológica con el criterio
                humano, logrando un 95% de consistencia terminológica y eliminando los errores comunes que las
                herramientas genéricas suelen pasar por alto.
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
                Traducción inteligente y revisión humana: Eficiencia máxima sin errores de IA.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Optimiza tus presupuestos en <strong>documentación técnica, campañas de marketing y contenido web</strong>{" "}
                internacional. Nuestra metodología reduce hasta un 40% los errores terminológicos mediante el uso de
                glosarios centralizados y supervisión experta, permitiéndote escalar tu presencia global sin comprometer
                la calidad ni los plazos de entrega.
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
              alt="Traducción profesional con tecnología IA y revisión humana"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="El ecosistema definitivo para tu traducción B2B"
        description="Un flujo de trabajo diseñado para empresas que buscan rigor, escalabilidad y una identidad sonora y textual unificada."
        cards={[
          {
            icon: UserCheck,
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            title: "Revisión Experta",
            text: "Cada proyecto es supervisado por lingüistas profesionales que aseguran el tono, el estilo y la intención comunicativa.",
          },
          {
            icon: BookMarked,
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            title: "Glosarios Centralizados",
            text: "Implementamos bases terminológicas propias para garantizar que tu vocabulario técnico sea idéntico en todos los idiomas.",
          },
          {
            icon: Globe2,
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            title: "Adaptación Cultural",
            text: "Más allá de traducir palabras, localizamos el mensaje para que conecte con el contexto social y comercial de cada mercado.",
          },
          {
            icon: Cpu,
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-400",
            title: "IA Asistida",
            text: "Utilizamos tecnología de vanguardia para acelerar procesos repetitivos, optimizando tiempos de entrega y costes operativos.",
          },
          {
            icon: Sparkles,
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            title: "Marketing y Estilo",
            text: "Adaptamos el \"copy\" publicitario para que mantenga su fuerza comercial y emocional en cualquier lengua.",
          },
          {
            icon: ClipboardCheck,
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            title: "Control de Calidad",
            text: "Aplicamos estándares rigurosos de validación final para certificar que cada entregable es apto para su publicación global.",
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
                  Un modelo de traducción que protege y potencia tu marca
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
                  {section.subsections.map((sub: { heading: string; text: string }, j: number) => (
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
              Donde la traducción se convierte en un <GradientText>activo de confianza.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              La gestión interna de traducciones suele derivar en inconsistencias que dañan la imagen de marca. Al confiar
              en nuestro servicio gestionado, accedes a una infraestructura de traducción profesional que garantiza
              coherencia, rapidez y ahorro operativo. Escalamos tu comunicación rápidamente para que tu mensaje llegue a
              cualquier mercado con la máxima fiabilidad.
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

export default ServicioTraduccionPage;
