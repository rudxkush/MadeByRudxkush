import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-google-red fill-google-red" />
            <span>by {personalData.name.split(' ')[0]}</span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-google-blue"></div>
            <div className="w-2 h-2 rounded-full bg-google-red"></div>
            <div className="w-2 h-2 rounded-full bg-google-yellow"></div>
            <div className="w-2 h-2 rounded-full bg-google-green"></div>
          </div> */}
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            © {currentYear} Rudra Pratap Singh Kushwah. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with React.js, Tailwind CSS, and FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;