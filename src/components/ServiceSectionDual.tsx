import { motion } from "framer-motion";
import { useRouter } from "next/router";
import GradientText from "./GradientText";

const copy = {
  es: {
    headingPlain: "Servicios de",
    headingGradient: "Vídeo y Multimedia",
    headingSuffix: " para Equipos Globales",
    subtitle: "Los servicios de vídeo y multimedia ayudan a agencias y marcas a producir, adaptar y escalar contenido de manera eficiente para múltiples mercados, preservando el control creativo y la identidad de marca.",
    card1Title: "Localización de Vídeo",
    card1Body: "Procesos híbridos con IA y revisión humana experta para acelerar la distribución internacional manteniendo tono, terminología y consistencia cultural en cada mercado.",
    card2Title: "Producción de Vídeo",
    card2Body: "Producción asistida por IA que reduce costes y tiempos automatizando tareas repetitivas, con expertos validando decisiones creativas y de marca para escalar contenido corporativo.",
  },
  en: {
    headingPlain: "Video and Multimedia",
    headingGradient: "Services",
    headingSuffix: " for Global Teams",
    subtitle: "Video and multimedia services help agencies and brands produce, adapt and scale content efficiently for multiple markets, preserving creative control and brand identity.",
    card1Title: "Video Localisation",
    card1Body: "Hybrid AI and expert human review workflows to accelerate international distribution while maintaining tone, terminology and cultural consistency in every market.",
    card2Title: "Video Production",
    card2Body: "AI-assisted production that reduces costs and time by automating repetitive tasks, with experts validating creative and brand decisions to scale corporate content.",
  },
};

const ServiceSectionDual = ({
  image,
  imageAlt,
  image2,
  image2Alt,
}: {
  image: string;
  imageAlt: string;
  image2?: string;
  image2Alt?: string;
}) => {
  const router = useRouter();
  const t = router.locale === "en" ? copy.en : copy.es;

  return (
    <section id="servicios-detalle" className="py-20 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-4">
            {t.headingPlain} <GradientText>{t.headingGradient}</GradientText>{t.headingSuffix}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img src={image} alt={imageAlt} className="w-full h-auto object-cover aspect-[2/1]" loading="lazy" />
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-4">{t.card1Title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.card1Body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {image2 && (
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img src={image2} alt={image2Alt || ""} className="w-full h-auto object-cover aspect-[2/1]" loading="lazy" />
              </div>
            )}
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-4">{t.card2Title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.card2Body}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionDual;
