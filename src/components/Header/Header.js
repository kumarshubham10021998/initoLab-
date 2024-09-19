import React, { useState } from "react";
import './Header.css'; // Make sure to include the CSS file for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header__con">
        {/* Hamburger menu icon */}
        <div className="ham-menu" id="mobile-ham-menu" onClick={toggleMenu}>
          <div className="line-con">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              alt="Inito Logo"
              src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
            />
          </a>
        </div>

        {/* Navigation links */}
        <nav className={isOpen ? "active" : ""}  >
          <a className="font-semi-bold text-dtheme" href="/about-us"  style={{ textDecoration: 'none'}}>About Us</a>
          <a className="font-semi-bold text-dtheme" href="/" style={{ textDecoration: 'none'}}>Blog</a>
          <a className="font-semi-bold text-dtheme" href="/faqs" style={{ textDecoration: 'none'}}>FAQ</a>
          <a className="font-semi-bold text-dtheme" href="/contact-us" style={{ textDecoration: 'none'}}>Contact Us</a>
          <a className="font-semi-bold text-dtheme" href="/careers" style={{ textDecoration: 'none'}}>Careers</a>
          <a className="button" id="order-now-menu" href="/buy-now" style={{ textDecoration: 'none'}}>Try Inito</a>
        </nav>
      </div>

      {/* Mobile sidebar */}
      <div className={`sidebar ${isOpen ? "active" : ""}`} id="mobile-sidebar"  style={{ textDecoration: 'none'}}>
        <nav>
          <a className="font-semi-bold text-dtheme" href="/about-us">About Us</a>
          <a className="font-semi-bold text-dtheme" href="/blog">Blog</a>
          <a className="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
          <a className="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
          <a className="font-semi-bold text-dtheme" href="/careers">Careers</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
