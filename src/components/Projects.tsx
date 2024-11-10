import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "An HTML and CSS based Resume",
        img: "/mile 1.png",
        tags: ["Node", "CSS", "HTML"],
    },
    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: "An HTML and CSS based Resume builder",
        img: "/milee3.png",
        tags: ["Node", "CSS", "HTML"],
    },
    {
        id: 2,
        title: "Editable Resume Builder",
        desc: "An HTML and CSS based Resume builder editable form",
        img: "/mile4.jpg",
        tags: ["Node", "CSS", "HTML"],
    },
    {
        id: 3,
        title: "Shareable Resume Builder",
        desc: "An HTML and CSS based Resume builder editable and shareable form",
        img: "/mile5.jpg",
        tags: ["Node", "CSS", "HTML"],
    },
    
]

const Projects = () => {
  return (
    <div id= "projects" className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-20 xl:gap-10 xl:gap-y-20 md:grid-cols-4 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
