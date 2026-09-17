import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Experience = ({ experiences }) => {
  const [visibleNodes, setVisibleNodes] = useState(new Set());
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const observerRef = useRef(null);
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleNodes((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all timeline nodes
    const nodes = document.querySelectorAll('.timeline-node');
    nodes.forEach((node) => observerRef.current.observe(node));

    // Progressive line drawing on scroll
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineTop = rect.top;
        const timelineHeight = rect.height;

        // Calculate how much of the timeline is visible
        let visibleHeight = 0;
        if (timelineTop < windowHeight) {
          visibleHeight = Math.min(windowHeight - timelineTop, timelineHeight);
        }

        // Convert to percentage
        const percentage = Math.min((visibleHeight / timelineHeight) * 100, 100);
        setLineHeight(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCategoryColor = (index) => {
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    return colors[index % colors.length];
  };

  return (
    <section
      id="experience"
      ref={fadeRef}
      className={`py-16 sm:py-20 lg:py-32 bg-background fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-red">
              02.
            </h2>
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Experience
              </h3>
              <div className="h-1 w-24 bg-google-red rounded-full mt-3"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            My professional journey and key contributions across different roles.
          </p>
        </div>

        {/* Animated Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line - Progressive Drawing */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-google-blue via-google-red via-google-yellow to-google-green transition-all duration-300 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isVisible = visibleNodes.has(index);
              const isLeft = index % 2 === 0;
              const color = getCategoryColor(index);

              return (
                <div 
                  key={exp.id}
                  data-index={index}
                  className={`timeline-node relative flex ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } justify-start`}
                >
                  {/* Node Card */}
                  <div
                    className={`
                      w-full md:w-5/12 bg-background border border-border rounded-xl p-4 sm:p-6
                      transition-all duration-700 ease-out
                      hover:shadow-lg hover:-translate-y-1
                      ${isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? '-translate-x-8 md:-translate-x-16' : 'translate-x-8 md:translate-x-16'}`
                      }
                    `}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" style={{ color }} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" style={{ color }} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color }} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-foreground">
                          <span className="mt-1 flex-shrink-0 font-bold" style={{ color }}>▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border">
                      <h5 className="text-xs font-medium text-muted-foreground mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted text-foreground text-xs font-medium rounded-md border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    {exp.impact && Object.keys(exp.impact).length > 0 && (
                      <div className="pt-4 mt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(exp.impact).map(([key, value], idx) => (
                            <div key={idx} className="bg-muted/50 p-3 rounded-lg border border-border">
                              <div className="text-base font-bold" style={{ color }}>{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Dot - Hidden on mobile */}
                  <div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background shadow-md z-10 hidden md:block"
                    style={{ backgroundColor: color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;