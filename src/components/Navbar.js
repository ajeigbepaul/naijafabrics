import React from "react";
import Logo from "./Logo";
import logo from "../ankaralogoo.png";
import Menu from "./Menu";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container-fluid nav__container bg-black">
      <div className="row">
        <div className="col-sm-12 col-md-11 mx-auto d-flex lgm">
          <div className="col-sm-12 col-md-3 nlg">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-sm-12 col-md-9">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
