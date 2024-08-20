import React from 'react';
import logo from '../../assests/Images/smart lights_logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-footer h-96 flex flex-col justify-around px-10'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center'>
            <div className='flex w-2/5 justify-between items-center max-w-maxContent'>
            {/* logo */}
                <Link to='/'>
                    <img src={logo} alt='logo' loading="lazy" width={160} height={42}/>
                </Link>
            </div>
            
            {/* Footer Sections */}
            <div className='flex flex-row justify-between md:w-3/5 gap-5 md:gap-0'>
                {/* Product Section */}
                <Link to='/product' className='text-white text-xl leading-7'>
                    Product
                </Link>
                {/* Company Section */}
                <Link to='/software-services' className='text-white text-xl leading-7'>
                    Software Services
                </Link>
                {/* Follow Us Section */}
                <Link to='/follow-us' className='text-white text-xl leading-7'>
                    Follow Us
                </Link>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            {/* Divider */}
            <div className='w-[958.22px] h-[0px] border-t-2 border-[#E2F1FF]'></div>

            {/* Privacy & Terms */}
            <div className='flex flex-row gap-8'>
            <Link to='/privacy-policy' className='text-white text-xl leading-7'>
                Privacy Policy
            </Link>
            <div className='text-white text-xl leading-7'>
                |
            </div>
            <Link to='/terms-conditions' className='text-white text-xl leading-7'>
                Terms & Conditions
            </Link>
            <div className='text-white text-xl leading-7'>
                |
            </div>
            <Link to='/cookie-policy' className='text-white text-xl leading-7'>
                Cookie Policy
            </Link>
            </div>
        </div>
    </div>
  );
};

export default Footer;
