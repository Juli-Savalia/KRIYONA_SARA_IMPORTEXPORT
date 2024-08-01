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
          <div className="col-12 relative">
            {/* card1 */}
            <div className="col-8 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[10%]">
              <div className="flex items-center justify-between">
                <h3 className="m-0">400 + Seminar Done</h3>
                <p className="m-0 text-3xl font-semibold">01</p>
              </div>
              <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                Browse through our wide range of courses to find the perfect fit
                for your educational needs.
              </p>
            </div>
            {/* card2 */}
            <div className="col-8 mx-auto bg-orange-200 rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
              <div className="flex items-center justify-between">
                <h3 className="m-0">70 + Batches Done</h3>
                <p className="m-0 text-3xl font-semibold">02</p>
              </div>
              <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                Browse through our wide range of courses to find the perfect fit
                for your educational needs.
              </p>
            </div>
            {/* card3 */}
            <div className="col-8 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[20%]">
              <div className="flex items-center justify-between">
                <h3 className="m-0">3000 + Happy Students</h3>
                <p className="m-0 text-3xl font-semibold">03</p>
              </div>
              <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                Browse through our wide range of courses to find the perfect fit
                for your educational needs.
              </p>
            </div>
            {/* card4 */}
            <div className="col-8 mx-auto bg-orange-200 rounded-xl p-5 rotate-2 mb-8 sticky top-[20%]">
              <div className="flex items-center justify-between">
                <h3 className="m-0">10 + Years</h3>
                <p className="m-0 text-3xl font-semibold">04</p>
              </div>
              <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                Browse through our wide range of courses to find the perfect fit
                for your educational needs.
              </p>
            </div>
            {/* card5 */}
            <div className="col-8 mx-auto bg-white rounded-xl p-5 -rotate-2 mb-8 sticky top-[10%]">
              <div className="flex items-center justify-between">
                <h3 className="m-0">12 + Branches all over the World.</h3>
                <p className="m-0 text-3xl font-semibold">05</p>
              </div>
              <p className="text-slate-600 font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                Browse through our wide range of courses to find the perfect fit
                for your educational needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
