import React from 'react'

const ProjectCards = ({ name, description, image, index, source_code_link, hosted_site_link }) => {
  const isLeftAligned = index % 2 === 0;
  const bgColors = [
    "bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-indigo-900 dark:border-indigo-800 dark:border-t",
    "bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t",
    "bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t",
    "bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t",
    "bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t",
  ]

  return (
    <div className={` sm:max-h-[400px] dark:text-white flex flex-col sm:flex-row justify-center rounded-lg mx-7 my-2 relative overflow-hidden ${index >= 0 ? (bgColors[index]) : "bg-red-500"} ${isLeftAligned ? '' : 'sm:flex-row-reverse'}`}>
      <div className={` sm:w-1/2 flex ${isLeftAligned ? ' justify-start' : 'justify-end'} `}>
        <img src={image} alt={name} className={`max-w-full h-full ${index >= 2 ? "py-3" : ""}`} />
      </div>
      <div className='px-2 bg-transparent relative flex flex-col justify-between sm:w-1/2'>
        <div>
          <h1 className=' underline underline-offset-2 my-3'>{name}</h1>
          <p>{description}</p>
        </div>
        <div className=' flex justify-center mb-10'>
          <button
            onClick={() => (location.href = { hosted_site_link })}
            className=' border rounded-full px-4 py-1 mx-4 dark:hover:bg-slate-100 dark:bg-white dark:text-black'
          >Visit  &#x1F517;</button>
          <button
            onClick={() => (location.href = { source_code_link })}
            className=' hover:border rounded-full px-4 py-1 mx-4 bg-transparent dark:text-white'
          >Github &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards