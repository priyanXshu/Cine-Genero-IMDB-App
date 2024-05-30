import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Ciné Género is an Indian subscription video on-demand over-the-top
          streaming service. The service primarily distributes original and
          acquired films and television shows from various genres, and it is
          available internationally in multiple languages.
        </div>
        <div className="socialIcons">
          <span
            className="icon"
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <FaFacebookF />
          </span>
          <span className="icon" onClick={() => window.open("https://www.instagram.com", "_blank")}>
            <FaInstagram />
          </span>
          <span className="icon" onClick={() => window.open("https://www.twitter.com", "_blank")}>
            <FaTwitter />
          </span>
          <span className="icon" onClick={() => window.open("https://www.linkedin.in", "_blank")}>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
