import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {

    const [isFindUsOpen, setIsFindUsOpen] = useState(false)
    const [isLinksOpen, setIsLinksOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <footer className='w-full bg-white px-5 lg:px-[100px] xl:px-[150px] '>
            <div className='w-full flex flex-col-reverse gap-10 lg:flex-row items-center lg:justify-between pt-10  pb-4 lg:py-16 '>

                {/* left div */}
                <div className='w-[200px] xl:w-[230px] h-[150px] xl:h-[170px]'>
                    <img src='/FooterLogo.png' className='w-full h-full'></img>
                </div>

                {/* right div */}
                <div className='lg:flex gap-10 xl:gap-20 hidden'>
                    <div className='text-black flex flex-col gap-3'>
                        <h1 className='font-heading text-[18px] leading-[35px]'>FIND US</h1>
                        <div className='font-subHeading text-[18px] font-light w-[213px] flex flex-col gap-2'>
                            <p>Feelwell Garments and</p>
                            <p>Accessories Private Limited.</p>
                            <p>158, Model House,</p>
                            <p>Sion Main Rd,</p>
                            <p>Mumbai 400022,</p>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>

                    <div className='text-black flex flex-col gap-3'>
                        <h1 className='font-heading text-[18px] leading-[35px]'>QUICK LINKS</h1>
                        <div className='font-subHeading text-[18px] font-light w-[151px] flex flex-col gap-2'>
                            <Link to='/'><p>Home</p></Link>
                            <Link to='/aboutus'><p>About Us</p></Link>
                            <Link to='/product&Services'><p>Products & Services</p></Link>
                            <Link to='/philanthropy'><p>Philantrophy</p></Link>
                            <Link to='/contact'><p>Contact</p></Link>
                        </div>
                    </div>

                    <div className='text-black flex flex-col gap-3'>
                        <h1 className='font-heading text-[18px] leading-[35px]'>CONTACT US</h1>
                        <div className='font-subHeading text-[18px] font-light w-[213px] flex flex-col gap-2'>
                            <p><a href="mailto:info@feelwellgarments.com" target='_blank'>info@feelwellgarments.com</a></p>
                            <p>+91 22 2407 9872</p>
                            <p>+91 99 2087 0666</p>
                        </div>
                    </div>

                </div>

                {/* responsive */}
                <div className=" bg-white w-full lg:hidden">
                    <div className="flex flex-col w-full items-start text-base font-heading">

                        {/* FIND US */}
                        <div className='w-full items-center flex justify-between py-3  border-black/30 pr-2 cursor-pointer ' onClick={() => setIsFindUsOpen(!isFindUsOpen)}>
                            <button className="uppercase ">FIND US</button>
                            {
                                isFindUsOpen ? (<div><IoClose className='text-xl' /></div>) : (<div><FiPlus className='text-xl' /></div>)
                            }
                        </div>
                        {
                            isFindUsOpen && (
                                <div className=" w-full pl-5  pb-2 ">
                                    <p className="text-[14px]">Feelwell Garments and Accessories Private Limited.<br></br> 158, Model House, Sion Main Rd, Mumbai 400022, Maharashtra, India</p>
                                </div>
                            )
                        }

                        {/* QUICK LINKS */}
                        <div className='w-full items-center flex justify-between py-3 border-t border-black/30 pr-2 cursor-pointer' onClick={() => setIsLinksOpen(!isLinksOpen)}>
                            <button className="uppercase " >QUICK LINKS</button>
                            {
                                isLinksOpen ? (<div><IoClose className='text-xl' /></div>) : (<div><FiPlus className='text-xl' /></div>)
                            }
                        </div>
                        {
                            isLinksOpen && (
                                <div className=" w-full pl-5 pb-2 gap-2 flex flex-col text-[14px] cursor-pointer">
                                    <Link to='/' onClick={() => setIsLinksOpen(!isLinksOpen)}><p>Home</p></Link>
                                    <Link to='/aboutus' onClick={() => setIsLinksOpen(!isLinksOpen)}><p>About Us</p></Link>
                                    <Link to='/product&Services' onClick={() => setIsLinksOpen(!isLinksOpen)}><p>Products & Services</p></Link>
                                    <Link to='/philanthropy' onClick={() => setIsLinksOpen(!isLinksOpen)}><p>Philantrophy</p></Link>
                                    <Link to='/contact' onClick={() => setIsLinksOpen(!isLinksOpen)}><p>Contact</p></Link>
                                </div>
                            )
                        }


                        {/* Contact us */}
                        <div className='w-full items-center flex justify-between py-3 border-t border-black/30 pr-2 cursor-pointer' onClick={() => setIsContactOpen(!isContactOpen)}>
                            <button className="uppercase " >Contact us</button>
                            {
                                isContactOpen ? (<div><IoClose className='text-xl' /></div>) : (<div><FiPlus className='text-xl' /></div>)
                            }
                        </div>
                        {
                            isContactOpen && (
                                <div className=" w-full pl-5 pb-2 gap-2 flex flex-col text-[14px] border-b border-black/30  cursor-pointer">
                                    <p><a href="mailto:info@feelwellgarments.com" target='_blank'>info@feelwellgarments.com</a></p>
                                    <p>+91 22 2407 9872</p>
                                    <p>+91 99 2087 0666</p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className='w-full flex justify-center '>
                <div className='flex gap-[30px] text-2xl  pb-10'>
                    <a href='https://www.instagram.com/feelwellgarments?igsh=anRoeHk3OTgwOGNx' target='_blank'><FaInstagram /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer