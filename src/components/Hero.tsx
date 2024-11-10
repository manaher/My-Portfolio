import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover'
    style={{backgroundSize: "31%", backgroundPosition: "left 60px top 90px"}}>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[70px] font-bold leading-tight flex justify-center ml-80 mt-12'>
          <div>
            <p data-aos="zoom-in-up">I&#39;m</p>
            <p data-aos="zoom-in-up">Manaher</p>
            <p data-aos="zoom-in-up">Irfan Ahmed</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
