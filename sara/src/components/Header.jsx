import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Utility.css";
import "../js/Customjquery";
import { PiSignIn } from "react-icons/pi";
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='bg-purple-50'>
      <div className="container mx-auto">
        <nav className="flex justify-center items-center py-4 mx-auto col-12 justify-between">
          <div className="nav-links justify-between col-12 flex text-center items-center">
            <Link to={"/"} className="text-mainblue font-medium text-decoration-none">Home</Link>
            <Link to={"/studentcorner"} className="text-mainblue font-medium text-decoration-none">Student Corner</Link>
            <Link to={"/courses"} className="text-mainblue font-medium text-decoration-none">Courses</Link>
            <Link to={"/companies"} className="text-mainblue font-medium text-decoration-none">Our Companies</Link>
            <a href="#" className='text-mainblue text-decoration-none text-4xl font-bold'>
              <img src="public/eibmlogo.png" alt="logo" />
            </a>
            <Link to={"/success"} className="text-mainblue font-medium text-decoration-none">Success Story</Link>
            <Link to={"/team"} className="text-mainblue font-medium text-decoration-none">Team</Link>
            <Link to={"/contact"} className="text-mainblue font-medium text-decoration-none">Contact Us</Link>
            <div className=''>
            <Link to={"/signin"} className="flex items-center text-mainblue font-medium text-decoration-none"><PiSignIn/>SignIn</Link>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
