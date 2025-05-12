import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

type Skill = {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
};

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 50 },
      { name: "TypeScript", level: 50 },
      { name: "CSS/SASS", level: 60 },

    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 35 },
      { name: "Express", level: 30 },
      { name: "Laravel", level: 30},
      { name: "MongoDB", level: 35 },
      { name: "REST", level: 30 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitHub", level: 80 },
      { name: "Docker", level: 20 },
      { name: "AWS", level: 20 },
      
    ]
  }
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200);
            });
            
            const progressBars = sectionRef.current?.querySelectorAll('.progress-bar');
            progressBars?.forEach((el, index) => {
              setTimeout(() => {
                const level = el.getAttribute('data-level');
                if (level) {
                  (el as HTMLElement).style.width = `${level}%`;
                }
              }, 500 + index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron] reveal">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto reveal"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400 reveal">
            Here are the technologies and tools I'm proficient with. I'm constantly learning
            and expanding my skill set to stay at the cutting edge of web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="glassmorphism p-6 reveal">
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[#00FFBB]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar h-full bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] rounded-full w-0 transition-all duration-1000 ease-out"
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glassmorphism p-6 reveal">
            <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
              Certificates & Achievements
            </h3>
            
            <div className="space-y-4">
              {[
                "Laravel Certified Developer",
                "MongoDB Certified Developer"
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFBB] flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glassmorphism p-6 reveal">
            <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
              Additional Knowledge
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                "Performance Optimization", "Responsive Design",
                "PWAs", "Serverless", "CI/CD", "Microservices", "JAMstack",
                "Web Accessibility", "SEO", "Web3", "Testing", "Animations"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 glassmorphism text-white hover:text-[#00FFBB] transition-colors text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};