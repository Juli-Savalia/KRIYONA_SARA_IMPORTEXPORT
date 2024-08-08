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
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
const Forgetpsw = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="load">
      {loading ? (
        <div className="">
          <HashLoader
            color={"blue"}
            className="h-100 w-100"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="bg-mainpurple">
          <TopHeader></TopHeader>
          <Header></Header>
          <section className="py-20">
            <div className="container">
              <div className="flex flex-wrap items-center">
                <div className="col-sm-10 col-md-10 col-lg-7 col-xl-7">
                  <div className="shadow-lg w-75 p-6 rounded-lg border bordder-2 border-blue-300">
                    <h3 className="text-center py-4 text-mainblue">
                      Forget Password ?
                    </h3>
                    <form>
                      <input
                        type="text"
                        placeholder="Your UserName / E-Mail"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                      />
                      <Link
                        to={"/resetpsw"}
                        className="p-3 text-decoration-none d-inline-block text-center rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue"
                      >
                        Next
                      </Link>
                      <div className="flex justify-between">
                        <Link
                          to={"/registration"}
                          className="text-decoration-none"
                        >
                          Don't Have an Account ?
                        </Link>
                        <Link to={"/signin"} className="text-decoration-none">
                          SignIn
                        </Link>
                      </div>
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
          <TopBtn />
        </div>
      )}
    </div>
  );
};

export default Forgetpsw;
