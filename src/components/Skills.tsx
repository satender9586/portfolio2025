import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "🌐", category: "frontend" },
  { name: "CSS3", icon: "🎨", category: "frontend" },
  { name: "JavaScript", icon: "📜", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Redux", icon: "🔄", category: "frontend" },
  { name: "Tailwind CSS", icon: "🌊", category: "frontend" },
  { name: "Bootstrap", icon: "🅱️", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express", icon: "🚂", category: "backend" },
  { name: "RESTful APIs", icon: "🔌", category: "backend" },

  
  // Database
  { name: "MongoDB", icon: "🍃", category: "database" },
  { name: "MySQL", icon: "🐬", category: "database" },
  { name: "Mongoose", icon: "🔗", category: "database" },
  { name: "SQL", icon: "📋", category: "database" },
  
  // Tools & Others
  { name: "Git", icon: "📚", category: "tools" },
  { name: "Webpack", icon: "📦", category: "tools" },
  { name: "Vite", icon: "⚡", category: "tools" },
  { name: "Jest", icon: "🧪", category: "tools" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Firebase", icon: "🔥", category: "tools" },

];

const Skills: React.FC = () => {
  const categories = [
    { id: "frontend", title: "Frontend" },
    { id: "backend", title: "Backend" },
    { id: "database", title: "Database" },
    { id: "tools", title: "Tools & Others" }
  ];
  
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      
      const cards = document.querySelectorAll('.skill-card');
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      
      cards.forEach((card) => {
        const cardEl = card as HTMLElement;
        const cardRect = cardEl.getBoundingClientRect();
        
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const distanceX = (e.clientX - cardCenterX) / 20;
        const distanceY = (e.clientY - cardCenterY) / 20;
        
        const maxRotate = 10;
        const rotateX = Math.min(Math.max(-maxRotate, distanceY * -0.5), maxRotate);
        const rotateY = Math.min(Math.max(-maxRotate, distanceX * 0.5), maxRotate);
        
        // Apply rotation only to cards near the cursor
        const distance = Math.sqrt(Math.pow(e.clientX - cardCenterX, 2) + Math.pow(e.clientY - cardCenterY, 2));
        const threshold = 200; // Maximum distance for effect
        
        if (distance < threshold) {
          const intensity = 1 - distance / threshold;
          
          cardEl.style.transform = `perspective(1000px) rotateX(${rotateX * intensity}deg) rotateY(${rotateY * intensity}deg)`;
          cardEl.style.zIndex = '10';
        } else {
          cardEl.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
          cardEl.style.zIndex = '1';
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2">04.</span> 
          Skills & Technologies
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
        
        <div ref={wrapperRef} className="relative">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl text-[#ccd6f6] mb-6 font-mono">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div 
                      key={index}
                      className="skill-card bg-[#0a192f] border border-[#233554] rounded-md p-4 flex flex-col items-center 
                                transition-all duration-300 hover:border-[#64ffda] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]"
                      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <div className="text-center text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 text-sm">
                        {skill.name}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;