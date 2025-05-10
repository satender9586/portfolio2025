import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import firstPorjectEcommercePic from "../assests/ecommerce.jpg"
import todoPic from "../assests/todo.jpeg"

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  category: string;
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
    image: firstPorjectEcommercePic,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    github: "https://github.com/satender9586/eco-frontend",
    live: "https://easyshopwaala.netlify.app/",
    featured: true,
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team workspaces",
    image: todoPic,
    technologies: ["React", "Node.js", "MongoDB", "Express","React-Query","Rest Api"],
    github: "https://github.com/satender9586/todo-frontend",
    live: "https://nostifyes.netlify.app/",
    featured: true,
    category: "fullstack"
  },

];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [filter]);
  
  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2">03.</span> 
          My Projects
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setActiveProject(null);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 capitalize transform hover:scale-105 
                ${filter === category
                  ? 'bg-[#64ffda] text-[#0a192f] font-medium shadow-[0_0_20px_rgba(100,255,218,0.3)]'
                  : 'bg-[#172a45] text-[#8892b0] hover:text-[#64ffda] hover:bg-[#233554]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured projects */}
        {(filter === 'all' || featuredProjects.some(p => p.category === filter)) && (
          <div className="mb-20">
            <h3 className="text-xl text-[#ccd6f6] mb-8 font-mono">Featured Projects</h3>
            <div className="space-y-32">
              {featuredProjects
                .filter(project => filter === 'all' || project.category === filter)
                .map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`relative md:grid md:grid-cols-12 gap-6 items-center group
                      ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                      transition-all duration-500 ease-out`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Project image */}
                    <div className={`md:col-span-7 ${
                      index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                    }`}>
                      <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-all duration-500 
                            filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#0a192f]/50 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project content */}
                    <div className={`md:col-span-6 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    }`}>
                      <p className="text-[#64ffda] font-mono mb-2">Featured Project</p>
                      <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4 group-hover:text-[#64ffda] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-4 transform group-hover:-translate-y-2 transition-all duration-300
                        hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] backdrop-blur-sm">
                        <p className="text-[#8892b0] leading-relaxed">{project.description}</p>
                      </div>
                      
                      <ul className={`flex flex-wrap gap-3 mb-6 text-sm font-mono text-[#8892b0] ${
                        index % 2 === 0 ? '' : 'md:justify-end'
                      }`}>
                        {project.technologies.map((tech, techIndex) => (
                          <li 
                            key={techIndex}
                            className="bg-[#172a45]/50 px-3 py-1 rounded-full hover:bg-[#233554] transition-colors duration-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`flex gap-6 text-[#ccd6f6] ${
                        index % 2 === 0 ? '' : 'md:justify-end'
                      }`}>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#64ffda] transition-colors duration-300 transform hover:scale-110"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github size={22} />
                        </a>
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#64ffda] transition-colors duration-300 transform hover:scale-110"
                            aria-label={`Live site for ${project.title}`}
                          >
                            <ExternalLink size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        
        {/* Other projects */}
        <div>
          <h3 className="text-xl text-[#ccd6f6] mb-8 font-mono">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group bg-[#112240] rounded-lg p-6 transition-all duration-500 hover:-translate-y-2 
                  hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] relative overflow-hidden
                  ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <Folder size={40} className="text-[#64ffda] transform group-hover:rotate-12 transition-transform duration-300" />
                    <div className="flex gap-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 transform hover:scale-110"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 transform hover:scale-110"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="relative">
                    {project.image && (
                      <div className={`absolute inset-0 bg-cover bg-center rounded opacity-0 transition-opacity duration-300
                        ${activeProject === project.id ? 'opacity-5' : ''}`}
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                    )}
                    <p className="text-[#8892b0] mb-6 text-sm relative z-10">{project.description}</p>
                  </div>
                  
                  <ul className="flex flex-wrap gap-2 mt-auto text-xs font-mono">
                    {project.technologies.map((tech, index) => (
                      <li 
                        key={index}
                        className="text-[#8892b0] bg-[#172a45]/50 px-2 py-1 rounded-full hover:bg-[#233554] transition-colors duration-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;