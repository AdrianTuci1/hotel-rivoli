import React, { useRef } from 'react';
import gsap from 'gsap';
import './boxscrollrev.scss'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BoxScrollRev = () => {
  const containerrRef = useRef(null);
  const box1rRef = useRef(null);
  const box2rRef = useRef(null);
  const box3rRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

  useGSAP(() => {
    // Box 2 Animation with ScrollTrigger (unchanged)
    gsap.from(box2rRef.current, {
      scrollTrigger: {
        trigger: ".fullr-viewport", // Trigger on container element
        scrub: 1, // Enable scrubbing based on scroll position
        start: "center center", // Start animation at container center
        end: "+=700", // End animation 1000px past the start
        toggleActions: "restart pause reverse pause", // Animation controls
      },
      scale: 18, // Scale to 2x size
      rotate: 260,
      duration: 3, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });

    // Box 1 Movement with ScrollTrigger
    gsap.from(box1rRef.current, {
      scrollTrigger: {
        trigger: containerrRef.current, // Trigger on main container
        scrub: true, // Enable scrubbing based on scroll position
        start: "middle middle", // Start animation at container top
        end: "+=700", // End animation at container bottom
        toggleActions: "restart pause reverse pause",
      },
      x: window.innerWidth * -1.3, // Move to left half of viewport
      duration: 2, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });

    // Box 3 Movement with ScrollTrigger
    gsap.from(box3rRef.current, {
      scrollTrigger: {
        trigger: containerrRef.current, // Trigger on main container
        scrub: true, // Enable scrubbing based on scroll position
        start: "middle middle", // Start animation at container top
        end: "+=700", // End animation at container bottom
        toggleActions: "restart pause reverse pause",
      },
      x: window.innerWidth * +1.3, // Move to right half of viewport
      duration: 2, // Animation duration in seconds
      ease: "power1.in", // Ease function (adjust as needed)
    });
  }, []);

  return (
    <div ref={containerrRef} className="fullr-viewport">
      <div ref={box1rRef} className="boxzr"><img src="./star.png" alt="" /></div>
      <div ref={box2rRef} className="boxzr centerz">
        <img src="./star.png" alt="" />
        </div>
      <div ref={box3rRef} className="boxzr"><img src="star.png" alt="" /></div>
    </div>
  );
};

export default BoxScrollRev;


