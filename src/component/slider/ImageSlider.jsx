import React, { useState } from 'react';
import './imageSlider.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react';


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <img
        className='imag'
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <div className="barslide">
      <div className="buttons">
      <button onClick={handlePrev} className='button prev'><ChevronLeft color={'white'} size={15} className='chevr'/></button>
      <button onClick={handleNext} className='button next'><ChevronRight color={'white'} size={15} className='chevr'/></button>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
