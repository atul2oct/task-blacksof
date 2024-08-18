import React from 'react'

const Button = ({text,customClass}) => {
  return (
    <button className={`${customClass} w-44 h-14 rounded-sm px-6 py-4 text-white font-normal text-[20px] leading-[23.6px] z-10`}>
        {text}
    </button>
  )
}

export default Button