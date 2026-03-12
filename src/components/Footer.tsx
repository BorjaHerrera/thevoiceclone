import { Youtube, Linkedin } from "lucide-react";
import logoSrc from "@/assets/logo_transparente.png";
const logo = typeof logoSrc === 'string' ? logoSrc : (logoSrc as { src: string }).src;

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container px-4 lg:px-8 flex flex-col gap-6">

      {/* Fila 1: logo + links legales — stack en móvil, fila en desktop */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">

        {/* Logo + links de navegación — 2 columnas en móvil */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href="/" className="flex items-center">
            <img src={logo} alt="The Voice Clone" className="h-10" />
          </a>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-row sm:gap-6">
            <a href="/#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="/aviso-legal" className="hover:text-foreground transition-colors">
              Aviso legal
            </a>
            <a href="/politica-cookies" className="hover:text-foreground transition-colors">
              Política de cookies
            </a>
            <a href="/preguntas-frecuentes" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="/contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>

        {/* Copyright */}
        <span className="text-xs sm:text-sm">© 2026 The Voice Clone. Todos los derechos reservados.</span>
      </div>

      {/* Fila 2: redes sociales */}
      <div className="flex justify-end gap-4">
        <a
          href="https://www.youtube.com/@TheVoiceClone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Youtube className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/the-voice-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

    </div>
  </footer>
);

export default Footer;
