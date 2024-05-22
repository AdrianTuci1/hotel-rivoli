import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './roomreveal.scss'

const Letter = ({ letter }) => (
  <div className="letter">
  {letter === ' ' ? <>&nbsp;</> : letter}
  </div>
);

const Reveallx = ({ sentence }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const letters = containerRef.current.querySelectorAll('.letter');

    gsap.from(letters, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'middle bottom',
        end: '+=400',
        scrub: true,
        toggleActions: 'restart pause reverse pause',
      },
      stagger: 5,
      opacity: 0.3,
      duration: 8,
      ease: 'power1.in',
    })
  })

  return (
    <div ref={containerRef} className="containerp" style={{ display: 'flex' }}>
      {sentence.split('').map((letter, index) => (
        <Letter key={index} letter={letter} className='lettersss'/>
      ))}
    </div>
  );
};

export default Reveallx;
