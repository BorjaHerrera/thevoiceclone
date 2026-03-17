import { motion } from "framer-motion";
import { ChevronsDown, Clock, Globe2, ShieldCheck, Zap, FileText, Star } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import subtitlingImgSrc from "@/assets/subtitling.jpg";
const subtitlingImg = typeof subtitlingImgSrc === "string" ? subtitlingImgSrc : (subtitlingImgSrc as { src: string }).src;

const featureCards = [
  { icon: FileText, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "AI Transcription", text: "Automated transcription as the first pass — accurate, fast and ready for expert linguistic review." },
  { icon: ShieldCheck, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "Human Review on Every File", text: "Every subtitle file is reviewed and corrected by a professional linguist before delivery. No automated output ships without sign-off." },
  { icon: Globe2, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Cultural Adaptation", text: "We adapt idioms, register and cultural references — not just translate word-for-word. Your subtitles sound natural in every language." },
  { icon: Clock, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "Precise Timing", text: "Expert subtitle timing and synchronisation — reading speed, scene changes and on-screen text handled with professional precision." },
  { icon: Zap, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "Multiple Output Formats", text: "SRT, VTT, ASS, EBU-STL and more. Compatible with all major video platforms, broadcast standards and LMS systems." },
  { icon: Star, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "20+ Languages", text: "Scalable multilingual subtitling programmes. Add languages efficiently with consistent quality across your entire library." },
];

const VideoSubtitlingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          Professional Video Subtitling
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          Multilingual subtitles with hybrid AI and human review workflow. Outsource professional corporate video subtitling with linguistic precision and cultural adaptation.
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
              Subtitles your audience <GradientText>actually understands.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Automatic subtitles from YouTube or auto-generated tools are notorious for context errors,
              mistimed cues and cultural inaccuracies. For corporate and professional content, these errors
              damage credibility and learning outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our hybrid subtitling workflow uses AI for fast transcription and first-pass translation,
              then applies human expertise for linguistic review, cultural adaptation and precise timing.
              The result: subtitles that are accurate, natural and professionally timed — every time.
            </p>
            <a href="#contacto" className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
              Get a quote
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={subtitlingImg} alt="Professional multilingual video subtitling" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="Professional subtitling. Human reviewed. Always."
      description="Our hybrid workflow combines AI speed with human linguistic expertise to deliver subtitles that meet professional broadcast and corporate standards."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            The professional alternative to automatic subtitles.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            If your content represents your brand professionally, your subtitles must too. Our managed
            service delivers linguistically precise, culturally adapted and professionally timed subtitles
            at a cost and speed that makes outsourcing the obvious choice.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-foreground px-12 py-5 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors">
            Start subtitling your content
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default VideoSubtitlingPage;
