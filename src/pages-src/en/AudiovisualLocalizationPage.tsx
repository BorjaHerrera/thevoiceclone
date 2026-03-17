import { motion } from "framer-motion";
import { ChevronsDown, Globe2, Users, Zap, ShieldCheck, BarChart3, Layers } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import videoImgSrc from "@/assets/video-localization.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;

const featureCards = [
  { icon: Layers, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "End-to-End Workflow", text: "Translation, subtitling, voice over and video editing under a single coordinated process — no handoff errors, no version mismatches." },
  { icon: Users, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "Human-in-the-Loop QA", text: "Every deliverable passes through expert linguists and producers who validate accuracy, tone and brand alignment before delivery." },
  { icon: Globe2, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Cultural Adaptation", text: "Beyond literal translation — we adapt idioms, references and cultural nuances so your message resonates in every market." },
  { icon: Zap, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "AI-Powered Speed", text: "AI handles the repetitive technical layers, cutting delivery times by up to 40% compared to traditional production pipelines." },
  { icon: BarChart3, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "Predictable Costs", text: "Fixed-scope projects with transparent pricing. Variable costs become predictable budgets, simplifying your planning." },
  { icon: ShieldCheck, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "Certified Standards", text: "Our quality processes comply with professional localization industry standards, giving you the assurance your stakeholders expect." },
];

const AudiovisualLocalizationPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          End-to-End Audiovisual Localization
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          Translation, subtitling, dubbing and cultural adaptation — all under one managed workflow. Human-in-the-loop AI localization for global companies.
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
              One partner. <GradientText>Every language. Every format.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Managing multiple localization vendors creates version control nightmares and brand inconsistencies.
              Our End-to-End service consolidates translation, subtitling, AI voice over, dubbing and video editing
              under a single coordinated workflow managed by our team.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Human-in-the-loop principle runs through every step: AI accelerates, humans guarantee. Our
              linguists and producers review every deliverable before it reaches you, ensuring your brand voice
              remains consistent across every language and platform.
            </p>
            <a href="#contacto" className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
              Request a quote
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={videoImg} alt="End-to-end audiovisual localization workflow" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="The complete localization infrastructure"
      description="Everything you need to go global — consolidated, quality-assured and delivered on time."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Built for agencies, production companies and global enterprises.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you're a localization agency looking for a managed production partner, an advertising
            agency launching multilingual campaigns or an enterprise scaling e-learning globally — our
            process adapts to your volume, timeline and quality requirements.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-foreground px-12 py-5 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors">
            Let's talk about your project
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default AudiovisualLocalizationPage;
