import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import ProduccionVideoIAPage from "./pages/ProduccionVideoIAPage";
import BlogPage from "./pages/BlogPage";
import AvisoLegalPage from "./pages/AvisoLegalPage";
import PoliticaCookiesPage from "./pages/PoliticaCookiesPage";
import VideoEmpresasPage from "./pages/VideoEmpresasPage";
import LocalizacionVideoPage from "./pages/LocalizacionVideoPage";
import LocalizacionAudiovisualPage from "./pages/LocalizacionAudiovisualPage";
import VocesIAPage from "./pages/VocesIAPage";
import SubtituladoProfesionalVideoPage from "./pages/SubtituladoProfesionalVideoPage";
import ServicioTraduccionPage from "./pages/ServicioTraduccionPage";
import PreguntasFrecuentesPage from "./pages/PreguntasFrecuentesPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./pages/NotFound";

const PAGE_MAP: Record<string, React.ComponentType> = {
  index: Index,
  "video-para-empresas": VideoEmpresasPage,
  "localizacion-de-video": LocalizacionVideoPage,
  "produccion-video-con-ia": ProduccionVideoIAPage,
  "localizacion-audiovisual": LocalizacionAudiovisualPage,
  "voces-ia": VocesIAPage,
  "subtitulado-video": SubtituladoProfesionalVideoPage,
  "traduccion-profesional": ServicioTraduccionPage,
  "preguntas-frecuentes": PreguntasFrecuentesPage,
  contacto: ContactoPage,
  blog: BlogPage,
  "aviso-legal": AvisoLegalPage,
  "politica-cookies": PoliticaCookiesPage,
};

const queryClient = new QueryClient();

const App = () => {
  const root = document.getElementById("tvc-react-root");
  const page = root?.dataset.page ?? "index";
  const PageComponent = PAGE_MAP[page] ?? NotFound;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PageComponent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
