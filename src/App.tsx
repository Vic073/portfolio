import React, { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { initBackgroundEffect } from './utils/backgroundEffects';

function App() {
  useEffect(() => {
    // Initialize background effects
    const cleanup = initBackgroundEffect();
    return cleanup;
  }, []);

  return (
    <div className="app-container bg-gradient-to-b from-black via-indigo-950/30 to-black min-h-screen text-white overflow-hidden">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;