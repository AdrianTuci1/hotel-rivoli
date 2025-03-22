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
  const contentRef = useRef(null);

  useGSAP(() => {
    // Pin and scale effect with y-position adjustment
    const mapScaleAnimation = gsap.to(mapContainerRef.current, {
      scale: 1.3,
      duration: 0.5,
      ease: "power2.inOut",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: mapContainerRef.current,
      start: "center center",
      end: "+=300vh",
      scrub: true,
      pin: true,
      onEnter: () => mapScaleAnimation.play(),
      onLeave: () => mapScaleAnimation.reverse(),
      onEnterBack: () => mapScaleAnimation.play(),
      onLeaveBack: () => mapScaleAnimation.reverse(),
    });

    // ControlPanel reveal as map pins
    gsap.to(controlPanelRef.current, {
      scrollTrigger: {
        trigger: mapContainerRef.current,
        start: "center center",
        end: "+=300vh",
        scrub: true,
      },
      y: -80,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Content reveal animation - triggered once when it appears on screen
    gsap.set(contentRef.current, { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: contentRef.current,
      start: "top bottom-=100",
      once: true,
      onEnter: () => {
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    });
  }, []);

  return (
    <div className="pachete">
      <div className="continut" ref={contentRef}>
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
