import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex  ">
            <div className={`fixed top-0 left-0 w-full h-screen bg-white  transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out `}>
                <div className='w-full h-[91px] flex items-center relative bg-white'>
                    <button className='absolute  text-black pl-8 justify-start items-center '>
                        <IoClose className='text-2xl' onClick={toggleSidebar} />
                    </button>
                </div>

                <nav className="pl-8 pt-10 w-full bg-white h-full">
                    <div className='flex flex-col gap-2 font-heading text-[26px] text-black '>
                        <Link to='/'><p onClick={toggleSidebar}>Home</p></Link>
                        <Link to='/aboutus'><p onClick={toggleSidebar}>About Us</p></Link>
                        <Link to='/product&Services'><p onClick={toggleSidebar}>Products & Services</p></Link>
                        <Link to='/philanthropy'><p onClick={toggleSidebar}>Philantrophy</p></Link>
                        <Link to='/contact'><p onClick={toggleSidebar}>Contact</p></Link>
                    </div>
                </nav>
            </div>

            <div className='button'>
                {
                    isOpen ? (
                        <div></div>
                    ) : (
                        <button className='pt-1'>
                            <GiHamburgerMenu className='text-2xl' onClick={toggleSidebar} />
                        </button>

                    )
                }

            </div>

        </div>
    );
};

export default Sidebar;