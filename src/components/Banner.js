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
    <div className="col-sm-12 col-md-11 mx-auto d-flex slider">
      <div className="col-sm-12 col-md-2 hero__left">
        <span className="col-sm-12 col-md-12 hero__catTitle">
          {" "}
          CATEGORY
        </span>
        {CategoryData.map((cat) => (
          <Link to={`/products/${cat.cat}`}>
            <div className="col-sm-3 col-md-12 hero__category">
                <div className="hero__icon">{cat.Icon}</div>
                <span className="hero__title">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="col-sm-12 col-md-8 hero__center">
        <SwipableBanner />
      </div>
      <div className=" col-sm-12 col-md-2 hero__right">
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
