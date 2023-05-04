import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import "./CategoryItem.css"

function CategoryItem({category}) {
  return (
    <Link to={`/products/${category.cat}`}>
      <div className="col-sm-12 col-md-12 categoryItem__container">
        <div className=" col-sm-12 col-md-4 px-0 categoryItem__img">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            src={category.img}
            alt="category"
          />
        </div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          className="categoryItem__info"
        >
          <h2>{category.title}</h2>
        </motion.div>
      </div>
    </Link>
  );
}

export default CategoryItem