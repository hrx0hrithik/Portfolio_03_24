
const Background = () => {

  return (
    <span className=' relative z-0 md:block hidden'>
      <svg className=' absolute -left-[640px] backdrop-filter blur-[150px] w-[750px] h-[750px]' >
        <circle cx={350} cy={350} r={375} fill='#ffae00e6' />
      </svg>
      <svg className=' absolute -right-[530px] top-[450px] backdrop-filter blur-[150px] w-[750px] h-[750px]' >
        <circle cx={375} cy={375} r={375} fill='#428188' />
      </svg>
      <svg className='absolute w-5 h-5 top-24 right-[510px] backdrop-filter blur-[6px]'>
        <circle cx={"50%"} cy={"50%"} r={'50%'} fill='#428188' />
      </svg>
      <svg className=' absolute w-10 h-10 top-16 right-[250px] backdrop-filter blur-[16px]'>
        <circle cx={"50%"} cy={"50%"} r={'50%'} fill='#ffd700e6' />
      </svg>
      <svg className=' absolute w-28 h-28 top-[1230px] left-6 backdrop-filter blur-[50px]'>
        <circle cx={"50%"} cy={"50%"} r={'50%'} fill='#9600c0d6' />
      </svg>
      <svg className=' absolute right-[50px] top-[1450px] backdrop-filter blur-[60px] w-[180px] h-[180px]' >
        <circle cx={"50%"} cy={"50%"} r={"50%"} fill='#0d00ffe1' />
      </svg>
      <svg className=' absolute -left-[250px] top-[1950px] backdrop-filter blur-[150px] w-[350px] h-[350px]' >
        <circle cx={"50%"} cy={"50%"} r={"50%"} fill='#5ad2dde6' />
      </svg>
    </span>
  )
}

export default Background