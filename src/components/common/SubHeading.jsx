import React from 'react'

const SubHeading = ({color,text,gradient}) => {
  return (
    <div className={`w-[88px] h-16 flex flex-col justify-center ${gradient} to-[${color}]`}>
        <h2 className='w-[120px] h-9 text-2xl leading-[150%] font-[415] text-[#00386B] tracking-[0.01em] capitalize font-sans'>{text}</h2>              
    </div>
  )
}

export default SubHeading