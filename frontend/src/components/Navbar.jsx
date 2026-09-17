import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ personalData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl sm:text-2xl font-bold text-google-blue hover:text-google-blue/80 transition-colors"
          >
            rudxkush
          </a>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-google-blue transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalData.email}`} className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2 text-muted-foreground hover:text-google-blue transition-colors font-medium rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalData.email}`} className="p-2 text-muted-foreground hover:text-google-blue transition-colors rounded-full hover:bg-muted">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;