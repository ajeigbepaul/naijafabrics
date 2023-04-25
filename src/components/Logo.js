import React from 'react'
import "./Logo.css"
import logo from "../ankaralogoo.png"
function Logo() {
  return (
    // <h2 style={{color:'orange'}}>Naija Fabrics</h2>
    <div className="nav__logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo