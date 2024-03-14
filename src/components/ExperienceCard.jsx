import React from 'react'

const ExperienceCard = ({ icon, title, company_name, date, points }) => {
    return (
        <div className='flex '>
            <div className='max-w-20 mr-4'>
                <div className='  w-14 h-14 rounded-full bg-white shadow-innNew '>
                    <div className='  top-0 w-full h-full flex justify-center items-center '>
                        <img className=' w-[60%] h-[60%] object-contain ' src={icon} alt="company icon" />
                    </div>
                </div>
                <div className=' h-[80%] w-0 border-l-2 ml-[28px] mt-4'></div>
            </div>
            <div className=''>
                <p className='text-2xl font-bold mb-3'>{title}</p>
                <p className=' font-semibold text-xl'>{company_name}</p>
                <p className=' text-sm italic mb-3 text-gray-700 dark:text-gray-400'>({date})</p>
                <div>
                    <ul className=' list-disc list-inside text-base tracking-wide' >
                        {points.map((point, index) => (
                            <li key={index}> {point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard