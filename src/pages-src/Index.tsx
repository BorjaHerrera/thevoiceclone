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

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <IntroSection />
    <SplitScreen />
    <ServicesGrid />

    <ServiceSectionDual
      image={localizacionVideoHome}
      imageAlt="Localización de Vídeo"
      image2={produccionVideoHome}
      image2Alt="Producción de Vídeo con IA"
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="localizacion-integral"
        image={localizacionMultimediaHome}
        imageAlt="Localización Multimedia"
        title="Localización Multimedia"
        details="Flujo de trabajo único que unifica vídeo, locución, subtítulos y traducción, evitando errores de traspaso y asegurando mensajes consistentes con un único partner estratégico."
        reverse
      />
    </div>

    <ServiceDetail
      id="voiceover"
      image={locucionVocesIAHome}
      imageAlt="Locuciones con Voces IA"
      title="Locuciones con voces IA"
      details="Tecnologías de voz avanzadas con validación humana que llevan tu narrativa a cualquier idioma manteniendo voz de marca coherente, pronunciación y naturalidad impecables."
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="subtitulacion"
        image={subtituladoMultilingueHome}
        imageAlt="Subtitulado Multilingüe"
        title="Subtitulado Multilingüe"
        details="Subtítulos precisos y culturalmente apropiados generados con IA y revisores expertos que garantizan legibilidad, sincronización perfecta y mejoran el engagement global."
        reverse
      />
    </div>

    <ServiceDetail
      id="traduccion"
      image={traduccionHome}
      imageAlt="Traducción con IA Supervisada"
      title="Traducción con IA supervisada"
      details="Modelo de IA supervisada que adapta guiones y textos con rigor terminológico y estilo corporativo, optimizando velocidad y coste a gran escala."
    />

    <CTASection />
    <VideoPortfolio />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
