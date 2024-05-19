import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { useGSAP } from '@gsap/react';
import './reveall.scss'

const Letter = ({ letter }) => (
  <div className="letter">
  {letter === ' ' ? <>&nbsp;</> : letter}
  </div>
);

const Reveall = ({ sentence }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const letters = containerRef.current.querySelectorAll('.letter');

    gsap.from(letters, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom bottom',
        end: '+=300',
        scrub: true,
        toggleActions: 'restart pause reverse pause',
      },
      stagger: 5,
      y: +140,
      duration: 5,
      ease: 'power1.in',
    })
  })

  return (
    <div ref={containerRef} className="container" style={{ display: 'flex' }}>
      {sentence.split('').map((letter, index) => (
        <Letter key={index} letter={letter} className='letterss'/>
      ))}
    </div>
  );
};

export default Reveall;



