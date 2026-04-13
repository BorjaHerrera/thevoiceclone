import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, FileText, Settings2, Mic2, Globe2, TrendingDown, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import voiceoverImgSrc from "@/assets/LOCUCION_VOCES_IA_SERVICIO.webp";
const voiceoverImg = typeof voiceoverImgSrc === "string" ? voiceoverImgSrc : (voiceoverImgSrc as { src: string }).src;

const sections = [
  {
    id: "locucion-multilingue",
    title: "Locución multilingüe con IA: escalabilidad con coherencia global",
    navLabel: "Locución multilingüe con IA: escalabilidad y coherencia",
    intro:
      "Centralizamos tu comunicación internacional eliminando la compleja coordinación de locutores en distintos países. Diseñamos procesos que aseguran una alineación rigurosa de tono y calidad técnica en todos los idiomas de forma simultánea.",
    subsections: [
      {
        heading: "Adaptación cultural profunda",
        text: "Mediante una adaptación cultural profunda, garantizamos precisión lingüística y una identidad de marca reconocible en cualquier mercado. El resultado es una comunicación global eficiente, profesional y libre de las fricciones logísticas de la producción tradicional.",
      },
    ],
  },
  {
    id: "metodologia-hibrida",
    title: "Metodología híbrida: el equilibrio entre IA y locutores profesionales",
    navLabel: "El equilibrio entre IA y locutores profesionales",
    intro:
      "Las voces generadas por IA son la solución óptima para contenidos de alto volumen y frecuencia, como e-learning y comunicación interna, donde la agilidad y el control de costes son prioritarios.",
    subsections: [
      {
        heading: "Combinación estratégica",
        text: "Para campañas de alto impacto o storytelling con carga emocional, integramos locutores profesionales. No sustituimos la voz humana; la combinamos estratégicamente con la tecnología para ofrecer expresividad y eficiencia en un mismo modelo de producción.",
      },
    ],
  },
  {
    id: "externalizar-produccion",
    title: "Externalizar la producción de voces con IA simplifica los procesos",
    navLabel: "Externalizar la producción de voces simplifica procesos",
    intro:
      "Delegar la producción de voces permite a tu equipo centrarse en la estrategia mientras expertos gestionan la ejecución, edición y control de calidad. Este modelo garantiza entregas estructuradas y un resultado profesional bajo estándares certificados.",
    subsections: [
      {
        heading: "Partner especializado",
        text: "Al confiar en un partner especializado, accedes a tecnología de vanguardia y transformas costes variables en presupuestos predecibles. La producción de voz deja de ser una carga operativa para convertirse en un activo estratégico de comunicación para tu empresa.",
      },
    ],
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre un generador de IA y nuestros servicio de voces IA?",
    a: "El generador es automático; el servicio incluye supervisión, tratamiento humano y masterización.",
  },
  {
    q: "¿Se editan las voces?",
    a: "Sí, ajustamos ritmo y entonación para lograr un resultado natural y estrictamente corporativo.",
  },
  {
    q: "¿Ofrecéis locutores humanos?",
    a: "Sí, los integramos cuando el proyecto requiere una carga emocional o storytelling de alto impacto.",
  },
  {
    q: "¿Hacéis clonación de voz?",
    a: "No, nuestro enfoque es exclusivamente B2B para comunicación, formación y marketing corporativo.",
  },
];

const featureCards = [
  {
    icon: FileText,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Supervisión de Guion",
    text: "Revisamos y optimizamos el ritmo y la claridad del texto antes de generar la voz para asegurar la coherencia corporativa.",
  },
  {
    icon: Settings2,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Refinamiento de Voz",
    text: "Ajustamos manualmente entonación, pausas y énfasis para eliminar la rigidez artificial y lograr una naturalidad absoluta.",
  },
  {
    icon: Mic2,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    title: "Masterización Pro",
    text: "Aplicamos ecualización y limpieza profesional para que el audio sea impecable en cualquier soporte: web, e-learning o anuncios.",
  },
  {
    icon: Globe2,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    title: "Escala Multilingüe",
    text: "Mantén una identidad sonora reconocible en todos los idiomas con una gestión centralizada que elimina la fricción de proveedores locales.",
  },
  {
    icon: TrendingDown,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    title: "Eficiencia en Costes",
    text: "Reduce drásticamente los tiempos de producción y la carga operativa interna sin sacrificar la calidad profesional del entregable.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    title: "Control de Calidad",
    text: "Cada pieza de audio pasa por un filtro experto que certifica el cumplimiento de tus estándares técnicos y terminológicos.",
  },
];

const VocesIAPage = () => {
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
              Voces IA con supervisión experta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              Escalamos tu producción de contenido sin perder calidad ni coherencia de marca. No somos un generador
              automático: gestionamos todo el proceso, desde la revisión estratégica del guion hasta la masterización
              final. El resultado es una locución profesional, eficiente y totalmente alineada con tu identidad
              corporativa.
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

      {/* Section 2 – Intro */}
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
                Nosotros nos encargamos de que <GradientText>tu voz suene perfecta.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olvídate de configurar parámetros. Muchas compañías confunden los generadores automáticos con un
                servicio profesional. Mientras un software solo produce un archivo de audio, nuestro flujo híbrido
                adapta, refina e integra cada voz dentro de tu estrategia global. En The Voice Clone unificamos
                tecnología avanzada con edición humana para garantizar credibilidad, naturalidad y un ahorro operativo
                real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 – IA + Human Split */}
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
                Velocidad IA con rigor humano. Máxima eficiencia en tus locuciones
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Escala tu producción audiovisual con una solución que optimiza tiempos y presupuestos en vídeos
                corporativos, explicaciones de producto y comunicación internacional. Nuestra tecnología de síntesis de
                voz, validada por expertos, permite reducir drásticamente los costes de estudio en contenido para
                e-learning y formación interna, garantizando una coherencia de marca absoluta sin inversión inicial en
                infraestructura.
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
              src={voiceoverImg}
              alt="Voces IA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="El ecosistema definitivo para tus voces IA"
        description="Nuestro workflow asegura que la IA trabaje para tu marca, no al revés. Combinamos precisión técnica y tratamiento experto para ofrecer una solución de audio escalable."
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
                  Innovación tecnológica y talento humano
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              The Voice Clone: Donde la IA se convierte en <GradientText>locución profesional.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Gestionar voces internamente implica curvas de aprendizaje y costes técnicos. Al confiar en nuestro
              servicio gestionado, accedes a tecnología de vanguardia y flujos estructurados con costes predecibles.
              Transformamos la producción de audio en una ventaja competitiva: escalarás tu comunicación rápidamente,
              reducirás la complejidad operativa y obtendrás siempre un resultado profesional certificado.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio videoIds={["gWnV2XRaUv0", "QeDAESHmZBU", "lHSTqk_1uc4"]} />

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

export default VocesIAPage;
