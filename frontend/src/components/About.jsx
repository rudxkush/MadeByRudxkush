import React from 'react';
import { Code2, Cpu, Cloud, Brain } from 'lucide-react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const About = ({ aboutData }) => {
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);
  const focusIcons = {
    "Distributed Systems & Microservices": Cpu,
    "Performance Optimization": Code2,
    "Cloud Infrastructure (AWS/Azure)": Cloud,
    "Machine Learning & NLP": Brain
  };

  const focusColors = {
    "Distributed Systems & Microservices": "text-google-blue",
    "Performance Optimization": "text-google-red",
    "Cloud Infrastructure (AWS/Azure)": "text-google-yellow",
    "Machine Learning & NLP": "text-google-green"
  };

  const focusBgColors = {
    "Distributed Systems & Microservices": "bg-google-blue/10",
    "Performance Optimization": "bg-google-red/10",
    "Cloud Infrastructure (AWS/Azure)": "bg-google-yellow/10",
    "Machine Learning & NLP": "bg-google-green/10"
  };

  return (
    <section
      id="about"
      ref={fadeRef}
      className={`py-16 sm:py-20 lg:py-32 bg-muted/30 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-blue">
              01.
            </h2>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">About Me</h3>
              <div className="h-1 w-20 bg-google-blue rounded-full mt-2"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                {aboutData.summary}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {aboutData.philosophy}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.focus.map((area, index) => {
                  const Icon = focusIcons[area] || Code2;
                  const colorClass = focusColors[area] || "text-google-blue";
                  const bgColorClass = focusBgColors[area] || "bg-google-blue/10";
                  return (
                    <div
                      key={index}
                      className={`${bgColorClass} border border-border bg-card p-4 sm:p-5 rounded-xl hover:shadow-lg transition-all duration-300 group`}
                    >
                      <Icon className={`w-7 h-7 sm:w-9 sm:h-9 ${colorClass} mb-3 group-hover:scale-110 transition-transform`} />
                      <p className="text-sm sm:text-base text-foreground font-medium leading-snug">{area}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;