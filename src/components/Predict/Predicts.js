import React from 'react';

const Predicts = () => {
  return (
    <div>
      <div className="images-in-small-view">
        <div className="content">
          <img 
            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/trusted_by_20000_couples-a0a4930b99d93a9587185841c933b190cdf9e3fe6325bbff144fe51bd32b3db6.svg" 
            alt="Trusted by 20,000+ couples" 
          />
          <span className="img-text">TRUSTED BY 20,000+ COUPLES</span>
        </div>
        <div className="content">
          <img 
            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/hsa_fsa_eligible-092a0fffe6b337920210c2f2537bf09a7a9ff167b311c549003950fc33a4fc2b.svg" 
            alt="HSA/FSA Eligible" 
          />
          <span className="img-text">HSA/FSA ELIGIBLE</span>
        </div>
      </div>
      <section className="predict-with-actual-data">
        <div className="content">
          <h1>Predict and confirm your ovulation with <span className="image_as_underline">actual</span> data</h1>
          <p className="description">
            Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your fertility hormones.<br /><br /> If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
          </p>
          <a className="button" href="/">
            <span className="button__small-view">
              GET THE INITO KIT
            </span>
            <span className="button__large-view">
              Get the Inito Kit
            </span>
          </a>
        </div>
        <div className="iphone">
          <img 
            src="https://cdn.inito.com/inito_website/ovulation_confirmed.png" 
            alt="Ovulation confirmed" 
          />
          <img 
            src="https://cdn.inito.com/inito_website/hormone_chart.png" 
            alt="Hormone chart" 
          />
          <img 
            src="https://cdn.inito.com/inito_website/cycle_day_view.png" 
            alt="Cycle day view" 
          />
        </div>
      </section>
    </div>
  );
}

export default Predicts;
