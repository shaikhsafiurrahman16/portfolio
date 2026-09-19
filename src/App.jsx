import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";

// Portfolio sections
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ExperienceSection } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { Achievements } from "@/components/portfolio/Achievements";
import { FAQ } from "@/components/portfolio/FAQ";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import {
  ScrollProgress,
  BackToTop,
  CustomCursor,
} from "@/components/portfolio/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Loading screen timing (lets initial animations settle)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => {}} />}
      </AnimatePresence>

      {/* Main app (hidden during loading for smooth transition) */}
      <div
        className={`flex min-h-screen flex-col transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Global utilities */}
        <ScrollProgress />
        <BackToTop />
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">
          <Hero />
          <About />
          <ExperienceSection />
          <Skills />
          <Services />
          <FeaturedProject />
          <Achievements />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      <Toaster richColors position="bottom-right" />
    </ThemeProvider>
  );
}
