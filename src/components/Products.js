import React, { useState, useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import { motion } from "framer-motion";
import axios from "../api/axios";


function Products({ filtercolors, filtersize, sort, cat }) {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${process.env.REACT_APP_LOCAL_URL}/products?category=${cat}`
            : `${process.env.REACT_APP_LOCAL_URL}/products`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [cat]);
  // FILTER PRODUCTS COLORS
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => filtercolors === item?.colors)
      );
  }, [cat, filtercolors, products]);
 // FILTER PRODUCT SIZE
  useEffect(() => {
    cat &&
      setFilteredProducts(products.filter((item) => filtersize === item?.size));
    if(filtersize == 'All'){
     setFilteredProducts(products)
    }

  }, [cat, filtersize, products]);
  // SORT PRODUCT
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts( products.sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProducts( products.sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(products.sort((a, b) => b.price - a.price)
      );
    }
  }, [cat,sort,products]);
 
  return (
    <div className="col-sm-12 col-md-12 products">
      <motion.h2
        initial={{
          opacity: 0,
          y: -200,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{}}
      >
        Finest African Designs
      </motion.h2>
      <div className="products__product">
        {cat
          ? filteredproducts?.map((item) => (
              <Product key={item.id} product={item} />
            ))
          : products
              .slice(0, 10)
              ?.map((item) => <Product key={item.id} product={item} />)}
      </div>
      <div className="pro__btn">
        {" "}
        <button className="product__btn">View ALL</button>
      </div>
    </div>
  );
}

export default Products;
