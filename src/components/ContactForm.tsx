import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── Configura estas credenciales en EmailJS (emailjs.com) ───────────────────
// 1. Crea una cuenta gratuita en https://www.emailjs.com
// 2. Crea un servicio (p.ej. Gmail) y apunta el Service ID aquí
// 3. Crea una plantilla de email y apunta el Template ID aquí
// 4. Copia tu Public Key desde Account > API Keys
const EMAILJS_SERVICE_ID  = "service_XXXXXXX";   // ← reemplaza
const EMAILJS_TEMPLATE_ID = "template_XXXXXXX";  // ← reemplaza
const EMAILJS_PUBLIC_KEY  = "XXXXXXXXXXXXXXX";    // ← reemplaza
// ─────────────────────────────────────────────────────────────────────────────

const projectTypes = ["RECURRENTE / MENSUAL", "PROYECTO ÚNICO", "CONSULTORÍA"];
const volumeOptions = ["1-5 VÍDEOS/MES", "5-20 VÍDEOS/MES", "+20 VÍDEOS/MES"];
const serviceOptions = [
  "LOCALIZACIÓN DE VÍDEO",
  "PRODUCCIÓN DE VÍDEO",
  "LOCUCIÓN IA / VO",
  "SUBTITULADO",
  "TRADUCCIÓN",
  "ESTRATEGIA GLOBAL",
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [volume, setVolume] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    name,
          from_email:   email,
          phone,
          company,
          project_type: projectType,
          volume,
          services:     selectedServices.join(", "),
          message,
          to_email:     "hello@thevoiceclone.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contacto" className="py-20 lg:py-28 bg-indigo-50">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
              <span className="gradient-text">¡Recibido!</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hemos recibido tu petición. Te responderemos en menos de 24h. Gracias.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-indigo-50">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
            <span className="text-foreground">HÁBLANOS DE TU</span>
            <br />
            <span className="gradient-text">PROYECTO.</span>
          </h2>
        </motion.div>

        <div className="w-full h-px bg-foreground/20 mb-12" />

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10"
          onSubmit={handleSubmit}
        >
          {/* Row 1 */}
          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                TELÉFONO DE CONTACTO
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                EMAIL CORPORATIVO
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              NOMBRE DE LA EMPRESA / MARCA
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div className="w-full h-px bg-foreground/20" />

          {/* Selection Grid */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/15">
            {/* Col 1 - Tipo de proyecto */}
            <div className="pb-8 md:pb-0 md:pr-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">
                TIPO DE PROYECTO
              </label>
              <div className="space-y-3">
                {projectTypes.map((t) => (
                  <label key={t} className="flex items-center gap-3 cursor-pointer group">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        projectType === t ? "border-primary" : "border-foreground/30 group-hover:border-foreground/60"
                      }`}
                    >
                      {projectType === t && <span className="w-2 h-2 rounded-full bg-primary" />}
                    </span>
                    <span className="text-xs tracking-[0.15em] uppercase text-foreground/80">{t}</span>
                    <input
                      type="radio"
                      name="projectType"
                      value={t}
                      checked={projectType === t}
                      onChange={() => setProjectType(t)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Col 2 - Volumen */}
            <div className="py-8 md:py-0 md:px-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">
                VOLUMEN DE VÍDEO ESTIMADO
              </label>
              <div className="space-y-3">
                {volumeOptions.map((v) => (
                  <label key={v} className="flex items-center gap-3 cursor-pointer group">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        volume === v ? "border-primary" : "border-foreground/30 group-hover:border-foreground/60"
                      }`}
                    >
                      {volume === v && <span className="w-2 h-2 rounded-full bg-primary" />}
                    </span>
                    <span className="text-xs tracking-[0.15em] uppercase text-foreground/80">{v}</span>
                    <input
                      type="radio"
                      name="volume"
                      value={v}
                      checked={volume === v}
                      onChange={() => setVolume(v)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Col 3 - Servicios */}
            <div className="pt-8 md:pt-0 md:pl-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">
                SERVICIOS REQUERIDOS
              </label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {serviceOptions.map((s) => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer group">
                    <span
                      className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors ${
                        selectedServices.includes(s)
                          ? "border-primary bg-primary"
                          : "border-foreground/30 group-hover:border-foreground/60"
                      }`}
                    >
                      {selectedServices.includes(s) && (
                        <svg className="w-2.5 h-2.5 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs tracking-[0.1em] uppercase text-foreground/80 leading-tight">{s}</span>
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(s)}
                      onChange={() => toggleService(s)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-foreground/20" />

          {/* Open text */}
          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              CUÉNTANOS MÁS SOBRE TU PROYECTO
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <div className="w-full h-px bg-foreground/20" />

          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-yellow-400 text-foreground px-10 py-4 rounded-lg text-sm tracking-[0.2em] uppercase font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar Propuesta"}
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Error al enviar. Inténtalo de nuevo o escríbenos a hello@thevoiceclone.com
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
