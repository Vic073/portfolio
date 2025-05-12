import React, { useEffect, useRef } from 'react';
import { Code, Database, Layout, Sparkles, Users } from 'lucide-react';

export const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron] reveal">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal perspective-card">
            <div className="perspective-card-inner">
              <div className="glassmorphism p-1">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gradient font-[Orbitron] reveal">John Doe</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed reveal">
              I'm a passionate full-stack developer and UI designer with over 5 years 
              of experience creating beautiful, functional digital experiences. My goal 
              is to build applications that are not only visually stunning but also 
              intuitive and performant.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed reveal">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or working on my personal creative 
              endeavors. I believe in continuous learning and pushing the boundaries 
              of what's possible on the web.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 reveal">
                <span className="text-[#00FFBB] font-medium">Name:</span>
                <span className="text-gray-300">John Doe</span>
              </div>
              <div className="flex items-center gap-3 reveal">
                <span className="text-[#00FFBB] font-medium">Email:</span>
                <span className="text-gray-300">john@example.com</span>
              </div>
              <div className="flex items-center gap-3 reveal">
                <span className="text-[#00FFBB] font-medium">From:</span>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 reveal">
                <span className="text-[#00FFBB] font-medium">Freelance:</span>
                <span className="text-gray-300">Available</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Code />, label: "Development" },
                { icon: <Layout />, label: "UI Design" },
                { icon: <Database />, label: "Backend" },
                { icon: <Users />, label: "Mentoring" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glassmorphism p-4 flex flex-col items-center text-center gap-2 reveal neon-border"
                >
                  <div className="text-[#00FFBB] w-10 h-10">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};