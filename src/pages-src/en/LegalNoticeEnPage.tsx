import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNoticeEnPage = () => {
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
              Legal Notice
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
            {/* OWNERSHIP */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Website ownership
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THEVOICECLONE. is owned by DANI VOICE OVERS, S.L. (hereinafter, THEVOICECLONE.), a Spanish company dedicated to the production and commercialisation of voice over and audiovisual post-production and translation, with registered address at Calle Santiago Rodríguez Conde, nº 23 F, Alpedrete (28430 Madrid, Spain); VAT number ESB87267878, registered in the Madrid Companies Register, volume 33677, folio 46, sheet M-604376.
                </p>
                <p>
                  The purpose of this website is to present the products and services of THEVOICECLONE., as well as to provide a platform for clients and suppliers to engage with them, and to offer the corporate information necessary for the knowledge and security of any activity or transaction with this company.
                </p>
              </div>
            </div>

            {/* TERMS OF USE */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Terms of use
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The user agrees to make correct use of this website, in accordance with ethical principles, contractual good faith and the regulations in force in Spain and the European Union, in particular the General Data Protection Regulation (GDPR) approved by EU Regulation 2016/679 of 27 April 2016; being responsible for any damage caused to this website or to the reputation of its owner as a result of acts contrary to law, ethics or contractual good faith.
                </p>
                <p>The following is expressly prohibited:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The dissemination of illegal or illicit, harmful, defamatory, violent content or content contrary to morality and public order.</li>
                  <li>The introduction of any type of malicious software, spyware or computer viruses capable of causing damage to the website, capturing private information or altering images, design and content of electronic documents, data or hardware and software systems, or hindering normal access or use of the site by users.</li>
                  <li>Unauthorised access or access with false, incomplete or impersonated identities, to email accounts, passwords and data of other users or to restricted areas.</li>
                </ul>
                <p>
                  The establishment of a hypertext link to our website from another website, social network, email or document does not in any case imply the existence of any relationship between THEVOICECLONE. and the sender or holder of the link; therefore, THEVOICECLONE. is not responsible for the content of websites, networks, documents or emails that link to this site, nor does their existence imply approval of them or their operation.
                </p>
              </div>
            </div>

            {/* INTELLECTUAL PROPERTY */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Intellectual and industrial property
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All texts, content, sections, headings, software and source code, images, videos, graphic design, illustrations and any other distinctive signs on this website are the property of THEVOICECLONE. or of the persons indicated in each case.
                </p>
                <p>
                  Consequently, all rights are reserved, so that in order to distribute, modify, link, insert, copy, reproduce or alter any publication on this website, in whole or in part, prior and express authorisation from THEVOICECLONE. will be required.
                </p>
                <p>
                  However, sharing or reusing content without alteration is permitted, exclusively by link on social networks, emails or private documents for non-commercial purposes, provided that no unlawful conduct is carried out that may damage the image, interests or rights of THEVOICECLONE. or third parties, nor alter the normal functioning of the website.
                </p>
              </div>
            </div>

            {/* PRIVACY */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Privacy and data protection
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Personal data voluntarily provided by users will form part of an automated file under the responsibility of THEVOICECLONE., processed in accordance with current Spanish and European legislation, in particular the GDPR (EU Regulation 2016/679).
                </p>
                <p>
                  Data will not be transferred to third parties and will be used exclusively for the purposes indicated in each form or requested by the user.
                </p>
                <p>
                  The data subject has the right to access, rectify, delete ("right to be forgotten"), restrict processing, data portability, object and automated decisions, by sending a letter to the address indicated or an email to info@danivoiceovers.com.
                </p>
              </div>
            </div>

            {/* CLIENT DATA */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                Client data processing
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Data controller:</p>
                <p>
                  DANI VOICE OVERS, S.L.<br />
                  VAT: B87267878<br />
                  Address: Calle Santiago Rodríguez Conde, 23 F, Alpedrete (28430 Madrid, Spain)<br />
                  Phone: +34 911 368 927<br />
                  Email: info@danivoiceovers.com
                </p>
                <p>
                  Data will be used to provide the requested service and will be retained for the duration of the commercial relationship or the legally required period. The client may exercise their rights of access, rectification or deletion where applicable.
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

export default LegalNoticeEnPage;
