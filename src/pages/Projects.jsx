import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { projects } from '../data/data'

const Projects = () => {
  return (
    <section id='project' className=' min-h-[70vh] sm:pt-1'>
        <h1 className='underline underline-offset-2 text-4xl font-semibold text-center my-4'>Projects</h1>
        <div className=' flex flex-wrap justify-center min-w-[100%] my-2'>
          {projects.map((project, index) => (
            <ProjectCards 
              key={index} 
              name={project.name} 
              description={project.description} 
              image={project.image} 
              tags={project.tags}
              index={index}
              hosted_site_link={project.hosted_site_link}
              source_code_link={project.source_code_link}
             />
          ))}
        </div>
    </section>
  )
}

export default Projects