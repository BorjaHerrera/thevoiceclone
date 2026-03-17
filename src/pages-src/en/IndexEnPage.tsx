import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

import videoImgSrc from "@/assets/video-localization.jpg";
import voiceoverImgSrc from "@/assets/voiceover.jpg";
import subtitlingImgSrc from "@/assets/subtitling.jpg";
import translationImgSrc from "@/assets/translation.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;
const voiceoverImg = typeof voiceoverImgSrc === "string" ? voiceoverImgSrc : (voiceoverImgSrc as { src: string }).src;
const subtitlingImg = typeof subtitlingImgSrc === "string" ? subtitlingImgSrc : (subtitlingImgSrc as { src: string }).src;
const translationImg = typeof translationImgSrc === "string" ? translationImgSrc : (translationImgSrc as { src: string }).src;

const services = [
  { title: "Video Localization", desc: "AI avatars, cultural adaptation and dubbing for multilingual corporate and e-learning content.", href: "/en/video-localization", img: videoImg },
  { title: "AI Voice Over", desc: "Professional multilingual voice over — AI-generated, human-reviewed, brand-consistent.", href: "/en/ai-voices", img: voiceoverImg },
  { title: "Professional Subtitling", desc: "Multilingual subtitles with linguistic precision and perfect synchronisation.", href: "/en/video-subtitling", img: subtitlingImg },
  { title: "Professional Translation", desc: "Corporate translation with 95% terminological consistency, AI-assisted and expert-reviewed.", href: "/en/professional-translation", img: translationImg },
];

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "40%", label: "Reduction in editing time" },
  { value: "60%", label: "Savings in operational costs" },
  { value: "20+", label: "Languages supported" },
];

const benefits = [
  "True scalability without quality loss",
  "AI optimises, humans guarantee",
  "Single centralised workflow",
  "Brand voice control across all languages",
  "Faster delivery with predictable costs",
  "Built for global enterprise teams",
];

const IndexEnPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section
      id="services"
      className="relative min-h-screen flex items-end justify-start overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgb(237, 94, 166) 0%, rgb(123, 73, 223) 35%, rgb(0, 99, 204) 65%, rgb(21, 28, 40) 100%)",
      }}
    >
      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-20 lg:pb-32 pt-40 lg:pt-52">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6">
            Human-in-the-loop localization
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white mb-8">
            AI Multimedia Localization Agency
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
            We scale your global content production without sacrificing quality or brand consistency.
            AI powers efficiency. Expert humans guarantee the result. That's why global enterprises trust us.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/en/contact"
              className="inline-block bg-white text-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-yellow-400 transition-colors"
            >
              Get a quote
            </a>
            <a
              href="/en/audiovisual-localization"
              className="inline-block border border-white/40 text-white px-10 py-4 rounded-full font-semibold text-base hover:border-white/80 transition-colors"
            >
              Our services
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-extrabold gradient-text mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Human-in-the-loop intro */}
    <section className="py-20 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">Our methodology</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Where AI meets human expertise.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are not an automated translation tool. Every project goes through our
              Human-in-the-loop workflow: AI handles repetitive, technical tasks — speed, cost reduction,
              scalability — while our expert linguists and producers oversee every step, guaranteeing
              terminological accuracy, cultural adaptation and brand consistency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The result: enterprise-grade quality at a fraction of traditional production time and cost.
              This is what justifies the difference between a professional managed service and a cheap online tool.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-8 md:p-10 border-2 border-foreground/10 bg-background relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Why choose us</p>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80 text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
            Everything your global content needs.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.a
              key={i}
              href={svc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background hover:border-foreground/20 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold uppercase tracking-tight mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a href="/en/audiovisual-localization" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all">
            View End-to-End Localization service <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Services detail: Multimedia Localization */}
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center px-6 md:px-12 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-0"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6">
              One unified workflow. Zero handoff errors.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our End-to-End Localization service unifies video, voice over, subtitles and translation
              under a single managed workflow. No switching between vendors, no version mismatches,
              no brand inconsistencies. One strategic partner — consistent messaging across every market.
            </p>
            <a href="/en/audiovisual-localization" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
              Explore End-to-End Localization <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="h-[400px] lg:h-[500px]"
        >
          <img src={videoImg} alt="Unified multimedia localization workflow" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
            Ready to scale your global content?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Talk to our team. We'll show you exactly how our human-in-the-loop approach
            reduces your production time, lowers costs and keeps your brand voice consistent
            across every language and market.
          </p>
          <a
            href="/en/contact"
            className="inline-block bg-foreground text-background px-12 py-5 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>

    <ContactForm />
    <Footer />
  </div>
);

export default IndexEnPage;
