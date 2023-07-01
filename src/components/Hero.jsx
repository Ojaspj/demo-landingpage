import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className="text-[#00df9a] uppercase font-bold ">growing with investing</p>  
            <h1 className='text-[#00df9a] font-bold text-4xl md:text-7xl sm:text-6xl md:py-6'>Growing with investing.</h1>
            <div className='flex items-center justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast,flexible investing in</p>
                <Typed 
                  className = 'md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                  strings={['Tech','Business', 'Innovation','Agriculture']} 
                  typeSpeed = {120} 
                  backSpeed = {140} loop 
                />  
            </div>
            <p className='md:text-2xl font-bold text-xl text-gray-500 py-2'>Make your money work as hard as you do. Invest wisely and watch your wealth grow.</p>
            <button className='bg-[#00df9a] w-[150px]  rounded-md font-bold my-6 mx-auto px-6 py-3 text-black'>Invest Now</button>
        </div>
    </div>
  )
}

export default Hero