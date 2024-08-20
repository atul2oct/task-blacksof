import React, { useEffect, useRef, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import logo from '../../assests/Images/smart lights_logo.svg';
import { NavbarLinks } from '../../data/navbar-links';
import Button from './Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };
    const menuRef = useRef()
    useEffect(()=>{
        // when click outside menu div and image menu will close
        const handler = (event)=>{
          if(!menuRef.current.contains(event.target)){
            setIsMobileMenuOpen(false)
          }
        }
        document.addEventListener('mousedown',handler)
        return () => {
          document.removeEventListener('mousedown',handler)
        }
      },[])

    return (
        <div className={`flex h-24 items-center justify-center border-b-[1px] border-b-[#FFFFFF1A] ${location.pathname !== '/' ? "bg-richblack-800" : ""} transition-all duration-200`}>
            <div className='flex w-11/12 justify-between items-center max-w-maxContent'>
                {/* Logo */}
                <Link to='/'>
                    <img src={logo} alt='logo' loading="lazy" width={160} height={42} />
                </Link>

                {/* Mobile Menu Button */}
                <div className='block md:hidden z-20'>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-richblack-25'
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className='h-6 w-6' />
                        ) : (
                            <Bars3Icon className='h-6 w-6' />
                        )}
                    </button>
                </div>

                {/* Nav Links */}
                <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-x-6 text-richblack-25 `}>
                    <ul className='flex items-center gap-x-6'>
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link?.path}>
                                    <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} h-5 font-inter font-normal text-lg leading-[21.78px] text-center`}>
                                        {link.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Button text="Login" customClass="hidden md:block bg-gradient-to-r from-[#3661FF] to-[#0085FF]" />

                    {/* Mobile Menu */}
                    <div ref={menuRef} className={`z-10 fixed top-0 right-0 w-2/3 h-2/6 bg-richblack-800 md:hidden transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <ul className='flex flex-col items-center mt-20 space-y-6'>
                            {NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} text-2xl font-inter font-normal text-center`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                            <Button text="Login" customClass="bg-gradient-to-r from-[#3661FF] to-[#0085FF]" />
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
