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

import videoImg from "@/assets/video-localization.jpg";
import voiceoverImg from "@/assets/voiceover.jpg";
import subtitlingImg from "@/assets/subtitling.jpg";
import translationImg from "@/assets/translation.jpg";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <IntroSection />
    <SplitScreen />
    <ServicesGrid />

    <ServiceSectionDual
      image={videoImg}
      imageAlt="Interfaz de edición de vídeo con formas de onda y overlays multilingües"
      image2={subtitlingImg}
      image2Alt="Producción de vídeo con IA"
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="localizacion-integral"
        image={voiceoverImg}
        imageAlt="Workflow de localización multimedia integral"
        title="Localización Multimedia"
        details="Flujo de trabajo único que unifica vídeo, locución, subtítulos y traducción, evitando errores de traspaso y asegurando mensajes consistentes con un único partner estratégico."
        reverse
      />
    </div>

    <ServiceDetail
      id="voiceover"
      image={voiceoverImg}
      imageAlt="Micrófono profesional de estudio con ondas sonoras abstractas"
      title="Locuciones con voces IA"
      details="Tecnologías de voz avanzadas con validación humana que llevan tu narrativa a cualquier idioma manteniendo voz de marca coherente, pronunciación y naturalidad impecables."
    />

    <div className="bg-secondary/30">
      <ServiceDetail
        id="subtitulacion"
        image={subtitlingImg}
        imageAlt="Pantalla cinematográfica con subtítulos tipográficos limpios"
        title="Subtitulado Multilingüe"
        details="Subtítulos precisos y culturalmente apropiados generados con IA y revisores expertos que garantizan legibilidad, sincronización perfecta y mejoran el engagement global."
        reverse
      />
    </div>

    <ServiceDetail
      id="traduccion"
      image={translationImg}
      imageAlt="Visualización de conectividad global con líneas y nodos"
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
