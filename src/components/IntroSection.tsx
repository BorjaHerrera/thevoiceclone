import { motion } from "framer-motion";
import { useRouter } from "next/router";
import GradientText from "./GradientText";

const copy = {
  es: {
    heading1: "POTENCIA TU ALCANCE CON IA.",
    heading2: "ASEGURA TU IMPACTO CON TALENTO HUMANO.",
    p1: "Producir y localizar vídeos a escala es un desafío para equipos globales: sin procesos adecuados, la calidad, el tono y la identidad de marca pueden perderse.",
    p2: "The Voice Clone es una agencia de localización con una comprensión innate del negocio. Nuestros servicios de localización multimedia combinan IA asistida con revisión humana, unificando vídeo, locución, subtítulos y traducción en un único workflow.",
    p3: "Este enfoque híbrido permite ofrecer resultados consistentes y eficientes en todos los mercados, ayudando a las empresas a escalar contenido global sin comprometer la calidad ni el control creativo.",
  },
  en: {
    heading1: "AMPLIFY YOUR REACH WITH AI.",
    heading2: "SECURE YOUR IMPACT WITH HUMAN TALENT.",
    p1: "Producing and localising video at scale is a challenge for global teams: without the right processes, quality, tone and brand identity can be lost.",
    p2: "The Voice Clone is a localisation agency with an innate understanding of business. Our multimedia localisation services combine AI assistance with human review, unifying video, voice over, subtitles and translation in a single workflow.",
    p3: "This hybrid approach delivers consistent, efficient results across all markets, helping companies scale global content without compromising quality or creative control.",
  },
};

const IntroSection = () => {
  const router = useRouter();
  const t = router.locale === "en" ? copy.en : copy.es;

  return (
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
              {t.heading1} <GradientText>{t.heading2}</GradientText>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{t.p1}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.p2}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.p3}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
