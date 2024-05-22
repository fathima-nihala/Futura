import React from "react";
import "./Footer.css";
// import footer_logo from "../Assets/logo.png";
import { BsInstagram } from "react-icons/bs";
import { SlSocialPintarest } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        {/* <img src={footer_logo} alt="" /> */}
        <p><span className="foot-s">S</span>aylor</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <BsInstagram />
        </div>
        <div className="footer-icons-container">
          <SlSocialPintarest />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright @ 2023 -All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
