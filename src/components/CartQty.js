import React from "react";
import "./CartQty.css";

function CartQty({ product }) {
  return (
    <div className="amountContainer">
      <div className="dash" />
      <div className="amountQ">{product.qty}</div>
      <div className="dash" />
    </div>
  );
}

export default CartQty;
