import React from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "../utils/CategoryData";
import { motion } from "framer-motion";


function Categories() {
  return (
    <div className=" col-sm-12 col-md-12 categories">
      {/* <h2>Categories</h2> */}
      <div className="col-sm-12 col-md-12 categories__category px-0">
        <div className="col-sm-12 col-md-9 mx-auto d-flex cat__C">
          {CategoryData.map((category) => (
            <div className="col-sm-12 col-md-4 mx-2 my-2 px-0">
               <CategoryItem key={category.id} category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
