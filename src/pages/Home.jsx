import React from 'react'
import DarkSection from '../components/homepage/DarkSection'
import LightSection from '../components/homepage/LightSection'

const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* section-1 dark section */}
      <DarkSection/>
      <section className='flex flex-col justify-center items-center gap-36 bg-white -mt-28 z-10'>
        {/* section-2 light section */}
        <LightSection/>
        {/* section-3 grey section */}
        <h1>sdcsdvsd</h1>
        {/* section-4 light section */}
        {/* section-5 footer section */}
      </section>
    </div>
  )
}

export default Home