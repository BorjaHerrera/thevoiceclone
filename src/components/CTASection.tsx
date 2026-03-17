import { motion } from "framer-motion";
import { useRouter } from "next/router";
import GradientText from "./GradientText";

const copy = {
  es: {
    headingPlain: "Diseñado para Escalar.",
    headingGradient: "Controlado por Expertos",
    p1: "La combinación de automatización IA y supervisión humana permite a los equipos globales escalar operaciones sin sacrificar calidad. La experiencia humana sigue siendo esencial en la adaptación de contenido global.",
    p2: "Flujos totalmente automatizados pueden generar errores de tono o inconsistencias de marca. Lingüistas, productores y especialistas en localización validan cada entrega, asegurando resultados confiables y seguros.",
    p3: "Tecnología y IA agilizan procesos, pero los humanos deciden, asegurando resultados de calidad, coherentes y seguros para la marca.",
    cta: "Consulta con nuestro equipo",
  },
  en: {
    headingPlain: "Built to Scale.",
    headingGradient: "Controlled by Experts",
    p1: "The combination of AI automation and human supervision allows global teams to scale operations without sacrificing quality. Human expertise remains essential in adapting global content.",
    p2: "Fully automated workflows can introduce tone errors or brand inconsistencies. Linguists, producers and localisation specialists validate every delivery, ensuring reliable and safe results.",
    p3: "Technology and AI streamline processes, but humans decide, ensuring quality, consistent and brand-safe results.",
    cta: "Talk to our team",
  },
};

const CTASection = () => {
  const router = useRouter();
  const t = router.locale === "en" ? copy.en : copy.es;

  return (
    <section className="py-20 lg:py-28 gradient-bg-subtle">
      <div className="container px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6">
            {t.headingPlain} <GradientText>{t.headingGradient}</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.p1}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.p2}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t.p3}</p>
          <a
            href="#contacto"
            className="inline-block bg-yellow-400 text-foreground pt-4 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-sky-500 transition-colors"
          >
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
