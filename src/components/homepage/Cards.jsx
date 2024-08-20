import React from 'react'

const Cards = ({text,customClass}) => {
  return (
    <div className={`w-64 ${customClass} h-60 flex flex-col items-start gap-6`}>            
        <div className="relative w-[74px] h-[74px] flex-none">
            {/* rectangle */}
            <div className="absolute w-[73px] h-[73px] left-[1px] top-0 bg-gradient-to-r from-[#3661FF] to-[#0085FF] rounded-[19px] bg-[#D9D9D9]"></div>
            {/* image */}
            <div className="absolute w-[74px] h-[74px] left-0 top-0 bg-card mix-blend-luminosity" ></div>
        </div>

        {/* text */}
        <p className="text-xl leading-7 lg:text-4xl lg:leading-10 tracking-[0.01em] font-inter">
            {text}
        </p>
    </div>
  )
}

export default Cards