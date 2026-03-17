import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What is multimedia localisation and how does it differ from production?",
    a: "Localisation adapts existing content (subtitles, dubbing, cultural references) for new markets, while production creates content from scratch (corporate videos, e-learning or marketing campaigns).",
  },
  {
    q: "What advantages does your managed service have over automatic tools?",
    a: "Unlike fully automatic apps, we offer comprehensive oversight, brand consistency, linguistic quality control (QA) and cultural adaptation that AI alone cannot achieve.",
  },
  {
    q: "Does AI replace the human creative or linguistic team?",
    a: "No. AI handles repetitive and technical tasks (base editing, pre-translation). However, every project includes human supervision to guarantee tone, terminological accuracy and brand identity.",
  },
  {
    q: "Do AI voices and avatars sound natural?",
    a: "Yes. We use state-of-the-art technology and, most importantly, our experts fine-tune rhythm, intonation and technical clarity to deliver a professional, corporate-grade result.",
  },
  {
    q: "Can content be localised into more than 10 languages simultaneously?",
    a: "Yes. Our workflows are designed to scale and manage complex multilingual projects simultaneously, maintaining consistency across all markets.",
  },
  {
    q: "What types of content and platforms do you support?",
    a: "From e-learning videos and corporate training to social media campaigns (LinkedIn, Instagram, TikTok) and high-level B2B presentations.",
  },
  {
    q: "Do you offer voice cloning services?",
    a: "No. We focus exclusively on professional voice over and corporate avatars for B2B communications. We do not offer voice cloning or services for entertainment or fiction.",
  },
  {
    q: "How much can you save with AI-assisted production?",
    a: "Automating technical processes can reduce operational costs by up to 60% and dramatically shorten delivery times, allowing you to produce more volume with fewer resources.",
  },
  {
    q: "How do you ensure brand consistency across different countries?",
    a: "We centralise management, rigorously apply your style guides and terminology glossaries, ensuring your brand speaks with one voice in any language.",
  },
  {
    q: "What's the difference between your subtitling and automatic subtitles from platforms like YouTube?",
    a: "Automatic subtitles make context and synchronisation errors. Our professional service includes cultural adaptation, precise timing adjustments and expert review to ensure the message is accurate.",
  },
  {
    q: "Can you adapt content to my specific brand guidelines?",
    a: "Absolutely. We ensure that style, technical terminology and tone are consistent with your predefined corporate identity.",
  },
];

const FaqEnPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
          }}
        />
        <div className="container relative z-10 px-4 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-32 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronsDown className="w-12 h-12 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqEnPage;
