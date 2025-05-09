import React, { useState, useEffect } from 'react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: Array<{name: string, level: number}>;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Paytel Financial Technologies Pvt. Ltd.",
    period: "March 2024 - Present",
    description: [
      "Developed and maintained full-stack features for HRMS and Restaurant Management System (RMS) projects using the MERN stack",
      "Integrated third-party APIs and payment gateways to enable secure transactions and streamline operations",
      "Worked on backend scripting in Node.js to automate processes such as employee attendance, payroll, and order management",
      "Built scalable and reusable React components to support dynamic user interfaces and real-time updates",
      "Collaborated on both frontend and backend tasks, ensuring smooth data flow and consistent functionality across the application",
      "Optimized application performance and ensured responsiveness across multiple devices and browsers"
    ]
    ,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 60 },
      { name: "React", level: 80 },
      { name: "UI/UX", level: 90 }
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Organaise",
    period: "March 2023 - March 2024",
    description: [
      "Contributed to client projects by developing scalable features using React & Tailwind",
      "Assisted in implementing microservices architecture to improve application modularity and performance",
      "Optimized React components to enhance loading speed and reduce bundle size",
      "Integrated third-party APIs, including payment gateways, for e-commerce applications"
    ],
    
    skills: [
      { name: "React", level: 87 },
      { name: "Tailwind CSS", level: 90 },
      { name: "ShadCn", level: 80 },
      { name: "Git/GitHub", level: 80 }
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Hoogaaa Pvt. Ltd.",
    period: "Jan 2022 - Feb 2023",
    description: [
      "Built and maintained dynamic web applications using HTML, CSS, JavaScript, React, and Node.js",
      "Worked closely with UI/UX designers to develop responsive and accessible user interfaces",
      "Designed and integrated RESTful APIs, and developed efficient database schemas",
      "Contributed to code quality through regular reviews and provided guidance to junior developers"
    ],
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Tailwind CSS", level: 65 },
      { name: "HTML/CSS", level: 70 }
    ]
  },
  {
    id: 4,
    role: "Fronted Developer Intern",
    company: "Softication Solution",
    period: "July 2021 - Dec 2021",
    description: [
      "Built and shipped highly interactive web applications using React",
      "Created reusable components and front-end libraries for future use",
      "Translated designs and wireframes into high-quality code",
      "Responsive ui designed base on client requirement"
    ],
    skills: [
      { name: "HTML/CSS", level: 60 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 75 },
      { name: "UI/UX", level: 70 }
    ]
  },

];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [animated, setAnimated] = useState<{[key: string]: boolean}>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimated(prev => ({
                ...prev,
                [entry.target.id]: true
              }));
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => observer.observe(bar));
    
    return () => {
      progressBars.forEach(bar => observer.unobserve(bar));
    };
  }, [activeTab]);
  
  return (
    <section id="experience" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2">02.</span> 
          My Experience
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab navigation */}
          <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-1 pb-2 md:pb-0">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`whitespace-nowrap px-4 py-3 text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 ${
                  activeTab === exp.id
                    ? 'text-[#64ffda] border-[#64ffda] bg-[#172a45] md:pl-5'
                    : 'text-[#8892b0] border-[#233554] hover:bg-[#172a45]/50 hover:text-[#ccd6f6]'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="md:w-3/4">
            {experiences
              .filter((exp) => exp.id === activeTab)
              .map((exp) => (
                <div key={exp.id} className="text-[#8892b0]">
                  <h3 className="text-xl text-[#ccd6f6] mb-1">
                    {exp.role} <span className="text-[#64ffda]">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm mb-4">{exp.period}</p>
                  
                  <ul className="mb-8 space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-[#64ffda] mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4">
                    <h4 className="text-[#ccd6f6] font-medium">Skills Progress</h4>
                    {exp.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-[#233554] rounded-full overflow-hidden">
                          <div 
                            id={`progress-${exp.id}-${index}`}
                            className="progress-bar h-full bg-[#64ffda] rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: animated[`progress-${exp.id}-${index}`] ? `${skill.level}%` : '0%',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;