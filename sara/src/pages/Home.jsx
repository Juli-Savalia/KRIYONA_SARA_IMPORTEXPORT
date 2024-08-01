import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, ReactDOM } from "react-responsive-carousel";
import { home } from "../Datas";
const Home = () => {
  return (
    <div className="bg-orange-100">
      <TopHeader></TopHeader>
      <Header></Header>
      {/* banner */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* 1st slider */}
          <div className="carousel-item active bg-[url('public/banner2.jpg')] bg-cover bg-zinc-700 bg-fixed bg-blend-overlay py-44">
            <div className="container">
              <h2 className="text-white text-center sm:text-xl  md:text-3xl lg:text-5xl xl:text-5xl capitalize sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto lg:leading-relaxed">
                welcome to the export import bussiness management
              </h2>
            </div>
          </div>
          {/* 2nd slider */}
          <div className="carousel-item bg-[url('public/banner1.jpg')] bg-cover bg-zinc-700 bg-fixed bg-blend-overlay py-44">
            <div className="container">
              <h2 className="text-white text-center sm:text-xl  md:text-3xl lg:text-5xl xl:text-5xl capitalize sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto lg:leading-relaxed">
                transform your future with EBIM institute
              </h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* 3rd section */}
      <section className="py-28">
        <div className="container">
          <div className="flex flex-wrap relative items-center">
            <div className="col-7 mx-auto">
              {/* card1 */}
              <div className="w-100 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[10%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0">400 + Seminar Done</h3>
                  <p className="m-0 text-3xl font-semibold">01</p>
                </div>
                <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card2 */}
              <div className="w-100 mx-auto bg-orange-200 rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0">70 + Batches Done</h3>
                  <p className="m-0 text-3xl font-semibold">02</p>
                </div>
                <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card3 */}
              <div className="w-100 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0">3000 + Happy Students</h3>
                  <p className="m-0 text-3xl font-semibold">03</p>
                </div>
                <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card4 */}
              <div className="w-100 mx-auto bg-orange-200 rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0 text-2xl">
                    Innovating for the Future: <br />
                    Leveraging 10+ Years of Experience for Growth
                  </h3>
                  <p className="m-0 text-3xl font-semibold">04</p>
                </div>
                <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
              {/* card5 */}
              <div className="w-100 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[10%]">
                <div className="flex items-center justify-between">
                  <h3 className="m-0">12 + Branches all over the World.</h3>
                  <p className="m-0 text-3xl font-semibold">05</p>
                </div>
                <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                  Browse through our wide range of courses to find the perfect
                  fit for your educational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th section */}
      <section className="py-28">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 sm:pb-6 overflow-hidden">
              <img src="public/img1.jpg" alt="img1" className="w-100 transition-all duration-150 h-100 rounded-lg scale-[1] hover:scale-[1.2] hover:rounded-lg" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 ps-5">
              <h2>Support During The Course :</h2>
              <ul className="list-decimal  pt-6">
                <li className="pb-3">
                  Lecture Recording provided for Technical glitches & missed
                  class.
                </li>
                <li className="pb-3">
                  Participants can ask individual questions during the class.
                </li>
                <li className="pb-3">Home Work after class.</li>
                <li className="pb-3">Course Completion Certificate.</li>
                <li className="pb-3">
                  All PPT's & useful links with documents.
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 pe-5 pt-20">
              <h2>Support During The Course :</h2>
              <ul className="list-decimal  pt-6">
                <li className="pb-3">
                  Lecture Recording provided for Technical glitches & missed
                  class.
                </li>
                <li className="pb-3">
                  Participants can ask individual questions during the class.
                </li>
                <li className="pb-3">Home Work after class.</li>
                <li className="pb-3">Course Completion Certificate.</li>
                <li className="pb-3">
                  All PPT's & useful links with documents.
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 lg:pt-20 overflow-hidden">
              <img src="public/img2.jpg" alt="img1" className="w-100 transition-all duration-150 h-100 rounded-lg scale-[1] hover:scale-[1.2] hover:rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* 5th section */}
      <section className="py-12">
        <div className="container">
            <h3 className="text-center capitalize text-4xl">What Our Students Says</h3>
            <div className="flex flex-wrap items-center">
                <div className="col-6 py-5">
                    <div className="bg-orange-300 h-100 w-100 rounded-md transition-transform duration-100 hover:-rotate-2">
                        <div className="bg-white rounded-md w-100 h-100 transition-transform p-5 hover:rotate-3">
                            <div className="flex items-center pb-3">
                                <div>
                                    <img src="public/student1.jpeg" alt="student1" className="h-12 w-12 rounded-full" />
                                </div>
                                <div className="ps-4">
                                    <p className="font-semibold text-xl m-0">John Doe</p>
                                    <p className="m-0 text-sm">Software Engineer</p>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi dolore expedita provident quidem unde animi delectus ducimus sit. Delectus voluptatem corporis pariatur similique nihil modi nobis deleniti illo ab eligendi recusandae totam, blanditiis quia ipsum magnam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
