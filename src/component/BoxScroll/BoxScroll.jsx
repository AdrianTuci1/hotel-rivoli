import React, { useRef } from 'react';
import gsap from 'gsap';
import './boxScroll.scss'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BoxScroll = () => {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

  useGSAP(() => {
    // Box 2 Animation with ScrollTrigger (unchanged)
    gsap.to(box2Ref.current, {
      scrollTrigger: {
        trigger: ".full-viewport", // Trigger on container element
        scrub: 1, // Enable scrubbing based on scroll position
        start: "center center", // Start animation at container center
        end: "+=800", // End animation 1000px past the start
        toggleActions: "restart pause reverse pause", // Animation controls
      },
      scale: 20, // Scale to 2x size
      rotate: 260,
      duration: 3, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });

    // Box 1 Movement with ScrollTrigger
    gsap.to(box1Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current, // Trigger on main container
        scrub: true, // Enable scrubbing based on scroll position
        start: "middle middle", // Start animation at container top
        end: "+=1000", // End animation at container bottom
      },
      x: window.innerWidth * -1.3, // Move to left half of viewport
      duration: 2, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });

    // Box 3 Movement with ScrollTrigger
    gsap.to(box3Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current, // Trigger on main container
        scrub: true, // Enable scrubbing based on scroll position
        start: "middle middle", // Start animation at container top
        end: "+=1000", // End animation at container bottom
      },
      x: window.innerWidth * 1.3, // Move to right half of viewport
      duration: 2, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });
  }, []);

  return (
    <div ref={containerRef} className="full-viewport">
      <div ref={box1Ref} className="boxz"><img src="./star.png" alt="" /></div>
      <div ref={box2Ref} className="boxz center">
        <img src="./star.png" alt="" />
        </div>
      <div ref={box3Ref} className="boxz"><img src="star.png" alt="" /></div>
    </div>
  );
};

export default BoxScroll;




