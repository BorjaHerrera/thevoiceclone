import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Languages, TrendingUp, Zap, DollarSign, UserSquare2, Settings2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import videoLocalizationSrc from "@/assets/LOCALIZACION VIDEO SERVICIO.webp";
const videoLocalization = typeof videoLocalizationSrc === "string" ? videoLocalizationSrc : (videoLocalizationSrc as { src: string }).src;

const sections = [
  {
    id: "formacion-elearning",
    title: "Soluciones de vídeo para formación y e-learning multilingüe",
    navLabel: "Soluciones de vídeo para formación y e-learning multilingüe",
    intro:
      "La localización permite que un solo curso de formación sea accesible y efectivo en múltiples regiones simultáneamente. La automatización se encarga del volumen, mientras que la supervisión humana garantiza que el aprendizaje sea pedagógicamente correcto.",
    subsections: [
      {
        heading: "Casos de éxito y aplicaciones prácticas en el sector",
        text: "Hoy en día, las multinacionales más avanzadas generan cientos de vídeos formativos al mes asegurando una coherencia total en cada mercado. Gracias a la implementación de flujos asistidos por IA, estas empresas logran reducir hasta un 40% el tiempo dedicado a la edición manual. Esta gestión centralizada permite que, independientemente del país, todos los equipos reciban la misma visión de empresa mediante una integración perfecta de doblaje y subtítulos multilingües.",
      },
    ],
  },
  {
    id: "optimizacion-costes",
    title: "Optimización de costes en la producción de vídeo",
    navLabel: "Optimización de costes en la producción de vídeo",
    intro:
      "Centralizar la producción y usar herramientas de IA permite eliminar redundancias y reducir drásticamente el presupuesto por minuto de vídeo producido, sin sacrificar la excelencia.",
    subsections: [
      {
        heading: "Estrategias para maximizar el retorno de inversión",
        text: "Para lograr una optimización real, es fundamental automatizar procesos base como el doblaje y el subtitulado, permitiendo entregas mucho más ágiles. Al establecer un centro de producción centralizado, las compañías evitan la duplicidad de gastos entre departamentos y países. La clave del éxito reside en combinar estas herramientas tecnológicas con una revisión humana que certifique que el contenido final mantiene el estándar de calidad y el tono de marca deseado.",
      },
    ],
  },
  {
    id: "avatares-ia",
    title: "Avatares IA: El futuro de la comunicación interna",
    navLabel: "Avatares IA: El futuro de la comunicación interna",
    intro:
      'Los avatares de IA son la solución ideal para mensajes recurrentes y formación continua, permitiendo "grabar" en decenas de idiomas sin necesidad de cámaras ni sets de rodaje físicos.',
    subsections: [
      {
        heading: "Claves para una implementación corporativa efectiva",
        text: "La adopción de esta tecnología requiere identificar con precisión qué mensajes se benefician de un avatar y cuáles requieren un presentador real para mantener la cercanía. Es vital adaptar la estética y el lenguaje de estos personajes según el mercado de destino para asegurar la relevancia local. Además, una supervisión humana constante garantiza que cada intervención del avatar cumpla estrictamente con los protocolos de seguridad y el tono de voz corporativo.",
      },
    ],
  },
];

const faqs = [
  {
    q: "¿Qué son los avatares IA y cómo se usan en comunicación corporativa?",
    a: "Los avatares IA son presentadores virtuales generados por inteligencia artificial que pueden comunicar mensajes en múltiples idiomas sin necesidad de grabaciones presenciales. Se utilizan para formación interna, comunicados corporativos y contenido recurrente, reduciendo costes y tiempos de producción.",
  },
  {
    q: "¿Es necesario el doblaje en la formación corporativa multilingüe?",
    a: "Sí. El doblaje profesional mejora significativamente la retención y comprensión del contenido formativo, ya que los empleados procesan mejor la información en su idioma nativo. Nuestro enfoque híbrido de IA y revisión humana garantiza un doblaje natural y preciso a escala.",
  },
  {
    q: "¿Cómo se automatiza el e-learning con revisión humana?",
    a: "La IA se encarga de las tareas repetitivas como transcripción, traducción inicial y sincronización de subtítulos, mientras que lingüistas y pedagogos revisan cada entrega para asegurar la precisión terminológica, la coherencia pedagógica y la adecuación cultural del contenido.",
  },
  {
    q: "¿Cuántos idiomas se pueden gestionar simultáneamente?",
    a: "Nuestros flujos de localización permiten gestionar decenas de idiomas en paralelo. La automatización con IA escala la producción, mientras que revisores nativos especializados validan cada versión lingüística.",
  },
  {
    q: "¿Qué ventajas tiene centralizar la producción de vídeo?",
    a: "Centralizar elimina la duplicidad de costes entre departamentos y países, asegura coherencia de marca global y reduce el time-to-market gracias a workflows estandarizados y automatizados.",
  },
];

