import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GradientText from "./GradientText";

const faqsEs = [
  {
    q: "¿Qué es la localización multimedia?",
    a: "Adaptamos contenido audiovisual —vídeo, audio y texto— a múltiples idiomas y mercados, combinando IA y revisión humana para mantener tono, formato e identidad de marca.",
  },
  {
    q: "¿Es adecuado para grandes empresas?",
    a: "Sí. Flujos diseñados para escalar, gestionar contenido complejo y producir en varios idiomas simultáneamente.",
  },
  {
    q: "¿Revisan humanos el contenido generado por IA?",
    a: "Siempre. La validación humana garantiza precisión, coherencia de marca y calidad en cada proyecto.",
  },
  {
    q: "¿Cómo mejora la eficiencia la IA?",
    a: "La IA acelera tareas repetitivas como subtitulado, preprocesamiento de traducciones y gestión de versiones, liberando al equipo humano para decisiones estratégicas y de valor.",
  },
  {
    q: "¿Se pueden localizar vídeos de formación corporativa?",
    a: "Sí. Cubrimos cumplimiento, e-learning, marketing y comunicaciones internas, asegurando consistencia global y adaptación cultural.",
  },
];

const faqsEn = [
  {
    q: "What is multimedia localisation?",
    a: "We adapt audiovisual content — video, audio and text — to multiple languages and markets, combining AI and human review to maintain tone, format and brand identity.",
  },
  {
    q: "Is it suitable for large enterprises?",
    a: "Yes. Workflows designed to scale, manage complex content and produce in multiple languages simultaneously.",
  },
  {
    q: "Do humans review AI-generated content?",
    a: "Always. Human validation guarantees accuracy, brand consistency and quality on every project.",
  },
  {
    q: "How does AI improve efficiency?",
    a: "AI accelerates repetitive tasks such as subtitling, translation pre-processing and version management, freeing the human team for strategic and high-value decisions.",
  },
  {
    q: "Can corporate training videos be localised?",
    a: "Yes. We cover compliance, e-learning, marketing and internal communications, ensuring global consistency and cultural adaptation.",
  },
];

const FAQ = () => {
  const router = useRouter();
  const isEn = router.locale === "en";
  const faqs = isEn ? faqsEn : faqsEs;
  const heading = isEn ? "Frequently" : "Preguntas";
  const headingGradient = isEn ? "Asked Questions" : "Frecuentes";

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
            {heading} <GradientText>{headingGradient}</GradientText>
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
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-7">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
