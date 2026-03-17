import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export interface FeatureCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  text: string;
  href?: string;
}

interface FeatureGridSectionProps {
  heading: string;
  description: string;
  cards: FeatureCard[];
}

const FeatureGridSection = ({ heading, description, cards }: FeatureGridSectionProps) => (
  <section className="py-20 lg:py-28 bg-blue-100">
    <div className="px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6 text-black"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-black/70 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {card.href ? (
              <Link
                href={card.href}
                className="block rounded-2xl border border-black/8 p-10 text-left bg-blue-50 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-8`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-black mb-4">{card.title}</h3>
                <p className="text-base text-black/65 leading-relaxed">{card.text}</p>
              </Link>
            ) : (
              <div className="rounded-2xl border border-black/8 p-10 text-left bg-blue-50 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-default">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-8`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-black mb-4">{card.title}</h3>
                <p className="text-base text-black/65 leading-relaxed">{card.text}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGridSection;
