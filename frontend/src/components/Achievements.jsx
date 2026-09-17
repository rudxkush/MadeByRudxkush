import React from 'react';
import { Award, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Achievements = ({ achievements, education }) => {
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);
  return (
    <section
      id="achievements"
      ref={fadeRef}
      className={`py-16 sm:py-20 lg:py-32 bg-muted/30 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-blue">
              05.
            </h2>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Achievements & Education</h3>
              <div className="h-1 w-20 bg-google-blue rounded-full mt-2"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Notable Achievements</h3>
              {achievements.map((achievement, index) => {
                const colors = ['google-yellow', 'google-green'];
                const color = colors[index % colors.length];
                return (
                  <div
                    key={achievement.id}
                    className="border border-border bg-card p-4 sm:p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-${color}/10 rounded-xl group-hover:bg-${color}/20 transition-colors`}>
                        <Award className={`w-6 h-6 text-${color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <h4 className="text-base sm:text-lg font-bold text-foreground">{achievement.title}</h4>
                          <div className="flex gap-2">
                            {achievement.link && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`text-muted-foreground hover:text-${color} h-8 w-8 self-start sm:self-auto`}
                                onClick={() => window.open(achievement.link, '_blank')}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            )}
                            {achievement.links && achievement.links.map((link, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className={`text-xs hover:text-${color} h-8 px-3`}
                                onClick={() => window.open(link.url, '_blank')}
                              >
                                {link.name}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <p className={`text-xs sm:text-sm text-${color} font-bold mb-2`}>{achievement.position}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground font-medium">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Education</h3>
              <div className="border border-border bg-card p-4 sm:p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-google-blue/10 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-google-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">{education.institution}</h4>
                    <p className="text-sm sm:text-base text-foreground mb-2 font-medium">{education.degree}</p>
                    <p className="text-sm text-google-blue mb-2 font-bold">{education.major}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                      <span>{education.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;