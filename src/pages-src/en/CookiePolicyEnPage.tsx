import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicyEnPage = () => {
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
              Cookie Policy
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
              This Cookie Policy was last updated on 2 May 2025 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
            </p>

            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our website, https://thevoiceclone.com/ (hereinafter: "the website") uses cookies and other related technologies (for convenience, all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the following document we inform you about the use of cookies on our website.
                </p>
              </div>
            </div>

            {/* 2. What are cookies? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                2. What are cookies?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.
                </p>
              </div>
            </div>

            {/* 3. What are scripts? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                3. What are scripts?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A script is a piece of programming code used to make our website function properly and interactively. This code is executed on our server or on your device.
                </p>
              </div>
            </div>

            {/* 4. What is a web beacon? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                4. What is a web beacon?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on the website. In order to do this, various data about you are stored using these web beacons.
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
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.1 Technical or functional cookies</h3>
                  <p>
                    Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we facilitate your visit to our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, items remain in your shopping cart until you have paid. We may place these cookies without your consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.2 Statistics cookies</h3>
                  <p>
                    We use statistics cookies to optimise the website experience for our users. With these statistics cookies we get insights into the usage of our website. We ask your permission to place statistics cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">5.3 Marketing/tracking cookies</h3>
                  <p>
                    Marketing/tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Placed cookies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                6. Placed cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Elementor:</strong> Statistics (anonymous). Consent for service: elementor.</li>
                  <li><strong>Google Analytics:</strong> Statistics (anonymous). Consent for service: google-analytics.</li>
                  <li><strong>WPML:</strong> Functional. Consent for service: wpml.</li>
                  <li><strong>Google Fonts:</strong> Marketing/Tracking. Consent for service: google-fonts.</li>
                  <li><strong>Google reCAPTCHA:</strong> Marketing/Tracking. Consent for service: google-recaptcha.</li>
                  <li><strong>YouTube:</strong> Marketing/Tracking, Functional, Statistics. Consent for service: youtube.</li>
                  <li><strong>Miscellaneous:</strong> Statistics (anonymous), Functional. Consent for service: miscellaneous.</li>
                </ul>
              </div>
            </div>

            {/* 7. Consent */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                7. Consent
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies through your browser, but please note that our website may no longer work properly.
                </p>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">7.1 Manage your consent settings</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Functional:</strong> Always active.</li>
                    <li><strong>Statistics.</strong></li>
                    <li><strong>Marketing.</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. Enable/disable */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                8. Enabling/disabling and deleting cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.
                </p>
                <p>
                  Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our websites again.
                </p>
              </div>
            </div>

            {/* 9. Your rights */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                9. Your rights with respect to personal data
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You have the following rights with respect to your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained.</li>
                  <li><strong>Right of access:</strong> You have the right to access your personal data that we know about.</li>
                  <li><strong>Right to rectification:</strong> You have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
                  <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
                  <li><strong>Right to data portability:</strong> You have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
                  <li><strong>Right to object:</strong> You may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
                </ul>
                <p>
                  To exercise these rights, please contact us. Please see the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Agency).
                </p>
              </div>
            </div>

            {/* 10. Contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
                10. Contact details
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For questions and/or comments about our Cookie Policy and this statement, please contact us using the following contact details:
                </p>
                <p>
                  THEVOICECLONE. (DANI VOICE OVERS, S.L)<br />
                  Calle Santiago Rodríguez Conde, nº 23 F<br />
                  Alpedrete<br />
                  CP 28430 – Madrid<br />
                  Spain<br />
                  Website: https://thevoiceclone.com/<br />
                  Email: hello@thevoiceclone.com<br />
                  Phone: +34 911 368 927
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

export default CookiePolicyEnPage;
