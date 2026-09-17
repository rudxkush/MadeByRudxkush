import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Code2, Palette, Gamepad2, Brain } from 'lucide-react';
import { Button } from './ui/button';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Projects = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);

  const projectThemes = [
    { gradient: 'from-blue-500 to-purple-600', icon: Brain },
    { gradient: 'from-orange-500 to-pink-600', icon: Palette },
    { gradient: 'from-green-500 to-teal-600', icon: Gamepad2 },
    { gradient: 'from-red-500 to-orange-600', icon: Brain },
  ];

  const getCategoryLabel = (type) => {
    const labels = {
      'Transformer-based NLP': 'MACHINE LEARNING',
      '3D Web Application': 'WEB APPLICATION',
      'Game Development': 'GAME DEVELOPMENT',
      'Research Project': 'RESEARCH'
    };
    return labels[type] || 'PROJECT';
  };

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projects.length);
  }, [projects.length]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 2000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section
      id="projects"
      ref={fadeRef}
      className={`py-16 sm:py-20 lg:py-32 bg-muted/30 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-yellow">
              03.
            </h2>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Projects</h3>
              <div className="h-1 w-20 bg-google-yellow rounded-full mt-2"></div>
            </div>
          </div>

          {/* Carousel Wrapper — clips cards but allows peek on sides */}
          <div
            className="relative w-full"
            style={{ overflow: 'hidden' }}
          >
            {/*
              Track: all cards laid out in a horizontal row.
              We shift the track so the active card is centered,
              and adjacent cards peek ~100px on each side.
            */}
            <div
              className="flex items-center transition-transform duration-500 ease-in-out"
              style={{
                // Each card occupies (100vw - 200px) of visible width + 24px gap on each side.
                // We use a CSS custom property trick: calc with the card width.
                // Card width = calc(100% - 200px) where 100% = carousel container width.
                // Gap between cards = 24px.
                // To center card[i]: translateX = -i * (cardWidth + gap) + 100px
                // We express this as: translateX(calc(-#{activeIndex} * (100% - 176px) + 100px))
                // 176px = 200px peek space - 24px gap
                transform: `translateX(calc(${-activeIndex} * (100% - 176px) + 100px))`,
                gap: '24px',
              }}
            >
              {projects.map((project, index) => {
                const theme = projectThemes[index % projectThemes.length];
                const IconComponent = theme.icon;
                const categoryLabel = getCategoryLabel(project.architecture?.type);
                const projectLink = project.links?.github || project.links?.demo;
                const isActive = index === activeIndex;

                return (
                  <div
                    key={project.id}
                    className="flex-shrink-0 transition-all duration-500 ease-in-out"
                    style={{
                      // Card takes full carousel width minus the 100px peek on each side
                      width: 'calc(100% - 200px)',
                      opacity: isActive ? 1 : 0.45,
                      transform: isActive ? 'scale(1)' : 'scale(0.93)',
                      height: '360px',
                    }}
                    onMouseEnter={() => isActive && setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div
                      className="bg-card rounded-2xl overflow-hidden border border-border shadow-xl w-full h-full"
                    >
                      <div className="grid grid-rows-[140px_1fr] md:grid-rows-1 md:grid-cols-2 h-full">
                        {/* Left Side - Gradient Background with Icon */}
                        <div className={`bg-gradient-to-br ${theme.gradient} p-6 md:p-8 flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="relative z-10 flex flex-col items-center justify-center text-white">
                            <IconComponent className="w-14 h-14 md:w-20 md:h-20 opacity-90" strokeWidth={1.5} />
                            <div className="mt-3 md:mt-4 text-center">
                              <div className="text-xs md:text-sm font-mono uppercase tracking-wider opacity-80">
                                {categoryLabel}
                              </div>
                            </div>
                          </div>
                          {/* Decorative circles */}
                          <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-white/10 rounded-full translate-y-10 md:translate-y-12 -translate-x-10 md:-translate-x-12"></div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden">
                          <div className="space-y-2 md:space-y-3 flex-1 overflow-hidden">
                            {/* Category Label */}
                            <div className="flex items-center gap-2">
                              <Code2 className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                {categoryLabel}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight line-clamp-2">
                              {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.slice(0, 4).map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 md:px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-md border border-border"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies?.length > 4 && (
                                <span className="px-2 md:px-3 py-1 text-xs text-muted-foreground">
                                  +{project.technologies.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Explore Button */}
                          <div className="flex justify-end mt-3">
                            {projectLink ? (
                              <Button
                                onClick={() => window.open(projectLink, '_blank')}
                                className="bg-foreground hover:bg-foreground/90 text-background px-4 md:px-6 py-2 text-xs md:text-sm font-medium group"
                              >
                                Explore Project
                                <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            ) : (
                              <Button
                                disabled
                                className="bg-muted text-muted-foreground px-4 md:px-6 py-2 text-xs md:text-sm font-medium cursor-not-allowed"
                              >
                                Coming Soon
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 h-2 bg-google-yellow'
                    : 'w-2 h-2 bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;