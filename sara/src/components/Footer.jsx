import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <section className='py-20 bg-center bg-[url("public/footerbg.jpg")] bg-cover bg-mainpurple bg-blend-overlay'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className=" col-lg-4">
                        <h2 className="text-3xl font-bold mb-4 text-mainblue">EIBM</h2>
                        <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid recusandae repellat inventore excepturi molestias omnis quaerat temporibus vel dolorem dignissimos odit quibusdam, sint natus pariatur ex voluptates et ullam!</p>
                        <ul className='flex m-0 p-0 pt-lg-4'>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaTwitter className='text-white mx-auto align-middle leading-5'></FaTwitter></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaLinkedinIn className='text-white mx-auto align-middle leading-5'></FaLinkedinIn></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaInstagram className='text-white mx-auto align-middle leading-5'></FaInstagram></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3'><FaFacebookF className='text-white mx-auto align-middle leading-5'></FaFacebookF></li>

                        </ul>
                    </div>
                    <div className="col-lg-3 mx-lg-auto">
                        <h2 className="text-3xl font-bold mb-lg-4 text-mainblue w-75 mt-4 mt-lg-0">Links </h2>
                        <ul className='w-100 w-lg-75 m-0 p-0 d-flex d-lg-block mx-lg-auto mt-3 mt-lg-0'>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2'>Home</li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2'>Student Corner</li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2'>Courses</li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="text-3xl font-bold mb-3 mb-xl-4 text-mainblue mt-4 mt-lg-0">Contact Us </h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis ducimus qui repellendus minima quis. Sapiente suscipit quas rem nesciunt, illum harum velit ipsum totam quibusdam expedita delectus itaque corporis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

