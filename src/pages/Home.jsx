import React, { useEffect } from 'react'
import ProfilePic from '../assets/Propic.jpg'

const Home = ({ isDarkTheme }) => {
  useEffect(() => {
    if( !isDarkTheme){
      document.getElementById("linkIcon").style.fill = "#000000"
    }else{
      document.getElementById("linkIcon").style.fill = "#ffffff"
    }
  
  }, [isDarkTheme])
  

  return (
    <div className='flex flex-col-reverse sm:flex-row justify-between min-w-full sm:h-[90vh] h-[80dvh]'>
      <div className=' sm:max-w-[50%] flex flex-col justify-center sm:items-start items-center'>
        <div className=' sm:mb-14 sm:mt-0 mt-5 my-6 max-w-[80%]'>
          <p className=' sm:text-[64px] text-[26px] font-OutfitNew leading-none font-bold '>Converting Ideas Into Dynamic Web Solutions.</p>
        </div>
        <div className=' flex justify-between max-w-[65%]'>
          <button
            className='  bg-yellow-400 hover:border  text-base text-black hover:text-white flex justify-center items-center px-5 py-2 rounded-full hover:cursor-pointer mr-2'
            onClick={() => (console.log("CV"))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <p className=' ml-1 font-semibold'>CV&nbsp;Download</p>
          </button>
          <button
            className='border border-yellow-400 hover:border-black hover:bg-yellow-400 text-base dark:text-white hover:text-black hidden sm:flex justify-center items-center  px-5 py-2 rounded-full cursor-pointer'
            onClick={() => (location.href = 'https://www.linkedin.com/in/hrithik-gupta-7314b6203/')}
            onMouseOver={() => (
              document.getElementById("linkIcon").style.fill = "#000000"
            )}
            onMouseOut={() => (
              isDarkTheme ?
              document.getElementById("linkIcon").style.fill = "#ffffff":
              document.getElementById("linkIcon").style.fill = "#000000"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="25 25 200 200" style={{ fill: '#000000' }}>
              <g id='linkIcon' fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="1" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <g transform="scale(5.12,5.12)">
                  <path d="M25,9c-8.822,0 -16,7.178 -16,16c0,8.822 7.178,16 16,16c8.822,0 16,-7.178 16,-16c0,-8.822 -7.178,-16 -16,-16zM25.02148,10.00391c8.27,0 15,6.729 15,15c0,8.271 -6.729,15 -15,15c-8.271,0 -15,-6.729 -15,-15c0,-8.271 6.729,-15 15,-15zM19.33203,16.63281c-0.775,0 -1.40234,0.6293 -1.40234,1.4043c0,0.775 0.62734,1.4043 1.40234,1.4043c0.775,0 1.4043,-0.6293 1.4043,-1.4043c0,-0.775 -0.6293,-1.4043 -1.4043,-1.4043zM18.86914,21.54492c-0.519,0 -0.93945,0.42045 -0.93945,0.93945v8.64844c0,0.519 0.42045,0.93945 0.93945,0.93945h0.92773c0.519,0 0.93945,-0.42045 0.93945,-0.93945v-8.64844c0,-0.519 -0.42045,-0.93945 -0.93945,-0.93945zM24.47266,21.54492c-0.512,0 -0.92773,0.41573 -0.92773,0.92773v8.67188c0,0.512 0.41573,0.92773 0.92773,0.92773h0.95313c0.512,0 0.92578,-0.41573 0.92578,-0.92773v-4.33594c0,-1.351 1.10603,-2.45508 2.45703,-2.45508c1.351,0 2.45508,1.10408 2.45508,2.45508v4.33594c0,0.512 0.41573,0.92773 0.92773,0.92773h0.95313c0.512,0 0.92578,-0.41573 0.92578,-0.92773v-5.03711c0,-2.52 -2.04055,-4.5625 -4.56055,-4.5625c-1.226,0 -2.3392,0.48644 -3.1582,1.27344v-0.3457c0,-0.512 -0.41378,-0.92773 -0.92578,-0.92773z"></path>
                </g>
              </g>
            </svg>

            <p className=' ml-1 font-semibold'>LinkedIn</p>
          </button>
        </div>
      </div>
      <div className='relative flex items-center justify-center'>
        <div className=' relative -top-1'>

          <svg className=' absolute -top-[8px] sm:-top-[15px] -left-[8px] sm:-left-[15px] sm:h-[430px] sm:w-[430px] h-[215px] w-[215px] stroke-[6px] sm:stroke-[12px]' xmlns="http://www.w3.org/2000/svg">
            <circle r="47%" cx="50%" cy="50%" fill="transparent" stroke="#FFAD00" />
          </svg>

          <svg className=' h-[200px] w-[200px] sm:h-[400px] sm:w-[400px]' xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="imgMask">
                <circle r='46%' cx='50%' cy='50%' fill="white" />
              </mask>
            </defs>
            <image
              fetchpriority="high"
              className=' hidden sm:block'
              xlinkHref={ProfilePic} // Set the image source
              x={10}
              y={10}
              width={380} // Set the width of the image
              height={390} // Set the height of the image
              mask="url(#imgMask)" // Apply the mask to the image
              alt="My Image"
            />
            <image
              className=' block sm:hidden'
              xlinkHref={ProfilePic} // Set the image source
              x={2}
              y={0}
              width={190} // Set the width of the image
              height={195} // Set the height of the image
              mask="url(#imgMask)" // Apply the mask to the image
              alt="My Image"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home