import React from 'react'
import './navcard.scss'

const NavCard = ({ imageSrc, description, link }) => {
    return (
      <a href={link} target="_blank" className='lin-k'>
      <div className="image-card">
        <img src={imageSrc} alt={description} />
        <div className="img-crd-wrap">
        <p className="image-card-description">{description}</p>
        </div>
      </div>
      </a>
    );
  };
  
  export default NavCard;