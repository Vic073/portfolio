import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    // In a real application, handle form submission to a backend service
    console.log('Form submitted:', formState);
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
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
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="skew-background opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Orbitron] reveal">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFBB] to-[#FF2A6D] mx-auto reveal"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400 reveal">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="glassmorphism p-6 h-full reveal">
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glassmorphism text-[#00FFBB]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Zomba, Malawi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glassmorphism text-[#00FFBB]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">chilomovic@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glassmorphism text-[#00FFBB]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+265 989 27 27 16</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['github', 'linkedin', 'twitter', 'instagram'].map((platform, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="p-3 glassmorphism text-white hover:text-[#00FFBB] transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <span className="text-xs uppercase">{platform[0]}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="glassmorphism p-6 reveal">
              <h3 className="text-xl font-bold mb-6 text-gradient font-[Orbitron]">
                Send Me A Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#00FFBB] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#00FFBB] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
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
                </div>
                
                <div className="mb-6">
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
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-[#FF2A6D] hover:bg-[#FF2A6D]/80 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all neon-border"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};