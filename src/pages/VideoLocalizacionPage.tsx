import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VideoLocalizacionPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
          Localización de Vídeo
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Procesos híbridos con IA y revisión humana que aceleran la distribución internacional manteniendo tono, terminología y consistencia cultural.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default VideoLocalizacionPage;
