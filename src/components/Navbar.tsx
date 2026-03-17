import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import logoSrc from "@/assets/logo_transparente.png";
const logo = typeof logoSrc === 'string' ? logoSrc : (logoSrc as { src: string }).src;

const navLinksEs = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Localización End-to-End", href: "/localizacion-audiovisual" },
  {
    label: "Vídeo",
    href: "/video-para-empresas",
    dropdown: [
      { label: "Localización de vídeo", href: "/localizacion-de-video" },
      { label: "Producción de vídeo", href: "/produccion-video-con-ia" },
    ],
  },
  { label: "Voice Over", href: "/voces-ia" },
  { label: "Subtitulado", href: "/subtitulado-video" },
  { label: "Traducción", href: "/traduccion-profesional" },
  { label: "Blog", href: "/blog" },
];

const navLinksEn = [
  { label: "Services", href: "/en/#services" },
  { label: "End-to-End Localization", href: "/en/audiovisual-localization" },
  {
    label: "Video",
    href: "/en/video-for-business",
    dropdown: [
      { label: "Video Localization", href: "/en/video-localization" },
      { label: "AI Video Production", href: "/en/ai-video-production" },
    ],
  },
  { label: "AI Voice Over", href: "/en/ai-voices" },
  { label: "Subtitling", href: "/en/video-subtitling" },
  { label: "Translation", href: "/en/professional-translation" },
  { label: "Blog", href: "/en/blog" },
];

// Slug-only maps (without locale prefix — router.pathname strips it)
const ES_TO_EN: Record<string, string> = {
  "/": "/",
  "/video-para-empresas": "/video-for-business",
  "/localizacion-de-video": "/video-localization",
  "/produccion-video-con-ia": "/ai-video-production",
  "/localizacion-audiovisual": "/audiovisual-localization",
  "/voces-ia": "/ai-voices",
  "/subtitulado-video": "/video-subtitling",
  "/traduccion-profesional": "/professional-translation",
  "/preguntas-frecuentes": "/faq",
  "/contacto": "/contact",
  "/blog": "/blog",
  "/aviso-legal": "/legal-notice",
  "/politica-cookies": "/cookie-policy",
};

const EN_TO_ES: Record<string, string> = {
  "/": "/",
  "/video-for-business": "/video-para-empresas",
  "/video-localization": "/localizacion-de-video",
  "/ai-video-production": "/produccion-video-con-ia",
  "/audiovisual-localization": "/localizacion-audiovisual",
  "/ai-voices": "/voces-ia",
  "/video-subtitling": "/subtitulado-video",
  "/professional-translation": "/traduccion-profesional",
  "/faq": "/preguntas-frecuentes",
  "/contact": "/contacto",
  "/blog": "/blog",
  "/legal-notice": "/aviso-legal",
  "/cookie-policy": "/politica-cookies",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  // router.locale is reliable when navigating with { locale } option
  const isEn = router.locale === "en";
  const navLinks = isEn ? navLinksEn : navLinksEs;
  const contactHref = isEn ? "/en/contact" : "/contacto";
  const contactLabel = isEn ? "Contact" : "Contacto";

  const isHome = router.pathname === "/";
  const isOpaque = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const switchToEn = () => {
    if (isEn) return;
    // router.pathname has no locale prefix — look up EN equivalent slug
    const target = ES_TO_EN[router.pathname] ?? "/";
    router.push(target, undefined, { locale: "en" });
  };

  const switchToEs = () => {
    if (!isEn) return;
    // router.pathname has no locale prefix — look up ES equivalent slug
    const target = EN_TO_ES[router.pathname] ?? "/";
    router.push(target, undefined, { locale: "es" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isOpaque ? "bg-white shadow-sm" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href={isEn ? "/en/" : "/"} className="flex items-center">
          <img src={logo} alt="The Voice Clone" className="h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors inline-flex items-center gap-1 ${isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </a>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border py-2 z-50"
                    >
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </a>
            ),
          )}

          <a
            href={contactHref}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-yellow-400 hover:text-foreground ${isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"}`}
          >
            {contactLabel}
          </a>

          {/* Language switcher */}
          <div className={`ml-4 flex items-center gap-0.5 text-sm font-medium border rounded-full px-1 py-0.5 ${isOpaque ? "border-border" : "border-white/30"}`}>
            <button
              onClick={switchToEs}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                !isEn
                  ? isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"
                  : isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={switchToEn}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                isEn
                  ? isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"
                  : isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isOpaque ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 block"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-1">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="text-sm text-muted-foreground hover:text-foreground py-1.5 block"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={contactHref}
                className="gradient-bg text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
                onClick={() => setOpen(false)}
              >
                {contactLabel}
              </a>

              {/* Language switcher mobile */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => { switchToEs(); setOpen(false); }}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${!isEn ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  ES
                </button>
                <button
                  onClick={() => { switchToEn(); setOpen(false); }}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${isEn ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
