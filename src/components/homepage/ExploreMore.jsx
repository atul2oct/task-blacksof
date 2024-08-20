import React, { useState } from 'react'
import { products } from '../../data/HomePageExplore'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const tabsNames = [
    "Centralized Control & Monitoring System",
    "NEMA-Mounted VOLC 1160",
    "Retrofit Street Light Controller VOLC 2160",
    "Retrofit Street Light Controller VOLC 2180",
    "Retrofit Street Light Controller VOLC 4180",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsNames[0]);
    const [currentCard, setCurrentCard] = useState(products[0]);
    const [knowMore, setKnowMore] = useState(false);

    const updateCard = (value) => {
        const result = products.find(product => product.heading === value);
        if (result) {
            setCurrentCard(result);
            setCurrentTab(value);
        }
    }

    const getTruncatedDescription = (description) => {
        return description.length > 100
            ? description.split(' ').slice(0, 20).join(' ') + '...'
            : description;
    }

    const description = knowMore ? currentCard.description : getTruncatedDescription(currentCard.description);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mt-5 flex flex-col md:flex-row mb-5 px-1 py-1 gap-5 flex-wrap'>
                {
                    tabsNames.map((product, index) => (
                        <div key={index} onClick={() => updateCard(product)}
                            className={`box-border flex flex-row items-start p-2.5 gap-2.5 max-w-maxContent h-[44px] rounded-[1px] z-0 ${currentTab === product ? "bg-cardBtn-gradient"
                                : "border-[1.5px] border-[#797979]"} transition-all duration-200
                                cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}>
                            {product}
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col md:flex-row gap-6 items-center bg-gradient-to-b from-white to-[#E1F4FF]'>
                <img src={require(`../../assests/Images/${currentCard.image}.png`)} alt={currentCard.heading} className='aspect-square w-1/2 object-cover mt-10 md:mt-0' />

                <div className='flex flex-col justify-start gap-2 md:w-1/4'>
                    <p className='text-[#818181] font-sans text-[14px] font-[410] leading-[18.2px] text-left'>Products {currentCard.no}/5</p>
                    <h2 className='font-sans text-[32px] font-[415] leading-[46px] tracking-[0.01em] text-left capitalize'>{currentCard.heading}</h2>
                    <h2 className='font-sequel-sans text-base font-normal leading-6 tracking-tight text-left'>{description}</h2>
                    <button className='text-[#3661FF] font-normal text-xl flex items-center gap-2' onClick={() => setKnowMore(!knowMore)}>
                        {!knowMore ? 'Know More' : 'Show Less'} <BsArrowUpRightCircleFill />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExploreMore;
