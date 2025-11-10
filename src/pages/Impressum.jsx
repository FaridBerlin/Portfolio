import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Impressum = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto max-w-4xl px-4 py-24">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-2">Impressum</h1>
          <p className="text-sm text-muted-foreground mb-8">Legal Disclosure / Angaben gemäß § 5 TMG</p>
          
          <div className="space-y-8">
            {/* Personal Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
              <div className="space-y-3 text-foreground">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:farid.hima@dci-student.org" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      farid.hima@dci-student.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+491234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +49 
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address / Anschrift</p>
                    <p className="text-muted-foreground">
                      Farid Hima<br />
                      Weserstraße 188<br />
                      12045 Berlin<br />
                      Germany
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsible for Content */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-muted-foreground">
                Content Responsible according to § 55 Abs. 2 RStV
              </p>
              <p className="mt-2">
                Farid Hima<br />
                12045 Berlin, Germany
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Haftungsausschluss / Disclaimer
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte / Liability for Content</h3>
                  <p className="text-sm">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                  <p className="text-sm mt-2">
                    The content of this website has been created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Haftung für Links / Liability for Links</h3>
                  <p className="text-sm">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                  <p className="text-sm mt-2">
                    Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Urheberrecht / Copyright</h3>
                  <p className="text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="text-sm mt-2">
                    The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, processing, distribution, and any form of commercialization beyond the scope of copyright law require the written consent of the respective author or creator.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Datenschutz / Data Protection
              </h2>
              <p className="text-muted-foreground text-sm">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                The use of our website is generally possible without providing personal data. Insofar as personal data (such as name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis wherever possible.
              </p>
            </section>

            {/* EU Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                EU-Streitschlichtung / EU Dispute Resolution
              </h2>
              <p className="text-muted-foreground text-sm">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Last Updated */}
            <section className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: November 10, 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
