import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaCookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(330 80% 65%) 0%, hsl(260 70% 58%) 35%, hsl(211 100% 40%) 65%, hsl(220 30% 12%) 100%)",
          }}
        />
        <div className="container relative z-10 px-4 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-32 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.05] uppercase tracking-tight text-white"
            >
              Política de Cookies
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronsDown className="w-12 h-12 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Cookies se actualizó por última vez el 2 de mayo de 2025 y se aplica a los ciudadanos y residentes permanentes legales del Espacio Económico Europeo y Suiza.
            </p>

            {/* 1. Introducción */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                1. Introducción
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nuestro sitio web, https://danivoiceovers.com/en/ (en adelante: «el sitio web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son instaladas por terceros que hemos contratado. En el siguiente documento le informamos sobre el uso de cookies en nuestro sitio web.
                </p>
              </div>
            </div>

            {/* 2. ¿Qué son las cookies? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                2. ¿Qué son las cookies?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Una cookie es un archivo pequeño y sencillo que se envía junto con las páginas de este sitio web y que su navegador almacena en el disco duro de su ordenador o de otro dispositivo. La información almacenada en ellos puede ser devuelta a nuestros servidores o a los servidores de los terceros pertinentes durante una visita posterior.
                </p>
              </div>
            </div>

            {/* 3. ¿Qué son los scripts? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                3. ¿Qué son los scripts?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Un script es un fragmento de código de programación que se utiliza para que nuestro sitio web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en su dispositivo.
                </p>
              </div>
            </div>

            {/* 4. ¿Qué es una baliza web? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                4. ¿Qué es una baliza web (web beacon)?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Una baliza web (o una etiqueta de píxel) es un pequeño fragmento invisible de texto o imagen en un sitio web que se utiliza para supervisar el tráfico en el mismo. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.
                </p>
              </div>
            </div>

            {/* 5. Cookies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                5. Cookies
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.1 Cookies técnicas o funcionales</h3>
                  <p>
                    Algunas cookies aseguran que ciertas partes del sitio web funcionen correctamente y que sus preferencias de usuario sigan siendo conocidas. Al colocar cookies funcionales, facilitamos su visita a nuestro sitio web. De esta manera, no necesita introducir repetidamente la misma información al visitar nuestro sitio web y, por ejemplo, los artículos permanecen en su carrito de la compra hasta que haya pagado. Podemos colocar estas cookies sin su consentimiento.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.2 Cookies de estadísticas</h3>
                  <p>
                    Utilizamos cookies de estadísticas para optimizar la experiencia del sitio web para nuestros usuarios. Con estas cookies de estadísticas obtenemos información sobre el uso de nuestro sitio web. Pedimos su permiso para colocar cookies de estadísticas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.3 Cookies de marketing/seguimiento</h3>
                  <p>
                    Las cookies de marketing/seguimiento son cookies o cualquier otra forma de almacenamiento local, utilizadas para crear perfiles de usuario con el fin de mostrar publicidad o para realizar el seguimiento del usuario en este sitio web o en varios sitios web con fines de marketing similares.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cookies instaladas */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                6. Cookies instaladas
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Elementor:</strong> Estadísticas (anónimas). Consentimiento para el servicio: elementor.</li>
                  <li><strong>Google Analytics:</strong> Estadísticas (anónimas). Consentimiento para el servicio: google-analytics.</li>
                  <li><strong>WPML:</strong> Funcional. Consentimiento para el servicio: wpml.</li>
                  <li><strong>Google Fonts:</strong> Marketing/Seguimiento. Consentimiento para el servicio: google-fonts.</li>
                  <li><strong>Google reCAPTCHA:</strong> Marketing/Seguimiento. Consentimiento para el servicio: google-recaptcha.</li>
                  <li><strong>YouTube:</strong> Marketing/Seguimiento, Funcional, Estadísticas. Consentimiento para el servicio: youtube.</li>
                  <li><strong>Miscelánea:</strong> Estadísticas (anónimas), Funcional. Consentimiento para el servicio: miscellaneous.</li>
                </ul>
              </div>
            </div>

            {/* 7. Consentimiento */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                7. Consentimiento
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cuando visite nuestro sitio web por primera vez, le mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como haga clic en «Guardar preferencias», usted acepta que utilicemos las categorías de cookies y complementos (plug-ins) que seleccionó en la ventana emergente, tal como se describe en esta Política de Cookies. Puede desactivar el uso de cookies a través de su navegador, pero tenga en cuenta que es posible que nuestro sitio web ya no funcione correctamente.
                </p>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">7.1 Gestione sus ajustes de consentimiento</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Funcional:</strong> Siempre activo.</li>
                    <li><strong>Estadísticas.</strong></li>
                    <li><strong>Marketing.</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. Activación/desactivación */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                8. Activación/desactivación y eliminación de cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Puede utilizar su navegador de Internet para eliminar las cookies de forma automática o manual. También puede especificar que no se coloquen determinadas cookies. Otra opción es cambiar la configuración de su navegador para recibir un mensaje cada vez que se coloque una cookie. Para más información sobre estas opciones, consulte las instrucciones de la sección de Ayuda de su navegador.
                </p>
                <p>
                  Tenga en cuenta que nuestro sitio web puede no funcionar correctamente si se desactivan todas las cookies. Si elimina las cookies de su navegador, se volverán a colocar después de su consentimiento cuando vuelva a visitar nuestros sitios web.
                </p>
              </div>
            </div>

            {/* 9. Sus derechos */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                9. Sus derechos con respecto a los datos personales
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Usted tiene los siguientes derechos con respecto a sus datos personales:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tiene derecho a saber por qué son necesarios sus datos personales, qué pasará con ellos y durante cuánto tiempo se conservarán.</li>
                  <li><strong>Derecho de acceso:</strong> Tiene derecho a acceder a sus datos personales que conocemos.</li>
                  <li><strong>Derecho de rectificación:</strong> tiene derecho a completar, corregir, hacer borrar o bloquear sus datos personales cuando lo desee.</li>
                  <li>Si nos da su consentimiento para procesar sus datos, tiene derecho a revocar dicho consentimiento y a que se eliminen sus datos personales.</li>
                  <li><strong>Derecho de cesión de sus datos:</strong> tiene derecho a solicitar todos sus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.</li>
                  <li><strong>Derecho de oposición:</strong> puede oponerse al tratamiento de sus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.</li>
                </ul>
                <p>
                  Para ejercer estos derechos, por favor contáctenos. Por favor, consulte los detalles de contacto en la parte inferior de esta Política de Cookies. Si tiene alguna queja sobre cómo manejamos sus datos, nos gustaría que nos lo hiciera saber, pero también tiene derecho a presentar una reclamación ante la autoridad de supervisión (la Agencia de Protección de Datos).
                </p>
              </div>
            </div>

            {/* 10. Datos de contacto */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                10. Datos de contacto
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Para preguntas y/o comentarios sobre nuestra Política de Cookies y esta declaración, por favor contáctenos usando los siguientes datos de contacto:
                </p>
                <p>
                  THEVOICECLONE. (DANI VOICE OVERS, S.L)<br />
                  Calle Santiago Rodríguez Conde, nº 23 F<br />
                  Alpedrete<br />
                  CP 28430 – Madrid<br />
                  España<br />
                  Sitio web: https://thevoiceclone.com/<br />
                  Correo electrónico: hello@thevoiceclone.com<br />
                  Número de teléfono: +34 911 368 927
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaCookiesPage;
