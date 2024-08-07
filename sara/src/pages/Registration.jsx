import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Utility.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="bg-mainpurple">
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-sm-10 col-md-10 col-lg-7 col-xl-7">
              <div className="shadow-lg w-75 p-6 rounded-lg border bordder-2 border-blue-300">
                <h3 className="text-center py-4 text-mainblue">Get In Touch with Us</h3>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                   <input
                    type="phone"
                    placeholder="Your Contact Number"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-Mail Address"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                   <input
                    type="password"
                    placeholder="Confirm password"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                  <Link
                    to={'/signin'}
                    className="p-3 d-inline-block text-decoration-none text-center rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue"
                  >
                    Register
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-5 col-xl-5">
              <img
                src="public/contact.webp"
                alt="contact"
                className="animate-translatey"
              />
            </div>
          </div>
          <div className="flex flex-wrap pt-20 justify-between items-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4533422764316!2d72.88369137388216!3d21.213864381397883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f708f3f3c75%3A0x22819f3cf6b1cc28!2sThe%20Palladium%20Mall!5e0!3m2!1sen!2sin!4v1722763225717!5m2!1sen!2sin"
                height="450"
                allowfullscreen=""
                loading="lazy"
                className="w-100"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-5 col-xl-5">
              <ul>
                <li className="pt-8 flex flex-wrap items-center">
                  <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                    <IoLocationOutline className="mx-auto text-white text-lg" />
                  </div>
                  <div className="w-75 ps-6">
                    <h3 className="text-mainblue font-bold">Location:</h3>
                    <p className="">
                      Corporate office 4007-08 The Palladium Mall, Yogi Chowk,
                      Surat, Gujarat 395010
                    </p>
                  </div>
                </li>
                <li className="pt-8 flex flex-wrap items-center">
                  <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                    <IoIosMailOpen className="mx-auto text-white text-lg" />
                  </div>
                  <div className="w-75 ps-6">
                    <h3 className="text-mainblue font-bold">Email:</h3>
                    <p className="">
                    info@evegimpex.com
                    </p>
                  </div>
                </li>
                <li className="pt-8 flex flex-wrap items-center">
                  <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                    <IoMdCall className="mx-auto text-white text-lg" />
                  </div>
                  <div className="w-75 ps-6">
                    <h3 className="text-mainblue font-bold">Call:</h3>
                    <p className="">
                    +91 63546 70311
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Registration;