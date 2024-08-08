import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "../styles/Utility.css";
import Footer from "../components/Footer";
import Copyright from '../components/Copyright'
import { Link } from "react-router-dom";
import TopBtn from '../components/Topbtn'

const Studentcorner = () => {
  let exportproduct = [
    {
      name: "abc",
    },
    {
      name: "abjfc",
    },
    {
      name: "akjbc",
    },
    {
      name: "dfasf",
    },
    {
      name: "erf",
    },
    {
      name: "erferf",
    },
    {
      name: "abc",
    },
    {
      name: "abjfc",
    },
    {
      name: "akjbc",
    },
    {
      name: "dfasf",
    },
    {
      name: "erf",
    },
    {
      name: "erferf",
    },
    {
      name: "abc",
    },
    {
      name: "abjfc",
    },
    {
      name: "akjbc",
    },
    {
      name: "dfasf",
    },
    {
      name: "erf",
    },
    {
      name: "erferf",
    },
  ];
  return (
    <div className="bg-mainpurple">
      <TopHeader></TopHeader>
      <Header></Header>
      <h3 className="text-mainblue fw-bold text-4xl text-center pt-5">
        Student Corner
      </h3>
      {/* form */}
      <section className="py-24 relative">
        <img
          src="voice.png"
          alt="voice"
          className="h-24 absolute right-28 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
        />
        <img
          src="bookcontact.png"
          alt="book"
          className="h-24 absolute right-[500px] bottom-40 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
        />
        <img
          src="mail.png"
          alt="mail"
          className="h-24 absolute right-32 bottom-80 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
        />
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-xs-10 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className="shadow-lg xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[75%] xl:w-[75%] p-6 rounded-lg border bordder-2 border-blue-300">
                <h3 className="text-center py-4 text-mainblue">
                  Admission Form
                </h3>
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
                    type="text"
                    placeholder="Enter Your City"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                    required
                  />
                  <textarea
                    placeholder="Your Address"
                    className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                  ></textarea>
                  < Link
                    to={'/signin'}
                    className="button  p-3 text-decoration-none text-center d-inline-block rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue"
                  >
                    Submit
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-sm-10 col-md-12 col-lg-5 col-xl-5 xs:hidden sm:hidden md:hidden lg:block xl:block">
              <img
                src="public/admission.png"
                alt="admission"
                className="animate-translatey w-[24rem] h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* benefits */}
      <section className="xs:pt-0 sm:pt-0 md:py-24 lg:py-24 xl:py-24 relative">
        <img
          src="public/vector8.png"
          alt="v8"
          className="absolute right-0 animate-pulse"
        />
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="col-sm-10 col-md-10 col-lg-3 col-xl-3 mx-auto sm:pb-10 lg:pb-0">
              <img
                src="public/framevec1.svg"
                alt="framevec1"
                className="mx-auto"
              />
            </div>
            <div className="col-sm-10 col-md-10 col-lg-9 col-xl-9 relative mx-auto ps-16">
              <h2 className="font-bold sm:text-3xl lg:text-4xl xl:text-4xl">
                <font className="text-mainblue">Benefits</font> of Import &
                Export :
              </h2>
              <ul className="list-decimal pt-4 xs:text-sm sm:text-sm flex-wrap md:text-lg lg:text-lg xl:text-lg xs:block sm:block md:flex lg:flex xl:flex">
                <div className="col-sm-12 col-md-4 col-lg-6 col-xl-6">
                  <li className="py-2 sm:text-sm lg:text-base">
                    No Goverment Taxes.
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Develope Global Brand.
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Market Diversification
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Govt. Incentives / Benefits
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Govt. Support
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    High Turnover
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    High profit margin
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Currency Benefits
                  </li>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 md:ps-16 lg:ps-4 xl:ps-4">
                  <li className="py-2 sm:text-sm lg:text-base">
                    Party's risk cover by ECGC.
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    MDA Scheme Benefits (Foreign Exhibition).
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    No Manufacturing Investment (As a Merchant).
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Buyers & Sellers Range (200 + Countries).
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Payment Terms (Advance / Letter of Credit).
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Recession / Inflation Advantage.
                  </li>

                  <li className="py-2 sm:text-sm lg:text-base">
                    No effect of Govt. Policy (GST / Demonetisation)
                  </li>
                  <li className="py-2 sm:text-sm lg:text-base">
                    Totally White Business
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Top Export Product List */}
      <section className="xs:pt-20 sm:pt-20 md:pt-0 lg:py-24 xl:py-24 relative">
        <div className="container">
          <h3 className="font-bold text-4xl text-center">
            Top <font className="text-mainblue">Export</font> Product List
          </h3>
          <div className="py-14 flex flex-wrap justify-center">
            {exportproduct.map((product, index) => (
              <div className="p-3 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <button className="Btn">{product.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Top Import Product List */}
      <section className="pb-24 relative">
        <div className="container">
          <h3 className="font-bold text-4xl text-center">
            Top <font className="text-mainblue">Import</font> Product List
          </h3>
          <div className="py-14 flex flex-wrap justify-center">
            {exportproduct.map((product, index) => (
              <div className="p-3 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <button className="Btn">{product.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Copyright></Copyright>
      <TopBtn/>
    </div>
  );
};

export default Studentcorner;
