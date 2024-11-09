import './section1.scss';
import { BedDouble, MessageCircleMore } from 'lucide-react';
import BoxRow from '../risingText/RisingText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Carousel from '../carousel/Carousel';
import { useTranslation } from 'react-i18next';

function Section1() {
  const { t } = useTranslation();
  const text1 = "HOTEL";
  const text2 = "RIVOLI";

  useGSAP(() => {
    gsap.from('.item', {
      delay: 0.4,
      opacity: 0,
      duration: 2,
      ease: 'back.in',
      stagger: 0.2,
    });
  });

  return (
    <div className="maini">
      {/* Carousel Background */}
      <div className="carus">
        <Carousel />
      </div>
      
      {/* Centered Content */}
      <div className="wrapper">
        <span className="logo">
          <img src="./hrlogo.png" alt="Hotel Rivoli Logo" />
        </span>
        
        <span className="title">
          <BoxRow text={text1} />
        </span>
        
        <span className="title second">
          <BoxRow text={text2} />
        </span>
        
        <span className="text">
          {t("bun venit")}
        </span>
        
        <div className="contactpg">
          <a href={import.meta.env.VITE_BOOK_URL} target="_blank" className="book item">
            BOOK &nbsp;<BedDouble size={16} />
          </a>
          <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" className="whatsapp item">
            WHATSAPP &nbsp;<MessageCircleMore width={17} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section1;
