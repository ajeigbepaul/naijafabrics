import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import { CategoryData } from "../utils/CategoryData";
import { Link } from "react-router-dom";
import SwipableBanner from "./SwipableBanner";
import Adverts from "./Adverts";
function Banner() {
  return (
    <div className="slider">
      <div className="hero__left">
        <span className="hero__catTitle"> CATEGORY</span>
        {CategoryData.map((cat) => (
          <Link to={`/products/${cat.cat}`}>
            <div className="hero__category">
              <div className="hero__icon">{cat.Icon}</div>
              <span className="hero__title">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="hero__center">
        {/* <Carousel
          className=""
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          showStatus={false}
          animation={{ effect: "fade" }}
        >
          {CategoryData.map((slide, idx) => (
            <div key={idx} className="slider__hero">
              <img src={slide.img} alt="hero" className="sliderImg" />
              <div className="sliderinfo">
                <h1>{slide.title}</h1>
                <span>{slide.desc}</span>

                <button>
                  <Link to={`/products/${slide.cat}`}>Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
        </Carousel> */}
        <SwipableBanner />
      </div>
      <div className="hero__right">
        <div className="hero__rightheader">Place Your Adverts</div>
        {/* Adverts Components */}
        <Adverts
          url="http://www.youtube.com/embed/xDMP3i36naA"
          title="Tosh Watch"
          link="https://tushwatch.com"
        />
        <Adverts
          url="http://www.youtube.com/embed/xDMP3i36naA"
          title="Monique Fab"
          link="https://monique.com"
        />
      </div>
    </div>
  );
}

export default Banner;
