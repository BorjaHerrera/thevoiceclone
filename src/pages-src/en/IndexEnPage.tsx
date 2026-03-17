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

import videoImgSrc from "@/assets/video-localization.jpg";
import voiceoverImgSrc from "@/assets/voiceover.jpg";
import subtitlingImgSrc from "@/assets/subtitling.jpg";
import translationImgSrc from "@/assets/translation.jpg";
const videoImg = typeof videoImgSrc === "string" ? videoImgSrc : (videoImgSrc as { src: string }).src;
const voiceoverImg = typeof voiceoverImgSrc === "string" ? voiceoverImgSrc : (voiceoverImgSrc as { src: string }).src;
const subtitlingImg = typeof subtitlingImgSrc === "string" ? subtitlingImgSrc : (subtitlingImgSrc as { src: string }).src;
const translationImg = typeof translationImgSrc === "string" ? translationImgSrc : (translationImgSrc as { src: string }).src;

const IndexEnPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <IntroSection />
    <SplitScreen />
    <ServicesGrid />

    <ServiceSectionDual
      image={videoImg}
      imageAlt="Video editing interface with waveforms and multilingual overlays"
      image2={subtitlingImg}
      image2Alt="AI video production"
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="localizacion-integral"
        image={voiceoverImg}
        imageAlt="Integral multimedia localization workflow"
        title="Multimedia Localization"
        details="A unique workflow that unifies video, voice over, subtitles and translation, avoiding handoff errors and ensuring consistent messaging with a single strategic partner."
        reverse
      />
    </div>

    <ServiceDetail
      id="voiceover"
      image={voiceoverImg}
      imageAlt="Professional studio microphone with abstract sound waves"
      title="AI Voice Over"
      details="Advanced voice technologies with human validation that take your narrative to any language while maintaining consistent brand voice, flawless pronunciation and natural delivery."
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="subtitulacion"
        image={subtitlingImg}
        imageAlt="Cinematic screen with clean typographic subtitles"
        title="Multilingual Subtitling"
        details="Precise and culturally appropriate subtitles generated with AI and expert reviewers that guarantee readability, perfect synchronisation and improve global engagement."
        reverse
      />
    </div>

    <ServiceDetail
      id="traduccion"
      image={translationImg}
      imageAlt="Global connectivity visualisation with lines and nodes"
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
