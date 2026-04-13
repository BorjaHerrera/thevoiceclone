import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, FileText, Settings2, Mic2, Globe2, TrendingDown, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import voiceoverImgSrc from "@/assets/LOCUCION_VOCES_IA_SERVICIO.webp";
const voiceoverImg = typeof voiceoverImgSrc === "string" ? voiceoverImgSrc : (voiceoverImgSrc as { src: string }).src;

const sections = [
  {
    id: "multilingual-voice-over",
    title: "Multilingual AI voice over: scalability with global brand consistency",
    navLabel: "Multilingual AI voice over: scalability and consistency",
    intro:
      "We centralise your international communications, eliminating the complexity of coordinating voice artists across multiple countries. We design processes that ensure rigorous alignment of tone and technical quality across all languages simultaneously.",
    subsections: [
      {
        heading: "Deep cultural adaptation",
        text: "Through deep cultural adaptation, we guarantee linguistic precision and a recognisable brand identity in every market. The result: efficient, professional global communication, free from the logistical friction of traditional production.",
      },
    ],
  },
  {
    id: "hybrid-methodology",
    title: "Hybrid methodology: the right balance between AI and professional voice artists",
    navLabel: "The right balance between AI and professional voice artists",
    intro:
      "AI-generated voices are the optimal solution for high-volume, high-frequency content — e-learning, internal communications, product explainers — where agility and cost control are priorities.",
    subsections: [
      {
        heading: "Strategic combination",
        text: "For high-impact campaigns or emotionally-driven storytelling, we integrate professional voice artists. We don't replace the human voice; we combine it strategically with technology to deliver expressiveness and efficiency within a single production model.",
      },
    ],
  },
  {
    id: "managed-production",
    title: "Outsourcing AI voice production simplifies your processes",
    navLabel: "Outsourcing AI voice production simplifies processes",
    intro:
      "Delegating voice production lets your team focus on strategy while experts handle execution, editing and quality control. This model guarantees structured deliveries and a professional result under certified standards.",
    subsections: [
      {
        heading: "Specialist partner",
        text: "By trusting a specialist partner, you gain access to cutting-edge technology and transform variable costs into predictable budgets. Voice production stops being an operational burden and becomes a strategic communication asset for your business.",
      },
    ],
  },
];

const faqs = [
  {
    q: "What's the difference between an AI generator and your AI voice service?",
    a: "An AI generator is fully automatic. Our service includes human supervision, expert treatment and professional mastering — giving you a result that's ready for corporate use.",
  },
  {
    q: "Are the voices edited?",
    a: "Yes. We adjust rhythm, intonation and emphasis to achieve a natural, strictly professional result aligned with your brand voice.",
  },
  {
    q: "Do you offer human voice artists?",
    a: "Yes. We integrate them when the project requires high emotional impact or premium storytelling.",
  },
  {
    q: "Do you offer voice cloning?",
    a: "No. Our focus is exclusively B2B for corporate communication, training and marketing. We do not offer voice cloning services.",
  },
];

const featureCards = [
  {
    icon: FileText,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Script Supervision",
    text: "We review and optimise the rhythm and clarity of your script before generating the voice, ensuring corporate coherence and natural delivery.",
  },
  {
    icon: Settings2,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Voice Refinement",
    text: "We manually adjust intonation, pauses and emphasis to eliminate artificial stiffness and achieve absolute naturalness.",
  },
  {
    icon: Mic2,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    title: "Professional Mastering",
    text: "We apply equalisation and professional clean-up so the audio is flawless on any platform: web, e-learning or advertising.",
  },
  {
    icon: Globe2,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    title: "Multilingual Scale",
    text: "Maintain a recognisable sonic identity across all languages with centralised management that eliminates the friction of local vendors.",
  },
  {
    icon: TrendingDown,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    title: "Cost Efficiency",
    text: "Dramatically reduce production times and internal operational overhead without sacrificing professional quality.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    title: "Quality Control",
    text: "Every audio piece passes through an expert filter that certifies compliance with your technical and terminological standards.",
  },
];

const AiVoicesPage = () => {
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
              AI Voice Over with Expert Human Supervision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We scale your content production without losing quality or brand consistency. We are not an
              automatic generator: we manage the entire process, from strategic script review to final mastering.
              The result is professional, efficient voice over — fully aligned with your corporate identity.
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

      {/* Section 2 – Intro */}
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
                We make sure your <GradientText>voice sounds perfect.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forget configuring parameters. Many companies confuse automatic generators with a professional
                service. While a software tool produces only an audio file, our hybrid workflow adapts, refines
                and integrates every voice within your global strategy. At The Voice Clone, we unify advanced
                technology with human editing to guarantee credibility, naturalness and real operational savings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 – AI + Human Split */}
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
                AI speed. Human rigour. Maximum efficiency in your voice over.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Scale your audiovisual production with a solution that optimises time and budget for corporate
                videos, product explainers and international communications. Our expert-validated voice synthesis
                technology dramatically reduces studio costs for e-learning and internal training content,
                guaranteeing absolute brand consistency without upfront infrastructure investment.
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
              src={voiceoverImg}
              alt="AI Voices"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="The definitive ecosystem for your AI voices"
        description="Our workflow ensures AI works for your brand, not the other way around. We combine technical precision and expert treatment to deliver a scalable, brand-safe audio solution."
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
                  Technology innovation and human talent
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container px-4 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              The Voice Clone: where AI becomes <GradientText>professional voice over.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Managing voice production internally means learning curves and technical costs. By trusting our
              managed service, you access cutting-edge technology and structured workflows with predictable costs.
              We transform audio production into a competitive advantage: scale your communications quickly,
              reduce operational complexity and always obtain a certified professional result.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio videoIds={["yDDZg_Qh4Rs", "QeDAESHmZBU", "lHSTqk_1uc4"]} />

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

export default AiVoicesPage;
