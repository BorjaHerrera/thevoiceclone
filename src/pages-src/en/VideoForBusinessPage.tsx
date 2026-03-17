import { motion } from "framer-motion";
import { ChevronsDown, Video, Globe2, Brain, BarChart3, Layers, Users } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import videoImgSrc from "@/assets/video-localization.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;

const featureCards = [
  { icon: Video, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "Corporate Video", text: "From concept to delivery: corporate presentations, product demos, internal communications and employer branding — all produced and localized." },
  { icon: Layers, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "Multilingual E-learning", text: "Scalable training content in 20+ languages. AI-assisted production with human review keeps learning objectives intact across every locale." },
  { icon: Globe2, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Video Localization", text: "Dubbing, subtitling and AI avatars for your existing video library. Adapt what you have for new markets — fast and cost-effectively." },
  { icon: Brain, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "AI Video Generation", text: "AI-generated corporate videos with human editorial oversight. Scalable content for social media, internal communications and marketing." },
  { icon: BarChart3, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "Up to 60% Cost Savings", text: "AI optimises the production pipeline. You get professional-grade video at a fraction of traditional studio costs." },
  { icon: Users, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "Dedicated Team", text: "A single point of contact manages your full video workflow: production, localization, QA and delivery." },
];

const VideoForBusinessPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          Video Services for Companies
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          Centralised hub for corporate video and training content. Production, localization, multilingual e-learning and AI-generated videos — one team, one workflow, global reach.
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
              Your global video hub. <GradientText>All under one roof.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Managing separate vendors for production, localization, subtitling and distribution creates
              costly inefficiencies. Our centralised service eliminates that complexity: one contract,
              one workflow, one team responsible for the entire lifecycle of your video content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every project follows our Human-in-the-loop methodology. AI handles the scale — fast
              transcription, pre-translation, AI voice generation. Our producers and linguists handle
              the quality — editing, tone verification, cultural adaptation and final review.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/en/video-localization" className="inline-block border border-foreground/20 text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-foreground/60 transition-colors">Video Localization</a>
              <a href="/en/ai-video-production" className="inline-block border border-foreground/20 text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-foreground/60 transition-colors">AI Video Production</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={videoImg} alt="Corporate video services for business" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="Everything your corporate video programme needs"
      description="From original production to multilingual distribution — all managed, all quality-assured."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Scale your video programme globally.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you need to produce new corporate videos or localize your existing library into 10+ languages,
            our managed service gives you the infrastructure, the expertise and the quality assurance to do it
            at scale — without growing your internal team.
          </p>
          <a href="#contacto" className="inline-block bg-foreground text-background px-12 py-5 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
            Get a custom quote
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default VideoForBusinessPage;
