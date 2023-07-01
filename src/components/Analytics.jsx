import React from 'react'
import Laptop from '../assets/laptop.jpeg'

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src= {Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold md:text-xl sm:2xl'>Investopedia</p>
                <h1 className='md:text-4xl font-bold py-2 sm:text-3xl text-2xl'>Invest In Your Future Today</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus facilis eius architecto eveniet, pariatur molestias possimus.
                     Voluptates, quos autem aliquam magni, nulla officia exercitationem, 
                     beatae enim commodi odio corrupti dicta!
                </p>
                <button className='bg-[black] w-[150px] text-[#00df9a] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>Invest Now</button>

            </div>
        </div>  
    </div>
  )
}

export default Analytics