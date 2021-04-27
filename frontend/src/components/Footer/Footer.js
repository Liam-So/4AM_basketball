import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media mb-10">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <small className="website-rights hidden sm:flex">4AM © 2019</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="mailto:4am.information@gmail.com"
            >
              <FaEnvelope />
            </a>
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/4am_basketball/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              className="social-icon-link"
              to={"//twitter.com/4am_basketball?lang=en"}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.youtube.com/watch?v=aVMNvoV64AM&t=13s"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/4AM.Basketball.Camp/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
