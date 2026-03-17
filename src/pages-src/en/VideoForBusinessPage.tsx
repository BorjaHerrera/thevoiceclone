import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Globe, Zap, Video, Timer, ShieldCheck, Cpu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import humanAiCollaborationSrc from "@/assets/human-ai-collaboration.jpg";
const humanAiCollaboration = typeof humanAiCollaborationSrc === "string" ? humanAiCollaborationSrc : (humanAiCollaborationSrc as { src: string }).src;

const sections = [
  {
    id: "video-localization",
    title: "Video localization for global companies",
    navLabel: "Video localization for global companies",
    intro:
      "We adapt your audiovisual content for any international market with a hybrid approach combining artificial intelligence and expert human supervision. Subtitles, professional dubbing and complete cultural adaptation so your message connects with each audience as if it were local.",
    subsections: [
      {
        heading: "Local impact with global precision",
        text: "Every market has its own cultural codes, linguistic nuances and quality expectations. Our team of native reviewers, supported by cutting-edge AI tools, guarantees that every localized video maintains the original intent and resonates with the target audience. Whether for international onboarding, e-learning courses or multilingual corporate videos, the result is always content that feels authentic.",
      },
      {
        heading: "International expansion without multiplying costs",
        text: "Intelligent automation of transcription, translation and synchronisation dramatically reduces delivery times and operational costs. This allows you to scale your audiovisual presence to dozens of languages simultaneously without compromising quality or brand consistency in any market.",
      },
    ],
  },
  {
    id: "production",
    title: "Scalable corporate video production",
    navLabel: "Scalable corporate video production",
    intro:
      "AI-assisted audiovisual production that reduces costs and delivery times by automating repetitive tasks, with expert brand validation on every delivery. From multilingual marketing to internal communications and corporate training.",
    subsections: [
      {
        heading: "Content that scales at the pace of your business",
        text: "Global companies need to produce audiovisual content at a pace traditional methods cannot match. Our integration of AI in production workflows enables generating, editing and adapting videos with unprecedented speed and efficiency, optimising time-to-market for every global campaign.",
      },
      {
        heading: "The gold standard in audiovisual consistency",
        text: "Every delivery meets the highest quality standards thanks to standardised templates, automated review workflows and human supervision at critical points. The result is uniform and professional audiovisual production that reinforces your brand identity in any format and channel.",
      },
    ],
  },
  {
    id: "ai-content",
    title: "Multilingual content and AI generation",
    navLabel: "Multilingual content and AI generation",
    intro:
      "Generate multilingual audiovisual content at scale with advanced AI technology and human supervision that guarantees quality and brand consistency. AI avatars for corporate presentations, scalable training videos and much more.",
    subsections: [
      {
        heading: "Audiovisual innovation: AI with human judgement",
        text: "Automatic content generation with AI accelerates production, but it is human supervision that ensures every piece maintains the tone, precision and consistency your brand demands. Our hybrid approach combines the best of both worlds: digital speed with expert judgement.",
      },
      {
        heading: "Total control, global quality and digital speed",
        text: "Automated workflows with human checkpoints at every phase eliminate errors and guarantee impeccable deliveries. From intelligent avatars that present in any language to training videos adapted to each market, you have total control over your global audiovisual production.",
      },
    ],
  },
];

const faqs = [
  {
    q: "How does AI video localization work?",
    a: "Our workflow combines AI tools for transcription, translation and dubbing with specialised human review. This allows scaling production without sacrificing quality or cultural consistency.",
  },
  {
    q: "How do you guarantee brand consistency across multiple languages?",
    a: "We work with brand glossaries, style guides and specialist native reviewers in each market. AI ensures terminological consistency and the human team validates tone and context.",
  },
  {
    q: "Do you offer AI-generated avatars or presenters?",
    a: "Yes. We can generate AI virtual presenters for corporate, training or marketing videos, adapting their appearance and language to each target market.",
  },
  {
    q: "What production volumes can you handle?",
    a: "Our workflows are designed to scale from one-off projects to continuous production of 20+ monthly videos in multiple languages simultaneously.",
  },
  {
    q: "How long does a typical localization project take?",
    a: "It depends on volume and complexity, but thanks to AI automation, delivery times are reduced by up to 60% compared to traditional processes.",
  },
];

const VideoForBusinessPage = () => {
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

      {/* Hero – white bg + bottom glow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Bottom glow effect */}
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
              Video services for companies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              With The Voice Clone you will discover how our hub centralises the creation, localization and
              distribution of global audiovisual content. Every service — from corporate and training videos to
              e-learning courses, AI video generation and multilingual content — is designed to optimise workflows,
              maintain brand consistency and accelerate the international expansion of your audiovisual content.
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
                THE NEW PARADIGM IN <GradientText>VIDEO PRODUCTION AND LOCALIZATION.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform the way your company communicates globally. At The Voice Clone, we combine advanced
                AI technology with human supervision to produce and localize audiovisual content at scale.
                Whether by adapting training courses or creating videos with intelligent avatars, our hub
                guarantees efficient processes, fast deliveries and a multilingual presence without friction
                or consistency failures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI + Human Section – Full Width Split */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center px-6 md:px-12 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-0"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-foreground mb-8">
                AI supervised by video editors: the best audiovisual strategy.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We generate efficient, consistent and multilingual audiovisual content. By combining avatar
                technology with expert localization, we allow your brand to scale its corporate and training
                communications with maximum agility and rigorous quality control at every step of the process.
              </p>
              {/* Gradient line */}
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

          {/* Image Column – Edge to Edge Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[400px] lg:h-[600px]"
          >
            <img
              src={humanAiCollaboration}
              alt="Professional team collaborating with artificial intelligence technology in audiovisual production"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="The new standard in video production and localization"
        description="We adapt your audiovisual content for any international market with a hybrid approach combining artificial intelligence and expert human supervision. Subtitles, professional dubbing and complete cultural adaptation so your message connects with each audience as if it were local."
        cards={[
          {
            icon: Globe,
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            title: "Local Impact",
            text: "We guarantee that every localized video maintains the original intent and resonates with the target audience through native reviewers and AI technology.",
          },
          {
            icon: Zap,
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            title: "Real Scalability",
            text: "Intelligent automation allows scaling your audiovisual presence to dozens of languages simultaneously without multiplying operational costs.",
          },
          {
            icon: Video,
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            title: "AI Production",
            text: "AI-assisted production that reduces delivery times by automating repetitive tasks, with expert brand validation at every phase of the project.",
          },
          {
            icon: Timer,
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-400",
            title: "Digital Speed",
            text: "Our AI integration enables generating and adapting videos with unprecedented speed, optimising time-to-market for every campaign.",
          },
          {
            icon: ShieldCheck,
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            title: "Quality Guarantee",
            text: "Uniform and professional production through automated review workflows and human supervision that reinforce your brand identity.",
          },
          {
            icon: Cpu,
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            title: "Human Precision",
            text: "We combine the speed of digital generation with expert human judgement to ensure every piece maintains the required tone and precision.",
          },
        ]}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            {/* Left Column – Sticky Navigation (1/3) */}
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  OUR AUDIOVISUAL SOLUTIONS FOR BUSINESS
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

            {/* Right Column – Narrative Content (2/3) */}
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

      {/* Visibility */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              Absolute visibility <GradientText>at all times</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Scalability strategies: centralised workflows that allow total control over each video version.
              AI templates and automation to maintain consistency and speed. Production KPI monitoring and
              localization integration to optimise costs.
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

export default VideoForBusinessPage;
