import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, ReactDOM } from "react-responsive-carousel";
import { home } from "../Datas";
import "../js/Slider";
import "../js/cardss";
import "../styles/Slider.css";
import "../styles/Utility.css";
const Home = () => {
  return (
    <div className="">
      <TopHeader></TopHeader>
      <Header></Header>
      {/* banner */}
      <section className="pt-28 pb-60 bg-purple-50">
        <div className="container">
          {/* <div className="home-slider">
            <ul className="rslides" id="slider1">
              <li>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1356355/slide1.jpg"
                  alt="slide1"
                />
                <a
                  className="credits"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    padding: "4px 6px",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    display: "inline-block",
                    borderRadius: 3,
                  }}
                  href="https://unsplash.com/@guillepozzi?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download free do whatever you want high-resolution photos from guille pozzi"
                >
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: 12,
                        width: "auto",
                        position: "relative",
                        verticalAlign: "middle",
                        top: "-2px",
                        fill: "white",
                      }}
                      viewBox="0 0 32 32"
                    >
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                    </svg>
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    guille pozzi
                  </span>
                </a>
              </li>
              <li>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1356355/slide2.jpg"
                  alt="slide2"
                />
                <a
                  className="credits"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    padding: "4px 6px",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    display: "inline-block",
                    borderRadius: 3,
                  }}
                  href="https://unsplash.com/@tbzr?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download free do whatever you want high-resolution photos from Arnaud Mesureur"
                >
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: 12,
                        width: "auto",
                        position: "relative",
                        verticalAlign: "middle",
                        top: "-2px",
                        fill: "white",
                      }}
                      viewBox="0 0 32 32"
                    >
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                    </svg>
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    Arnaud Mesureur
                  </span>
                </a>
              </li>
              <li>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1356355/slide3.jpg"
                  alt="slide3"
                />
                <a
                  className="credits"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    padding: "4px 6px",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    display: "inline-block",
                    borderRadius: 3,
                  }}
                  href="https://unsplash.com/@timmossholder?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download free do whatever you want high-resolution photos from Tim Mossholder"
                >
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: 12,
                        width: "auto",
                        position: "relative",
                        verticalAlign: "middle",
                        top: "-2px",
                        fill: "white",
                      }}
                      viewBox="0 0 32 32"
                    >
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                    </svg>
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    Tim Mossholder
                  </span>
                </a>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-wrap items-center col-12">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 h-[350px]">
              <h3 className="text-5xl leading-snug">
                Welcome to the{" "}
                <font color="blue" className="pe-4">
                  Import Export
                </font>
                Bussiness Management
              </h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores distinctio odio, ad quae unde quidem tempora nostrum
                veniam dolores illo iure perspiciatis, illum repellendus quasi
                pariatur doloribus provident quibusdam harum.
              </p>
              <div className="flex pt-4 items-center">
                <div className="flex">
                  <img
                    src="public/student1.jpg"
                    alt="stu1"
                    className="rounded-circle h-12 border border-1 border-white -me-3"
                  />
                  <img
                    src="public/student2.jpeg"
                    alt="stu2"
                    className="rounded-circle h-12  border-2 border-white -me-3"
                  />
                  <img
                    src="public/student3.jpeg"
                    alt="stu3"
                    className="rounded-circle h-12  border-2 border-white "
                  />
                </div>
                <p className="p-0 m-0 ps-4">
                  <font className="text-blue-500 font-bold">5K+</font> students
                  are already with us
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 lg:h-[350px] sm:pt-16 md:pt-0 md:h-[470px]">
              <div className="w-100 h-100">
                <div className="relative h-100">
                  <img
                    src="public/vector1.png"
                    data-value="-6"
                    alt="v1"
                    className="obj absolute top-0 -left-3"
                  />
                  <img
                    src="public/vector2.png"
                    data-value="-9"
                    alt="v2"
                    className="obj absolute top-0 "
                  />
                  <img
                    src="public/vector3.png"
                    data-value="4"
                    alt="v3"
                    className="obj absolute top-0 "
                  />
                  <img
                    src="public/vector4.png"
                    data-value="6"
                    alt="v4"
                    className="obj absolute top-0 z-10"
                  />
                  <img
                    src="public/vector5.png"
                    data-value="-8"
                    alt="v5"
                    className="obj absolute top-0 "
                  />
                  <img
                    src="public/vector6.png"
                    data-value="-4"
                    alt="v6"
                    className="obj absolute top-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="py-28 relative">
        <img
          src="public/import.png"
          alt="import"
          className="absolute right-12 animate-spin duration-1000 -rotate-6 opacity-5 h-36"
        />
        <img
          src="public/export.png"
          alt="export"
          className="absolute right-12 top-50 animate-spin duration-1000 -rotate-6 opacity-5 h-36"
        />
        <img
          src="public/shipping.png"
          alt="shipping"
          className="absolute right-80 top-[430px] animate-spin duration-1000 -rotate-6 opacity-5 h-28"
        />
        <img
          src="public/user.png"
          alt="user"
          className="absolute right-80 bottom-64 animate-spin duration-1000 -rotate-6 opacity-5 h-28"
        />
        <div className="container">
          <div className="flex flex-wrap relative items-center">
            <div className="col-7 me-auto">
              {/* card1 */}
              <div className="w-100 mx-auto bg-indigo-100 border-2 border-blue-800 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[10%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-blue-800 font-bold">
                    400 + Seminar Done
                  </h3>
                  <p className="m-0 text-3xl font-semibold text-blue-800">01</p>
                </div>
                <p className="text-blue-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card2 */}
              <div className="w-100 mx-auto  bg-purple-100 border-2 border-purple-600 shadow-lg rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-purple-800 font-bold">
                    70 + Batches Done
                  </h3>
                  <p className="m-0 text-3xl text-purple-800 font-semibold">
                    02
                  </p>
                </div>
                <p className="text-purple-900  font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card3 */}
              <div className="w-100 mx-auto bg-indigo-100 border-2 border-blue-800 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-blue-800 font-bold">
                    3000 + Happy Students
                  </h3>
                  <p className="m-0 text-3xl font-semibold text-blue-800">03</p>
                </div>
                <p className="text-blue-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card4 */}
              <div className="w-100 mx-auto  bg-purple-100 border-2 border-purple-600 shadow-lg rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-purple-800 font-bold">10 + Years</h3>
                  <p className="m-0 text-3xl text-purple-800 font-semibold">
                    04
                  </p>
                </div>
                <p className="text-purple-900  font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card5 */}
              <div className="w-100 mx-auto bg-indigo-100 border-2 border-blue-800 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-blue-800 font-bold">
                    12 + Branches all over the world.
                  </h3>
                  <p className="m-0 text-3xl font-semibold text-blue-800">05</p>
                </div>
                <p className="text-blue-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th section */}
      <section className="py-32 bg-[url('public/testimonial-bg.png')] relative">
        <div className="container">
          <section id="testim" className="testim">
            <div className="testim-cover">
              <div className="wrap">
                <span
                  id="right-arrow"
                  className="arrow right fa fa-chevron-right"
                />
                <span
                  id="left-arrow"
                  className="arrow left fa fa-chevron-left "
                />
                <ul id="testim-dots" className="dots">
                  <li className="dot active" />
                  <li className="dot" />
                  <li className="dot" />
                  <li className="dot" />
                  <li className="dot" />
                </ul>
                <div id="testim-content" className="cont">
                  <div className="active">
                    <div className="img">
                      <img src="public/student1.jpg" alt="testimonials" />
                    </div>
                    <h2>Lorem P. Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                  <div className="inactive">
                    <div className="img">
                      <img src="public/student2.jpg" alt="testimonials" />
                    </div>
                    <h2>Lorem P. Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <script src="https://use.fontawesome.com/1744f3f671.js"></script>
        </div>
      </section>
    </div>
  );
};

export default Home;
