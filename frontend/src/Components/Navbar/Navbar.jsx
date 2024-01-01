import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
       <a style={{textDecoration:"none"}} href="/"> <p>SHOPMERCE</p></a>
      </div>
     
      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
         <Link style={{textDecoration:'none'}} to="/"> Shop{menu == "shop" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu ("mens");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/mens">Men{menu == "mens" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
         <Link style={{textDecoration:'none'}} to="/womens"> Women{menu == "women" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
         <Link style={{textDecoration:'none'}} to="/kids"> Kids{menu == "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>

      <div className="nav_login_cart">
      <Link style={{textDecoration:'none'}} to="/login">  <button>Login</button></Link>
      <Link style={{textDecoration:'none'}} to="/cart"> <img src={cart_icon} alt="carticon" /></Link> 
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
