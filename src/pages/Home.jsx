import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeBanner, homeV1, homeV2, heartOfMaking, quotes1 } from '../utils/constants'
import { Link } from 'react-router-dom'

const Home = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
    };
    return (
        <div className='w-full  '>
            {/* hero section */}
            <video
                className='w-full h-screen  object-cover relative '
                autoPlay
                loop
                muted
                playsInline>
                <source src={homeBanner} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0  flex flex-col items-center justify-end pb-16 text-center">
                <h1 className=" text-white text-[32px] lg:text-[52px] font-heading w-full leading-6">
                    Feelwell Garments
                </h1>
                <Link to='/product&Services'><button className='text-base font-heading  w-[172px] h-[52px] border border-white text-white mt-12 uppercase'>View Products</button></Link>
            </div>
            {/* <div className='w-full h-screen md:h-[900px] bg-cover bg-center' style={{ backgroundImage: `url("/HomePage/HeroSection.png")` }}>
                    <div className=" w-full h-full flex flex-col items-center justify-end pb-20 lg:pb-28 text-center ">
                        <h1 className=" text-white text-[75px] font-heading w-full">
                            Feelwell Garments
                        </h1>
                        <p className='text-white text-[30px] font-subHeading font-light '>Limitless Techniques , Contemporary Designs</p>
                        <button className='text-lg font-subHeading font-light w-[245px] h-[42px] border border-white text-white hover:bg-navyBlue hover:border-none transition-all duration-300 ease-in-out mt-5'>View Products</button>
                    </div>
                </div> */}


            {/* Quote */}
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white flex'>
                <div className='w-full py-10'>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[23px] lg:leading-[26px] font-heading '>Our craftsmanship is a manifestation of our Indian cultural heritage, lovingly preserved by generations of Artisans. <br></br>
                        We work directly with various clients from around the world to bring their designs to life.</p>
                </div>
            </div>


            <div className='w-full flex flex-col'>
                {/* Handcrafted Luxury, Our Legacy */}
                <div className='w-full flex flex-col lg:flex-row '>
                    <div className='w-full lg:w-[55%] h-[447px] xl:h-[554px]'>
                        <video
                            className='w-full h-full object-cover'
                            autoPlay
                            loop
                            muted
                            playsInline>
                            <source src={homeV1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='w-full lg:w-[45%] h-[397px] lg:h-[447px] xl:h-[554px] bg-black flex  items-center px-5 md:px-14'>
                        <div className='text-white text-center flex flex-col items-center gap-5'>
                            <h1 className='text-[22px] xl:text-[32px] font-heading'>Handcrafted Luxury, Our Legacy</h1>
                            <p className='text-[14px] xl:text-base font-subHeading leading-[22px] xl:leading-[24px]'>Feelwell Garments and Accessories Private Limited began with a focus to establish the importance of craftsmanship within Luxury Fashion. Our inspiration comes from the clients we work with and our motivation is the Artisan who has dedicated his life to preserving these age-old embroidery techniques.</p>
                            <Link to='/aboutus'><button className='text-[14px] lg:text-base font-heading w-[172px] h-[52px] border border-white text-white uppercase'>Read More</button></Link>
                        </div>
                    </div>
                </div>

                {/* Our Team */}
                <div className='w-full flex flex-col-reverse lg:flex-row '>
                    <div className='w-full lg:w-[45%] h-[397px] lg:h-[447px] xl:h-[554px] bg-black flex  items-center px-5 md:px-14'>
                        <div className='text-white text-center flex flex-col items-center gap-5'>
                            <h1 className='text-[22px] xl:text-[32px] font-heading'>Our Team</h1>
                            <p className='text-[14px] xl:text-base font-subHeading leading-[22px] xl:leading-[24px]'>At Feelwell Garments and accessories we strive to maintain and promote the ancient Indian tradition of exquisite hand-sewn embroideries along with 80 employees and over 250 Artisans, we work tirelessly to prove that high-quality craftsmanship is the only true luxury in fashion. Improving local work culture has gratifying consequences on the growth and identity of people.</p>
                            <Link to='/aboutus'><button className='text-[14px] lg:text-base font-heading w-[172px] h-[52px] border border-white text-white uppercase'>Read More</button></Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-[55%] h-[447px] xl:h-[554px]'>
                        <video
                            className='w-full h-full object-cover'
                            autoPlay
                            loop
                            muted
                            playsInline>
                            <source src={homeV2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>



            {/* Deepa Gurnani quote */}
            <div className='w-full pb-12' >
                <Slider {...settings} >
                    {
                        quotes1.map((data, index) => (
                            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white flex '>
                                <div key={index} className='w-full pt-10 pb-10 lg:pt-20 lg:pb-10 flex flex-col gap-5 lg:gap-8 items-center font-heading'>
                                    <p className=' text-[16px] lg:text-[42px] w-full text-center leading-[23px] lg:leading-[50px] '>{data.quote}</p>
                                    <h1 className='text-[18px] lg:text-[42px] font-semibold'>{data.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>



            {/* Heart of Making */}
            <div className='w-full h-[605px] md:h-[413px] bg-center bg-cover relative' style={{ backgroundImage: `url(${heartOfMaking})` }}>
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

export default Home