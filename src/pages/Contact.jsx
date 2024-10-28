import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
    });

    const apiURL = import.meta.env.VITE_SHEETDB_API;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://sheetdb.io/api/v1/${apiURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),
            });

            const result = await response.json();

            if (result.created === 1) {
                alert('Thank you for contacting us! We will get back to you soon.');
                setFormData({
                    Name: '',
                    Email: '',
                    Subject: '',
                    Message: '',
                });
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('There was an issue submitting the form. Please try again.');
        }
    };
    return (
        <div className='w-full pt-[58px] md:pt-[174px]'>
            <div className='w-full px-5 lg:px-[100px] xl:px-[150px] bg-white items-center flex flex-col'>
                <div className='w-full  flex flex-col gap-6 items-center '>
                    <h1 className='text-[22px] md:text-[32px] font-heading text-center w-72 md:w-full py-10'>Contact Us</h1>
                    <form
                        onSubmit={handleSubmit}
                        className=' w-full md:w-[534px] md:pb-5'>

                        <div className='mb-5 flex flex-col gap-1'>
                            <label className='text-base'>Name</label>
                            <input name="Name" type='text' value={formData.Name} onChange={handleChange} className=' w-full p-2 text-sm border border-gray/50  outline-none ' required></input>
                        </div>
                        <div className='mb-5 flex flex-col gap-1'>
                            <label className=' text-base'>Email</label>
                            <input name="Email" type='email' value={formData.Email} onChange={handleChange} className=' w-full p-2 text-sm border border-gray/50 outline-none' required></input>
                        </div>
                        <div className='mb-5 flex flex-col gap-1'>
                            <label className=' text-base'>Subject </label>
                            <input name="Subject" type='text' value={formData.Subject} onChange={handleChange} className=' w-full p-2 text-sm border border-gray/50 outline-none'></input>
                        </div>
                        <div className='mb-5 flex flex-col gap-1'>
                            <label for="large-input" className=' text-base'>Your Meassage </label>
                            <textarea name="Message" type='text' value={formData.Message} onChange={handleChange} rows='6' className=' w-full p-2 text-sm border border-gray/50   outline-none' required></textarea>
                        </div>

                        <div className='w-full flex justify-center'>
                            <button className='w-full md:w-auto md:px-16 py-3  text-base font-heading bg-black text-white'>SEND</button>
                        </div>
                    </form>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-2 lg:gap-6 py-10 px-5 md:px-0 xl:px-24'>
                    <div className='w-full aspect-square border-2 border-gray/40 flex items-center justify-center'>
                        <div className='flex flex-col items-center gap-10 md:pb-12'>
                            <img src='/logos/mail.png' className='w-10 h-10'></img>
                            <div className='flex flex-col items-center text-base gap-2'>
                                <h1 className='font-heading'>Email</h1>
                                <p className='font-subHeading'><a href="mailto:info@feelwellgarments.com" target='_blank'>info@feelwellgarments.com</a></p>
                            </div>

                        </div>
                    </div>

                    <div className='w-full aspect-square border-2 border-gray/40 flex items-center justify-center'>
                        <div className='flex flex-col items-center gap-10 px-5 md:px-0'>
                            <img src='/logos/address.png' className='w-10 h-10'></img>
                            <div className='flex flex-col items-center text-base gap-2'>
                                <h1 className='font-heading'>Address</h1>
                                <p className='font-subHeading text-center'>Feelwell Garments and Accessories Private Limited 158, Model House, Sion Main Rd, Sion, Mumbai 400022, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full aspect-square border-2 border-gray/40 flex items-center justify-center'>
                        <div className='flex flex-col items-center gap-10'>
                            <img src='/logos/call.png' className='w-10 h-10'></img>
                            <div className='flex flex-col items-center text-base gap-2'>
                                <h1 className='font-heading'>Call us</h1>
                                <p className='font-subHeading text-center'>info@feelwellgarments.com<br></br> +91 22 2407 9872 <br></br>+91  99 2087 0666</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className=' w-full h-[559px] bg-cover bg-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4399.609833186322!2d72.86052489018755!3d19.040041762724833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92e42f95d2f%3A0x9103ed50ccca3ab6!2sFeelwell%20Garments%20%26%20Accessories%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726489600176!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    )
}

export default Contact