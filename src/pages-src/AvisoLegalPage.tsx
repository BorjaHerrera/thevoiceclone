import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AvisoLegalPage = () => {
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
              Aviso Legal
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
            {/* TITULARIDAD */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Titularidad de este sitio web
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THEVOICECLONE. es propiedad de DANI VOICE OVERS, S.L. (en adelante, THEVOICECLONE.), sociedad española dedicada a la producción y comercialización de locuciones y postproducción audiovisual y traducción, con domicilio en Calle Santiago Rodríguez Conde, nº 23 F, en la localidad de Alpedrete (28430 Madrid, España); con CIF B87267878 y NÚMERO DE IVA ESB87267878, inscrita en el Registro Mercantil de Madrid en el tomo 33677, folio 46, hoja M-604376.
                </p>
                <p>
                  La finalidad del sitio web es dar a conocer los productos y servicios de THEVOICECLONE., así como proporcionar una plataforma para la contratación de los mismos por parte de clientes y proveedores, además de ofrecer la información corporativa necesaria para el conocimiento y seguridad de cualquier actividad o transacción con esta empresa.
                </p>
              </div>
            </div>

            {/* CONDICIONES DE USO */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Condiciones de uso de este sitio web
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  El usuario se compromete a hacer un uso correcto de este sitio web, conforme a los principios éticos, la buena fe contractual y la normativa vigente en España y la Unión Europea, en particular conforme a lo establecido en el Reglamento General de Protección de Datos (RGPD) aprobado por el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016; siendo responsable de cualquier daño causado a este sitio web o a la reputación de su titular como consecuencia de actos contrarios a la ley, la ética o la buena fe contractual.
                </p>
                <p>Queda expresamente prohibido:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La difusión de contenidos ilegales o ilícitos, dañinos, denigrantes, violentos o contrarios a la moral y al orden público.</li>
                  <li>La introducción de cualquier tipo de software malicioso, spyware o virus informáticos capaces de causar daños al sitio web, capturar información privada o alterar imágenes, diseño y contenido de documentos electrónicos, datos o sistemas hardware y software, o dificultar el acceso o uso normal del sitio por parte de los usuarios.</li>
                  <li>El acceso sin autorización o con identidades falsas, incompletas o suplantadas, a cuentas de correo electrónico, contraseñas y datos de otros usuarios o a áreas restringidas.</li>
                </ul>
                <p>
                  El establecimiento de un enlace hipertextual hacia nuestro sitio web desde otro sitio web, red social, correo electrónico o documento no implica en ningún caso la existencia de relación alguna entre THEVOICECLONE. y el emisor o titular del enlace; por tanto, THEVOICECLONE. no se responsabiliza de los contenidos de sitios web, redes, documentos o correos electrónicos que enlacen a este sitio, ni su existencia implica aprobación de los mismos o de su funcionamiento.
                </p>
                <p>
                  De conformidad con el artículo 17 de la Ley 32/2002, de 12 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), THEVOICECLONE. no será responsable de la información que incluya enlaces a otros contenidos, cuando no tenga conocimiento efectivo de que la actividad o información a la que se remite es ilícita o lesiona bienes o derechos de un tercero susceptibles de indemnización, siempre que actúe con diligencia para retirar o inutilizar el enlace correspondiente en cuanto tenga conocimiento de su carácter ilícito.
                </p>
              </div>
            </div>

            {/* PROPIEDAD INTELECTUAL */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Propiedad intelectual e industrial
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Todos los textos, contenidos, secciones, encabezados, software y código fuente, imágenes, vídeos, diseño gráfico, ilustraciones y cualesquiera otros signos distintivos de este sitio web son propiedad de THEVOICECLONE. o de las personas indicadas en su caso.
                </p>
                <p>
                  En consecuencia, todos los derechos quedan reservados, por lo que para distribuir, modificar, enlazar, insertar, copiar, reproducir o alterar cualquier publicación de este sitio web, total o parcialmente, será necesaria la autorización previa y expresa de THEVOICECLONE.
                </p>
                <p>
                  No obstante, se autoriza compartir o reutilizar el contenido sin alteración alguna, exclusivamente mediante enlace en redes sociales, correos electrónicos o documentos privados con fines no publicitarios, siempre que no se realice ninguna conducta ilícita que pueda dañar la imagen, intereses o derechos de THEVOICECLONE. o de terceros, ni que altere el normal funcionamiento del sitio web.
                </p>
                <p>
                  Cualquier medio de comunicación que desee utilizar contenidos de este sitio web deberá solicitar autorización previa y expresa a THEVOICECLONE.
                </p>
                <p>
                  Las marcas, nombres comerciales, signos distintivos o nombres de dominio utilizados para identificar a otras personas o entidades y sus productos o servicios pertenecen a sus respectivos titulares, sin que el acceso a este sitio web atribuya derecho alguno sobre los mismos al usuario.
                </p>
              </div>
            </div>

            {/* POLÍTICA DE COOKIES */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Política de cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Este sitio web utiliza cookies que obtienen información de carácter no personal relacionada con la experiencia de navegación, como tipo de navegador, sistema operativo, dirección IP, páginas visitadas y tiempo de permanencia, etc. Con esta información, THEVOICECLONE. intenta mejorar la experiencia de navegación del usuario y el uso de las funcionalidades disponibles.
                </p>
                <p>
                  En el aviso emergente que aparece al acceder por primera vez al sitio web, el usuario debe confirmar que comprende el uso que se hace de las cookies. Si continúa navegando sin confirmarlo, se entenderá que acepta dicho uso.
                </p>
                <p>Las cookies utilizadas, que no recopilan datos personales, son:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cookies de Google Analytics, servicio de análisis web desarrollado por Google que permite medir y analizar la navegación.</li>
                  <li>Cookie técnica PHPSESSID, utilizada para mantener la sesión del usuario.</li>
                  <li>Cookie qtrans_front_language, desarrollada por WordPress, que identifica el idioma de navegación.</li>
                  <li>Cookie wordpress_logged_in [hash], desarrollada por WordPress, que informa sobre fecha, hora, país y ciudad de acceso, sin identificar características personales.</li>
                </ul>
                <p>
                  Si el usuario desea retirar su consentimiento, deberá hacerlo desde la configuración de su navegador (Internet Explorer, Chrome, Safari, Firefox).
                </p>
              </div>
            </div>

            {/* POLÍTICA DE PRIVACIDAD */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Política de privacidad y protección de datos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Los datos personales facilitados voluntariamente por los usuarios formarán parte de un fichero automatizado responsabilidad de THEVOICECLONE., tratado conforme a la legislación española y europea vigente, en particular el RGPD (Reglamento UE 2016/679).
                </p>
                <p>
                  Los datos no se cederán a terceros y se utilizarán exclusivamente para las finalidades indicadas en cada formulario o solicitadas por el usuario.
                </p>
                <p>
                  El interesado tiene derecho a acceder, rectificar, suprimir ("derecho al olvido"), limitar el tratamiento, portabilidad de datos, oposición y decisiones automatizadas, enviando carta al domicilio indicado o correo electrónico a info@danivoiceovers.com.
                </p>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Newsletter
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La suscripción es voluntaria y gratuita y puede cancelarse en cualquier momento enviando un correo electrónico a info@danivoiceovers.com.
                </p>
              </div>
            </div>

            {/* REDES SOCIALES */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Política de redes sociales
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THEVOICECLONE. dispone de perfiles en redes sociales para fines promocionales y de comunicación.
                </p>
                <p>
                  Los usuarios pueden seguir estos perfiles, comprometiéndose a utilizarlos conforme a la normativa vigente, quedando prohibida la publicación de contenidos ilícitos, dañinos o contrarios a la moral y al orden público.
                </p>
                <p>
                  Los usuarios serán responsables de cualquier daño tecnológico o reputacional causado a THEVOICECLONE. a través de su interacción en redes sociales.
                </p>
              </div>
            </div>

            {/* CONDICIONES CONTRACTUALES */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Condiciones contractuales con clientes
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Los contratos entre THEVOICECLONE. y sus clientes se regirán por:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El cliente acepta pagar el precio indicado en el presupuesto aceptado.</li>
                  <li>El precio no incluye impuestos (IVA), tasas o comisiones bancarias.</li>
                  <li>Hasta el pago completo, el cliente no podrá usar ni distribuir el producto o servicio.</li>
                  <li>En caso de cancelación tras iniciar la producción, se cobrarán los costes generados (sin superar el presupuesto aceptado).</li>
                  <li>Los errores imputables a THEVOICECLONE. serán corregidos sin coste.</li>
                  <li>Cambios solicitados por el cliente tras iniciar la producción generarán coste adicional.</li>
                  <li>No se asume responsabilidad por retrasos imputables a locutores o traductores.</li>
                </ul>
              </div>
            </div>

            {/* TRATAMIENTO DE DATOS DE CLIENTES */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Tratamiento de datos de clientes
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Responsable:</p>
                <p>
                  DANI VOICE OVERS, S.L.<br />
                  CIF: B87267878<br />
                  Dirección: Calle Santiago Rodríguez Conde, 23 F, Alpedrete (28430 Madrid)<br />
                  Teléfono: +34 911 368 927<br />
                  Email: info@danivoiceovers.com
                </p>
                <p>
                  Los datos se utilizarán para prestar el servicio solicitado y se conservarán mientras dure la relación comercial o el tiempo legalmente exigido. El cliente puede ejercer sus derechos de acceso, rectificación o supresión cuando proceda.
                </p>
              </div>
            </div>

            {/* COOKIES ÁREA PRIVADA */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Uso de cookies durante el acceso de clientes
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Además de las cookies de navegación, cuando el usuario accede a su área privada se almacenan cookies adicionales con datos identificativos para permitir la navegación como usuario registrado. Estas cookies son necesarias para el correcto funcionamiento del área privada.
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

export default AvisoLegalPage;
