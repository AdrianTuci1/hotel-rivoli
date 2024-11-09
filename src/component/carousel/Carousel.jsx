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
        scrub: true,
        start: 'top right',
        end: '+=2500',
        toggleActions: 'restart pause reverse pause'
      },
      rotation: 100,
      duration: 2,
      ease: "power1.in",
    });

    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".mainp",
        scrub: true,
        start: '',
        end: '+=2500',
        toggleActions: 'restart pause reverse pause'
      },
      rotation: -100,
      duration: 3,
      ease: "power1.in",
    });

    gsap.from('.circle-container', {
      scale: 2,
      duration: 2,
      ease: 'sine.in',
    });
  }, []);

  const radius = 700;
  const boxSize = 350;

  const calculateBoxPosition = (index) => {
    const angle = (2 * Math.PI * index) / 5;
    const offsetX = Math.cos(angle) * (radius - boxSize / 2);
    const offsetY = Math.sin(angle) * (radius - boxSize / 2);
    return { transform: `translate(${offsetX}px, ${offsetY}px)` };
  };

  const imageSrc = ['cameracar.jpg', 'receptie.jpeg', 'hotel.JPG', 'img4.jpeg', 'dubla.jpg'];

  return (
    <div className="mainp">
      <div className="circle-container">
        <svg width={radius * 2} height={radius * 2}>
          <circle cx={radius} cy={radius} r={radius} fill="transparent" />
        </svg>
        {imageSrc.map((src, index) => (
          <div key={index} className="box" style={calculateBoxPosition(index)}>
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
