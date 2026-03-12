import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Languages, Video, Workflow, Mic, Subtitles, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import type { FeatureCard } from "@/components/FeatureGridSection";
import localizacionAudiovisualSrc from "@/assets/localizacion-audiovisual.jpg";
const localizacionAudiovisual = typeof localizacionAudiovisualSrc === "string" ? localizacionAudiovisualSrc : (localizacionAudiovisualSrc as { src: string }).src;

const featureCards: FeatureCard[] = [
  {
    icon: Languages,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Localización de Vídeo",
    text: "Procesos híbridos con IA y revisión humana que aceleran la distribución internacional manteniendo tono, terminología y consistencia cultural.",
  },
  {
    icon: Video,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Producción de Vídeo",
    text: "Producción asistida por IA que reduce costes y tiempos automatizando tareas repetitivas con validación experta de marca.",
  },
  {
    icon: Workflow,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Localización End-to-End",
    text: "Flujo único que unifica vídeo, locución, subtítulos y traducción evitando errores y asegurando consistencia con un único partner estratégico.",
  },
  {
    icon: Mic,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Locución",
    text: "Tecnologías de voz avanzadas con validación humana que llevan tu narrativa a cualquier idioma manteniendo una identidad de marca coherente y natural.",
  },
  {
    icon: Subtitles,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Subtitulado",
    text: "Legibilidad y sincronización perfecta mediante IA y revisores expertos que garantizan la adaptación cultural y mejoran el engagement global.",
  },
  {
    icon: FileText,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Traducción",
    text: "Modelo de IA supervisada que adapta guiones y textos con rigor terminológico y estilo corporativo, optimizando velocidad y coste a gran escala.",
  },
];

const sections = [
  {
    id: "localizacion-hibrida",
    title: "El valor de la localización híbrida: La potencia de la IA con garantía humana",
    navLabel: "El valor de la localización híbrida",
    intro:
      "Nuestro servicio combina la eficiencia tecnológica con la revisión experta para ofrecer una solución integral a empresas multinacionales. Este modelo híbrido garantiza que la localización no sea solo un proceso técnico, sino una adaptación cultural precisa que protege la identidad de la marca en cada mercado.",
    subsections: [
      {
        heading: "Workflow híbrido: La unión de velocidad y precisión",
        text: "Al integrar inteligencia artificial con supervisión humana, logramos una escalabilidad sin precedentes en la traducción y sincronización de contenidos. Mientras la tecnología acelera los tiempos de entrega, nuestros especialistas aseguran que el tono, la terminología corporativa y las referencias locales sean exactos y culturalmente relevantes.",
      },
      {
        heading: "Ventajas estratégicas frente a la automatización pura",
        text: "A diferencia de las herramientas automáticas sin control, nuestro servicio gestionado minimiza las revisiones constantes y garantiza un control total sobre la reputación de la marca. Esta combinación optimiza la seguridad del proceso y asegura una experiencia de usuario superior, superando cualquier solución que carezca de supervisión profesional.",
      },
      {
        heading: "Eficiencia operativa y optimización de presupuestos",
        text: "Centralizar la localización con un partner único elimina los costes ocultos derivados de gestionar múltiples proveedores y evita errores técnicos recurrentes. Este enfoque permite a las empresas escalar su contenido globalmente utilizando menos recursos internos y reduciendo drásticamente la fricción en la cadena de producción.",
      },
    ],
  },
  {
    id: "aplicaciones-end-to-end",
    title: "Aplicaciones estratégicas de localización end-to-end",
    navLabel: "Aplicaciones estratégicas de localización end-to-end",
    intro: "Para que una estrategia multimedia sea efectiva a escala internacional, debe cubrir todos los puntos de contacto del usuario de forma impecable. Nuestras soluciones integrales cubren todo el ciclo de vida del contenido, desde el análisis del guion original hasta la entrega del activo final listo para su publicación, garantizando que no existan brechas de calidad en las áreas más críticas de la compañía.",
    subsections: [
      {
        heading: "Excelencia en formación corporativa y e-learning",
        text: "La localización para el sector educativo garantiza que la experiencia pedagógica sea consistente y clara en cualquier idioma. Gracias al modelo híbrido, es posible adaptar el tono educativo y los ejemplos locales en programas de formación global sin perder la calidad técnica ni el impacto formativo original.",
      },
      {
        heading: "Impacto en comunicación y marketing internacional",
        text: "Para las campañas de marketing y la comunicación interna, aseguramos que la coherencia de marca sea absoluta en todos los canales. La gestión centralizada permite un control de calidad riguroso que adapta el mensaje a la cultura local mientras se mantiene la visión global de la compañía.",
      },
    ],
  },
  {
    id: "calidad-certificada",
    title: "Localización profesional certificada: Calidad humana y eficiencia IA",
    navLabel: "Localización profesional certificada: Calidad humana y eficiencia IA",
    intro: "La confianza es el pilar de cualquier proyecto de externalización audiovisual. Entendemos que la precisión técnica y la seguridad de la información son prioridades innegociables para las grandes organizaciones; por ello, nuestro flujo de trabajo está diseñado para ofrecer garantías sólidas en cuanto a retorno de inversión, fidelidad terminológica y protección de activos digitales.",
    subsections: [
      {
        heading: "Rentabilidad e inversión inteligente",
        text: "Aunque un servicio gestionado requiere una inversión inicial clara, su valor reside en evitar las costosas retraducciones y errores de coherencia. El uso de modelos híbridos optimiza el retorno de inversión al acelerar los lanzamientos y eliminar gastos imprevistos.",
      },
      {
        heading: "Calidad y consistencia profesional",
        text: "La precisión del contenido está garantizada por un flujo donde la IA potencia la ejecución y los humanos certifican el cumplimiento de los estándares corporativos. Este equilibrio asegura que el resultado final sea impecable tanto en forma como en fondo terminológico.",
      },
      {
        heading: "Máxima seguridad y confidencialidad del contenido",
        text: "Entendemos la sensibilidad de la información corporativa, por lo que aplicamos protocolos estrictos y normativas internacionales de protección de datos. Los flujos de trabajo gestionados aseguran que cada archivo se trate con total confidencialidad, ofreciendo un entorno seguro para los activos de la empresa.",
      },
    ],
  },
];

