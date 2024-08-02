import React, { useState } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      imgSrc: "public/student1.jpg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imgSrc: "public/student2.jpeg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-32 bg-[url('public/testimonial-bg.png')] relative">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="col-5">
            <h2 className="text-5xl font-semibold text-black pb-4">
              What Our Students Says
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              excepturi non odio quidem eligendi nostrum, dicta quis blanditiis
              natus explicabo est. Accusamus iusto quia, cum dignissimos
              cupiditate consectetur ex totam.
            </p>
            <div className="pt-4 flex items-center">
              <img src="public/testimonialv4.png" alt="testimonialv4" />
              <span className="text-blue-700 font-bold text-xl ps-4">
                3k + Happy Students
              </span>
            </div>
          </div>
          <div className="col-7">
            <div className="bg-white border-indigo-700 border-2 p-3 rounded-lg w-75 mx-auto relative">
              <img
                src="public/testimonialv1.png"
                alt="testimonialv1"
                className="absolute -left-12 -top-14 -z-10 animate-pulse"
              />
              <img
                src="public/testimonialv2.png"
                alt="testimonialv2"
                className="absolute -left-32 bottom-0 h-4/5 -z-10"
              />
              <img
                src="public/testimonialv3.png"
                alt="testimonialv3"
                className="absolute -right-16 -bottom-14 -z-10"
              />
              <div id="testim" className="testim">
                <div className="testim-cover">
                  <div className="wrap">
                    <span
                      id="right-arrow"
                      className="arrow right fa fa-chevron-right"
                      onClick={nextSlide}
                    />
                    <span
                      id="left-arrow"
                      className="arrow left fa fa-chevron-left"
                      onClick={prevSlide}
                    />
                    <ul id="testim-dots" className="dots">
                      {testimonials.map((_, index) => (
                        <li
                          key={index}
                          className={`dot ${
                            currentSlide === index ? "active" : ""
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </ul>
                    <div id="testim-content" className="cont">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className={`testimonial ${
                            currentSlide === index ? "active" : "inactive"
                          }`}
                        >
                          <div className="img">
                            <img src={testimonial.imgSrc} alt="testimonials" />
                          </div>
                          <h2>{testimonial.name}</h2>
                          <p className="text-black">{testimonial.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
