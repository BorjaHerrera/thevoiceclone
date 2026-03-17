import { motion } from "framer-motion";
import { ChevronsDown, FileText, ShieldCheck, Globe2, BarChart3, Users, Zap } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import translationImgSrc from "@/assets/translation.jpg";
const translationImg = typeof translationImgSrc === "string" ? translationImgSrc : (translationImgSrc as { src: string }).src;

const featureCards = [
  { icon: FileText, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "Terminology Management", text: "We build and maintain your corporate glossary, ensuring consistent use of brand-specific terminology across every document and language." },
  { icon: ShieldCheck, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "Expert Human Review", text: "Every translation is reviewed by a native speaker with domain expertise in your industry before delivery." },
  { icon: Globe2, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Cultural Adaptation", text: "We adapt tone, register and cultural references — not just words. Your message resonates authentically in every market." },
  { icon: BarChart3, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "95% Consistency Rate", text: "Our AI-assisted translation memory and human review process achieves 95% terminological consistency across your content library." },
  { icon: Zap, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "40% Fewer Errors", text: "Compared to traditional human-only workflows, our hybrid approach reduces error rates by up to 40% through AI-assisted review." },
  { icon: Users, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "Scalable Volume", text: "From a single script to an entire content library — our workflow scales without compromising quality or turnaround time." },
];

const ProfessionalTranslationPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          Professional Translation Services
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          Corporate multilingual translation with AI and human review. 95% terminological consistency and 40% reduction in errors. Professional AI-assisted translation service.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex justify-start">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronsDown className="w-12 h-12 text-white" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Terminology consistency <GradientText>across every market.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Inconsistent translation damages brand credibility and creates legal, compliance and
              communication risks. Our AI-assisted translation service builds a managed translation
              memory and corporate glossary for your brand, ensuring every word is consistent
              across every document, language and platform.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              AI pre-translates for speed and consistency. Native expert linguists review for accuracy,
              tone and cultural adaptation. The result: translations that are fast, consistent and
              genuinely professional — not just technically correct.
            </p>
            <a href="#contacto" className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
              Get a quote
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={translationImg} alt="Professional corporate translation service" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="Translation that works for enterprise."
      description="Not just accurate — consistent, scalable and aligned with your brand standards across every language and market."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Your brand voice in every language.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Scripts, subtitles, training materials, marketing copy, legal documents — our translation
            service handles the full spectrum of corporate content with the same commitment to
            consistency, accuracy and brand alignment.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-foreground px-12 py-5 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors">
            Start your translation project
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default ProfessionalTranslationPage;