const faqs = [
  {
    q: "¿Se puede escalar a más de 10 idiomas?",
    a: "Sí, un workflow gestionado permite expandir contenido corporativo a múltiples idiomas manteniendo coherencia y calidad absoluta.",
  },
  {
    q: "¿Pueden integrarse subtítulos con voice-over?",
    a: "Sí, la integración es parte nativa del workflow, garantizando sincronización perfecta y estándares de accesibilidad.",
  },
  {
    q: "¿Las voces IA son naturales?",
    a: "Con nuestra supervisión humana constante, las voces IA mantienen el tono, la entonación y la coherencia de marca necesaria para un entorno profesional.",
  },
  {
    q: "¿Qué ventajas tiene frente a herramientas automáticas?",
    a: "A diferencia de las apps automáticas, ofrecemos control integral, QA lingüístico y una adaptación cultural profesional que protege tu reputación de marca.",
  },
];

const LocalizacionAudiovisualPage = () => {
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
              Servicio de localización audiovisual
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Integramos traducción, subtitulado, doblaje y adaptación cultural bajo un único workflow gestionado.
              Permitimos a las empresas globales adaptar su contenido multimedia a múltiples idiomas sin perder
              coherencia de marca ni eficiencia operativa, combinando IA asistida y revisión humana para garantizar
              calidad y rapidez en proyectos críticos.
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
                GESTIÓN INTEGRAL DE <GradientText>LOCALIZACIÓN AUDIOVISUAL Y E-LEARNING</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                En The Voice Clone gestionamos de manera integral la localización de vídeos corporativos, formación
                e-learning, voice-over y subtítulos, evitando errores de consistencia y reduciendo costes. Implementamos
                beneficios de workflows end-to-end y soluciones híbridas IA + humanos para transformar tu comunicación
                global y generar resultados B2B calificados con total claridad y control profesional.
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
                Soluciones Multimedia con IA: Vídeo, audio, subtitulado y traducción
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La localización multimedia inteligente transforma la comunicación corporativa al integrar vídeo, audio y
                texto en un flujo de trabajo adaptado culturalmente que supera con creces la traducción tradicional.
                Mediante el uso de soluciones híbridas que combinan la agilidad de la IA con la precisión de la
                supervisión humana, las empresas logran una consistencia de marca impecable en marketing y formación,
                garantizando subtítulos y doblajes profesionales que cumplen con estándares de accesibilidad y mantienen
                la máxima coherencia tonal en cada mercado.
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
              src={localizacionAudiovisual}
              alt="Interfaz profesional de localización audiovisual con edición de subtítulos y traducción digital"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGridSection
        heading="El ecosistema definitivo para tu contenido audiovisual"
        description="Ofrecemos un despliegue completo de capacidades audiovisuales diseñadas para eliminar las barreras de idioma y coste. Nuestra metodología híbrida garantiza que cada pieza, desde el guion hasta la entrega final, mantenga la excelencia técnica y cultural que tu marca requiere."
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
                  ESTRATEGIAS DE LOCALIZACIÓN PROFESIONAL
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
                  {section.intro && (
                    <p className="text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl">{section.intro}</p>
                  )}
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
              Localización audiovisual integral con{" "}
              <GradientText>IA asistida y revisión humana</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ofrecemos el control total para adaptar tus activos a múltiples idiomas y culturas. Al centralizar los
              workflows, no solo reduces costes y fricción operativa, sino que aseguras una coherencia de marca
              profesional. Es la solución ideal para empresas que necesitan escalar programas de formación y
              comunicación global con la máxima confianza y acabado profesional.
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

export default LocalizacionAudiovisualPage;
