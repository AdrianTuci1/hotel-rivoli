import React from 'react';
import './carousel.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {

  useGSAP(() => {
    gsap.to(".circle-container", {
        scrollTrigger: {
            trigger: ".mainp",
            scrub: 1,
            start: 'top right',
            end: '+=1800',
            toggleActions: 'restart pause reverse pause'
        },
        rotation: 100,
        duration: 2,
        ease: "power1.in",
    });

    gsap.to(".box", {
        scrollTrigger: {
          trigger: ".mainp",
          scrub: 1,
          start: '',
          end: '+=1800',
          toggleActions: 'restart pause reverse pause'
        },
        rotation: -100, // Adjust rotation as needed
        duration: 3,
        ease: "power1.in",
      });
  }, [])

  const radius = 700; // Adjust radius as needed
  const boxSize = 350; // Adjust box size as needed
  const circumference = 2 * Math.PI * radius;

  const calculateBoxPosition = (index) => {
    const angle = (2 * Math.PI * index) / 5;
    const centerX = radius;
    const centerY = radius;
    // Adjust for half box size to achieve centering on circle
    const offsetX = Math.cos(angle) * (radius - boxSize / 2);
    const offsetY = Math.sin(angle) * (radius - boxSize / 2);
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    };
  };

  const boxes = [];
  const imageSrc = ['img6.jpeg', 'img2.jpeg', 'img5.jpeg', 'img4.jpeg', 'img3.jpeg']; // Replace with your image paths

  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div key={i} className="box" style={calculateBoxPosition(i)}>
            <div className="image-box">
        <img src={imageSrc[i]} alt="Box Image" width={350} height={350} />
        </div>
        </div>
    );
  }

  return (
    <>
    <div className="mainp">
    <div className="circle-container">
      <svg width={radius * 2} height={radius * 2}>
        <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke="none" strokeWidth="2" />
      </svg>     
      {boxes}
      </div>
      </div>
    </>
  );
};

export default Carousel;