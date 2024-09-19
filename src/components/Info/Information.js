import React from 'react'
import image1 from '../../assets/test-lab.png'
import image2 from '../../assets/get_charts_and_actual_values@2x.png'
import InfoImage from '../../assets/InfoImage/inito_tracks_everything@2x.jpg'

const Information = () => {
  return (
    <div>
       <section className="why-inito-is-smarter-way">
        <section className="why-measure-progesterone">
          <img className="blue-calendar" src="https://cdn.inito.com/inito_website/blue_calendar.png" alt="Blue calendar" />
          <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
          <p>
            <strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br /><br /> If ovulation occurs, the levels of Progesterone and its urine metabolite PdG rise after a few days
            and stay elevated. Sustained, elevated PdG levels after peak fertility indicate a successful ovulation.<br /><br />
          </p>
          <div className="doctor-review-source">
            <span className="source">* Source: National Institutes of Health</span>
            <span className="quote">“Inito is all that you need to give you the best chance of conception."</span>
            <div className="doctor">
              <img className="doctor-image" src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" alt="Doctor testimonial" />
              <div className="doctor-info">
                <strong className="doctor-name">Dr. Rachel Wagner</strong>
                <em className="doctor-qualification">MD</em>
                <div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blue-background">
          <h1>Why Inito is the smarter way to get <span className="image_as_underline">pregnant</span></h1>
          <section className="left-card">
            <div className="text-content">
              <h1>Adapts to your  irregular <span className="inline-image">cycle<img className="homepage-4-star" src="https://cdn.inito.com/inito_website/homepage_4_star.png" alt="Four stars" /></span></h1>
              <div>
                Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br /><br /> 
                Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.
              </div>
              <a className="small-view-button" href="/">GET THE INITO KIT</a>
            </div>
            <picture className="card-image">
              <source media="(min-width:769px)" src={image1} />
              <source media="(max-width:768px)" src={image1} />
              <img alt='Track your fertility with Inito' src={image1} />
            </picture>
          </section>
          <section className="right-card">
            <div className="text-content">
              <h1>Inito tracks everything so you don’t have to</h1>
              <div>
                The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.<br /><br /> Our App notifies you for everything:
                <ul className="blue-bullet-list">
                  <li>Your fertility levels</li>
                  <li>When to test on the right days</li>
                  <li>When you’ve successfully ovulated</li>
                  <li>And when to roll into bed!</li>
                </ul>
              </div>
              <a className="button" href="/">Get the Inito Kit</a>
            </div>
            <picture className="card-image">
              <source media="(min-width:769px)" src={InfoImage} />
              <source media="(max-width:768px)" srcSet={InfoImage} />
              <img alt='Inito tracks everything' src={InfoImage} />
            </picture>
            <div className="fertility-card-carousel">
              <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg" alt="High fertility illustration" />
            </div>
          </section>
          <section className="left-card">
            <div className="text-content">
              <h1>Get charts and actual <span className='image_as_underline'>values</span> <span>of your hormones</span> <span className="inline-image"><img className="homepage-4-star" src="https://cdn.inito.com/inito_website/homepage_4_star.png" alt="Four stars" /></span></h1>
              <div>
                Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br /><br /> 
                Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.
              </div>
              <a className="small-view-button" href="/">GET THE INITO KIT</a>
            </div>
            <picture className="card-image">
              <source media="(min-width:769px)" src={image2} />
              <source media="(max-width:768px)" src={image2} />
              <img alt='Charts and values of hormones' src={image2} />
            </picture>
          </section>
        </section>
      </section>
    </div>
  )
}

export default Information
