import React, { useEffect, useRef } from 'react';

const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Letters and columns setup
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    const lettersArray = letters.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    // Drawing function
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // Set the text color to green

      drops.forEach((drop, i) => {
        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        // Reset drop after it falls off the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      });
    };

    // Animation loop
    const interval = setInterval(draw, 33);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default MatrixEffect;
