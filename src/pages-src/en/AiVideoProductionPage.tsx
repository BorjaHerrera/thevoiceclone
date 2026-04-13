import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Layout, Layers, Workflow, UserSquare2, ShieldCheck, RefreshCw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import videoProduccionIASrc from "@/assets/PRODUCCION_VIDEO_SERVICIO.webp";
const videoProduccionIA = typeof videoProduccionIASrc === "string" ? videoProduccionIASrc : (videoProduccionIASrc as { src: string }).src;

const featureCards = [
  {
    icon: Layout,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "High-Impact Formats",
    text: "We optimise explainer videos, testimonials and digital ads adapted by AI according to the channel and target audience.",
  },
  {
    icon: Layers,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Corporate Scalability",
    text: "We accelerate production by automating explainer videos and social media versioning without starting from scratch.",
  },
  {
    icon: Workflow,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Hybrid Workflows",
    text: "We combine automation with human creative judgement to reuse narrative templates with maximum visual quality.",
  },
  {
    icon: UserSquare2,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Professional Avatars",
    text: "Ideal for recurring messages and multilingual content, maintaining a constant and professional visual presence.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Quality Guarantee",
    text: "We apply a final human review to every AI-generated video to ensure tone and aesthetics meet your standards.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Rapid Updates",
    text: "We facilitate high-frequency editing and updating of content, eliminating dependency on physical recordings.",
  },
];

const sections: { id: string; title: string; navLabel: string; intro: string; subsections: { heading: string; text: string }[] }[] = [
  {
    id: "ai-videos-review",
    title: "AI-generated videos with final human review",
    navLabel: "AI-generated videos with final human review",
    intro:
      "The best-performing formats are typically short explainer videos, testimonials, digital ads and brand presentations. AI allows creating adapted versions of the same video according to the channel, audience or language without needing to start production from scratch each time.",
    subsections: [],
  },
  {
    id: "scalable-content",
    title: "Scalable corporate content generation",
    navLabel: "Scalable corporate content generation",
    intro:
      "AI video generation accelerates production by automating the creation of explainer videos and social media versioning. Thanks to hybrid workflows combining automation and human creative judgement, it is possible to reuse narrative templates and reduce delivery times while always maintaining maximum visual quality.",
    subsections: [],
  },
  {
    id: "ai-avatars-web",
    title: "AI avatars for web, social and advertising",
    navLabel: "AI avatars for web, social and advertising",
    intro:
      "AI avatar production is ideal for recurring corporate messages and multilingual content. It allows maintaining a constant, professional and controlled visual presence in high-frequency publication environments, eliminating the dependency on constant physical recordings and facilitating rapid updates.",
    subsections: [],
  },
];

const faqs = [
  {
    q: "What types of videos can be produced with AI?",
    a: "Explainer videos, testimonials, digital ads, brand presentations, social media content and training videos can all be produced. AI enables generating versions adapted to each channel and audience in an automated way.",
  },
  {
    q: "Does AI replace the human creative team?",
    a: "No. AI accelerates repetitive tasks such as base editing, versioning and format adaptation, but always with human supervision and creative judgement to guarantee quality, brand consistency and message relevance.",
  },
  {
    q: "How do AI avatars work for corporate video?",
    a: "AI avatars are virtual presenters that can communicate messages in multiple languages without the need for on-site recordings. They are ideal for recurring internal communications, training and multilingual content at scale.",
  },
  {
    q: "How much can you save with AI-assisted production?",
    a: "Centralisation and automation can reduce operational costs by up to 60% and significantly shorten delivery times, allowing you to produce more content with fewer resources.",
  },
  {
    q: "What formats and platforms do you support?",
    a: "We produce content optimised for corporate websites, social media (LinkedIn, Instagram, YouTube, TikTok), digital advertising campaigns and internal communication and training platforms.",
  },
];

const AiVideoProductionPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[55%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(237, 94, 166, 0.45) 0%, rgba(123, 73, 223, 0.4) 25%, rgba(0, 99, 204, 0.35) 50%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />
        <div className="container relative z-10 px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-foreground mb-8"
            >
              AI video production for companies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We create corporate and advertising videos with AI combining advanced technology and human supervision
              to scale content on web, social media and advertising without losing quality or brand consistency. Video
              production is today one of the most effective assets for building trust and increasing conversion; by
              integrating AI, we achieve greater speed, more versions and lower operational costs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contacto"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/85 transition-colors"
              >
                Schedule a demo
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => {
                  const firstH2 = document.querySelector("section:nth-of-type(2) h2");
                  if (firstH2) {
                    const top = firstH2.getBoundingClientRect().top + window.scrollY - 160;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer bg-transparent border-none p-2"
                aria-label="Scroll down"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronsDown className="w-12 h-12 text-foreground/70" strokeWidth={1.5} />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
                CORPORATE VIDEO PRODUCTION FOR <GradientText>WEB, SOCIAL MEDIA AND ADVERTISING</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Audiovisual production improves digital presence at every touchpoint, from the corporate website
                to advertising campaigns. Thanks to AI, it is possible to communicate complex messages clearly,
                adapt content to different formats without redoing production and maintain a homogeneous visual
                identity even with a high volume of content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI + Human Section – Full Width Split */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center px-6 md:px-12 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-0"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-foreground mb-8">
                AI audiovisual production: cutting-edge technology with expert supervision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our production combines strategic visual narrative, motion graphics and AI-generated elements
                such as avatars or automated scenes. The goal is to build a consistent and recognisable visual
                presence in all markets, translating brand identity into a visual language adaptable to multiple
                platforms.
              </p>
              <div
                className="h-[4px] w-full mb-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
                }}
              />
              <a
                href="#contacto"
                className="inline-block bg-yellow-400 text-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-yellow-300 transition-colors text-center min-w-[220px]"
              >
                Learn more
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[400px] lg:h-[600px]"
          >
            <img
              src={videoProduccionIA}
              alt="AI Video Production"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGridSection
        heading="Intelligent video architecture for companies"
        description="AI allows creating adapted versions of the same video according to the channel, audience or language without needing to start production from scratch each time. Thanks to hybrid workflows, we always maintain maximum visual quality and creative judgement."
        cards={featureCards}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            {/* Left Column – Sticky Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  AI VIDEO PRODUCTION STRATEGIES
                </h2>
                <nav className="flex flex-col gap-6">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(section.id);
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 160;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }}
                      className={`text-lg font-semibold leading-tight transition-all duration-300 no-underline decoration-transparent text-foreground ${
                        activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      {section.navLabel}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Column – Narrative Content */}
            <div className="flex flex-col">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="pb-32 last:pb-0 scroll-mt-40"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-tight tracking-tight text-foreground mb-8">
                    {section.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl">{section.intro}</p>
                  {section.subsections.map((sub, j) => (
                    <div key={j} className="mb-10 last:mb-0">
                      <h3 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground mt-8 mb-4">
                        {sub.heading}
                      </h3>
                      <p className="text-base text-foreground/60 leading-relaxed max-w-3xl">{sub.text}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Added value */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Maximum efficiency in your audiovisual strategy:{" "}
              <GradientText>Scalability, savings and certified quality</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Centralising your production with us allows accessing advanced AI technology without upfront
              investment, freeing internal resources while guaranteeing absolute brand consistency across all
              your channels. By combining centralised management with localization and multilingual content
              solutions, we transform video production into a real competitive advantage: you will scale your
              communications quickly, dramatically reduce operational costs and always obtain a professional
              result adapted to any international market.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio />

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
              Frequently <GradientText>Asked Questions</GradientText>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="surface-elevated rounded-xl border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default AiVideoProductionPage;
