import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Materials.css";
import axios from "../api/axios";
import Ankara from "./Ankara";
function Materials() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        // const res = await axios.get(
        //   cat
        //     ? `https://bamempirebackend-production.up.railway.app/products?category=${cat}`
        //     : "https://bamempirebackend-production.up.railway.app/products"
        // );
        const res = await axios.get(`http://localhost:8000/ankaras`);
        setProducts(res.data);
      } catch (error) {}
    };
    getProduct();
  }, []);
  return (
    <div className="col-sm-12 col-md-12 material__container">
      <motion.h2
        initial={{
          opacity: 0,
          y: -200,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="material__header"
      >
        Africa's Finest
      </motion.h2>
      <div className="material__content">
        <h2 className="col-sm-12 col-md-4 mx-auto material__contentheader">
          Ankara{" "}
        </h2>
        <span className="col-sm-12 col-md-4 mx-auto material__contentpara">
          - Africans Finest Fabrics
        </span>
      </div>
      <div className="ankara__wrapper">
        <div className="ankara__container">
          {products.slice(0, 10).map((product) => (
            <Ankara products={product} />
          ))}
        </div>
        <div className="mat__btn">
          {" "}
          <button className="material__btn">View ALL</button>
        </div>
      </div>
    </div>
  );
}

export default Materials;
