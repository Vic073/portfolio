import React, { useEffect, useRef } from 'react';
import { Code, Database, Layout, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron]">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="perspective-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="perspective-card-inner">
              <div className="glassmorphism p-1">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="img.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-4 text-gradient font-[Orbitron]"
            >
              Victor Chiromo
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I am an amauter web developer with a passion for creating dynamic and
              responsive web applications. With a strong foundation in both front-end
              and back-end technologies, I thrive on turning complex problems into
              elegant solutions. 
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or working on my personal creative 
              endeavors. I believe in continuous learning and pushing the boundaries 
              of what's possible on the web.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                { label: "Name", value: "Victor Chiromo" },
                { label: "Age", value: "20" },
                { label: "From", value: "Zomba, Malawi" },
                
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#00FFBB] font-medium">{item.label}:</span>
                  <span className="text-gray-300">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {[
                { icon: <Code />, label: "Development" },
                { icon: <Database />, label: "Backend" },
                { icon: <Users />, label: "Mentoring" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glassmorphism p-4 flex flex-col items-center text-center gap-2 neon-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-[#00FFBB] w-10 h-10">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};