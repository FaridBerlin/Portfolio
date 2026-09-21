import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="container mx-auto max-w-3xl px-4 pt-40 pb-24 flex-1 text-center">
        <p className="text-7xl md:text-8xl font-bold text-primary mb-4">404</p>

        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          This page doesn&apos;t <span className="text-primary">exist</span>
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          The link may be out of date, or the address may have a typo. Everything on this
          site lives on the home page &mdash; head back and pick a section from the menu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="cosmic-button">
            Back to Home
          </Link>

          <Link
            to="/#contact"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
