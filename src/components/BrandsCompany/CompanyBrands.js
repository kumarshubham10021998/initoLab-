import React from 'react';
import logo1 from '../../assets/Logo_Bloomberg@2x.png';
import logo2 from '../../assets/Logo_Enterpreneur@2x.png';
import logo3 from '../../assets/Logo_Forbes_India@2x.png';
import logo4 from '../../assets/Logo_The_Week@2x.png';
import logo5 from '../../assets/Logo_Washington@2x.png';

const CompanyBrands = () => {
  return (
    <div>
      <main>
        <section className="press-section">
          <span className="text">AS SEEN ON</span>
          <div className="press-section__logo-container">
            <div className="press-section__logo-container__img">
              <img className="press-logo" src={logo1} alt="Logo Bloomberg"  />
            </div>
            <div className="press-section__logo-container__img">
              <img className="press-logo" src={logo2} alt="Logo Enterpreneur" />
            </div>
            <div className="press-section__logo-container__img" id="only-fertility-kit">
              <img className="press-logo" src={logo3} alt="Logo The Week" />
            </div>
            <div className="press-section__logo-container__img">
              <img className="press-logo" src={logo4} alt="Logo Washington" />
            </div>
            <div className="press-section__logo-container__img">
              <img className="press-logo" src={logo5} alt="Logo Enterpreneur" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CompanyBrands;
