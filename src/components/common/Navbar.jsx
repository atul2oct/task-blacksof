import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assests/Images/smart lights_logo.svg'
import { NavbarLinks } from '../../data/navbar-links';
import Button from './Button';

const Navbar = () => {
    const location = useLocation();

    const matchRoute = (route) => {
        // if the current URL path (location.pathname) matches a specific route.
        return matchPath({path:route}, location.pathname)
    }
    
  return (
    <div className={`flex h-24 items-center justify-center border-b-[1px] border-b-[#FFFFFF1A] ${location.pathname !== '/' ? "bg-richblack-800" : ""}transition-all duration-200`}>
        
        <div className='flex w-11/12 justify-between items-center max-w-maxContent'>
        {/* logo */}
            <Link to='/'>
                <img src={logo} alt='logo' loading="lazy" width={160} height={42}/>
            </Link>


        {/* nav links */}
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link,index) => (
                            <li keys={index}>
                                <Link to={link?.path}>
                                    <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} h-5 font-inter font-normal text-lg leading-[21.78px] text-center`}>
                                        {link.title}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }

                    
                    <Button text="Login" customClass="bg-gradient-to-r from-[#3661FF] to-[#0085FF]"/>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar