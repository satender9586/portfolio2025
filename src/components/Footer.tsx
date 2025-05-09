import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] py-12 border-t border-[#233554]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/satender9586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/satender-kumar-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
            >
              <Twitter size={22} />
            </a>
            <a
              href="mailto:sattuahirwar.corporate@gmail.com"
              aria-label="Email"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
            >
              <Mail size={22} />
            </a>
          </div>
          
          {/* Attribution */}
          <p className="text-center text-[#8892b0] text-sm">
            &copy; {new Date().getFullYear()} Satender Kumar. All Rights Reserved.
          </p>
          <p className="text-center text-[#8892b0] text-xs mt-2">
            <span className="inline-block">Designed & Built with ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;