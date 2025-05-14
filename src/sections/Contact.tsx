import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
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

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="skew-background opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron]">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="glassmorphism p-6 h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                Contact Information
              </h3>
              
              <motion.div 
                className="space-y-6 justify-center"
                variants={containerVariants}
              >
                {[
                  { icon: <MapPin />, title: "Location", value: "Zomba, Malawi" },
                  { icon: <Mail />, title: "Email", value: "chilomovic@gmail.com" },
                  { icon: <Phone />, title: "Phone", value: "+265 989 27 27 16" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="p-3 glassmorphism text-[#00FFBB]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8 pt-8 border-t border-white/10"
                variants={containerVariants}
              >
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['github', 'linkedin', 'twitter', 'instagram'].map((platform, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="p-3 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <span className="text-xs uppercase">{platform[0]}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="glassmorphism p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                Send Me A Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  variants={containerVariants}
                >
                  {[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'Email', type: 'email' }
                  ].map((field, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <label htmlFor={field.name} className="block text-white mb-2">{field.label}</label>
                      <input 
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#00FFBB] focus:outline-none transition-colors"
                        required
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#00FFBB] focus:outline-none transition-colors"
                    required
                  />
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#00FFBB] focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit"
                  className="px-8 py-3 bg-[#FF2A6D] hover:bg-[#FF2A6D]/80 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all neon-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};