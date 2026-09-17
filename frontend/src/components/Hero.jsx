import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Hero = ({ personalData, metrics }) => {
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={fadeRef}
      className={`min-h-screen flex items-center justify-center bg-background text-foreground pt-16 sm:pt-20 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-google-blue font-mono text-sm sm:text-base font-medium">Hi, my name is</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  {"Rudra Kushwah"}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
                  {personalData.title}
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Backend & ML engineer building scalable systems and production-ready machine learning solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleScrollToContact}
                className="bg-google-blue hover:bg-google-blue/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-md hover:shadow-lg transition-all"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-google-blue text-google-blue hover:bg-google-blue/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => window.open(personalData.resumeUrl, '_blank')}
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative background elements with Google colors */}
              <div className="absolute -inset-4 bg-gradient-to-r from-google-blue via-google-red to-google-yellow rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Profile image container */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-google-blue shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/profile.webp`}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative corner accents with Google colors */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-google-red rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-google-green rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-12 sm:pt-16">
          {metrics.map((metric, index) => {
            const colors = ['google-blue', 'google-red', 'google-yellow', 'google-green'];
            const colorClass = colors[index % colors.length];
            return (
              <div
                key={index}
                className="border border-border bg-card p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${colorClass} mb-2 group-hover:scale-110 transition-transform`}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
