import React from "react";
import { Link } from "react-router-dom";
import "./SwipableBanner.css";

function Slider({ image, title, desc, category }) {
  return (
    <div className="slider">
      <div className="col-sm-12 col-md-12 slider__image px-0">
        {<img src={image} alt="sliderimages" />}
        {/* <div className="col-sm-12 col-md-12 sliderinfo">
          <h1>{desc}</h1>
          <span>{title}</span>

          <button><Link to={`/products/${category}`}>Shop Now</Link></button>
        </div> */}
      </div>
    </div>
  );
}

export default Slider;
