import { motion } from "framer-motion";
import { ChevronsDown, Users, Zap, Globe2, ShieldCheck, TrendingDown, Star } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import videoImgSrc from "@/assets/video-localization.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;

const featureCards = [
  { icon: Users, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "AI Avatars", text: "Replace on-screen presenters with AI avatars for any language. No re-shooting, no studio costs — same professional look." },
  { icon: Globe2, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "Cultural Adaptation", text: "Beyond translation: we adapt visuals, idioms, on-screen text and cultural references so your content feels native in every market." },
  { icon: Zap, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "40% Faster Editing", text: "AI-assisted timeline editing reduces localization post-production time by up to 40% compared to traditional workflows." },
  { icon: ShieldCheck, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Human QA on Every File", text: "Each localized video is reviewed by our linguists and video editors before delivery. No automated output ships without human sign-off." },
  { icon: TrendingDown, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "Lower Cost per Language", text: "Batch localization and AI-assisted workflows make adding each new language significantly more cost-effective." },
  { icon: Star, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "E-learning Specialist", text: "Deep experience in SCORM-compatible e-learning localization: voiceover sync, subtitle timing and LMS compatibility." },
];

const VideoLocalizationPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          Video Localization for Business
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          AI-assisted video localization for corporate training and e-learning. AI avatars, cultural adaptation and up to 40% reduction in editing time. Human-in-the-loop quality guaranteed.
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
              Your training videos. <GradientText>Every language. No quality loss.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Re-shooting your corporate videos for every new market is expensive and slow. Our AI-assisted
              video localization adapts your existing content — dubbing, AI avatars, subtitles, on-screen
              text and cultural references — so your original investment works globally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Human-in-the-loop difference: AI handles the heavy lifting on transcription, translation
              and lip-sync generation. Our linguists and video editors review every frame before delivery,
              ensuring your e-learning objectives and brand standards are preserved in every locale.
            </p>
            <a href="#contacto" className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
              Get a demo
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={videoImg} alt="AI-assisted video localization for corporate training" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="AI-powered localization. Human-guaranteed quality."
      description="Our hybrid workflow delivers localized video content that meets enterprise quality standards at the speed and cost that only AI can enable."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Scale your e-learning and training globally.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            From 2 to 20 languages, from one module to an entire learning library — our managed localization
            service scales with your programme without compromising instructional quality or brand standards.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-foreground px-12 py-5 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors">
            Start your project
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default VideoLocalizationPage;
