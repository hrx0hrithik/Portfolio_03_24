import React from 'react'

const ProjectCards = ({ name, description, image, index, source_code_link, hosted_site_link }) => {
  const isLeftAligned = index % 2 === 0;
  const bgColors = [
    "bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t",
    "bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-indigo-900 dark:border-indigo-800 dark:border-t",
    "bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t",
    "bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t",
    "bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t",
  ]

  return (
    <div className={` sm:max-h-[400px] dark:text-white flex flex-col sm:flex-row justify-center rounded-3xl mx-7 my-4 relative overflow-hidden ${index >= 0 ? (bgColors[index]) : "bg-red-500"} ${isLeftAligned ? '' : 'sm:flex-row-reverse'}`}>
      <div className={` sm:w-1/2 flex ${isLeftAligned ? ' justify-start' : 'justify-end'} `}>
        <img src={image} alt={name} className={`max-w-full h-full sm:py-4 py-2 object-scale-down`} />
      </div>
      <div className='px-4 sm:px-8 sm:py-4 bg-transparent relative flex flex-col justify-around sm:w-1/2'>
        <div className=' sm:mt-12 mt-2'>
          <h1 className='  sm:my-4 text-3xl font-bold'>{name}</h1>
          <p className=' text-base '>{description}</p>
        </div>
        <div className=' flex justify-center sm:my-0 my-4 sm:h-12 sm:text-xl'>
          <button
            onClick={() => (window.open = { hosted_site_link })}
            className=' border rounded-full px-4 py-2 mx-4 dark:hover:bg-slate-100 bg-white dark:text-black'
          >Visit&nbsp;&#x1F517;</button>
          <button
            onClick={() => (window.open = { source_code_link })}
            className='border-2 border-transparent hover:border-white rounded-full px-4 py-2 mx-4 bg-transparent dark:text-white'
          >Github&nbsp;&rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards