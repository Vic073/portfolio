import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-10 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient font-[Orbitron]">CHIROMO.<span className="text-white">DEV</span></h3>
            <p className="mt-2 text-gray-400">Crafting digital experiences</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Vic073" className="text-gray-400 hover:text-[#00FFBB] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/victor-chilomo/" className="text-gray-400 hover:text-[#00FFBB] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/VChilomo?t=pLKLmKxDfiTkZxbWw803Jw&s=09" className="text-gray-400 hover:text-[#00FFBB] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-[#00FFBB] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} chiromo.dev. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};