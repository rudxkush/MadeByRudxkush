import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Skills = ({ skills }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);

  const toggleExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Mapping skills to Devicon classes and descriptions
  const skillsCategories = [
    {
      name: 'Languages',
      color: 'blue',
      items: [
        { name: 'C/C++', icon: 'devicon-cplusplus-plain', description: '3+ years · Systems Programming' },
        { name: 'Python', icon: 'devicon-python-plain', description: '4+ years · Backend & ML' },
        { name: 'Java', icon: 'devicon-java-plain', description: '3+ years · Enterprise Applications' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', description: '3+ years · Full Stack' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', description: '2+ years · Type-safe Development' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', description: '3+ years · Database Management' },
        { name: 'C#', icon: 'devicon-csharp-plain', description: '2+ years · .NET Development' },
      ]
    },
    {
      name: 'Frameworks',
      color: 'red',
      items: [
        { name: 'React.js', icon: 'devicon-react-original', description: '3+ years · Frontend' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain', description: '2+ years · SSR & SSG' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', description: '3+ years · Backend Services' },
        { name: 'Spring Boot', icon: 'devicon-spring-original', description: '2+ years · Microservices' },
        { name: 'Flask', icon: 'devicon-flask-original', description: '2+ years · Python APIs' },
        { name: 'PyTorch', icon: 'devicon-pytorch-original', description: '2+ years · Deep Learning' },
        { name: 'Flutter', icon: 'devicon-flutter-plain', description: '1+ year · Mobile Apps' },
      ]
    },
    {
      name: 'Tools & Cloud',
      color: 'yellow',
      items: [
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', description: '2+ years · Cloud Infrastructure' },
        { name: 'Azure', icon: 'devicon-azure-plain', description: '2+ years · Cloud Services' },
        { name: 'Docker', icon: 'devicon-docker-plain', description: '3+ years · Containerization' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', description: '2+ years · Orchestration' },
        { name: 'Jenkins', icon: 'devicon-jenkins-plain', description: '2+ years · CI/CD' },
        { name: 'Grafana', icon: 'devicon-grafana-plain', description: '1+ year · Monitoring' },
        { name: 'Git', icon: 'devicon-git-plain', description: '4+ years · Version Control' },
      ]
    },
    {
      name: 'Databases',
      color: 'green',
      items: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', description: '3+ years · Relational DB' },
        { name: 'MySQL', icon: 'devicon-mysql-plain', description: '3+ years · SQL Database' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', description: '2+ years · NoSQL Database' },
        { name: 'DynamoDB', icon: 'devicon-dynamodb-plain', description: '1+ year · AWS NoSQL' },
        { name: 'Firebase', icon: 'devicon-firebase-plain', description: '2+ years · BaaS Platform' },
      ]
    },
  ];

  const getCategoryColor = (color) => {
    const colors = {
      blue: '#4285F4',
      red: '#EA4335',
      yellow: '#FBBC05',
      green: '#34A853'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
      ref={fadeRef}
      className={`py-20 sm:py-24 lg:py-32 bg-background fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-green">
              04.
            </h2>
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Skills & Technologies
              </h3>
              <div className="h-1 w-24 bg-google-green rounded-full mt-3"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            A comprehensive overview of my technical expertise and the technologies I've mastered.
          </p>
        </div>

        {/* Card-based Layout */}
        <div className="space-y-6">
          {skillsCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategory === category.name;
            const color = getCategoryColor(category.color);
            
            return (
              <div
                key={categoryIndex}
                className="border border-border bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.items.length} technologies
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(category.name)}
                      className="self-start lg:self-auto"
                      style={{ color }}
                    >
                      {isExpanded ? (
                        <><ChevronUp className="w-5 h-5 mr-1" /> Less</>
                      ) : (
                        <><ChevronDown className="w-5 h-5 mr-1" /> More</>
                      )}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {/* Show first 3 items by default, all when expanded */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.slice(0, isExpanded ? category.items.length : 3).map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg hover:shadow-md transition-all duration-200"
                        >
                          {/* Icon */}
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 rounded-lg">
                            <i 
                              className={`${skill.icon} text-2xl`}
                              style={{ color }}
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-foreground mb-0.5">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-muted-foreground truncate">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Show description when expanded */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.items.map((skill, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-foreground"
                            >
                              <span className="mt-1 flex-shrink-0 font-bold" style={{ color }}>▸</span>
                              <span>
                                <span className="font-semibold">{skill.name}:</span> {skill.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 font-sans">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.competencies.map((competency, index) => {
              const colors = ['blue', 'red', 'yellow', 'green'];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:shadow-md transition-all duration-200 font-sans"
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: getCategoryColor(color)
                  }}
                >
                  {competency}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
