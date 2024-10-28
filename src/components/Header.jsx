import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Handle scroll behavior
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > scrollY && !isHovering) {
            setIsVisible(false); // Hide when scrolling down
        } else {
            setIsVisible(true); // Show when scrolling up or hovering
        }
        
        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, isHovering]);

    // Hover behavior for the invisible hover zone
    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsVisible(true); // Show navbar when hovering
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            {/* Invisible hover zone at the top of the page */}
            <div 
                className="w-full h-[50px] fixed top-0 left-0 z-40" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>

            {/* Header/Navbar */}
            <header
                className={`w-full z-50 fixed top-0 left-0 text-white transition-transform duration-500 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="relative w-full h-[58px] md:h-[102px] flex items-center justify-center">
                        <div>
                            <Link to="/">
                                <img
                                    src="Logo1.png.png"
                                    className="w-[60px] h-[32px] md:w-[98px] md:h-[53px]"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="absolute flex left-6 justify-start items-center md:hidden">
                            <Sidebar />
                        </div>
                    </div>
                    <nav className="hidden w-full h-[72px] md:flex items-center justify-center">
                        <div className="md:flex gap-14 hidden font-heading text-sm lg:text-base uppercase">
                            <Link to="/"><p>Home</p></Link>
                            <Link to="/aboutus"><p>About Us</p></Link>
                            <Link to="/product&Services"><p>Products & Services</p></Link>
                            <Link to="/philanthropy"><p>Philanthropy</p></Link>
                            <Link to="/contact"><p>Contact</p></Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
