import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`navbarshop ${menu ? "menu-open" : ""}`}>
      <div className="nav_logo">
        <a href="/">
        <img height={110} src={logo} alt="logo" /></a>
      </div>

      <ul className={`nav_menu ${menu ? "active" : ""}`}>
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            Latest
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            All Products
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            {" "}
            About Us
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/contactus">
            {" "}
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="nav_login_cart">
        <img src={cart_icon} alt="carticon" />
        <div className="nav_cart_count">0</div>
      </div>

      <div className={`hamburger ${menu ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
