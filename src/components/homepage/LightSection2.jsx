import React from 'react'
import Cards from './Cards'

const LightSection2 = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-br from-[#FFFFFF] via-[#FAFFFF] to-[#FAFFFF]">
        <div className='flex flex-col justify-between items-center gap-10'>
            <div className=" lg:w-[827px] text-center text-[#000000] text-xl md:text-5xl md:leading-[72px] tracking-[0.01em] font-inter">
                The platform assists city managers on multiple fronts
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center lg:border-b-2 border-b-[#8E8D8D]'>
                <Cards text="Saves on power consumption & related costs" customClass="lg:w-[300px]"/>
                <Cards text="Lowers downtimes" customClass='lg:border-l-2  border-[#8E8D8D] lg:pl-10 '/>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <Cards text="Detects power thefts." customClass='lg:border-r-2  border-r-[#8E8D8D]'/>
                <Cards text="Ensures smart monitoring and control of the street light infrastructure." customClass="lg:w-[400px]"/>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-stretch lg:border-t-2 border-t-[#8E8D8D] md:pt-10 gap-5 md:gap-0'>
                <Cards text="Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc." customClass="lg:w-[500px] lg:border-b-2  border-[#8E8D8D] lg:pb-10"/>
                <Cards text="Ensures security in the neighborhood" customClass='lg:border-b-2 lg:border-l-2 border-[#8E8D8D] lg:mt-10 lg:pl-10 lg:pb-10'/>
            </div>           
            
        </div>
    </div>
  )
}

export default LightSection2