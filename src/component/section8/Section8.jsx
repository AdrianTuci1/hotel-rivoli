import React, { useEffect, useRef } from 'react'
import './section8.scss'
import ContactForm from '../contactform/ContactForm'
import { BedDouble } from 'lucide-react'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section8() {
  const { t } = useTranslation();
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    
    gsap.fromTo(content.children, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div className="content8wrap">
      <div className='content8' ref={contentRef}>
        <span className="contactt">CONTACT</span>
        <span className="descrieree">
            {t('section8')}
        </span>
      </div>
      <div className="formz">
        <ContactForm />
      </div>
      <div className="interesat">
        <span className="inters">{t('interesat')}</span>
        <span className="bs">{t('rezerva')}</span>
        <a className='btnn book' href={import.meta.env.VITE_BOOK_URL} target='_blank'>BOOK &nbsp;<BedDouble size={16}/></a>
      </div>
    </div>
  )
}

export default Section8