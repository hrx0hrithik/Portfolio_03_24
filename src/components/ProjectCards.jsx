import React from 'react'
import { motion } from "framer-motion"

const ProjectCards = ({ name, description, tags, image, image2, index, source_code_link, hosted_site_link }) => {
  const isLeftAligned = index % 2 === 0;
  const bgColors = [
    "bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t",
    "bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-indigo-900 dark:border-indigo-800 dark:border-t",
    "bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t",
    "bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t",
    "bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t",
  ]

  const ForLeftMotion = { x: -200 }
  const ForRightMotion = { x: 200 }

  return (
    <div className={` sm:max-h-[400px] dark:text-white text-[#444444] flex flex-col sm:flex-row justify-center rounded-3xl mx-7 my-4 relative overflow-hidden ${index >= 0 ? (bgColors[index]) : "bg-red-500"} ${isLeftAligned ? '' : 'sm:flex-row-reverse'}`}>
      <motion.div
        initial={isLeftAligned ? ForLeftMotion : ForRightMotion}
        exit={isLeftAligned ? ForLeftMotion : ForRightMotion}
        transition={{ duration: 1.5, delay: 0 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className={` sm:w-1/2 flex ${isLeftAligned ? ' justify-start' : 'justify-end'} relative `}
      >
        <img src={image} alt={name} className={`max-w-full h-full sm:py-4 py-2 object-scale-down`} />
        {image2 &&
          <motion.div
            initial={{ y: 220, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className=' absolute bottom-0 right-[12%] max-w-[25%] sm:mb-6'
          >
            <img src={image2} alt='mobile' className=' max-w-full inset-0' />
          </motion.div>
        }
      </motion.div>
      <div className='px-4 sm:px-8 sm:py-4 bg-transparent relative flex flex-col justify-around sm:w-1/2'>
        <div className=' sm:mt-12 mt-2'>
          <h1 className=' sm:my-4 text-3xl font-bold'>{name}</h1>
          <p className=' text-base font-medium '>{description}</p>
          <p className=' py-1 font-semibold'>
            {tags.map((tag) => (
              <span key={tag.name} className={`text-[14px] pr-2 ${tag.color}`} >
                #{tag.name}
              </span>
            ))}
          </p>
        </div>
        <div className=' flex justify-center sm:my-0 my-4 sm:h-12 sm:text-xl'>
          <button
            onClick={() => (window.open(hosted_site_link, '_blank'))}
            className=' border rounded-full px-4 py-2 mx-4 dark:hover:bg-slate-100 bg-white dark:text-black'
          >Visit&nbsp;&#x1F517;</button>
          <button
            onClick={() => (window.open(source_code_link, '_blank'))}
            className='border-2 border-transparent hover:border-white rounded-full px-4 py-2 mx-4 bg-transparent dark:text-white'
          >Github&nbsp;&rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards