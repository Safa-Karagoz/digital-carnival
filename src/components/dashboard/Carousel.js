import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class CarouselPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };


    return (
      <div className="CarouselCSS">
        <Slider {...settings}>
          <div>
            <CarouselItem id = {0}/>
          </div>
          <div>
            <CarouselItem id = {1}/>
          </div>
          <div>
            <CarouselItem id = {2}/>
          </div>
        </Slider>

      </div>
    );
  }
}