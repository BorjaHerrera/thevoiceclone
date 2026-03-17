import { motion } from "framer-motion";
import { ChevronsDown, Cpu, Users, TrendingDown, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import videoImgSrc from "@/assets/video-localization.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;

const featureCards = [
  { icon: Cpu, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", title: "AI Avatar Presenters", text: "Photorealistic AI presenters for corporate videos in any language — no casting, no studio, no re-shoots." },
  { icon: Zap, iconBg: "bg-orange-500/20", iconColor: "text-orange-400", title: "Rapid Production", text: "AI-generated video production is 5-10x faster than traditional methods, enabling weekly content cycles instead of monthly." },
  { icon: TrendingDown, iconBg: "bg-red-500/20", iconColor: "text-red-400", title: "Up to 60% Cost Savings", text: "Replace expensive studio sessions with AI-powered production. Same professional result, fraction of the cost." },
  { icon: Users, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", title: "Human Creative Direction", text: "Every AI-generated video is shaped by our producers: script review, visual direction, pacing and brand alignment." },
  { icon: ShieldCheck, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", title: "Quality Certification", text: "No AI output is delivered without human review. Our QA process guarantees every video meets your professional standards." },
  { icon: BarChart3, iconBg: "bg-violet-500/20", iconColor: "text-violet-400", title: "Scalable Content Programmes", text: "Designed for teams that need ongoing video content: onboarding, product updates, social campaigns and more." },
];

const AiVideoProductionPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative min-h-[70vh] flex items-end justify-start overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)" }}>
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-6 max-w-5xl">
          Professional AI Video Production
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
          Corporate and advertising videos with AI avatars, scalable content generation and up to 60% savings in operational costs. Human-in-the-loop quality guaranteed.
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
              Produce at scale. <GradientText>Spend less. Look professional.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Traditional video production is slow and expensive. AI video production gives you the same
              professional quality at a fraction of the cost and time — but only when combined with
              expert human oversight.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our approach: AI generates the visual and audio layers. Our producers direct, review and
              refine every element — script, avatar performance, pacing, brand alignment. You get the
              speed advantage of AI with the quality guarantee of professional production.
            </p>
            <a href="#contacto" className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors">
              See sample videos
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-[400px] rounded-2xl overflow-hidden">
            <img src={videoImg} alt="AI video production for business" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <FeatureGridSection
      heading="Enterprise-grade AI video. Human-directed."
      description="The best of both worlds: AI efficiency and human creative quality — built for companies that can't afford to compromise on brand."
      cards={featureCards}
    />

    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Stop choosing between quality and cost.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Our human-in-the-loop AI video production gives you professional quality, measurable cost
            savings and a production speed your competitors cannot match with traditional methods.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-foreground px-12 py-5 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors">
            Request a demo
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default AiVideoProductionPage;
