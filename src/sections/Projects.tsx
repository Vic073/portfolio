import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DCE SRC Voting System",
    description: "A platform where students at DCE can vote for their SRC representatives, featuring real-time results and secure authentication.",
    image: "src.png",
    tags: ["HTML", "JavaScript", "BootstrapCSS", "PHP", "API Integration"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "EDUSHARE",
    description: "A collaborative platform for students at DCE to share and access educational resources, including notes, videos, and articles.",
    image: "edu.png",
    tags: ["React", "Framer Motion", "TailwindCSS", "Laravel", "API Integration"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Daily Quotes",
    description: "A simple web app that fetches and displays a new motivational quote every day, using an external API.",
    image: "quote.png",
    tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "API Integration"],
    github: "#",
    live: "#"
  },
  
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="skew-background opacity-20 transform -skewY(10deg)"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron] reveal">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto reveal"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400 reveal">
            Explore some of my recent work. These projects showcase my skills in web development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glassmorphism overflow-hidden reveal perspective-card"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="perspective-card-inner h-full">
                <div className="relative group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-5 h-5 text-[#00FFBB]" />
                      <h3 className="text-2xl font-bold font-[Orbitron]">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 glassmorphism text-[#00FFBB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        className="p-2 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live} 
                        className="p-2 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <a 
            href="#" 
            className="px-8 py-3 bg-transparent border border-[#00FFBB] hover:bg-[#00FFBB]/10 text-white rounded-full font-medium inline-flex items-center justify-center gap-2 transition-all neon-border"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};