import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, Languages, Video, Workflow, Mic, Subtitles, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import type { FeatureCard } from "@/components/FeatureGridSection";
import localizacionAudiovisualSrc from "@/assets/localizacion-audiovisual.jpg";
const localizacionAudiovisual = typeof localizacionAudiovisualSrc === "string" ? localizacionAudiovisualSrc : (localizacionAudiovisualSrc as { src: string }).src;

const featureCards: FeatureCard[] = [
  {
    icon: Languages,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Video Localization",
    href: "/en/video-localization",
    text: "Hybrid AI and human review processes that accelerate international distribution while maintaining tone, terminology and cultural consistency.",
  },
  {
    icon: Video,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Video Production",
    href: "/en/ai-video-production",
    text: "AI-assisted production that reduces costs and delivery times by automating repetitive tasks with expert brand validation.",
  },
  {
    icon: Workflow,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "End-to-End Localization",
    href: "/en/audiovisual-localization",
    text: "A single workflow that unifies video, voice over, subtitles and translation, avoiding errors and ensuring consistency with a single strategic partner.",
  },
  {
    icon: Mic,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Voice Over",
    href: "/en/ai-voices",
    text: "Advanced voice technologies with human validation that take your narrative to any language while maintaining a coherent and natural brand identity.",
  },
  {
    icon: Subtitles,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Subtitling",
    href: "/en/video-subtitling",
    text: "Perfect readability and synchronisation through AI and expert reviewers that guarantee cultural adaptation and improve global engagement.",
  },
  {
    icon: FileText,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Translation",
    href: "/en/professional-translation",
    text: "AI-supervised model that adapts scripts and texts with terminological rigour and corporate style, optimising speed and cost at scale.",
  },
];

const sections = [
  {
    id: "hybrid-localization",
    title: "The value of hybrid localization: AI power with human guarantee",
    navLabel: "The value of hybrid localization",
    intro:
      "Our service combines technological efficiency with expert review to offer a comprehensive solution for multinational companies. This hybrid model ensures that localization is not just a technical process, but a precise cultural adaptation that protects brand identity in every market.",
    subsections: [
      {
        heading: "Hybrid workflow: the union of speed and precision",
        text: "By integrating artificial intelligence with human supervision, we achieve unprecedented scalability in the translation and synchronisation of content. While technology accelerates delivery times, our specialists ensure that tone, corporate terminology and local references are exact and culturally relevant.",
      },
      {
        heading: "Strategic advantages over pure automation",
        text: "Unlike uncontrolled automatic tools, our managed service minimises constant revisions and guarantees total control over brand reputation. This combination optimises process security and ensures a superior user experience, surpassing any solution that lacks professional oversight.",
      },
      {
        heading: "Operational efficiency and budget optimisation",
        text: "Centralising localization with a single partner eliminates hidden costs from managing multiple vendors and avoids recurring technical errors. This approach allows companies to scale their content globally using fewer internal resources and dramatically reducing friction in the production chain.",
      },
    ],
  },
  {
    id: "end-to-end-applications",
    title: "Strategic applications of end-to-end localization",
    navLabel: "Strategic applications of end-to-end localization",
    intro: "For a multimedia strategy to be effective at international scale, it must cover all user touchpoints impeccably. Our comprehensive solutions cover the entire content lifecycle, from analysis of the original script to delivery of the final asset ready for publication, guaranteeing no quality gaps in the most critical areas of the company.",
    subsections: [
      {
        heading: "Excellence in corporate training and e-learning",
        text: "Localization for the education sector ensures that the learning experience is consistent and clear in any language. Thanks to the hybrid model, it is possible to adapt the educational tone and local examples in global training programmes without losing technical quality or the original training impact.",
      },
      {
        heading: "Impact on international communication and marketing",
        text: "For marketing campaigns and internal communications, we ensure absolute brand consistency across all channels. Centralised management enables rigorous quality control that adapts the message to local culture while maintaining the company's global vision.",
      },
    ],
  },
  {
    id: "certified-quality",
    title: "Certified professional localization: human quality and AI efficiency",
    navLabel: "Certified professional localization: human quality and AI efficiency",
    intro: "Trust is the cornerstone of any audiovisual outsourcing project. We understand that technical precision and information security are non-negotiable priorities for large organisations; therefore, our workflow is designed to provide solid guarantees regarding return on investment, terminological fidelity and protection of digital assets.",
    subsections: [
      {
        heading: "Profitability and smart investment",
        text: "Although a managed service requires a clear initial investment, its value lies in avoiding costly re-translations and consistency errors. The use of hybrid models optimises return on investment by accelerating launches and eliminating unforeseen expenses.",
      },
      {
        heading: "Professional quality and consistency",
        text: "Content precision is guaranteed by a workflow where AI powers execution and humans certify compliance with corporate standards. This balance ensures that the final result is impeccable both in form and terminological substance.",
      },
      {
        heading: "Maximum security and content confidentiality",
        text: "We understand the sensitivity of corporate information, which is why we apply strict protocols and international data protection regulations. Managed workflows ensure that every file is handled with total confidentiality, providing a secure environment for company assets.",
      },
    ],
  },
];

