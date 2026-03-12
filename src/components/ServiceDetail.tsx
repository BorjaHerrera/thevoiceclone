import { motion } from "framer-motion";
import GradientText from "./GradientText";

interface ServiceDetailProps {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  gradientWord?: string;
  titleSuffix?: string;
  description?: string;
  details: string;
  reverse?: boolean;
}

const ServiceDetail = ({
  id,
  image,
  imageAlt,
  title,
  gradientWord,
  titleSuffix = "",
  description,
  details,
  reverse = false,
}: ServiceDetailProps) => (
  <section id={id} className="py-20 lg:py-28">
    <div className="px-6 md:px-12 lg:px-20 xl:px-32">
      <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto ${reverse ? "lg:flex-row-reverse" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reverse ? "lg:order-2" : ""}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6">
            {title}{gradientWord && <> <GradientText>{gradientWord}</GradientText></>}{titleSuffix}
          </h2>
          {description && <p className="text-lg text-muted-foreground leading-relaxed mb-4">{description}</p>}
          <p className="text-muted-foreground leading-relaxed">{details}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={reverse ? "lg:order-1" : ""}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover aspect-[2/1]" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceDetail;
