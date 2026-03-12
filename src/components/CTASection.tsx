import { motion } from "framer-motion";
import GradientText from "./GradientText";

const CTASection = () => (
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
          Diseñado para Escalar. <GradientText>Controlado por Expertos</GradientText>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          La combinación de automatización IA y supervisión humana permite a los equipos globales escalar operaciones
          sin sacrificar calidad. La experiencia humana sigue siendo esencial en la adaptación de contenido global.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Flujos totalmente automatizados pueden generar errores de tono o inconsistencias de marca. Lingüistas,
          productores y especialistas en localización validan cada entrega, asegurando resultados confiables y seguros.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Tecnología y IA agilizan procesos, pero los humanos deciden, asegurando resultados de calidad, coherentes y
          seguros para la marca.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-yellow-400 text-foreground pt-4 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-sky-500 transition-colors"
        >
          Consulta con nuestro equipo
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
