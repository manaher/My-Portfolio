import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-2xl md:text-4xl'>Technologies I use</h2>
          <p className='text-purple-400 py-3'>
            I am a beginner at web development, specializing in HTML, CSS and Javascript. I have stared learning how to use tailwind CSS and  Next.js to create attractive and user friendly websites. I have created various projects as part of my assignments in GIAIC
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-white text-2xl sm:text-2xl'>
            <div className='space-y-2'>
              <h2>Typescript</h2>
              <h2>HTML</h2>
              <h2>Next js</h2>
              </div>

              <div className='space-y-2'>
              <h2>Javascript</h2>
              <h2>CSS</h2>
              <h2>Tailwind CSS</h2>
              </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
