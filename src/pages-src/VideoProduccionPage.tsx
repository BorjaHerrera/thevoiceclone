import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VideoProduccionPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
          Producción de Vídeo
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Producción asistida por IA que reduce costes y tiempos automatizando tareas repetitivas, con validación experta de marca.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default VideoProduccionPage;
