import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'  >
                <h1 className= ' py-2 md:text-4xl sm:text-3xl text-2xl font-bold '>Sign up and stay up to date. </h1>
                <p>New Ideas Everyday.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='Enter email' className='p-3 rounded-md w-full text-black' />
                    <button className='bg-[#00df9a] w-[150px] text-[black] rounded-md font-bold my-6 mx-auto px-3 ml-2 py-3'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our  <span className='text-[#00df9a]'> <u>Privacy Policy.</u> </span> </p>

            </div>
        </div>
    </div>
  )
}

export default Newsletter