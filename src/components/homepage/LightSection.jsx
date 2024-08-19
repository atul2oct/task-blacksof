import React from 'react'
import street_light_controler from '../../assests/Images/street_light_controler.png'
import cloud_based from '../../assests/Images/cloud_based management.png'
import evaluation_png from '../../assests/Images/evaluation_png.png'
import gateway_png from '../../assests/Images/gateway_png.png'
import users_png from '../../assests/Images/users_png.png'
import SubHeading from '../common/SubHeading'

const LightSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-28' style={{
        background: 'linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)'
      }}>
      {/* group */}
        <div className=" flex flex-col justify-center w-3/4 gap-6">
        {/* sub heading */}
          <div className='flex flex-col justify-center gap-4 w-1/2'>
            <SubHeading text="Ecosystem" gradient="bg-gradient-to-l from-transparent via-transparent to-[#3661FF]"/>
            <p className="font-inter font-normal text-[48px] leading-[68px] tracking-[0.01em] text-black">How does a smart street light ecosystem work?</p>
          </div>

          {/* images wla */}
          <div className='flex flex-col items-center justify-center gap-24 w-full'>

          {/* upper */}
            <div className='relative flex items-center justify-between gap-[25px] w-full'>

            {/* street light */}
              <div className="flex flex-col items-start justify-center w-[274px] h-[269px] gap-6">
                <div className='flex justify-between items-center w-full'>
                  {/* left */}
                  <div className="relative w-[117px] h-[117px]">
                    <div className="absolute w-[117px] h-[117px] border-dashed border-[1.20619px] border-[#3661FF] rounded-[28.8177px]"></div>
                    <div className="absolute w-[92.88px] h-[92.88px] left-[12.06px] top-[12.06px] bg-gradient-to-b from-white to-[#F3FDFF] border border-[#3661FF] shadow-[2.3px_2.9px_8.6px_rgba(206,206,206,0.05)] rounded-[19.299px] flex justify-center items-center">
                      <img src={street_light_controler} alt='street light'/>
                    </div>
                  </div>

                  {/* right */}
                  <div className="relative w-[117px] h-[117px]">
                    <div className="absolute w-[117px] h-[117px] border-dashed border-[1.20619px] border-[#3661FF] rounded-[28.8177px]"></div>
                    <div className="absolute w-[92.88px] h-[92.88px] left-[12.06px] top-[12.06px] bg-gradient-to-b from-white to-[#F3FDFF] border border-[#3661FF] shadow-[2.3px_2.9px_8.6px_rgba(206,206,206,0.05)] rounded-[19.299px] flex justify-center items-center">
                      <img src={street_light_controler} alt='street light'/>
                    </div>
                  </div>
                </div>
              
                <div className="flex flex-col items-center gap-[9px]">
                  <span className="text-sm leading-4 font-normal font-sans text-black">Street Light Controller</span>
                  <span className="text-sm leading-4 font-light font-sans text-[#626262] text-center">
                    Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp
                  </span>
                </div>
              </div>

              <div className="absolute w-1/4 h-0 left-[20%] top-[30%] border-dashed border-[3px] border-[#CDCDCD]"></div>

              {/* gateway */}
              <div className="absolute flex flex-col items-center justify-center w-[242px] h-[272px] gap-[25px] left-1/2 inset-y-0 -translate-x-1/2">
                <div className="relative w-[167px] h-[167px]">
                  <div className="absolute w-[167px] h-[167px] border-dashed border-[1.72px] border-[#D3D3D3] rounded-[41.133px]"></div>
                  <div className="absolute w-[132.57px] h-[132.57px] left-[17.28px] top-[17.28px] bg-gradient-to-b from-white to-[#F3FDFF] border-[1.64532px] border-[#EAEAEA] shadow-[3.29px_4.11px_12.34px_rgba(206,206,206,0.05)] rounded-[27.5464px] flex justify-center items-center">
                    <img src={gateway_png} alt='gateway png'/>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[9px]">
                  <span className="text-[14px] leading-[17px] font-normal font-sans text-black">Gateway</span>
                  <span className="text-[14px] leading-[17px] font-light font-sans text-[#626262] text-center">
                    Employed for interfacing between a Controller and the Lighting Management Software.
                  </span>
                </div>
              </div>

              <div className="absolute w-1/4 h-0 right-[15%] top-[30%] border-dashed border-[3px] border-[#CDCDCD]"></div>

              {/* Cloud-based Management System */}
              <div className="flex flex-col items-start justify-center w-[167px] h-[271px] gap-[25px]">
                <div className="relative w-[167px] h-[167px]">
                  <div className="absolute w-[167px] h-[167px] border-dashed border-[1.72px] border-[#D3D3D3] rounded-[41.133px]"></div>
                  <div className="absolute w-[132.57px] h-[132.57px] left-[17.28px] top-[17.28px] bg-gradient-to-b from-white to-[#F3FDFF] border-[1.64532px] border-[#EAEAEA] shadow-[3.29px_4.11px_12.34px_rgba(206,206,206,0.05)] rounded-[27.5464px] flex justify-center items-center">
                    <img src={cloud_based} alt='cloud based png'/>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[9px]">
                  <span className="text-[14px] leading-[17px] font-normal font-sans text-black">Cloud-based Management System</span>
                  <span className="text-[14px] leading-[17px] font-light font-sans text-[#626262] text-center">
                    Collects information from multiple gateways.
                  </span>
                </div>
              </div>

            </div>

            {/* middle */}
            <div className="relative flex flex-row items-center justify-center w-full">
              {/* Line 15 */}
              <div className="absolute w-[60px] h-0 left-1/2 -translate-x-1/2 -top-10 border-dashed border-[3px] border-[#CDCDCD] rotate-90"></div>

              {/* Vector 7 */}
              <div className="absolute w-96 h-10 left-1/2 inset-y-0 -translate-x-1/2 -top-0 border-dashed border-[3px] border-b-0 border-[#CDCDCD]"></div>
            </div>

            {/* lower */}

            <div className="-mt-12 flex flex-row items-center justify-center gap-[167px] w-full">
              
              {/* Users*/}
              <div className="flex flex-col items-start justify-center w-[190.34px] h-[269px] gap-[25px]">
                <div className="relative w-[167px] h-[167px]">
                  <div className="absolute w-[167px] h-[167px] border-dashed border-[1.72px] border-[#D3D3D3] rounded-[41.133px]"></div>
                  <div className="absolute w-[132.57px] h-[132.57px] left-[17.28px] top-[17.28px] bg-gradient-to-b from-white to-[#F3FDFF] border-[1.64532px] border-[#EAEAEA] shadow-[3.29px_4.11px_12.34px_rgba(206,206,206,0.05)] rounded-[27.5464px] flex justify-center items-center">
                    <img src={users_png} alt='users png'/>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[9px]">
                  <span className="text-[14px] leading-[17px] font-normal font-sans text-black">Users</span>
                  <span className="text-[14px] leading-[17px] font-light font-sans text-[#626262] text-center">
                    Data from the cloud is used to monitor and control street lights by the System Managers.
                  </span>
                </div>
              </div>

              {/* Evaluation */}
              <div className="flex flex-col items-start justify-center w-[184.18px] h-[272px] gap-[25px]">
                <div className="relative w-[167px] h-[167px]">
                  <div className="absolute w-[167px] h-[167px] border-dashed border-[1.72px] border-[#D3D3D3] rounded-[41.133px]"></div>
                  <div className="absolute w-[132.57px] h-[132.57px] left-[17.28px] top-[17.28px] bg-gradient-to-b from-white to-[#F3FDFF] border-[1.64532px] border-[#EAEAEA] shadow-[3.29px_4.11px_12.34px_rgba(206,206,206,0.05)] rounded-[27.5464px] flex justify-center items-center">
                    <img src={evaluation_png} alt='evaluation image'/>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[9px]">
                  <span className="text-[14px] leading-[17px] font-normal font-sans text-black">Evaluation</span>
                  <span className="text-[15px] leading-[18px] font-light font-sans text-[#626262] text-center">
                    Gathered insights are used to evaluate the performance of the lighting systems.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* rectangluar blur */}
        <div className="w-full h-[198px] bg-gradient-to-b from-transparent to-white"></div>
      </div>
  )
}

export default LightSection