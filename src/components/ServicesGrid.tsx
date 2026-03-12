import { motion } from "framer-motion";
import { Video, Film, Layers, Mic, Subtitles, Languages } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Localización de Vídeo",
    description:
      "Procesos híbridos con IA y revisión humana que aceleran la distribución internacional manteniendo tono, terminología y consistencia cultural.",
  },
  {
    icon: Film,
    title: "Producción de Vídeo",
    description:
      "Producción asistida por IA que reduce costes y tiempos automatizando tareas repetitivas con validación experta de marca.",
  },
  {
    icon: Layers,
    title: "Localización End-to-End",
    description:
      "Flujo único que unifica vídeo, locución, subtítulos y traducción evitando errores y asegurando consistencia con un único partner estratégico.",
  },
  {
    icon: Mic,
    title: "Locución",
    description:
      "Tecnologías de voz avanzadas con validación humana que llevan tu narrativa a cualquier idioma manteniendo voz de marca coherente, pronunciación y naturalidad impecables.",
  },
  {
    icon: Subtitles,
    title: "Subtitulado",
    description:
      "Subtítulos precisos y culturalmente apropiados generados con IA y revisores expertos que garantizan legibilidad, sincronización perfecta y mejoran el engagement global.",
  },
  {
    icon: Languages,
    title: "Traducción",
    description:
      "Modelo de IA supervisada que adapta guiones y textos con rigor terminológico y estilo corporativo, optimizando velocidad y coste a gran escala.",
  },
];

const ServicesGrid = () => (
  <section id="servicios" className="py-20 lg:py-28">
    <div className="px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-accent hover:shadow-[0_0_24px_hsl(260_70%_58%/0.18)] hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-default"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <service.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
