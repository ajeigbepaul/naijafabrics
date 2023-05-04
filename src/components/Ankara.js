import React, { useState } from 'react'
import "./Ankara.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addToBasket } from '../slice/basketSlice';
import { FiShoppingCart } from "react-icons/fi";


function Ankara({products}) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const handleAddToCart = (e) => {
      const refreshToastnotify = toast.loading("Loading...");
      e.preventDefault();
      dispatch(addToBasket({ ...products, qty }));
      toast.success("added to cart!!", { id: refreshToastnotify });
    };
  return (
    <div className="ankara__product">
      <div className="ankaraproduct__img">
        <Link to={`/ankara/${products._id}`}>
          <img src={products.image.url} alt="products" />
        </Link>
        <div className="ankaraproduct__inf">
          <div className="ankaraproduct__tit">{products.description}</div>
          <div className="ankaraproduct__infowrap">
            <div className="ankaraproduct__pristock">
              <span className="ankaraprod__price">
                {" "}
                ₦{" "}
                {products.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </span>{" "}
              {/* <span className="ankaraprod__moq">MOQ of {products.moq}</span>{" "} */}
              {products.instock === "yes" ? (
                <span className="ankaraprod__instock">instock</span>
              ) : (
                <span className="ankaraprod__instock">sold out</span>
              )}
            </div>
            <div className="ankaraproduct__iconcontainer">
              <FiShoppingCart
                className="ankarashopicon"
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ankara