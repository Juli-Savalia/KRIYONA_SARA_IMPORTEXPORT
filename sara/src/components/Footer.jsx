import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='py-20'>
        <div className="container">
            <div className="flex flex-wrap">
                <div className="col-4">
                    <h2 className="text-3xl font-bold mb-4 text-mainblue">EIBM</h2>
                    <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid recusandae repellat inventore excepturi molestias omnis quaerat temporibus vel dolorem dignissimos odit quibusdam, sint natus pariatur ex voluptates et ullam!</p>
                    <ul className='flex m-0 p-0 pt-4'>
                        <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaTwitter className='text-white mx-auto align-middle leading-5'></FaTwitter></li>
                        <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaLinkedinIn className='text-white mx-auto align-middle leading-5'></FaLinkedinIn></li>
                        <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaInstagram className='text-white mx-auto align-middle leading-5'></FaInstagram></li>
                        <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaFacebookF className='text-white mx-auto align-middle leading-5'></FaFacebookF></li>

                    </ul>
                </div>
                <div className="col-3 mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-mainblue w-75 mx-auto">Links </h2>
                    <ul className='w-75 mx-auto m-0 p-0'>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>Student Corner</li>
                        <li className='text-sm'>Courses</li>
                        <li className='text-sm'>Contact Us</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h2 className="text-3xl font-bold mb-4 text-mainblue">Contact Us </h2>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis ducimus qui repellendus minima quis. Sapiente suscipit quas rem nesciunt, illum harum velit ipsum totam quibusdam expedita delectus itaque corporis.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
