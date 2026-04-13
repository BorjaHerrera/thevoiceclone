import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Layout, Layers, Workflow, UserSquare2, ShieldCheck, RefreshCw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import videoProduccionIASrc from "@/assets/PRODUCCION VIDEO SERVICIO.webp";
const videoProduccionIA = typeof videoProduccionIASrc === "string" ? videoProduccionIASrc : (videoProduccionIASrc as { src: string }).src;

const featureCards = [
  {
    icon: Layout,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Formatos de Alto Impacto",
    text: "Optimizamos vídeos explicativos, testimoniales y anuncios digitales adaptados por IA según el canal y público objetivo.",
  },
  {
    icon: Layers,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Escalabilidad Corporativa",
    text: "Aceleramos la producción automatizando vídeos explicativos y versionados para redes sociales sin empezar de cero.",
  },
  {
    icon: Workflow,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Workflows Híbridos",
    text: "Combinamos automatización con criterio creativo humano para reutilizar plantillas narrativas con máxima calidad visual.",
  },
  {
    icon: UserSquare2,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Avatares Profesionales",
    text: "Ideal para mensajes recurrentes y contenido multilingüe, manteniendo una presencia visual constante y profesional.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Garantía de Calidad",
    text: "Aplicamos una revisión humana final a cada vídeo generado por IA para asegurar que el tono y la estética cumplen tus estándares.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Actualización Rápida",
    text: "Facilitamos la edición y actualización de contenidos en alta frecuencia, eliminando la dependencia de grabaciones físicas.",
  },
];

const sections: { id: string; title: string; navLabel: string; intro: string; subsections: { heading: string; text: string }[] }[] = [
  {
    id: "videos-ia-revision",
    title: "Vídeos generados con IA y revisión humana final",
    navLabel: "Vídeos generados con IA y revisión humana final",
    intro:
      "Los formatos con mejor rendimiento suelen ser los vídeos explicativos cortos, testimoniales, anuncios digitales y presentaciones de marca. La IA permite crear versiones adaptadas de un mismo vídeo según el canal, el público o el idioma sin necesidad de empezar la producción desde cero cada vez.",
    subsections: [],
  },
  {
    id: "contenido-escalable",
    title: "Generación de contenido corporativo escalable",
    navLabel: "Generación de contenido corporativo escalable",
    intro:
      "La generación de vídeos con IA acelera la producción automatizando la creación de vídeos explicativos y el versionado para redes sociales. Gracias a workflows híbridos que combinan automatización y criterio creativo humano, es posible reutilizar plantillas narrativas y reducir tiempos manteniendo siempre la máxima calidad visual.",
    subsections: [],
  },
  {
    id: "avatares-ia-web",
    title: "Avatares IA para web, social y anuncios",
    navLabel: "Avatares IA para web, social y anuncios",
    intro:
      "La producción con avatares IA es ideal para mensajes corporativos recurrentes y contenido multilingüe. Permiten mantener una presencia visual constante, profesional y controlada en entornos de alta frecuencia de publicación, eliminando la dependencia de grabaciones físicas constantes y facilitando actualizaciones rápidas.",
    subsections: [],
  },
];

const faqs = [
  {
    q: "¿Qué tipo de vídeos se pueden producir con IA?",
    a: "Se pueden producir vídeos explicativos, testimoniales, anuncios digitales, presentaciones de marca, contenido para redes sociales y vídeos formativos. La IA permite generar versiones adaptadas a cada canal y audiencia de forma automatizada.",
  },
  {
    q: "¿La IA sustituye al equipo creativo humano?",
    a: "No. La IA acelera tareas repetitivas como edición base, versionado y adaptación de formatos, pero siempre con supervisión y criterio creativo humano para garantizar calidad, coherencia de marca y relevancia del mensaje.",
  },
  {
    q: "¿Cómo funcionan los avatares IA para vídeo corporativo?",
    a: "Los avatares IA son presentadores virtuales que pueden comunicar mensajes en múltiples idiomas sin necesidad de grabaciones presenciales. Son ideales para comunicación interna recurrente, formación y contenido multilingüe a gran escala.",
  },
  {
    q: "¿Cuánto se puede ahorrar con producción asistida por IA?",
    a: "La centralización y automatización pueden reducir hasta un 60% los costes operativos y acortar significativamente los tiempos de entrega, permitiendo producir más contenido con menos recursos.",
  },
  {
    q: "¿Qué formatos y plataformas soportáis?",
    a: "Producimos contenido optimizado para web corporativa, redes sociales (LinkedIn, Instagram, YouTube, TikTok), campañas de anuncios digitales y plataformas internas de comunicación y formación.",
  },
];

const ProduccionVideoIAPage = () => {
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
              Producción de vídeo con IA para empresas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Creamos vídeos corporativos y publicitarios con IA combinando tecnología avanzada y supervisión humana
              para escalar contenido en web, redes sociales y anuncios sin perder calidad ni coherencia de marca. La
              producción de vídeo es hoy uno de los activos más eficaces para generar confianza y aumentar la
              conversión; al integrarse con IA, logramos mayor velocidad, más versiones y un menor coste operativo.
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
                PRODUCCIÓN DE VÍDEO CORPORATIVO PARA <GradientText>WEB, REDES SOCIALES Y ANUNCIOS</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                La producción audiovisual mejora la presencia digital en todos los puntos de contacto, desde la web
                corporativa hasta las campañas publicitarias. Gracias a la IA, es posible comunicar mensajes complejos
                de forma clara, adaptar contenidos a diferentes formatos sin rehacer la producción y mantener una
                identidad visual homogénea incluso con un alto volumen de contenido.
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
                Producción audiovisual con IA: Tecnología de vanguardia con supervisión experta
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nuestra producción combina narrativa visual estratégica, motion graphics y elementos generados con IA,
                como avatares o escenas automatizadas. El objetivo es construir una presencia visual consistente y
                reconocible en todos los mercados, traduciendo la identidad de marca en un lenguaje visual adaptable a
                múltiples plataformas.
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
              src={videoProduccionIA}
              alt="Producción de Vídeo con IA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGridSection
        heading="Arquitectura de vídeo inteligente para empresas"
        description="La IA permite crear versiones adaptadas de un mismo vídeo según el canal, el público o el idioma sin necesidad de empezar la producción desde cero cada vez. Gracias a workflows híbridos, mantenemos siempre la máxima calidad visual y el criterio creativo."
        cards={featureCards}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            {/* Left Column – Sticky Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  ESTRATEGIAS DE PRODUCCIÓN DE VÍDEO CON IA
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

      {/* Valor añadido */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Máxima eficiencia en tu estrategia audiovisual:{" "}
              <GradientText>Escalabilidad, ahorro y calidad certificada</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Centralizar tu producción con nosotros permite acceder a tecnología de IA avanzada sin inversión inicial,
              liberando recursos internos mientras garantizas una coherencia de marca absoluta en todos tus canales. Al
              combinar una gestión centralizada con soluciones de localización y contenido multilingüe, transformamos la
              producción de vídeo en una ventaja competitiva real: escalarás tu comunicación rápidamente, reducirás
              drásticamente los costes operativos y obtendrás siempre un resultado profesional adaptado a cualquier
              mercado internacional.
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

export default ProduccionVideoIAPage;
