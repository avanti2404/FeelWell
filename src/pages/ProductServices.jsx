import React from 'react'
import { products, productServicesBanner } from '../utils/constants'

const ProductServices = () => {
    return (
        <div className='w-full '>
            <div className='w-full h-[500px] md:h-screen bg-center bg-cover relative' style={{ backgroundImage: `url(${productServicesBanner})` }}>
                <div className="absolute inset-0  flex flex-col items-center justify-end pb-16 text-center ">
                    <h1 className=" text-white text-[32px] lg:text-[52px] font-heading w-full leading-6">
                        Products & Services
                    </h1>
                </div>
            </div>

            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white items-center flex flex-col'>
                <div className='w-full py-10 lg:py-16 flex flex-col gap-6 items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-heading text-center w-72 md:w-full '>Timeless Technique, Contemporary Design</h1>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading xl:w-[890px]'>At Feelwell Garments and Accessories Private Limited, we specialize in sustaining the craft of hand embroidery. Our craftsmanship is a manifestation of our Indian cultural heritage, lovingly preserved by generations of Artisans. We create exquisite embroidery such as zardozi, aari, etc for Haute Couture, Ready-to-Wear and accessories. Our team of talented designers works with current trends based off the International Fashion runways and each season the designs are customized to fit the client’s needs. </p>
                    <p className='text-[14px] lg:text-[18px] w-full text-center leading-[22px] lg:leading-[26px] font-subHeading lg:w-[890px]'>  We work directly with various clients from around the world to bring their designs to life. Free from nickel, cadmium and lead, everything we create follows our ethos of caring for the well-being of the consumer and the planet. We source our own materials, working with beads from Japan, semi precious stones from Jaipur, Italian leather, freshwater pearls and Swarovski – the high quality is a testament to our commitment to creating luxury that lasts a lifetime.</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-3 place-items-center gap-2 lg:gap-6'>
                    {
                        products.map((data, index) => (
                            <div key={index} className='w-full aspect-square'>
                                <img src={data.img} className='w-full h-full object-cover object-center' />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductServices