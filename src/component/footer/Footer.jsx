import React, { useRef } from 'react';
import './footer.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerContainerRef = useRef(null);
  const brandBoxRef = useRef(null);
  const contactBoxRef = useRef(null);
  const linksBoxRef = useRef(null);

  useGSAP(() => {
    gsap.from(brandBoxRef.current, {
      scrollTrigger: {
        trigger: footerContainerRef.current,
        start: 'top bottom',
        end: 'center center',
        scrub: 1,
      },
      y: -300,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from([contactBoxRef.current, linksBoxRef.current], {
      scrollTrigger: {
        trigger: footerContainerRef.current,
        start: 'top bottom',
        end: 'center center',
        scrub: 1,
      },
      y: 300,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    });
  });

  return (
    <div className="footer-container" ref={footerContainerRef}>
      <div className="footer-content">
        <div className="footer-box brand-box" ref={brandBoxRef}>
          <span className="brand-title">RIVOLI</span>
        </div>
        <div className="footer-box contact-box" ref={contactBoxRef}>
          <ul className="no-bullets">
            <li className="box-header">IMPRINT</li>
            <li>HOTEL RIVOLI</li>
            <li>STRADA POSTAVARUL NR 98A</li>
            <li>BUCURESTI, SECTOR 3</li>
            <li>hotel_rivoli@yahoo.com</li>
            <li>TEL: 0791 644 000</li>
          </ul>
        </div>
        <div className="footer-box links-box" ref={linksBoxRef}>
          <ul className="no-bullets">
            <li className="box-header">LINKS</li>
            <li>CONDITIONS</li>
            <li>WEBSITE BY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
