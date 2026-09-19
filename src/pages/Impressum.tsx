import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/*
  Deliberately plain: no card, no accent colours, no icons, no centring
  and a flat hierarchy, so the page reads as legal boilerplate rather
  than a designed part of the portfolio.

  Two things are held fixed because § 5 DDG requires this disclosure to
  be leicht erkennbar. Every block uses the same 13px size - the
  mandatory identity data is never smaller than the text around it - and
  contrast stays above WCAG AA, with links underlined so they are
  identifiable without relying on colour.
*/
export const Impressum = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto max-w-3xl px-4 pt-32 pb-12 text-left">
        <h1 className="text-[13px] font-semibold mb-4">
          Impressum &ndash; Legal Disclosure / Angaben gem&auml;&szlig; &sect; 5 TMG
        </h1>

        <div className="space-y-3 text-[13px] leading-snug text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Contact Information.</span>{' '}
            Farid Hima, Weserstra&szlig;e 188, 12045 Berlin, Germany. Email:{' '}
            <a href="mailto:bughunterf@gmail.com" className="underline">
              bughunterf@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-foreground">
              Verantwortlich f&uuml;r den Inhalt.
            </span>{' '}
            Content Responsible according to &sect; 55 Abs. 2 RStV: Farid Hima, 12045 Berlin,
            Germany.
          </p>

          <p>
            <span className="font-semibold text-foreground">
              Haftungsausschluss / Disclaimer.
            </span>{' '}
            Haftung f&uuml;r Inhalte / Liability for Content: Die Inhalte unserer Seiten wurden mit
            gr&ouml;&szlig;ter Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und
            Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. The
            content of this website has been created with the greatest care. However, we cannot
            guarantee the accuracy, completeness, or timeliness of the content. Haftung f&uuml;r
            Links / Liability for Links: Unser Angebot enth&auml;lt Links zu externen Websites
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r
            diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. Our website contains links
            to external third-party websites over whose content we have no control. Therefore, we
            cannot assume any liability for this external content. Urheberrecht / Copyright: Die
            durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. The content and works
            created by the site operators on these pages are subject to German copyright law.
            Reproduction, processing, distribution, and any form of commercialization beyond the
            scope of copyright law require the written consent of the respective author or creator.
          </p>

          <p>
            <span className="font-semibold text-foreground">Datenschutz / Data Protection.</span>{' '}
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
            m&ouml;glich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
            Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit m&ouml;glich, stets
            auf freiwilliger Basis. The use of our website is generally possible without providing
            personal data. Insofar as personal data (such as name, address, or email addresses) is
            collected on our pages, this is always done on a voluntary basis wherever possible.
          </p>

          <p>
            <span className="font-semibold text-foreground">
              EU-Streitschlichtung / EU Dispute Resolution.
            </span>{' '}
            Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <p>Last updated: November 10, 2025</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};
