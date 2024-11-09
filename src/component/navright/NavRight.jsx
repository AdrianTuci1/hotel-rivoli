import './navRight.scss';
import { useState } from 'react';
import { Phone, Mail, MessageCircleMore, BedDouble } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import i18n from '../../translation';

function NavRight() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChange'));
    }
  };

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      gsap.to(window, {
        duration: 2,
        ease: 'power3.inOut',
        scrollTo: { y: targetElement.offsetTop },
      });
    }
  };

  useGSAP(() => {
    gsap.from('.language-section', {
      delay: 0.4,
      y: '-150%',
      duration: 2,
      ease: 'bounce.in',
    });

    gsap.from('.contact-bar', {
      delay: 0.4,
      y: '+150%',
      duration: 2,
      ease: 'bounce.in',
    });

      gsap.from('.nav-item', {
        delay: 0.4,
        opacity: 0,
        duration: 2,
        ease: 'back.in',
        stagger: 0.2,
      });
  });

  return (
    <div className="nav-right-container">
      <div className="nav-content">
        <div className="language-section">
          <button className="language-toggle-btn" onClick={toggleLanguage}>
            {t('ro')}
          </button>
          <a href={import.meta.env.VITE_BOOK_URL} target="_blank" className="booking-btn">
            BOOK <BedDouble size={16} />
          </a>
        </div>
        <div className="navigation-menu">
          <button className="nav-item" onClick={() => scrollToSection('section1')}>{t('inceput')}</button>
          <button className="nav-item" onClick={() => scrollToSection('camere')}>{t('camere')}</button>
          <button className="nav-item" onClick={() => scrollToSection('locatie')}>{t('locatie')}</button>
          <button className="nav-item" onClick={() => scrollToSection('contact')}>{t('contact')}</button>
        </div>
      </div>
      <div className="contact-bar">
        <span>{t('vorbim')}</span>
        <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" className="contact-icon whatsapp-icon"><MessageCircleMore width={20} /></a>
        <a href="tel:0791644000" className="contact-icon phone-icon"><Phone width={20} /></a>
        <a href="mailto:hotel_rivoli@yahoo.com?subject=pre-filled subject" className="contact-icon mail-icon"><Mail width={20} /></a>
      </div>
    </div>
  );
}

export default NavRight;
