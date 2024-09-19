import React, { useState } from 'react';
import Facebook from '../../assets/SocialMedia/Facebook - Negative.png';
import Instagram from '../../assets/SocialMedia/Instagram - Negative.png';
import LinkedIn from '../../assets/SocialMedia/LinkedIn - Negative.png';
import youtube from '../../assets/SocialMedia/YouTube - Negative.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

const Footers = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    return (
        <div>
            <footer>
                <div className="links-con">
                    <ul>
                        <li className="head">Company</li>
                        <li><a href="/about-us"  style={{ textDecoration: 'none'}}>About Us</a></li>
                        <li><a href="/careers"  style={{ textDecoration: 'none'}}>Careers</a></li>
                        <li><a id="footer-order-now" href="/"  style={{ textDecoration: 'none'}}>Buy Now</a></li>
                        <li><a href="/contact-us"  style={{ textDecoration: 'none'}}>Contact Us</a></li>
                    </ul>
                    <ul>
                        <li className="head">Support</li>
                        <li><a href="/faqs"  style={{ textDecoration: 'none'}}>FAQ</a></li>
                        <li><a href="/terms"  style={{ textDecoration: 'none'}}>Terms</a></li>
                        <li><a href="/privacy-policy"  style={{ textDecoration: 'none'}}>Privacy Policy</a></li>
                        <li><a href="/replacements-and-warranty"  style={{ textDecoration: 'none'}}>Returns & Warranty</a></li>
                        <li><a href="/consumer-health-data-privacy-policy"  style={{ textDecoration: 'none'}}>Consumer Health Data Privacy Policy</a></li>
                    </ul>
                    <ul>
                        <li className="head">Get In Touch</li>
                        <li><a href="tel:+91-9742931931" target="_blank" rel="noreferrer"  style={{ textDecoration: 'none'}}>+91-9742931931</a></li>
                        <li><a href="mailto:help@inito.com" target="_blank" rel="noreferrer"  style={{ textDecoration: 'none'}}>help@inito.com</a></li>
                        <li>2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN</li>
                    </ul>
                    <div className="collapsible" id="mobile-footer-links">
                        <div 
                            className={`item ${activeItem === 'company' ? 'active' : ''}`} 
                            onClick={() => toggleItem('company')}
                        >
                            <div className="head">
                                <h5 className="title">Company</h5>
                                <img 
                                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" 
                                    alt="Expand company section" 
                                />
                            </div>
                            <div className="body">
                                <a href="/about-us"  style={{ textDecoration: 'none'}}>About Us</a>
                                <a href="/careers"  style={{ textDecoration: 'none'}}>Careers</a>
                                <a href="/"  style={{ textDecoration: 'none'}}>Buy Now</a>
                                <a href="/contact-us"  style={{ textDecoration: 'none'}}>Contact Us</a>
                            </div>
                        </div>
                        <div 
                            className={`item ${activeItem === 'support' ? 'active' : ''}`} 
                            onClick={() => toggleItem('support')}
                        >
                            <div className="head">
                                <h5 className="title">Support</h5>
                                <img 
                                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" 
                                    alt="Expand support section" 
                                />
                            </div>
                            <div className="body">
                                <a href="/faqs"  style={{ textDecoration: 'none'}}>FAQ</a>
                                <a href="/terms"  style={{ textDecoration: 'none'}}>Terms</a>
                                <a href="/privacy-policy"  style={{ textDecoration: 'none'}}>Privacy Policy</a>
                                <a href="/replacements-and-warranty"  style={{ textDecoration: 'none'}}>Returns & Warranty</a>
                                <a href="/consumer-health-data-privacy-policy"  style={{ textDecoration: 'none'}}>Consumer Health Data Privacy Policy</a>
                            </div>
                        </div>
                        <div 
                            className={`item ${activeItem === 'getInTouch' ? 'active' : ''}`} 
                            onClick={() => toggleItem('getInTouch')}
                        >
                            <div className="head">
                                <h5 className="title">Get In Touch</h5>
                                <img 
                                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" 
                                    alt="Expand get in touch section" 
                                />
                            </div>
                            <div className="body">
                                <a href="tel:+91-9742931931" target="_blank" rel="noreferrer"  style={{ textDecoration: 'none'}}>+91-9742931931</a>
                                <a href="mailto:help@inito.com" target="_blank" rel="noreferrer"  style={{ textDecoration: 'none'}}>help@inito.com</a>
                                <li>2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN</li>
                            </div>
                        </div>
                    </div>
                    <div className="social-icon-dark">
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-inner-con">
                        <img 
                            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo Inito Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg" 
                            alt="Inito Logo" 
                        />
                        <p className="font-med">Copyright 2024. Samplytics Technologies Private Limited. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footers;
