import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Utility.css";
import "../js/Customjquery";
import { PiSignIn } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-purple-50">
        <div className="container mx-auto">
          <nav className="flex items-center py-4 mx-auto col-12 justify-between">
            <div className="nav-links justify-between col-12 flex text-center items-center">
              
            {/* offcanvas */}
            <div className=" px-3 xs:block sm:block md:block lg:hidden xl:hidden">
              {" "}
              <button
                className="text-4xl"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <IoMenuSharp/>
              </button>
              <div
                className="offcanvas offcanvas-start h-screen"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex={-1}
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    Colored with scrolling
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start h-screen"
                tabIndex={-1}
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBackdropLabel"
                  >
                    {/* Offcanvas with backdrop */}
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <p>.....</p>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start h-screen"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    {/* Backdroped with scrolling */}
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <p>
                  <div className="">
                <Link
                  to={"/"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to={"/studentcorner"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Student Corner
                </Link>
                <Link
                  to={"/courses"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Courses
                </Link>
                <Link
                  to={"/companies"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Our Companies
                </Link>
              </div>
              <div className="">
                <Link
                  to={"/success"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Success Story
                </Link>
                <Link
                  to={"/team"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Team
                </Link>
                <Link
                  to={"/contact"}
                  className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Contact Us
                </Link>
              </div>
                  </p>
                </div>
              </div>
            </div>
              <div className="flex justify-between flex-wrap col-5 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to={"/"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to={"/studentcorner"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Student Corner
                </Link>
                <Link
                  to={"/courses"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Courses
                </Link>
                <Link
                  to={"/companies"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Our Companies
                </Link>
              </div>
              <a
                href="#"
                className="text-mainblue text-decoration-none text-4xl font-bold"
              >
                <img src="public/eibmlogo.png" alt="logo" />
              </a>
              <div className="flex justify-between flex-wrap col-4 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to={"/success"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Success Story
                </Link>
                <Link
                  to={"/team"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Team
                </Link>
                <Link
                  to={"/contact"}
                  className="text-mainblue font-medium text-decoration-none"
                >
                  Contact Us
                </Link>
              </div>
              <div className="">
                <Link
                  to={"/signin"}
                  className="flex items-center text-mainblue font-medium text-decoration-none"
                >
                  <PiSignIn />
                  SignIn
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default Header;
