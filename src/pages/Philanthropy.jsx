import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PhilanthropyBanner } from '../utils/constants'
import { PhilanthropyImgs, philanthropyHeartOfMaking } from '../utils/constants'
import { Link } from 'react-router-dom';

const Philanthropy = () => {
    const settings = {
        dots: false,
        slidesToShow: 3,
        swipe: false,       // Disables swipe
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    swipe: true
                }
            }
        ]
    };

    return (
        <div className='w-full '>
            <div className='w-full h-[500px] md:h-screen bg-center bg-cover relative' style={{ backgroundImage: `url(${PhilanthropyBanner})` }}>
                <div className="absolute inset-0  flex flex-col items-center justify-end pb-16 text-center ">
                    <h1 className=" text-white text-[32px] lg:text-[52px] font-heading w-full leading-6">
                        Philanthropy
                    </h1>
                </div>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white items-center flex flex-col'>
                <div className='w-full py-10 lg:py-16 flex flex-col gap-6 items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-heading text-center w-72 md:w-full '>Beauty is Our Ambition, and Empathy Our Intention</h1>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading xl:w-[950px]'>Feelwell Garments and Accessories Private Limited is a firm believer in giving back to society and we instill this in our work force as well. We support two charitable causes that are dear to our hearts. Anand Ashram is a small spiritual center located in Mangalore, India. The Ashram provides food and shelter to thousands of people every day. We admire their work and have been affiliated with this Ashram since the inception of our company.</p>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading lg:w-[750px]'>  Icha Foundation adopts children with mental and physical disabilities. Some of these children have been abandoned by their own families. Through caring for the emotional and physical welfare of these children, the foundation provides them with a better life on this planet. We value and support the foundation in their mission. </p>
                </div>

                <div className='w-full pb-16 md:pb-10'>
                    <Slider {...settings}>
                        {
                            PhilanthropyImgs.map((data, index) => (
                                <div key={index} className='w-full h-[600px] p-1 lg:p-2  '>
                                    <img src={data.img} className='w-full h-full object-cover object-center' />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            {/* Heart of Making */}
            <div className='w-full h-[605px] md:h-[413px] bg-center bg-cover relative' style={{ backgroundImage: `url(${philanthropyHeartOfMaking})` }}>
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

export default Philanthropy