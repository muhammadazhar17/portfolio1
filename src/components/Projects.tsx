import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data=[
    {
        id: 0,
        title:"Todo List",
        desc: "A react a Typescript based app for managing and organization",
        img: "/download1.jpeg",
        tags:["React","Node", "CSS","Typescript"]
    },
    {
        id: 1,
        title:"Todo List",
        desc: "A react a Typescript based app for managing and organization",
        img: "/download2.jpeg",
        tags:["React","Node", "CSS","Typescript"]
    },
    {
      id: 2,
      title:"Todo List",
      desc: "A react a Typescript based app for managing and organization",
      img: "/Flower.jpg",
      tags:["React","Node", "CSS","Typescript"]
  }, 
]
const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='gri gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card 
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

export default projects