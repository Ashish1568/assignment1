// Carousel.js
import React, { useState } from 'react';
import '../App.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
