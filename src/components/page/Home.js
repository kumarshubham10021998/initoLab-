import React from "react";
import Star from '../../assets/Home/star.png';
import checkDesktop from '../../assets/Home/v2_main_hero_desktop1.png';
import checkMobile from '../../assets/Home/v2_main_hero_mobile.png';
import '../page/Home.css'
const HeroSection = () => {
  const starsArray = new Array(5).fill(Star);

  return (
    <section className="main-hero">
      <div className="container">
        <div className="tagline-text">
          <div className="main-hero-stars">
            {starsArray.map((star, index) => (
              <img key={index} className="img-star" src={star} alt={`Star ${index + 1}`} />
            ))}
            <span className="text">TRUSTED BY 20,000+ COUPLES</span>
          </div>
          <h1 className="font-bold">
            Track your fertility hormones at home, in 10 minutes
          </h1>
          <h6>
            Get accurate results of <strong>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</strong> with Inito, the all-in-one fertility monitor.
          </h6>
          <div className="main-hero__button">
            <a className="button font-semi-bold tex fertility-kit-slidedown" href="/">
              How does Inito work?
            </a>
          </div>
        </div>
        <div className="main-hero__img">
          <img className="small-view" src={checkMobile} alt="Mobile View" />
          <img className="large-view" src={checkDesktop} alt="Desktop View" />
        </div>
      </div>
      <div className="main-hero__button">
        <a className="button font-semi-bold tex fertility-kit-slidedown" href="/">
          HOW DOES INITO WORK?
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
