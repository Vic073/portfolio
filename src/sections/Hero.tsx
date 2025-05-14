import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const animateText = () => {
      let iteration = 0;
      const originalText = "VICTOR CHIROMO"; 
      
      clearInterval(interval as number);
      
      interval = setInterval(() => {
        if (!title) return;
        
        title.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(interval as number);
        }
        
        iteration += 1 / 3;
      }, 30) as unknown as number;
    };
    
    animateText();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="skew-background opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Code className="w-16 h-16 text-[#00FFBB] animate-pulse" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#00FFBB] mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[Orbitron] tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            VICTOR CHIROMO
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-gradient">Full Stack Developer</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Crafting exceptional digital experiences with cutting-edge technologies.
            Specializing in creating innovative, responsive, and user-friendly applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-3 bg-[#FF2A6D] hover:bg-[#FF2A6D]/80 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all neon-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            
            <motion.a 
              href="#" 
              className="px-8 py-3 bg-transparent border border-[#00FFBB] hover:bg-[#00FFBB]/10 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all neon-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ArrowDown className="w-6 h-6 text-[#00FFBB] animate-bounce" />
      </motion.div>
    </section>
  );
};