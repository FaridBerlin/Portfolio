import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    { name: "3D Earth Visualization", href: "https://faridberlin.github.io/earth3d/" },
    { name: "Weather App", href: "https://faridberlin.github.io/weather-15-jul/" },
    { name: "Tunnel Visualization", href: "https://faridberlin.github.io/tunel/" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/FaridBerlin",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/farid-hima-834521389/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:bughunterf@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-glow text-foreground">Farid</span>{" "}
                <span className="text-primary">Portfolio</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Passionate web developer creating exceptional digital experiences with modern technologies.
              Always learning, always building, always pushing the boundaries of what's possible.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Featured Projects</h3>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      {project.name}
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Farid Hima. All rights reserved.
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>

          </div>

          {/*
            Legal links row, below all other footer content. Styled as
            plain small print in the same muted tone as the copyright
            line - no bold, no underline, no accent colour and no hover
            treatment - so it reads as a legal notice rather than a nav
            item. It stays literal "Impressum" text, one click away on
            every page, because it is a legal disclosure and has to
            remain leicht erkennbar.
          */}
          <div className="mt-6 flex justify-center md:justify-start gap-4 text-xs text-muted-foreground">
            <Link to="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
