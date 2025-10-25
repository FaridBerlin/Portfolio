import { useState, useEffect } from 'react'
import GalaxyBackground from '../components/GalaxyBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import LogoLoop from '../components/LogoLoop'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen text-foreground ${
      isDarkMode 
        ? 'bg-background' 
        : 'bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100'
    }`}>
      {/* Galaxy background only in dark mode */}
      {isDarkMode && (
        <div className="fixed inset-0 z-0">
          <GalaxyBackground 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.4}
            saturation={0.6}
            hueShift={176}
            transparent={true}
          />
        </div>
      )}
      
      <div className="relative z-10">
        <Navbar />
        <LogoLoop />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
};