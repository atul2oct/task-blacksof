import React from 'react'
import Cards from './Cards'

const LightSection2 = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-br from-[#FFFFFF] via-[#FAFFFF] to-[#FAFFFF]">
        <div className='flex flex-col justify-between gap-10'>
            <div className=" w-[827px] h-[144px] left-[170px] top-0 text-center text-[#000000] text-[48px] leading-[72px] tracking-[0.01em] font-inter">
                The platform assists city managers on multiple fronts
            </div>

            <div className='flex justify-between items-center border-b-2  border-b-[#8E8D8D]'>
                <Cards text="Saves on power consumption & related costs" customClass="w-[300px]"/>
                <Cards text="Lowers downtimes" customClass='border-l-2  border-[#8E8D8D] pl-10 '/>
            </div>
            <div className='flex justify-between items-center'>
                <Cards text="Detects power thefts." customClass='border-r-2  border-r-[#8E8D8D]'/>
                <Cards text="Ensures smart monitoring and control of the street light infrastructure." customClass="w-[400px]"/>
            </div>
            <div className='flex justify-between items-stretch border-t-2 border-t-[#8E8D8D] pt-10'>
                <Cards text="Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc." customClass="w-[500px] border-b-2  border-[#8E8D8D] pb-10"/>
                <Cards text="Ensures security in the neighborhood" customClass='border-b-2 border-l-2  border-[#8E8D8D] mt-10 pl-10 pb-10'/>
            </div>           
            
        </div>
    </div>
  )
}

export default LightSection2