import React, { useEffect, useRef } from 'react';

const MusicVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Number of bars
    const barCount = 30;
    const barWidth = canvas.width / barCount;
    
    // Animation frame
    let animationId: number;
    
    // Function to draw the visualizer
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw bars
      for (let i = 0; i < barCount; i++) {
        // Generate random height for each bar
        const height = Math.random() * canvas.height * 0.8;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, canvas.height - height, 0, canvas.height);
        gradient.addColorStop(0, '#ff3333');
        gradient.addColorStop(1, '#b30000');
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 2, height);
      }
      
      // Request next frame
      animationId = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-24 rounded-md"
    />
  );
};

export default MusicVisualizer;