import React from 'react'
import { motion } from "framer-motion"
import AboutImg from '../assets/3d-character-laptop.png'

const About = () => {
  return (
    <section id='about' className=' flex flex-col sm:flex-row justify-between sm:pb-2 sm:pt-10 min-h-[80vh] relative'>
      <div className=' flex-initial flex flex-col justify-between pb-5 sm:max-w-[50%]'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className=' underline underline-offset-2 text-3xl font-semibold'>About</h1>
          <p className=' my-8 text-base font-semibold'>
            👋 Hi, I'm <span className=' font-extrabold'>Hrithik Gupta</span>, a self-taught programmer with a passion for frontend and full-stack development.<br /><br />
            🎓 Currently in my final year of B.Tech, I've been honing my skills in web development, particularly in the <span className=' font-extrabold'>MERN</span> stack (MongoDB, Express.js, React, Node.js).<br /><br />
            💻 I excel in building modern web applications using technologies like React, Node.js, and more, with a keen interest in creating intuitive user interfaces.<br /><br />
            🌱 I'm also diving into <span className=' font-extrabold'>Next.js</span> for server-side rendering and <span className=' font-extrabold'>React Native</span> for mobile app development, expanding my skills to create versatile and responsive web solutions.<br /><br />
            🚀 Let's connect and discuss how we can collaborate on exciting web projects together!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex'
        >
          <a
            className=' hover:bg-gray-400/15 dark:hover:bg-slate-300/10 rounded-3xl'
            href='https://www.instagram.com/hrithik_gupta_hrx/'
            target='_blank'
            aria-label='social media links'
          >
            <motion.svg
              whileHover={{ translateY: -5, y: [-5, 0, -5], transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.1, }, }}
              className='px-3 cursor-pointer sm:w-24 sm:h-24 w-20 h-20'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fd5"></stop>
                <stop offset=".328" stopColor="#ff543f"></stop>
                <stop offset=".348" stopColor="#fc5245"></stop>
                <stop offset=".504" stopColor="#e64771"></stop>
                <stop offset=".643" stopColor="#d53e91"></stop>
                <stop offset=".761" stopColor="#cc39a4"></stop>
                <stop offset=".841" stopColor="#c837ab"></stop>
              </radialGradient>
              <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
              <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4168c9"></stop>
                <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
              </radialGradient>
              <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
              <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </motion.svg>
          </a>
          <a
            className=' hover:bg-gray-400/15 dark:hover:bg-slate-300/10 rounded-3xl'
            href='https://twitter.com/hrithik99_hrx'
            target='_blank'
            aria-label='social media links'
          >
            <motion.svg
              whileHover={{ translateY: -5, y: [-5, 0, -5], transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.1, }, }}
              className='px-3 cursor-pointer sm:w-24 sm:h-24 w-20 h-20'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path fill="#03a9f4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
              <path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"></path>
            </motion.svg>
          </a>
          <a
            className=' hover:bg-gray-400/15 dark:hover:bg-slate-300/10 rounded-3xl'
            href='https://www.facebook.com/hrithik.hrx'
            target='_blank'
            aria-label='social media links'
          >
            <motion.svg
              whileHover={{ translateY: -5, y: [-5, 0, -5], transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.1, }, }}
              className='px-3 cursor-pointer sm:w-24 sm:h-24 w-20 h-20 '
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
              <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
            </motion.svg>
          </a>
          <a
            className='hover:bg-gray-400/15 dark:hover:bg-slate-300/10 rounded-3xl'
            href='https://github.com/hrx0hrithik'
            target='_blank'
            aria-label='social media links'
          >
            <motion.svg
              whileHover={{ translateY: -5, y: [-5, 0, -5], transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.1, }, }}
              className='px-3 cursor-pointer sm:w-24 sm:h-24 w-20 h-20'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path fill="#2100c4" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path>
              <path fill="#ddbaff" d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z"></path>
              <path fill="#ddbaff" d="M15,18l3.838-1.279c1.01-0.337,1.231-1.684,0.365-2.302l-0.037-0.026 c-2.399,0.44-4.445,1.291-5.888,2.753C13.596,17.658,14.129,18,15,18z"></path>
              <path fill="#ddbaff" d="M28.693,14.402c-0.878,0.623-0.655,1.987,0.366,2.327L32.872,18c0.913,0,1.461-0.37,1.773-0.924 c-1.46-1.438-3.513-2.274-5.915-2.701C28.717,14.384,28.705,14.393,28.693,14.402z"></path>
              <path fill="#ddbaff" d="M24,31c-1.525,0-2.874,0.697-3.791,1.774C21.409,32.931,22.681,33,24,33s2.591-0.069,3.791-0.226 C26.874,31.697,25.525,31,24,31z"></path>
            </motion.svg>

          </a>
        </motion.div>
      </div>
      <div className='flex flex-initial sm:justify-end justify-center items-start sm:max-w-[50%]'>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={AboutImg} alt="3D Character" width={'95%'} />
      </div>
    </section>
  )
}

export default About