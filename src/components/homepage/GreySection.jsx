import React from 'react'
import SubHeading from '../common/SubHeading'
import ExploreMore from './ExploreMore'

const GreySection = () => {
  return (
    <div className='background w-full flex flex-col justify-center items-center -mt-64 '>
      <div className='flex flex-col justify-center w-3/4'>

        <div className='flex flex-col w-3/5'>
          <SubHeading color="#3661FF" text="Products" gradient="bg-gradient-to-r from-white via-[#EBF4FF] to-[#C9E2FF]"/>
          <p className='font-[Sequel Sans] text-5xl font-normal leading-[72px] tracking-[0.01em] text-left'>
            <b>Cutting-edge hardware,</b> offerings helping cities optimize resources and achieve smart development goals
          </p>
        </div>

        <ExploreMore/>
      </div>
    </div>
  )
}

export default GreySection