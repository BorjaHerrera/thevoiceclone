import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SplitScreen from "@/components/SplitScreen";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceSectionDual from "@/components/ServiceSectionDual";
import ServiceDetail from "@/components/ServiceDetail";
import CTASection from "@/components/CTASection";
import VideoPortfolio from "@/components/VideoPortfolio";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import localizacionVideoHomeSrc from "@/assets/LOCALIZACION VIDEO HOME.webp";
import produccionVideoHomeSrc from "@/assets/PRODUCCION VIDEO HOME.webp";
import localizacionMultimediaHomeSrc from "@/assets/LOCALIZACION MULTIMEDIA HOME.webp";
import locucionVocesIAHomeSrc from "@/assets/LOCUCION VOCES IA HOME.webp";
import subtituladoMultilingueHomeSrc from "@/assets/SUBTITULADO MULTILINGUE HOME.webp";
import traduccionHomeSrc from "@/assets/TRADUCCION CON IA SUPERVISADA HOME.webp";
const localizacionVideoHome = typeof localizacionVideoHomeSrc === "string" ? localizacionVideoHomeSrc : (localizacionVideoHomeSrc as { src: string }).src;
const produccionVideoHome = typeof produccionVideoHomeSrc === "string" ? produccionVideoHomeSrc : (produccionVideoHomeSrc as { src: string }).src;
const localizacionMultimediaHome = typeof localizacionMultimediaHomeSrc === "string" ? localizacionMultimediaHomeSrc : (localizacionMultimediaHomeSrc as { src: string }).src;
const locucionVocesIAHome = typeof locucionVocesIAHomeSrc === "string" ? locucionVocesIAHomeSrc : (locucionVocesIAHomeSrc as { src: string }).src;
const subtituladoMultilingueHome = typeof subtituladoMultilingueHomeSrc === "string" ? subtituladoMultilingueHomeSrc : (subtituladoMultilingueHomeSrc as { src: string }).src;
const traduccionHome = typeof traduccionHomeSrc === "string" ? traduccionHomeSrc : (traduccionHomeSrc as { src: string }).src;

const IndexEnPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <IntroSection />
    <SplitScreen />
    <ServicesGrid />

    <ServiceSectionDual
      image={localizacionVideoHome}
      imageAlt="Video Localization"
      image2={produccionVideoHome}
      image2Alt="AI Video Production"
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="localizacion-integral"
        image={localizacionMultimediaHome}
        imageAlt="Multimedia Localization"
        title="Multimedia Localization"
        details="A unique workflow that unifies video, voice over, subtitles and translation, avoiding handoff errors and ensuring consistent messaging with a single strategic partner."
        reverse
      />
    </div>

    <ServiceDetail
      id="voiceover"
      image={locucionVocesIAHome}
      imageAlt="AI Voice Over"
      title="AI Voice Over"
      details="Advanced voice technologies with human validation that take your narrative to any language while maintaining consistent brand voice, flawless pronunciation and natural delivery."
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="subtitulacion"
        image={subtituladoMultilingueHome}
        imageAlt="Multilingual Subtitling"
        title="Multilingual Subtitling"
        details="Precise and culturally appropriate subtitles generated with AI and expert reviewers that guarantee readability, perfect synchronisation and improve global engagement."
        reverse
      />
    </div>

    <ServiceDetail
      id="traduccion"
      image={traduccionHome}
      imageAlt="AI-Supervised Translation"
      title="AI-Supervised Translation"
      details="AI-supervised model that adapts scripts and texts with terminological rigour and corporate style, optimising speed and cost at scale."
    />

    <CTASection />
    <VideoPortfolio />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default IndexEnPage;
