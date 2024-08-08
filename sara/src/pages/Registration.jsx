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
import TopBtn from '../components/Topbtn'

const Registration = () => {
  return (
    <div className="bg-mainpurple">
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className=" xs:mb-20 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0 lg:w-[85%] xl:w-[85%] shadow-lg p-6 rounded-lg border bordder-2 border-blue-300">
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
                    className="button p-3 d-inline-block text-decoration-none text-center rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue"
                  >
                    Register
                  </Link>
                  <div className="py-4">
                  <h6 className="text-center relative before:absolute before:content-[''] before:bg-slate-300 before:w-[35%] before:top-2 before:right-0 before:h-[1px]  after:absolute after:content-[''] after:bg-slate-300 after:w-[35%] after:top-2 after:left-0 after:h-[1px]">or SignUp with</h6>
                </div>
                  <div className="col-12 pb-4">
                  <button className="bg-gray-200 rounded-3xl font-bold flex items-center w-100 py-3 text-center justify-center">
                    <img src="public/google.png" alt="google" className="h-5 pe-2"/> Google
                  </button>
                </div>
                <div className="flex justify-center">
                    <Link to={'/signin'} className="text-decoration-none text-secondary ">Have an Account ? <font className='text-mainblue'>SignIn</font></Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
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
      <TopBtn/>
    </div>
  );
};

export default Registration;
