import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient background: light/vibrant top-left → dark bottom-right */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
      }}
    />

    <div className="container relative z-10 px-4 lg:px-8 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] uppercase text-white/80 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span> AGENCIA DE LOCALIZACIÓN MULTIMEDIA CON IA <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-12"
        >
          <span className="block">IA Escalable.</span>
          <span className="block"> Precisión Humana.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-white text-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-yellow-400 hover:text-foreground transition-colors"
          >
            Solicita tu demo
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
