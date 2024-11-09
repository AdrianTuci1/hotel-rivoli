import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './section5.scss';
import BoxScrollRev from '../BoxScrollReverse/BoxScrollRev';
import ReveallRev from '../reveallRev/ReveallRev';
import { useTranslation } from 'react-i18next';

function Section5() {
  const { t } = useTranslation();
  const textOverlayRef = useRef(null);

  useEffect(() => {
    // Fade out and move `ReveallRev` text on scroll
    gsap.to(textOverlayRef.current, {
      scrollTrigger: {
        trigger: textOverlayRef.current,
        start: "top middle", // Start when top of text hits top of viewport
        end: "bottom center", // End in the center of the viewport
        scrub: true,
      },
      opacity: 0, // Fade out
      y: -50, // Move up slightly as it fades
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="section5-container">
      <div ref={textOverlayRef} className="section5-overlay-text">
        <ReveallRev sentence={t('gaseste')} />
      </div>
      <div className="section5-scroll">
        <BoxScrollRev />
      </div>
    </div>
  );
}

export default Section5;