const faqs = [
  {
    q: "Can you scale to more than 10 languages?",
    a: "Yes, a managed workflow enables you to expand corporate content to multiple languages while maintaining absolute consistency and quality.",
  },
  {
    q: "Can subtitles be integrated with voice over?",
    a: "Yes, integration is a native part of the workflow, guaranteeing perfect synchronisation and accessibility standards.",
  },
  {
    q: "Are AI voices natural?",
    a: "With our constant human supervision, AI voices maintain the tone, intonation and brand consistency required for a professional environment.",
  },
  {
    q: "What advantages does it have over automatic tools?",
    a: "Unlike automatic apps, we offer comprehensive control, linguistic QA and professional cultural adaptation that protects your brand reputation.",
  },
];

const AudiovisualLocalizationPage = () => {
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
              Audiovisual localization service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We integrate translation, subtitling, dubbing and cultural adaptation under a single managed workflow.
              We enable global companies to adapt their multimedia content to multiple languages without losing
              brand consistency or operational efficiency, combining AI assistance and human review to guarantee
              quality and speed on critical projects.
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
                COMPREHENSIVE MANAGEMENT OF <GradientText>AUDIOVISUAL AND E-LEARNING LOCALIZATION</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                At The Voice Clone we comprehensively manage the localization of corporate videos, e-learning
                training, voice over and subtitles, avoiding consistency errors and reducing costs. We implement
                the benefits of end-to-end workflows and hybrid AI + human solutions to transform your global
                communication and generate qualified B2B results with total clarity and professional control.
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
                Multimedia AI solutions: video, audio, subtitling and translation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Intelligent multimedia localization transforms corporate communication by integrating video, audio and
                text into a culturally adapted workflow that far surpasses traditional translation. Through the use
                of hybrid solutions that combine the agility of AI with the precision of human supervision,
                companies achieve impeccable brand consistency in marketing and training, guaranteeing professional
                subtitles and dubbing that meet accessibility standards and maintain maximum tonal consistency
                in every market.
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
              src={localizacionAudiovisual}
              alt="Professional audiovisual localization interface with subtitle editing and digital translation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGridSection
        heading="The definitive ecosystem for your audiovisual content"
        description="We offer a complete deployment of audiovisual capabilities designed to eliminate language and cost barriers. Our hybrid methodology guarantees that every piece, from script to final delivery, maintains the technical and cultural excellence your brand requires."
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
                  PROFESSIONAL LOCALIZATION STRATEGIES
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
                  {section.intro && (
                    <p className="text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl">{section.intro}</p>
                  )}
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
              Comprehensive audiovisual localization with{" "}
              <GradientText>AI assistance and human review</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We offer total control to adapt your assets to multiple languages and cultures. By centralising
              workflows, you not only reduce costs and operational friction, but also ensure professional brand
              consistency. It is the ideal solution for companies that need to scale training programmes and
              global communication with maximum confidence and professional finish.
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

export default AudiovisualLocalizationPage;
