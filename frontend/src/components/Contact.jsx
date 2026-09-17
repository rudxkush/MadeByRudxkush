import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Contact = ({ personalData }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.15);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch('https://formspree.io/f/xeaoqayq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });

          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          toast({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please check your connection and try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={fadeRef}
      className={`py-16 sm:py-20 lg:py-32 bg-background fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-google-red">
              06.
            </h2>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h3>
              <div className="h-1 w-20 bg-google-red rounded-full mt-2"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I’m always open to connecting and discussing ideas or opportunities. Feel free to reach out via phone, LinkedIn or email. I’d be happy to hear from you :/
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 sm:p-5 border border-border bg-card rounded-2xl hover:shadow-lg hover:border-google-blue/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-google-blue/10 rounded-xl group-hover:bg-google-blue/20 transition-colors">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-google-blue" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">Email</p>
                    <p className="text-sm sm:text-base text-foreground font-medium break-all">{personalData.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalData.phone}`}
                  className="flex items-center gap-4 p-4 sm:p-5 border border-border bg-card rounded-2xl hover:shadow-lg hover:border-google-green/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-google-green/10 rounded-xl group-hover:bg-google-green/20 transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-google-green" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">Phone</p>
                    <p className="text-sm sm:text-base text-foreground font-medium">{personalData.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 sm:p-5 border border-border bg-card rounded-2xl">
                  <div className="p-3 bg-google-red/10 rounded-xl">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-google-red" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">Location</p>
                    <p className="text-sm sm:text-base text-foreground font-medium">{personalData.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border bg-card rounded-xl hover:shadow-lg hover:border-google-blue/50 hover:bg-google-blue/5 transition-all duration-300"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-google-blue" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border bg-card rounded-xl hover:shadow-lg hover:border-google-blue/50 hover:bg-google-blue/5 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-google-blue" />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border text-foreground focus:border-google-blue focus:ring-google-blue h-12"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border text-foreground focus:border-google-blue focus:ring-google-blue h-12"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border text-foreground focus:border-google-blue focus:ring-google-blue resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-google-blue hover:bg-google-blue/90 text-white py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
