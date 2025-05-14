import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron]">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Here are the technologies and tools I'm proficient with. I'm constantly learning
            and expanding my skill set to stay at the cutting edge of web development.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={groupIndex} 
              className="glassmorphism p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                {skillGroup.category}
              </h3>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[#00FFBB]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glassmorphism p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
              Certificates & Achievements
            </h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "Laravel Certified Developer",
                "MongoDB Certified Developer"
              ].map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-[#00FFBB] flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="glassmorphism p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
              Additional Knowledge
            </h3>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {[
                "Performance Optimization", "Responsive Design",
                "PWAs", "Serverless", "CI/CD", "Microservices", "JAMstack",
                "Web Accessibility", "SEO", "Web3", "Testing", "Animations"
              ].map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="px-3 py-1 glassmorphism text-white hover:text-[#00FFBB] transition-colors text-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};