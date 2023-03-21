import React, { useState, useEffect } from "react";
import "./styles/ImageSlider.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToSlide(n) {
    setCurrentSlide(prev => prev = (n + images?.length) % images?.length);
  }

  return (
    <div className='sliderBlock'>
      <div className='sliderBlock_mainImageContainer'>
        <img
          src={`http://127.0.0.1:8000/${images[currentSlide]?.value.image.url}`}
          //   alt={images[currentSlide].value.image.original.src}
          className='sliderBlock_mainImage'
        />
      </div>
      <ul className='sliderBlock_thumbnailImages'>
        {images?.map((image, index) => (
          <li
            key={index}
            className={`sliderBlock_thumbnailImages__item ${
              currentSlide === index
                ? "sliderBlock_thumbnailImages__active"
                : ""
            }`}
          >
            <img
              src={`http://127.0.0.1:8000/${image?.value.image.thumbnail.src}`}
              alt={image?.value.image.original.src}
              className='sliderBlock_thumbnailImages__image'
              onClick={() => goToSlide(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageSlider;
