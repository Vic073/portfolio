import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="skew-background opacity-20 transform -skewY(10deg)"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron]">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Explore some of my recent work. These projects showcase my skills in web development, 
            UI/UX design, and problem-solving.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="glassmorphism overflow-hidden perspective-card"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-5 h-5 text-[#00FFBB]" />
                      <h3 className="text-xl md:text-2xl font-bold font-[Orbitron]">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm md:text-base line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>
                    
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
                      <motion.a 
                        href={project.github} 
                        className="p-2 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a 
                        href={project.live} 
                        className="p-2 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="px-8 py-3 bg-transparent border border-[#00FFBB] hover:bg-[#00FFBB]/10 text-white rounded-full font-medium inline-flex items-center justify-center gap-2 transition-all neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};