export const initBackgroundEffect = () => {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas-background';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    console.error('Could not get canvas context');
    return () => {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }
  
  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Particle configuration
  const particleCount = 100;
  const particles: Particle[] = [];
  
  // Mouse interaction
  let mouse = { x: null as number | null, y: null as number | null, radius: 100 };
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  // Create particles
  class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    color: string;
    
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      
      // Generate a color from the cyberpunk theme
      const colors = ['#00FFBB', '#FF2A6D', '#2D1B69', '#9D4EDD'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    draw() {
      if (!ctx) return;
      
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    
    update() {
      if (mouse.x === null || mouse.y === null) return;
      
      // Calculate distance between mouse and particle
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;
        
        this.x -= directionX;
        this.y -= directionY;
      } else {
        // Return to original position
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }
    }
  }
  
  // Initialize particles
  const init = () => {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  };
  
  init();
  
  // Animation loop
  const animate = () => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    for (const particle of particles) {
      particle.update();
      particle.draw();
    }
    
    // Connect particles with lines if they're close enough
    connectParticles();
    
    requestAnimationFrame(animate);
  };
  
  // Connect nearby particles with lines
  const connectParticles = () => {
    if (!ctx) return;
    
    const maxDistance = 150;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          ctx.strokeStyle = `rgba(0, 255, 187, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };
  
  // Start animation
  animate();
  
  // Cleanup function
  return () => {
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    
    if (canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  };
};