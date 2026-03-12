import { motion } from "framer-motion";
import GradientText from "./GradientText";

const IntroSection = () => (
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
            POTENCIA TU ALCANCE CON IA. <GradientText>ASEGURA TU IMPACTO CON TALENTO HUMANO.</GradientText>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Producir y localizar vídeos a escala es un desafío para equipos globales: sin procesos adecuados, la
              calidad, el tono y la identidad de marca pueden perderse.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The Voice Clone es una agencia de localización con una comprensión innate del negocio. Nuestros servicios
              de localización multimedia combinan IA asistida con revisión humana, unificando vídeo, locución,
              subtítulos y traducción en un único workflow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este enfoque híbrido permite ofrecer resultados consistentes y eficientes en todos los mercados, ayudando
              a las empresas a escalar contenido global sin comprometer la calidad ni el control creativo.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IntroSection;
