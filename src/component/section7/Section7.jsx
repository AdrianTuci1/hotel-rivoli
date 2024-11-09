import React from 'react'
import './section7.scss'
import NavCard from '../navCard/NavCard'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';

function Section7() {
    const { t } = useTranslation();

    const images = [
        { src: './metrou.JPG', description: 'METROU 1 DECEMBRIE 1918 - 700M', link:`${import.meta.env.VITE_MAP_METROU}` },
        { src: './parklake.png', description: 'CENTRUL COMERCIAL PARK LAKE - 3000M', link:`${import.meta.env.VITE_MAP_PARK}`},
        { src: './parcultitan.jpg', description: "PARCUL TITAN - 2000M", link:`${import.meta.env.VITE_MAP_TITAN}`}
      ];

  return (
    <div className="sec7">
    <div className='continut7'>
        <div className="bxz1"></div>
        <span className="continut3">
            {t('section7')}
        </span>
    </div>
    <div className="image-card-containerr">
    {images.map((image) => (
        <NavCard 
        key={image.src} 
        imageSrc={image.src} 
        description={image.description}
        link={image.link}
        />
    ))}
    </div>
    </div>
  )
}

export default Section7