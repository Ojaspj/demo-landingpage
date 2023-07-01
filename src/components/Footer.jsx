import React from 'react'

import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
 


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Investopedia.</h1>
            <p className='py-4  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Cum sint atque alias qui, nam quo illum, nostrum, dolores facere assumenda est. 
                Labore, voluptas error mollitia nemo illum ducimus voluptate alias?</p>
            <div className='flex md:w-[75%] my-4 justify-between '>
                <AiFillFacebook size={40} />
                <AiFillTwitterSquare size={40} />
                <AiFillInstagram size={40} />
                <AiFillLinkedin size={40} />
                <AiFillGithub  size={40}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>FAQs</li>
                    <li className='py-2 text-sm'>Feedbacks</li>
                    <li className='py-2 text-sm'>Portal</li>
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400'>Categories</h6>
                <ul>
                    <li className='py-2 text-sm'>Tech</li>
                    <li className='py-2 text-sm'>Innovations</li>
                    <li className='py-2 text-sm'>Business</li>
                    <li className='py-2 text-sm'>Agriculture</li>
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Contact</li>
                    <li className='py-2 text-sm'></li>
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='font-sans '>2023&copy;Investopedia</p>
        </div>
    </div>
  )
}

export default Footer