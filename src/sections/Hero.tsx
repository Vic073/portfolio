import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Download } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const animateText = () => {
      let iteration = 0;
      const originalText = "JOHN DOE"; // Replace with your name
      
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
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Code className="w-16 h-16 text-[#00FFBB] animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-[#00FFBB] mb-4 font-medium">Hello, I am</p>
          
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[Orbitron] tracking-wider"
          >
            JOHN DOE
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300">
            <span className="text-gradient">Full Stack Developer</span> & <span className="text-[#FF2A6D]">UI Designer</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies.
            Specializing in creating innovative, responsive, and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-[#FF2A6D] hover:bg-[#FF2A6D]/80 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all neon-border"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            
            <a 
              href="#" 
              className="px-8 py-3 bg-transparent border border-[#00FFBB] hover:bg-[#00FFBB]/10 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all neon-border"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#00FFBB]" />
      </div>
    </section>
  );
};