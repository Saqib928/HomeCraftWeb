import React from "react";

import "./footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img height={90} src={footer_logo} alt="" />
        <p>Home Craft</p>
      </div>
      <ul className="footer_links">
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_icons_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <a href="https://facebook.com">
            <img height={33} src={facebook_icon} alt="" />
          </a>
        </div>
        <div className="footer_icons_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved </p>
      </div>
    </div>
  );
};

export default footer;
