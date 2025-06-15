
'use client';

import Link from 'next/link';
import { BrainCircuit, Menu, X } from 'lucide-react'; 
import SmoothLink from './SmoothLink';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (!isMounted) {
    return (
      <header className="py-6 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <BrainCircuit className="h-9 w-9 text-accent group-hover:text-primary transition-colors duration-300" />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 text-shadow-md">
              CEYLONAR
            </h1>
          </Link>
          <div className="md:hidden">
            <Menu className="h-7 w-7 text-foreground" />
          </div>
          <nav className="hidden md:flex space-x-6">
            {/* Placeholder for links, will be hydrated on client */}
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="py-6 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
          <BrainCircuit className="h-9 w-9 text-accent group-hover:text-primary transition-colors duration-300" />
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 text-shadow-md">
            CEYLONAR
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <SmoothLink 
            hrefHash="#services"
            targetId="services"
            className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300 text-shadow"
            aria-label="Scroll to Services section"
          >
            Services
          </SmoothLink>
          <SmoothLink 
            hrefHash="#portfolio"
            targetId="portfolio"
            className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300 text-shadow"
            aria-label="Scroll to Portfolio section"
          >
            Portfolio
          </SmoothLink>
          <SmoothLink 
            hrefHash="#tools"
            targetId="tools"
            className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300 text-shadow"
            aria-label="Scroll to Tools section"
          >
            Tools
          </SmoothLink>
          <SmoothLink 
            hrefHash="#contact"
            targetId="contact"
            className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300 text-shadow"
            aria-label="Scroll to Contact section"
          >
            Contact
          </SmoothLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-foreground hover:text-accent transition-colors duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg border-t border-border/20">
          <nav className="container mx-auto flex flex-col items-center space-y-5 py-5">
            <SmoothLink 
              hrefHash="#services"
              targetId="services"
              className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Scroll to Services section"
              onClick={closeMobileMenu}
            >
              Services
            </SmoothLink>
            <SmoothLink 
              hrefHash="#portfolio"
              targetId="portfolio"
              className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Scroll to Portfolio section"
              onClick={closeMobileMenu}
            >
              Portfolio
            </SmoothLink>
            <SmoothLink 
              hrefHash="#tools"
              targetId="tools"
              className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Scroll to Tools section"
              onClick={closeMobileMenu}
            >
              Tools
            </SmoothLink>
            <SmoothLink 
              hrefHash="#contact"
              targetId="contact"
              className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Scroll to Contact section"
              onClick={closeMobileMenu}
            >
              Contact
            </SmoothLink>
          </nav>
        </div>
      )}
    </header>
  );
}
