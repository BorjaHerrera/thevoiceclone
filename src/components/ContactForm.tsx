import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const copy = {
  es: {
    title1: "HÁBLANOS DE TU",
    title2: "PROYECTO.",
    fullName: "NOMBRE COMPLETO",
    phone: "TELÉFONO DE CONTACTO",
    email: "EMAIL CORPORATIVO",
    company: "NOMBRE DE LA EMPRESA / MARCA",
    projectTypeLabel: "TIPO DE PROYECTO",
    projectTypes: ["RECURRENTE / MENSUAL", "PROYECTO ÚNICO", "CONSULTORÍA"],
    volumeLabel: "VOLUMEN DE VÍDEO ESTIMADO",
    volumes: ["1-5 VÍDEOS/MES", "5-20 VÍDEOS/MES", "+20 VÍDEOS/MES"],
    servicesLabel: "SERVICIOS REQUERIDOS",
    services: ["LOCALIZACIÓN DE VÍDEO", "PRODUCCIÓN DE VÍDEO", "LOCUCIÓN IA / VO", "SUBTITULADO", "TRADUCCIÓN", "ESTRATEGIA GLOBAL"],
    messageLabel: "CUÉNTANOS MÁS SOBRE TU PROYECTO",
    submit: "Enviar Propuesta",
    sending: "Enviando...",
    successTitle: "¡Recibido!",
    successMsg: "Hemos recibido tu petición. Te responderemos en menos de 24h. Gracias.",
    errorMsg: "Error al enviar. Inténtalo de nuevo o escríbenos a hello@thevoiceclone.com",
  },
  en: {
    title1: "TELL US ABOUT",
    title2: "YOUR PROJECT.",
    fullName: "FULL NAME",
    phone: "PHONE NUMBER",
    email: "CORPORATE EMAIL",
    company: "COMPANY / BRAND NAME",
    projectTypeLabel: "PROJECT TYPE",
    projectTypes: ["RECURRING / MONTHLY", "ONE-OFF PROJECT", "CONSULTANCY"],
    volumeLabel: "ESTIMATED VIDEO VOLUME",
    volumes: ["1-5 VIDEOS/MONTH", "5-20 VIDEOS/MONTH", "+20 VIDEOS/MONTH"],
    servicesLabel: "SERVICES REQUIRED",
    services: ["VIDEO LOCALIZATION", "VIDEO PRODUCTION", "AI VOICE OVER", "SUBTITLING", "TRANSLATION", "GLOBAL STRATEGY"],
    messageLabel: "TELL US MORE ABOUT YOUR PROJECT",
    submit: "Send Proposal",
    sending: "Sending...",
    successTitle: "Received!",
    successMsg: "We have received your request. We will get back to you within 24 hours. Thank you.",
    errorMsg: "Error sending. Please try again or email us at hello@thevoiceclone.com",
  },
};

const ContactForm = () => {
  const router = useRouter();
  const t = router.locale === "en" ? copy.en : copy.es;

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
    } catch (err) {
      console.error("[EmailJS] Error:", err);
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
              <span className="gradient-text">{t.successTitle}</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{t.successMsg}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-indigo-50">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
            <span className="text-foreground">{t.title1}</span>
            <br />
            <span className="gradient-text">{t.title2}</span>
          </h2>
        </motion.div>

        <div className="w-full h-px bg-foreground/20 mb-12" />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t.fullName}</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t.phone}</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t.email}</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t.company}</label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors" />
          </div>

          <div className="w-full h-px bg-foreground/20" />

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/15">
            <div className="pb-8 md:pb-0 md:pr-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">{t.projectTypeLabel}</label>
              <div className="space-y-3">
                {t.projectTypes.map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${projectType === type ? "border-primary" : "border-foreground/30 group-hover:border-foreground/60"}`}>
                      {projectType === type && <span className="w-2 h-2 rounded-full bg-primary" />}
                    </span>
                    <span className="text-xs tracking-[0.15em] uppercase text-foreground/80">{type}</span>
                    <input type="radio" name="projectType" value={type} checked={projectType === type} onChange={() => setProjectType(type)} className="sr-only" />
                  </label>
                ))}
              </div>
            </div>

            <div className="py-8 md:py-0 md:px-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">{t.volumeLabel}</label>
              <div className="space-y-3">
                {t.volumes.map((v) => (
                  <label key={v} className="flex items-center gap-3 cursor-pointer group">
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${volume === v ? "border-primary" : "border-foreground/30 group-hover:border-foreground/60"}`}>
                      {volume === v && <span className="w-2 h-2 rounded-full bg-primary" />}
                    </span>
                    <span className="text-xs tracking-[0.15em] uppercase text-foreground/80">{v}</span>
                    <input type="radio" name="volume" value={v} checked={volume === v} onChange={() => setVolume(v)} className="sr-only" />
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-8 md:pt-0 md:pl-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">{t.servicesLabel}</label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {t.services.map((s) => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer group">
                    <span className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors ${selectedServices.includes(s) ? "border-primary bg-primary" : "border-foreground/30 group-hover:border-foreground/60"}`}>
                      {selectedServices.includes(s) && (
                        <svg className="w-2.5 h-2.5 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs tracking-[0.1em] uppercase text-foreground/80 leading-tight">{s}</span>
                    <input type="checkbox" checked={selectedServices.includes(s)} onChange={() => toggleService(s)} className="sr-only" />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-foreground/20" />

          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t.messageLabel}</label>
            <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-foreground/20 pb-3 text-foreground text-base focus:outline-none focus:border-foreground transition-colors resize-none" />
          </div>

          <div className="w-full h-px bg-foreground/20" />

          <div className="flex items-center gap-6">
            <button type="submit" disabled={status === "sending"}
              className="bg-yellow-400 text-foreground px-10 py-4 rounded-lg text-sm tracking-[0.2em] uppercase font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-60">
              {status === "sending" ? t.sending : t.submit}
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">{t.errorMsg}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
