import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: "This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.",
      name: "Sunny",
    },
    {
      text: "This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.",
      name: "Brooke",
    },
    {
      text: "This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.",
      name: "Gonzales",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card p-4 mb-4 shadow-sm ${
                index === activeIndex ? "d-block" : "d-none"
              }`}
              style={{
                borderRadius: "20px",
                background: "#f7f7fe",
              }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="me-1"
                      src="https://cdn.inito.com/inito_website/star.png"
                      alt="star"
                      style={{ width: "20px" }}
                    />
                  ))}
                </div>
                <p className="card-text text-muted">{testimonial.text}</p>
              </div>
              <h6 className="text-start my-2">{testimonial.name}</h6>
            </div>
          ))}

          <div className="d-flex justify-content-center mt-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot mx-1 ${
                  index === activeIndex ? "bg-primary" : "bg-secondary"
                }`}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
