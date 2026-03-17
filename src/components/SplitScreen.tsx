import { motion } from "framer-motion";
import { useRouter } from "next/router";

const copy = {
  es: {
    heading: "PROCESOS HÍBRIDOS PARA CONTENIDO AUDIOVISUAL MULTILINGÜE",
    body: "En The Voice Clone desarrollamos workflows híbridos para producir, adaptar y lanzar contenido audiovisual multilingüe a gran escala. Integramos localización de vídeo, producción escalable, voice over, subtitulado, traducción y gestión de proyectos en un proceso centralizado. La IA optimiza tareas operativas mientras expertos garantizan precisión lingüística, coherencia de marca y adaptación cultural, optimizando tiempo, coste y calidad.",
  },
  en: {
    heading: "HYBRID WORKFLOWS FOR MULTILINGUAL AUDIOVISUAL CONTENT",
    body: "At The Voice Clone we develop hybrid workflows to produce, adapt and launch multilingual audiovisual content at scale. We integrate video localisation, scalable production, voice over, subtitling, translation and project management in a single centralised process. AI optimises operational tasks while experts guarantee linguistic precision, brand consistency and cultural adaptation, optimising time, cost and quality.",
  },
};

const SplitScreen = () => {
  const router = useRouter();
  const t = router.locale === "en" ? copy.en : copy.es;

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left – Capsule shape from left edge */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="h-40 sm:h-80 lg:h-[420px] w-full rounded-r-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(211 100% 50%), hsl(260 70% 58%), hsl(330 80% 60%))",
              filter: "drop-shadow(0 20px 40px hsl(260 70% 58% / 0.3))",
            }}
          />
        </motion.div>

        {/* Right – Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="px-6 md:px-12 lg:pr-20 xl:pr-32 lg:pl-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-foreground mb-6">
            {t.heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitScreen;
