import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import logoSrc from "@/assets/logo_transparente.png";
const logo = typeof logoSrc === 'string' ? logoSrc : (logoSrc as { src: string }).src;

const navLinks = [
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const isHome = router.pathname === "/" || router.pathname === "";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isOpaque ? "bg-white shadow-sm" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="/" className="flex items-center">
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

          {/* Language switcher */}
          <div className={`flex items-center gap-0.5 text-sm font-medium border rounded-full px-1 py-0.5 ${isOpaque ? "border-border" : "border-white/30"}`}>
            <button
              onClick={() => router.push(router.asPath, router.asPath, { locale: 'es' })}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                router.locale !== 'en'
                  ? isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"
                  : isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => router.push(router.asPath, router.asPath, { locale: 'en' })}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                router.locale === 'en'
                  ? isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"
                  : isOpaque ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="/contacto"
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-yellow-400 hover:text-foreground ${isOpaque ? "bg-foreground text-background" : "bg-white text-foreground"}`}
          >
            Contacto
          </a>
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
                href="/contacto"
                className="gradient-bg text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>

              {/* Language switcher mobile */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => { router.push(router.asPath, router.asPath, { locale: 'es' }); setOpen(false) }}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${router.locale !== 'en' ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  ES
                </button>
                <button
                  onClick={() => { router.push(router.asPath, router.asPath, { locale: 'en' }); setOpen(false) }}
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${router.locale === 'en' ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
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
