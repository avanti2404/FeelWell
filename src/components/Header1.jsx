import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Header1 = () => {
    return (
        <header className="w-full z-40 fixed text-black bg-white">
            <div className='w-full  flex flex-col items-center justify-center '>
                <div className='relative w-full h-[58px] md:h-[102px] flex items-center justify-center'>
                    <div className=''>
                        <Link to='/'><img src='/logo.png' className='w-[60px] h-[32px] md:w-[98px] md:h-[53px]'></img></Link>
                    </div>
                    <div className='absolute  flex left-6 justify-start items-center md:hidden '>
                        <Sidebar />
                    </div>
                </div>
                <nav className='hidden  w-full h-[72px] md:flex items-center justify-center'>
                    <div className='md:flex gap-14 hidden font-heading text-base uppercase'>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/aboutus'><p>About Us</p></Link>
                        <Link to='/product&Services'><p>Products & Services</p></Link>
                        <Link to='/philanthropy'><p>Philantrophy</p></Link>
                        <Link to='/contact'><p>Contact</p></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header1