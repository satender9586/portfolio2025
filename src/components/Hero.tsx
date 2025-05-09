import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'MERN Developer',
    'Frontend Specialist',
    'Backend Engineer',
    'Database Expert'
  ];

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(phrase.substring(0, typedText.length + 1));
        setTypingSpeed(150);
        
        if (typedText.length === phrase.length) {
          setIsDeleting(true);
          setTypingSpeed(50);
          setTimeout(() => {
            setTypingSpeed(80);
          }, 1500);
        }
      } else {
        setTypedText(phrase.substring(0, typedText.length - 1));
        
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0a192f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-[#8892b0]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#64ffda] mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4">
            Satender Kumar.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8892b0] mb-6 h-14">
            I'm a <span className="text-[#64ffda]">{typedText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-[#8892b0] text-lg mb-8 leading-relaxed">
          With 3 years of experience building exceptional digital experiences, I specialize in creating accessible, human-centered products using the MERN stack. Currently, I’m focused on developing an HRMS (Human Resource Management System) project using Next.js and React.js.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-medium rounded hover:bg-[#64ffda]/90 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-[#8892b0] text-sm mb-2 font-mono">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-[#8892b0] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#64ffda] rounded-full animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;