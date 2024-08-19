import React, { useState } from 'react'
import {products} from '../../data/HomePageExplore'


const tabsNames=[
    "Centralized Control & Monitoring System",
    "NEMA-Mounted VOLC 1160",
    "Retrofit Street Light Controller VOLC 2160",
    "Retrofit Street Light Controller VOLC 2180",
    "Retrofit Street Light Controller VOLC 4180",
]

const ExploreMore = () => {
    const [currentTab,setCurrentTab] = useState(tabsNames[0]);
    const [currentCard,setCurrentCard] = useState(products[0]);

    const setMyCards = (value) => {
        setCurrentTab(value)
        const result = products.filter((product)=>product.heading === value)
        setCurrentCard(result[0]);
    }


  return (
    <div>
        <div className='mt-5 flex flex-row mb-5 px-1 py-1 gap-5 flex-wrap'>
            {
                tabsNames.map((product,index)=>{
                    return (
                        <div key={index} onClick={()=>setMyCards(product)}
                        className={`box-border flex flex-row items-start p-2.5 gap-2.5 max-w-maxContent h-[44px]  rounded-[1px] z-0 ${currentTab === product ? "bg-cardBtn-gradient"
                        :"border-[1.5px] border-[#797979]"} transition-all duration-200
                        cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}>
                            {product}
                        </div>
                    )
                })
            }
        </div>

        <div className='lg:h-[230px]'></div>
        {/* course card */}
        <div className=' flex flex-row justify-between gap-1
        w-[90%] top-44'>

        <h2> current headiung {currentTab}</h2>
            <h2 className='text-2xl'>Changes to
                {
                    currentCard.heading
                }
            </h2>
        </div>
    </div>
  )
}

export default ExploreMore