import React from 'react'
import {aboutBanner,About1,About2,aboutHeartOfMaking} from '../utils/constants'
import { Link } from 'react-router-dom'


const AboutUs = () => {
    return (
        <div className='w-full '>
            {/* hero section */}
            <video
                className='w-full h-[500px] md:h-screen  object-cover relative'
                autoPlay
                loop
                muted
                playsInline>
                <source src={aboutBanner} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 h-[500px] md:h-screen flex flex-col items-center justify-end pb-16 text-center ">
                <h1 className=" text-white text-[32px] lg:text-[52px] font-heading w-full leading-6">
                    About Us
                </h1>
            </div>


            {/* Quote */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white items-center flex flex-col'>
                <div className='w-full py-10 '>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[23px] lg:leading-[26px] font-heading '>Our craftsmanship is a manifestation of our Indian cultural heritage, lovingly preserved by generations of Artisans. <br></br>
                        We work directly with various clients from around the world to bring their designs to life.</p>
                </div>

                <div className='w-full h-[447px] lg:h-[602px] bg-cover bg-center ' style={{ backgroundImage: `url(${About1})` }}>
                </div>

                {/* Our Team */}
                <div className='w-full py-10 lg:py-16 flex flex-col gap-6 items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-heading'>Our Team</h1>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading xl:w-[950px]'>Feelwell Garments and Accessories Private Limited began with a focus to establish the importance of craftsmanship within Luxury Fashion. As producers of Handcrafted Luxury, our journey began in 2010. Today the brands we have built a strong relationship with worldwide include Deepa Gurnani, Conair Corporation, Urban Group, Altar’d State, HSN, to name a few.</p>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading lg:w-[750px]'> Based on expertise and exclusivity, our love for the traditional arts and crafts is embedded in our soul. We do, however, care for the craft just as much as the craftsmen. Our inspiration comes from the clients we work with and our motivation is the Artisan who has dedicated his life to preserving these age-old embroidery techniques. </p>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading xl:w-[1100px]'>In our quest for the best, we endeavor to move ahead hand-in-hand with the Artisans who bring our vision to life and devote ourselves to their personal progress. We believe in humane working conditions and fair wages for our craftsmen. We treat them like our family and instill in them a sense of pride for their achievements. We promote talented Artisans and support those with the potential to develop their skills even further. For those who are up to the creative challenges of working with our high standards and a belief in our pursuit of excellence, the rewards are abundant. </p>
                </div>
            </div>


            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-black text-white flex '>
                <div className='w-full py-10 lg:py-28 items-center font-heading'>
                    <p className=' text-[16px] lg:text-[42px] w-full text-center leading-[23px] lg:leading-[50px] '>Along with 80 employees and over 250 Artisans, we work tirelessly to prove that high-quality craftsmanship is the only true luxury in fashion.</p>
                </div>
            </div>


            {/* Our Infrastructure */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white items-center flex flex-col'>
                <div className='w-full h-[447px] lg:h-[602px] bg-cover bg-center mt-10' style={{ backgroundImage: `url(${About2})` }}>
                </div>

                <div className='w-full py-10 lg:py-16 flex flex-col gap-6 items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-heading'>Our Infrastructure</h1>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading xl:w-[950px]'>The Factory is located in the heart of India’s financial capital, Mumbai. Our four-story office, factory and specialized design studio provides a supportive environment to the Artisans, manages procedures for improvement in the organization of the employees along with fostering a system for internal quality control. It is here that our Artisans undertake fine, painstaking work everyday to create beautiful designs we pride ourselves for. They help us in our endeavor to take the traditional techniques of Indian embroidery and give it a modern twist, so that this craft can be sustained for many years to come.</p>
                </div>
            </div>


            {/* Heart of Making */}
            <div className='w-full h-[605px] md:h-[413px] bg-center bg-cover relative' style={{ backgroundImage: `url(${aboutHeartOfMaking})` }}>
                <div className='absolute inset-0 flex items-end pb-16 md:pb-0 md:items-center justify-center bg-black/30'>
                    <div className='text-white flex flex-col items-center gap-5 w-full px-5 lg:px-0  '>
                        <h1 className='text-[32px] md:text-[52px] font-heading'>The heart of making</h1>
                        <p className='text-[14px] md:text-[18px] font-subHeading text-center leading-[23px] md:leading-[26px]'>We create exquisite embroidery for Haute Couture, Ready-to-Wear and accessories.<br></br> Our team of talented designers works with current trends based off the International Fashion runways.</p>
                        <Link to='/product&Services'><button className='text-[14px] lg:text-base font-heading w-[172px] h-[52px] lg:w-[196px] lg:h-[62px] border border-white text-white uppercase mt-5'>View Products</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs