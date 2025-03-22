import React, { useEffect, useState, useRef } from 'react';
import './carousel.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const boxRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Recalculate positions on resize
      const rotation = gsap.getProperty(containerRef.current, "rotation");
      boxRefs.current.forEach((box, index) => {
        if (box) {
          const angle = (2 * Math.PI * index) / 5;
          const radius = window.innerWidth <= 768 ? 700 : 850;
          const boxSize = window.innerWidth <= 768 ? 380 : 450;
          const offsetX = Math.cos(angle) * (radius - boxSize / 2);
          const offsetY = Math.sin(angle) * (radius - boxSize / 2);
          
          gsap.set(box, {
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            rotation: -rotation,
            force3D: true
          });
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const radius = isMobile ? 635 : 850;
  const horizontalRadius = radius;
  const verticalRadius = radius;
  const boxSize = isMobile ? 370 : 450;

  const calculateBoxPosition = (index) => {
    const angle = (2 * Math.PI * index) / 5;
    const offsetX = Math.cos(angle) * (horizontalRadius - boxSize / 2);
    const offsetY = Math.sin(angle) * (verticalRadius - boxSize / 2);
    return { 
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      transformOrigin: 'center center',
      position: 'absolute',
      width: boxSize,
      height: boxSize,
    };
  };

  const imageSrc = ['cameracar.jpg', 'receptie.jpeg', 'hotel.JPG', 'img4.jpeg', 'dubla.jpg'];

  useGSAP(() => {
    // Initial animation for the circle container
    gsap.from(containerRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    const totalRotation = -280;
    const duration = 5;

    // Create a timeline for smooth animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainp",
        scrub: 1.5,
        start: 'top right',
        end: '+=4000',
        toggleActions: 'restart pause reverse pause'
      },
    });

    // Animate the container
    tl.to(containerRef.current, {
      rotation: totalRotation,
      duration: duration,
      ease: "power2.in",
      onUpdate: () => {
        const rotation = gsap.getProperty(containerRef.current, "rotation");
        
        // Update each box rotation to stay level
        boxRefs.current.forEach((box) => {
          if (box) {
            gsap.set(box, {
              rotation: -rotation,
              force3D: true
            });
          }
        });
      }
    });
  }, []);

  return (
    <div className="mainp">
      <div className="circle-container" ref={containerRef}>
        <svg width={horizontalRadius * 2} height={verticalRadius * 2}>
          <ellipse 
            cx={horizontalRadius} 
            cy={verticalRadius} 
            rx={horizontalRadius} 
            ry={verticalRadius} 
            fill="transparent" 
          />
        </svg>
        {imageSrc.map((src, index) => (
          <div 
            key={index} 
            className="box" 
            ref={el => boxRefs.current[index] = el}
            style={calculateBoxPosition(index)}
          >
            <div className="image-box">
              <img src={src} alt={`Box ${index + 1}`} width={boxSize} height={boxSize} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
