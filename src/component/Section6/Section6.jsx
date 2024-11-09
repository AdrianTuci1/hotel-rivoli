import React, { useRef } from 'react';
import './section6.scss';
import MyMap from '../Map/Map';
import { useTranslation } from 'react-i18next';
import ControlPanel from '../Map/control-panel';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section6() {
  const { t } = useTranslation();
  const mapContainerRef = useRef(null);
  const controlPanelRef = useRef(null);

  useGSAP(() => {
    // Pin and scale effect with y-position adjustment
    const mapScaleAnimation = gsap.to(mapContainerRef.current, {
      scale: 1.3, // Slightly scale-up when pinned
      duration: 0.5,
      ease: "power2.inOut",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: mapContainerRef.current,
      start: "center center", // Start pin when map is centered in the viewport
      end: "+=300vh", // Hold duration for a stronger effect
      scrub: true,
      pin: true,
      onEnter: () => mapScaleAnimation.play(), // Play scale and center animation on enter
      onLeave: () => mapScaleAnimation.reverse(), // Reverse animation on leave
      onEnterBack: () => mapScaleAnimation.play(), // Play when scrolling back up
      onLeaveBack: () => mapScaleAnimation.reverse(), // Reverse when scrolling back up
    });

    // ControlPanel reveal as map pins
    gsap.to(controlPanelRef.current, {
      scrollTrigger: {
        trigger: mapContainerRef.current,
        start: "center center", // Align ControlPanel animation with map pinning
        end: "+=300vh",
        scrub: true,
      },
      y: -80, // Slide ControlPanel up into view
      opacity: 1, // Fade in smoothly
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="pachete">
      <div className="continut">
        <span className="locatie">{t('locatie')}</span>
        <span className="descriere">{t('locatiedesc')}</span>
      </div>
      <div className="mapz">
        <div ref={mapContainerRef} className="contmap">
          <MyMap />
        </div>
        <div ref={controlPanelRef} className="control-panel">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}

export default Section6;
