import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate which section is currently in view
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 glassmorphism bg-opacity-80' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-2xl font-bold font-[Orbitron]"
        >
          <Cpu className="w-8 h-8 text-[#00FFBB]" />
          <span className="text-gradient">DEV<span className="text-white">ZERO</span></span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`text-lg transition-all duration-300 relative group ${
                activeSection === item.toLowerCase()
                  ? 'text-[#00FFBB]'
                  : 'text-white hover:text-[#00FFBB]'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00FFBB] transition-all duration-300 ${
                activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 glassmorphism shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-xl transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-[#00FFBB]'
                    : 'text-white hover:text-[#00FFBB]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};