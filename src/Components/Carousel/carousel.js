import React from "react";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImgOne from "../../assets/imgone.jpeg";
import ImgTwo from "../../assets/imgtwo.jpg";

import "../Carousel/carousel.css";

function ImgCarousel() {
  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        useKeyboardArrows
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={500}
      >
        <div>
          <img src={ImgOne} alt="/" />
        </div>
        <div>
          <img src={ImgTwo} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
