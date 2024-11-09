import React, { useRef } from 'react';
import gsap from 'gsap';
import './boxScroll.scss';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BoxScroll = () => {
  const staricon = 'staro.png';

  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Center Star Animation (Scale and Rotate)
    gsap.to(box2Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 0,
        start: "center center", // Animation starts when section is centered
        end: "+=800",
        toggleActions: "restart pause reverse pause",
      },
      scale: 32, // Scale up significantly to cover the screen
      rotate: 360,
      duration: 1,
      ease: "power1.inOut",
      onUpdate: function () {
        containerRef.current.style.backgroundColor = `rgba(255, 215, 0, ${this.progress})`; // Transition to star color
      }
    });

    // Left Star Movement
    gsap.to(box1Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "center center",
        end: "+=800",
      },
      x: window.innerWidth * -1.5, // Move far to the left
      duration: 2,
      ease: "power1.in",
    });

    // Right Star Movement
    gsap.to(box3Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "center center",
        end: "+=800",
      },
      x: window.innerWidth * 1.5, // Move far to the right
      duration: 2,
      ease: "power1.in",
    });
  }, []);

  return (
    <div ref={containerRef} className="full-viewport">
      <div ref={box1Ref} className="boxz"><img src={staricon} alt="Star Icon" /></div>
      <div ref={box2Ref} className="boxz center">
        <img src={staricon} alt="Star Icon" />
      </div>
      <div ref={box3Ref} className="boxz"><img src={staricon} alt="Star Icon" /></div>
    </div>
  );
};

export default BoxScroll;
