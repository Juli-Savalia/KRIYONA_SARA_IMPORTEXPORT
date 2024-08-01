import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-orange-200'>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4">
            <div className="logo">
                <a href="#" className='text-3xl font-bold'>EBIM</a>
            </div>
            <div className="nav-links">
                <Link to={"/"} className="mr-6 font-medium">Home</Link>
                <Link to={"/Studentcorner"} className="mr-6 font-medium">Student Corner</Link>
                <Link to={"/courses"} className="mr-6 font-medium">Courses</Link>
                <Link to={"/contact"} className="mr-6 font-medium">Contact Us</Link>

            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
