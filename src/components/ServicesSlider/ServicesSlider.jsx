import React, { Children, useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import "./ServicesSlider.scss";

const ServicesSlider = ({ children, slidesToShow }) => {
  //   const {sarvicesCard, setServicesCard} = useState([]);
  //   useEffect(() => {
  //        fetch("servicesSlider.json")
  //       .then((res) => res.json())
  //       .then((data) => setServicesCard(data));
  //   }, []);
  return (
    <div className="services-slider">
      <div className="container">
        <h2>Popular professional services</h2>
        <div className="featured-slider">
          <Slider slidesToShow={slidesToShow}>{children}</Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
