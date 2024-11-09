import React, { useState } from 'react';
import './imageSlider.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, descriptions }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const swipeDistance = touchStart - touchEnd;

    // Swipe left to go to next slide
    if (swipeDistance > 50) handleNext();
    // Swipe right to go to previous slide
    if (swipeDistance < -50) handlePrev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="image-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        className="slider-image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <div className="slider-controls">
        <div className="slider-buttons">
          <button onClick={handlePrev} className="slider-button prev">
            <ChevronLeft color="white" size={15} className="chevron" />
          </button>
          <button onClick={handleNext} className="slider-button next">
            <ChevronRight color="white" size={15} className="chevron" />
          </button>
        </div>
        <div className="slider-description">
          {descriptions && descriptions[currentImageIndex]}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
