import React from 'react'
import { motion } from 'framer-motion';
import "./Materials.css"
function Materials() {
  return (
    <div className="material__container">
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
        <h2 className="material__contentheader">Ankara </h2>
        <span className="material__contentpara">- Africans Finest Fabrics</span>
        {/* <p className="material__contentpara">
          When you talk about quality and durability, our Ankara is such that
          brings out the elegance, beauty and splendor of any design.
        </p> */}
        <button className="material__contentbtn">Explore</button>
      </div>
    </div>
  );
}

export default Materials