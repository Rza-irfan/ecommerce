import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../slider/slider.css';

const images = [
  "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg",
  "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_img_5948.jpg",
  "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg",
  "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_img_6122.jpg"
];

const Slider = () => {
  const [image, setImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const no_of_slides = images.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % no_of_slides);
      setImage(images[imageIndex]);
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [imageIndex]); // Add imageIndex as a dependency

  const changeSliderImage = (direction) => {
    if (direction === 'left') {
      setImageIndex((prevIndex) => (prevIndex - 1 + no_of_slides) % no_of_slides);
    } else {
      setImageIndex((prevIndex) => (prevIndex + 1) % no_of_slides);
    }
  };

  return (
    <div className='slider-container'>
      <div className='slider'>
        <button className='left' onClick={() => changeSliderImage('left')}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='cart-icon' />
        </button>
        <button className='right' onClick={() => changeSliderImage('right')}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className='cart-icon' />
        </button>
        <img src={image} alt="Slider Image" />
      </div>
    </div>
  );
};

export default Slider;
