import React from 'react';
import satenderPic from "../assests/satender.jpeg"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image section */}
          <div className="md:w-2/5 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Decorative border */}
              <div className="absolute w-full h-full border-2 border-[#64ffda] rounded-md transform translate-x-5 translate-y-5"></div>
              {/* Main image */}
              <div className="absolute inset-0 rounded-md overflow-hidden bg-[#64ffda]/10 backdrop-blur-sm">
                <div className="w-full h-full relative overflow-hidden group">
                  <img
                    src={satenderPic}
                    alt="Satender Kumar"
                    className="w-full h-full object-cover object-center rounded-md transition-transform duration-500 
                    filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold text-[#ccd6f6] mb-6 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">01.</span>
              About Me
              <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
            </h2>

            <div className="text-[#8892b0] space-y-4">
              <p>
                Hello! I'm Satender, a passionate MERN stack developer with 3 years of professional experience
                building modern web applications. My journey in web development began when I started as a React.js
                developer at Hoogaaa Pvt Ltd, where I discovered my passion for creating interactive and intuitive user experiences.
              </p>

              <p>
                Since then, I've worked on diverse projects—from e-commerce platforms to real-time collaboration tools—
                gaining hands-on experience across the full MERN stack (MongoDB, Express, React, Node.js). What excites me most
                is solving real-world problems with clean, scalable code and thoughtful design.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing insights through technical blogs. I'm a firm believer in continuous learning and keeping up with
                the latest trends to build modern, accessible, and high-performing digital products.
              </p>
            </div>


            <div className="mt-8">
              <h3 className="text-xl text-[#ccd6f6] mb-4">Education</h3>
              <div className="text-[#8892b0]">
                <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                <p>Indira Gandhi National Open University, 2021</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;