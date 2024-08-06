import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Utility.css";
import "../js/Customjquery";

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
        <nav className="flex justify-center items-center py-4 mx-auto">
          <div className="nav-links justify-center col-10 flex text-center items-center">
            <Link to={"/"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Home</Link>
            <Link to={"/studentcorner"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Student Corner</Link>
            <Link to={"/courses"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Courses</Link>
            <a href="#" className='text-mainblue text-decoration-none text-4xl pe-3 font-bold'>EIBM</a>
            <Link to={"/companies"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Our Companies</Link>
            <Link to={"/team"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Team</Link>
            <Link to={"/contact"} className="text-mainblue mr-6 font-medium text-decoration-none px-3">Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
