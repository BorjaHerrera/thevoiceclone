import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactoPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero compact */}
    <section className="relative flex items-end justify-start overflow-hidden pt-32 pb-24 lg:pb-32 min-h-[50vh]"
      style={{
        background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)",
      }}
    >
       <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white"
        >
          <span className="block">Contacto</span>
          <span className="block text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] text-white/70 mt-3">
            THE VOICE CLONE
          </span>
        </motion.h1>
      </div>
    </section>

    {/* Contact info */}
    <section className="bg-white py-20 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-foreground leading-tight">
              Hablamos
            </h2>

            <div className="w-16 h-px bg-foreground/20" />

            <div className="space-y-8">
              <div>
                <h3 className="text-base md:text-lg font-heading font-bold uppercase tracking-tight text-foreground mb-3">
                  Humanos reales. En nuestras oficinas. De 8 a 20h.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestras oficinas están abiertas de 8:00 a 20:00 (UTC+1), de lunes a viernes.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Siempre nos encontrarás en nuestras oficinas, listos para atenderte dentro del horario laboral.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-heading font-bold uppercase tracking-tight text-foreground mb-3">
                  Email
                </h3>
                <a
                  href="mailto:hello@thevoiceclone.com"
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                >
                  hello@thevoiceclone.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column - Quick summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl p-8 md:p-10 space-y-6 border-2 border-foreground/10 bg-background relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                ¿Por qué elegirnos?
              </p>
              <ul className="space-y-4">
                {[
                  "Escalabilidad real sin perder calidad",
                  "IA optimiza, humanos garantizan",
                  "Un único proceso centralizado",
                  "Control creativo y coherencia de marca",
                  "Mayor velocidad con costes predecibles",
                  "Diseñado para equipos globales",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i + 0.2, type: "spring" }}
                      className="mt-0.5 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0"
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </motion.span>
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <ContactForm />

    <Footer />
  </div>
);

export default ContactoPage;
