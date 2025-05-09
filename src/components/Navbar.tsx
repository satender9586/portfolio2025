import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/satender9586', ariaLabel: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/satender-kumar-dev/', ariaLabel: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sattuahirwar.corporate@gmail.com', ariaLabel: 'Email' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-[#64ffda] font-bold text-2xl tracking-tight">
              SK<span className="text-white">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 text-sm font-medium"
                  >
                    <span className="text-[#64ffda] mr-1">{index + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8892b0] hover:text-[#64ffda] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 bg-[#112240] border-t border-[#233554]">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 block text-sm font-medium"
                  onClick={toggleMenu}
                >
                  <span className="text-[#64ffda] mr-1">{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;