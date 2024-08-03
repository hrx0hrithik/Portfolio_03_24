import React from 'react'
import { motion } from "framer-motion"

const ExperienceCard = ({ icon, iconBg, title, company_name, date, points }) => {
    return (
        <div className='flex text-[#444444] dark:text-white'>
            <div className='max-w-20 mr-4'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`w-14 h-14 rounded-full ${iconBg ? `bg-[${iconBg}]` : "bg-white"} shadow-innNew`}
                >
                    <div className='top-0 w-full h-full flex justify-center items-center'>
                        <img className='w-[60%] h-[60%] object-contain' src={icon} alt="company icon" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0, y: -200 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='h-[80%] w-0 border-l-2 ml-[28px] mt-4 overflow-hidden'
                ></motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className='rounded-3xl p-6 bg-gray-400/15 backdrop-blur-lg'>
                <p className='text-2xl font-bold mb-3'>{title}</p>
                <p className='font-semibold text-xl'>{company_name}</p>
                <p className='text-sm mb-3 text-gray-700 dark:text-gray-400'>({date})</p>
                <div className='px-2'>
                    <ul className='list-disc text-base tracking-wide font-medium' >
                        {points.map((point, index) => (
                            <li key={index}> {point}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceCard