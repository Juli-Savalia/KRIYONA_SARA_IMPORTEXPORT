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
                <h3 className="text-center py-4 text-mainblue">Create Your Account</h3>
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
        </div>
      </section>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Registration;
