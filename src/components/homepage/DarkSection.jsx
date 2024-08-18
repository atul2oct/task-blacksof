import React from 'react'
import Button from '../common/Button'
import earth from '../../assests/Images/planet-earth-from-space 1.png'

const DarkSection = () => {
  return (
    <div className='relative mx-auto flex flex-col w-11/12 items-center justify-between gap-10 max-w-maxContent mt-24 z-0'>
        {/* ellipse */}
        <div className='ellipse-section'></div>
        {/* title */}
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className="font-inter text-2xl font-normal leading-[29.05px] tracking-[1px] text-center text-white">Smart Lighting Solutions</p>
                <div>
                    <h1 className="gif-text">Bringing a new perspective to street lights and the cities of tomorrow.</h1>
                </div>
            </div>
            {/* button */}
            <Button text="Login" customClass="bg-[#3661FF]"/>
        </div>
        {/* rectangle blur */}
        <div className='custom-rectangle'></div>
        {/* image */}
        <div className='-mt-32 z-0'>
            <img src={earth} alt="Earth" className='object-cover'/>
        </div>
    </div>
  )
}

export default DarkSection