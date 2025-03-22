import React, { useEffect, useState, useCallback, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const positionsRef = useRef({
    main: { x: 0, y: 0 },
    stars: [
      { x: -100, y: -100 },
      { x: -100, y: -100 },
      { x: -100, y: -100 }
    ]
  });
  const [renderPositions, setRenderPositions] = useState(positionsRef.current);
  const rafRef = useRef(null);

  useEffect(() => {
    // Check if device has touch capability
    const hasTouch = navigator.maxTouchPoints > 0;
    setIsMobile(hasTouch);
  }, []);

  // Animation loop using requestAnimationFrame for smoother performance
  const animateStars = useCallback(() => {
    const { main, stars } = positionsRef.current;
    
    // Calculate new positions with unique offsets for each star
    const newStars = stars.map((star, index) => {
      // Calculate distance between cursor and star
      const dx = (main.x + 15 + (index * 5)) - star.x; // Offset to the right
      const dy = (main.y + 15 + (index * 5)) - star.y; // Offset to the bottom
      
      // Add small random offset to each star's position (creates more natural movement)
      const offsetX = Math.sin(Date.now() * 0.001 + index) * 3;
      const offsetY = Math.cos(Date.now() * 0.001 + index * 2) * 3;
      
      // Factor determines how quickly stars follow cursor (higher = slower)
      const factor = 4 + (index * 2);
      
      return {
        x: star.x + dx / factor + offsetX,
        y: star.y + dy / factor + offsetY
      };
    });
    
    positionsRef.current.stars = newStars;
    setRenderPositions({
      main: main,
      stars: newStars
    });
    
    rafRef.current = requestAnimationFrame(animateStars);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      rafRef.current = requestAnimationFrame(animateStars);
      
      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }
  }, [animateStars, isMobile]);

  const updateCursorPosition = useCallback((e) => {
    // Update position directly in the ref for smooth animation
    positionsRef.current.main = { x: e.clientX, y: e.clientY };
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e) => {
    if (e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.classList.contains('hoverable')) {
      setIsHovered(true);
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('mousemove', updateCursorPosition, { passive: true });
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
      document.addEventListener('mouseout', handleMouseOut, { passive: true });

      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [updateCursorPosition, handleMouseOver, handleMouseOut, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div 
        className={`custom-cursor ${isHovered ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      {renderPositions.stars.map((starPos, index) => (
        <div
          key={index}
          className="cursor-star"
          style={{
            left: `${starPos.x}px`,
            top: `${starPos.y}px`,
            opacity: 0.8 - (index * 0.15),
            transform: `translate(-50%, -50%) scale(${0.9 - (index * 0.1)})`,
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9039089 - index,
            fontSize: '28px',
            color: index === 0 ? '#ffcc00' : index === 1 ? '#ff9900' : '#ff6600'
          }}
        >
          ★
        </div>
      ))}
    </>
  );
};

export default CustomCursor; 