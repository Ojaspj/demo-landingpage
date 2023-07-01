import React from 'react'
import Single from '../assets/single.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
        <div className='text-center mb-12 md:text-4xl font-bold py-2 sm:text-3xl text-2xl'>Top Picks</div>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration:500'>
                <img src= {Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center'>Idea1</h2>
                <p className='text-center text-4xl'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-4 border-b mx-8 mt-4'>Idea Desriptions</p>
                    <p className='py-4 border-b mx-8'>Idea Desriptions</p>
                    <p className='py-4 border-b mx-8'>Idea Desriptions</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] text-[black] rounded-md font-bold my-6 mx-auto px-3  py-3'>More...</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  md:my-0 my-12  rounded-lg hover:scale-105 duration:500 bg-gray-100'>
                <img src= {Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center'>Idea2</h2>
                <p className='text-center text-4xl'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-4 border-b mx-8 mt-4'>Idea Desriptions</p>
                    <p className='py-4 border-b mx-8'>Idea Desriptions</p>
                    <p className='py-4 border-b mx-8'>Idea Desriptions</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] text-[black] rounded-md font-bold my-6 mx-auto px-3  py-3'>More...</button>
            </div>
            <div className=' w-full shadow-xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration:500'>
                <img src= {Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center'>Idea3</h2>
                <p className='text-center text-4xl'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-4 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-4 border-b mx-8'>1 Granted User</p>
                    <p className='py-4 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] text-[black] rounded-md font-bold my-6 mx-auto px-3  py-3'>More...</button>
            </div>

        </div>

    </div>
  )
}

export default Cards