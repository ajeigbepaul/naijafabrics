import React, { useState } from 'react'
import FitlerColor from "../components/FilterColor";
import CartQty from './CartQty';
import { useDispatch } from 'react-redux';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { addToBasket, removeFromBasket } from '../slice/basketSlice';
import { toast } from 'react-hot-toast';
function CartProduct({product}) {
  const {_id,image,size,colors,price,instock,title} = product
  const [qty, setQty]= useState(1)
  const dispatch = useDispatch();

  function handleRemove() {
    const refreshToastnotify = toast.loading("Loading...");
     dispatch(removeFromBasket({_id}))
     toast.success("removed from cart!!", { id: refreshToastnotify });
  }
  function handleAdd(){
    const refreshToastnotify = toast.loading("Loading...");
    dispatch(addToBasket({...product,qty}));
    toast.success("added to cart!!", { id: refreshToastnotify });
  }
  return (
    <>
      <div className="cart__product">
        <div className="cart__productdetails">
          <img src={image?.url} alt="productimage" />
          <div className="cart__details">
            <span className="productname">{title}</span>
            <span className="productid">
              ID: {_id}
            </span>
            {instock === "yes" ? (
              <span className="cart__instock">instock</span>
            ) : (
              <span className="cart__outstock">sold out</span>
            )}
            {/* <FitlerColor color={colors} /> */}
            <span className="price">
              {/* Price:{" "} */}₦{" "}
              {(price * product.qty)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
            <span className="productsize">
              Product Size: {size}
            </span>
          </div>
        </div>
        <div className="cart__pricedetails">
          <CartQty
            qty={qty}
            setQty={setQty}
            colors={colors}
            product={product}
          />
          <div className="cartbutton">
            <div className="addbtn" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </div>
            <div className="deletebtn" onClick={handleRemove}>
              <FaTrash />
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}

export default CartProduct