import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronsDown, UserCheck, BookMarked, Globe2, Cpu, Sparkles, ClipboardCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FeatureGridSection from "@/components/FeatureGridSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import humanAiCollaborationSrc from "@/assets/TRADUCCION_CON_IA_SUPERVISADA_SERVICIO.webp";
const humanAiCollaboration = typeof humanAiCollaborationSrc === "string" ? humanAiCollaborationSrc : (humanAiCollaborationSrc as { src: string }).src;

const sections: { id: string; title: string; navLabel: string; intro: string; subsections: { heading: string; text: string }[] }[] = [
  {
    id: "corporate-translation",
    title: "Professional translation: scalability with terminological consistency",
    navLabel: "Corporate translation: precision and consistency.",
    intro:
      "We centralise the management of your text assets to avoid style dispersion. We design processes that ensure your reports, contracts and manuals faithfully reflect the professionalism of your company anywhere in the world.",
    subsections: [],
  },
  {
    id: "hybrid-methodology",
    title: "Hybrid methodology: the balance between AI and native linguists",
    navLabel: "The strategic value of AI-assisted human review.",
    intro:
      "AI allows us to process large volumes of text in record time, but it is human supervision that guarantees B2B fluency and rigour. This approach allows scaling your international communications while maintaining certified quality control.",
    subsections: [],
  },
  {
    id: "outsource-translation",
    title: "Outsourcing translation simplifies your business expansion",
    navLabel: "Outsourcing localization to simplify your operations.",
    intro:
      "Delegating localization to a specialist partner allows your team to focus on the core business. You transform a complex operational task into a strategic asset, obtaining predictable costs and a homogeneous global presence.",
    subsections: [],
  },
];

const faqs = [
  {
    q: "What is the difference between a professional service and an automatic translator?",
    a: "Professional services include human review, style control and cultural adaptation. Automatic translators lack supervision, generating context errors and brand inconsistencies.",
  },
  {
    q: "What human review steps do you carry out after using AI?",
    a: "We carry out a thorough terminological review, corporate tone control, style adjustment and a final consistency validation to ensure the text is natural and precise.",
  },
  {
    q: "How do you guarantee my brand identity is maintained?",
    a: "We use personalised corporate glossaries and client-specific style guides. This, combined with the review of native experts, ensures your brand always speaks with the same voice.",
  },
  {
    q: "What types of content can you translate?",
    a: "We specialise in B2B corporate content: from technical documents and contracts to digital marketing, websites and high-level corporate presentations.",
  },
];

const ProfessionalTranslationPage = () => {
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
              Professional translation. AI driven. Human-led.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We guarantee that your global communication maintains its original precision and impact in every
              market. We do not rely on uncontrolled automatic engines: we combine AI-assisted technology with
              the review of native experts to ensure uniform terminology and impeccable cultural adaptation.
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
                Your brand identity <GradientText>protected in every language.</GradientText>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many companies risk their reputation with automatic translations that lack context and corporate
                style. At The Voice Clone, our hybrid workflow unifies technological speed with human judgement,
                achieving 95% terminological consistency and eliminating common errors that generic tools
                typically overlook.
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
                Intelligent translation and human review: maximum efficiency without AI errors.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Optimise your budgets for <strong>technical documentation, marketing campaigns and international web content</strong>.{" "}
                Our methodology reduces terminological errors by up to 40% through the use of centralised
                glossaries and expert supervision, allowing you to scale your global presence without
                compromising quality or delivery deadlines.
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
              src={humanAiCollaboration}
              alt="AI-Supervised Translation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <FeatureGridSection
        heading="The definitive ecosystem for your B2B translation"
        description="A workflow designed for companies seeking rigour, scalability and a unified sonic and textual identity."
        cards={[
          {
            icon: UserCheck,
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            title: "Expert Review",
            text: "Every project is supervised by professional linguists who ensure tone, style and communicative intent.",
          },
          {
            icon: BookMarked,
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            title: "Centralised Glossaries",
            text: "We implement proprietary terminology databases to guarantee your technical vocabulary is identical in all languages.",
          },
          {
            icon: Globe2,
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            title: "Cultural Adaptation",
            text: "Beyond translating words, we localise the message so it connects with the social and commercial context of each market.",
          },
          {
            icon: Cpu,
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-400",
            title: "AI-Assisted",
            text: "We use cutting-edge technology to accelerate repetitive processes, optimising delivery times and operational costs.",
          },
          {
            icon: Sparkles,
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            title: "Marketing and Style",
            text: "We adapt advertising copy so it maintains its commercial and emotional force in any language.",
          },
          {
            icon: ClipboardCheck,
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            title: "Quality Control",
            text: "We apply rigorous final validation standards to certify that every deliverable is ready for global publication.",
          },
        ]}
      />

      {/* Services – Editorial Two-Column Layout */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div className="hidden lg:block">
              <div className="sticky top-40 self-start">
                <h2 className="text-4xl font-heading font-extrabold uppercase leading-tight text-foreground mb-12">
                  A translation model that protects and strengthens your brand
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
                  {section.subsections.map((sub: { heading: string; text: string }, j: number) => (
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
              Where translation becomes a <GradientText>trust asset.</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Internal management of translations often leads to inconsistencies that damage brand image. By
              trusting our managed service, you access a professional translation infrastructure that guarantees
              consistency, speed and operational savings. We scale your communications quickly so your message
              reaches any market with maximum reliability.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoPortfolio videoIds={["yDDZg_Qh4Rs", "lHSTqk_1uc4", "Ohr6Kw1Qmx0"]} />

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

export default ProfessionalTranslationPage;
