import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "¿Qué es la localización multimedia y en qué se diferencia de la producción?",
    a: "La localización adapta contenido existente (subtítulos, doblaje, cultura) a nuevos mercados, mientras que la producción genera contenido desde cero (vídeos corporativos, e-learning o marketing).",
  },
  {
    q: "¿Qué ventajas tiene vuestro servicio gestionado frente a herramientas automáticas?",
    a: "A diferencia de las apps 100% automáticas, ofrecemos control integral, coherencia de marca, control de calidad (QA) lingüístico y una adaptación cultural que la IA por sí sola no alcanza.",
  },
  {
    q: "¿La IA sustituye al equipo creativo o lingüístico humano?",
    a: "No. La IA se encarga de las tareas repetitivas y técnicas (edición base, pre-traducción). Sin embargo, todos los proyectos cuentan con supervisión humana para garantizar el tono, la precisión terminológica y la identidad de marca.",
  },
  {
    q: "¿Las voces y avatares de IA suenan naturales?",
    a: "Sí. Utilizamos tecnología de última generación y, lo más importante, nuestros expertos ajustan el ritmo, la entonación y la limpieza técnica para que el resultado sea profesional y corporativo.",
  },
  {
    q: "¿Se pueden localizar contenidos a más de 10 idiomas simultáneamente?",
    a: "Sí. Nuestros flujos de trabajo están diseñados para escalar y gestionar proyectos complejos en múltiples idiomas a la vez, manteniendo la coherencia en todos los mercados.",
  },
  {
    q: "¿Qué tipo de contenidos y plataformas soportáis?",
    a: "Desde vídeos e-learning y formación corporativa hasta campañas para redes sociales (LinkedIn, Instagram, TikTok) y presentaciones B2B de alto nivel.",
  },
  {
    q: "¿Ofrecéis servicios de clonación de voz?",
    a: "No. Nos centramos en locución profesional y avatares corporativos; no realizamos clonación de voz ni servicios para entretenimiento o ficción.",
  },
  {
    q: "¿Cuánto se puede ahorrar con la producción asistida por IA?",
    a: "La automatización de procesos técnicos puede reducir hasta un 60% los costes operativos y acortar drásticamente los tiempos de entrega, permitiendo producir más volumen con menos recursos.",
  },
  {
    q: "¿Cómo aseguran la coherencia de marca en distintos países?",
    a: "Centralizamos la gestión, aplicamos tus manuales de estilo y glosarios terminológicos de forma estricta, asegurando que tu marca hable con una sola voz en cualquier idioma.",
  },
  {
    q: "¿Cuál es la diferencia entre vuestro subtitulado y el automático de plataformas como YouTube?",
    a: "El automático comete errores de contexto y sincronización. Nuestro servicio profesional incluye adaptación cultural, ajuste de tiempos preciso y una revisión experta para que el mensaje sea exacto.",
  },
  {
    q: "¿Pueden adaptar el contenido a mi manual de marca específico?",
    a: "Totalmente. Nos aseguramos de que el estilo, la terminología técnica y el tono sean consistentes con tu identidad corporativa predefinida.",
  },
];

const PreguntasFrecuentesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
          }}
        />
        <div className="container relative z-10 px-4 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-32 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white"
            >
              Preguntas Frecuentes
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronsDown className="w-12 h-12 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreguntasFrecuentesPage;