const LocalizacionVideoPage = () => {
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
              Localización de vídeo para empresas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              La localización de vídeo permite a las compañías internacionales adaptar sus activos, desde formación
              corporativa hasta comunicación interna, a cualquier idioma y región. Al combinar doblaje, subtítulos y
              adaptación cultural con workflows asistidos por IA, las organizaciones logran una expansión eficiente,
              manteniendo la calidad y el tono de voz original en cada mercado.
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
                LOCALIZACIÓN DE VÍDEO PARA <GradientText>FORMACIÓN y ELEARNING</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Voice Clone optimiza el ciclo completo de localización: desde el doblaje de cursos de e-learning
                hasta el subtitulado inteligente y la producción asistida por IA. Centraliza tus procesos para reducir
                costes, garantizar la coherencia de marca y distribuir contenido multilingüe a gran escala para equipos
                globales de alto rendimiento.
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
                ¿Qué es la localización de vídeo y por qué es clave?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La localización de vídeo va más allá de la traducción: adapta voces, subtítulos y elementos visuales
                para conectar culturalmente con cada región. Mediante un modelo híbrido de{" "}
                <strong>IA y revisión humana</strong>, garantiza una expansión global rápida sin sacrificar la identidad
                de marca ni la precisión cultural.
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
              src={videoLocalization}
              alt="Localización de Vídeo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="Tu estrategia de vídeo a la velocidad de tu negocio."
        description="La localización tradicional ya no es suficiente para un mercado global en tiempo real. Hemos rediseñado el flujo de trabajo audiovisual combinando IA generativa con supervisión experta para que puedas adaptar, doblar y distribuir tus contenidos formativos en decenas de idiomas de forma simultánea, eliminando los cuellos de botella y maximizando el impacto de cada minuto producido."
        cards={[
          {
            icon: Languages,
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            title: "Elearning multilingüe",
            text: "La localización permite que un solo curso sea efectivo en múltiples regiones. Combinamos la automatización para gestionar grandes volúmenes de contenido con la supervisión humana para garantizar el rigor pedagógico.",
          },
          {
            icon: TrendingUp,
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            title: "Casos de éxito",
            text: "Las multinacionales líderes ya generan cientos de vídeos al mes con flujos asistidos por IA. Esto reduce hasta un 40% el tiempo de edición manual y asegura una visión de empresa coherente.",
          },
          {
            icon: Zap,
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            title: "Optimización de costes",
            text: "Centralizar la producción y aplicar herramientas de IA permite eliminar redundancias operativas. El resultado es una reducción drástica del presupuesto por minuto de vídeo producido.",
          },
          {
            icon: DollarSign,
            iconBg: "bg-pink-500/20",
            iconColor: "text-pink-400",
            title: "Maximización del ROI",
            text: "La clave del retorno de inversión reside en automatizar procesos base como el doblaje y evitar duplicidades entre departamentos. La revisión humana final certifica la calidad.",
          },
          {
            icon: UserSquare2,
            iconBg: "bg-rose-500/20",
            iconColor: "text-rose-400",
            title: "Avatares IA",
            text: 'Los avatares son la solución ideal para mensajes recurrentes y formación continua. Permiten "grabar" en decenas de idiomas de forma instantánea, sin necesidad de sets de rodaje.',
          },
          {
            icon: Settings2,
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            title: "Implementación efectiva",
            text: "Es vital identificar qué mensajes requieren un avatar y cuáles un presentador real. Adaptar la estética al mercado local garantiza la relevancia y el tono corporativo.",
          },
        ]}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            {/* Left Column – Sticky Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  ADAPTACIÓN GLOBAL DE VÍDEO: ESCALA CON IA
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

            {/* Right Column – Narrative Content */}
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

      {/* Visibilidad */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Localización de vídeo asistida por IA con <GradientText>supervisión humana</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              El equilibrio perfecto para escalar: la tecnología aporta la velocidad para globalizar contenidos,
              mientras que el experto humano asegura la coherencia de marca y la relevancia cultural necesaria para que
              el mensaje impacte de verdad.
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

export default LocalizacionVideoPage;
