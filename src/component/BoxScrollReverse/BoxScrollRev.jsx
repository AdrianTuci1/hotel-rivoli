import React, { useRef } from 'react';
import gsap from 'gsap';
import './boxscrollrev.scss';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BoxScrollRev = () => {
  const staricon = './staro.png';

  const containerRef = useRef(null);
  const leftStarRef = useRef(null);
  const centerStarRef = useRef(null);
  const rightStarRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || !leftStarRef.current || !centerStarRef.current || !rightStarRef.current) return;

    // Center Star Animation: Starts large, scales down quickly
    gsap.fromTo(
      centerStarRef.current,
      { scale: 32, rotate: 360 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "center center",
          end: "+=800", // Shortened scroll duration
        },
        scale: 1,
        rotate: 0,
        ease: "power1.inOut",
      }
    );

    // Left Star Movement: Moves inward faster
    gsap.fromTo(
      leftStarRef.current,
      { x: -500 }, // Adjusted for quicker transition
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "center center",
          end: "+=800",
        },
        x: -150, // Position near center
        scale: 1,
        ease: "power1.inOut",
      }
    );

    // Right Star Movement: Moves inward faster
    gsap.fromTo(
      rightStarRef.current,
      { x: 500 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "center center",
          end: "+=800",
        },
        x: 150,
        scale: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="boxscrollrev-container">
      <div ref={leftStarRef} className="boxscrollrev-star boxscrollrev-star-left"><img src={staricon} alt="Star Left" /></div>
      <div ref={centerStarRef} className="boxscrollrev-star boxscrollrev-star-center"><img src={staricon} alt="Star Center" /></div>
      <div ref={rightStarRef} className="boxscrollrev-star boxscrollrev-star-right"><img src={staricon} alt="Star Right" /></div>
    </div>
  );
};

export default BoxScrollRev;
