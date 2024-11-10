import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover'
    style={{backgroundSize: "31%", backgroundPosition: "left 80px top 90px"}}>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[70px] font-bold leading-tight flex justify-center ml-50 mt-20'>
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
