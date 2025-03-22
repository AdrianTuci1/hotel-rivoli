import React from 'react';
import './navcard.scss';

const NavCard = ({ imageSrc, description, link, isCentered }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='link'>
      <div className={`image-card ${isCentered ? 'center-focused' : ''}`}>
        <img src={imageSrc} alt={description} />
        <div className="img-crd-wrap">
          <p className="image-card-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NavCard;
