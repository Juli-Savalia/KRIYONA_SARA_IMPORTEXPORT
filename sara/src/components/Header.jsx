import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-purple-50'>
      <div className="container mx-auto">
        <nav className="flex justify-center items-center py-4 mx-auto">
            <div className="nav-links justify-center col-7 flex text-center items-center">
                <Link to={"/"} className="mr-6 font-medium text-decoration-none px-3">Home</Link>
                <Link to={"/Studentcorner"} className="mr-6 font-medium text-decoration-none px-3">Student Corner</Link>
                <a href="#" className='text-decoration-none text-4xl pe-3 font-bold'>EIBM</a>
                <Link to={"/courses"} className="mr-6 font-medium text-decoration-none px-3">Courses</Link>
                <Link to={"/contact"} className="mr-6 font-medium text-decoration-none px-3">Contact Us</Link>

            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
