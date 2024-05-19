import React from 'react'
import './navcard.scss'

const NavCard = ({ imageSrc, description }) => {
    return (
      <div className="image-card">
        <img src={imageSrc} alt={description} />
        <div className="img-crd-wrap">
        <p className="image-card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  export default NavCard;