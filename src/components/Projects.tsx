
import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data=[
    {
        id:0,
        title:"Countries Information",
        desc:"Developed a dynamic country listing app using Next.js, featuring efficient routing and real-time country data display.",
        img:"/project-1.jpg",
        tags:["Next.js", "React","TypeScript", "CSS"] ,
        width:24 
    },
    {
        id:1,
        title:"Interactive Resume Builder Project",
        desc:"Built an Interactive Resume Builder using Next.js, enabling users to create and customize resumes in real-time.",
        img:"/project-2.jpg",
        tags:["Next.js", "React","TypeScript", "CSS","Tailwind CSS"]   ,
         width:24 
    },
    {
        id:2,
        title:"Marksheet Generater",
        desc:"Developed a Marksheet Generator using HTML, CSS, and JavaScript to calculate and display student results dynamically.",
        img:"/project-3.jpg",
        tags:["Html","CSS","Javascript"],
        width:24 
    },
    {
        id:3,
        title:"Colorful- Atm-Machine",
        desc:"Developed a colorful ATM Machine simulation using Java, featuring a vibrant interface and basic ATM functionalities.",
        img:"/project-4.jpg",
        tags:["Javascript"],
        width:24 
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-10 xl:gap-y-5 md:grid-cols-2 lg:grid-cols-3 '>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img ={el.img}
            tags={el.tags}
        
            
            />))}

        </div>
      
    </div>
  )
}

export default Projects
