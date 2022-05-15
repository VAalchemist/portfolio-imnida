import React from 'react'
import {
  FaGithubSquare,
  FaStackOverflow,
  FaLinkedinIn,
  FaDiscord
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-20 px-4 grid lg:grid-cols-3 gap-8 bg-slate-800 text-gray-300'>
      
      <div className='flex justify-between'>
        <h1 className='w-full font-bold m-4 text-[#00df9a]'>Made with stuff</h1>
        <p className='py-4 font-medium text-teal-400'>stuff here for the footer</p>
      </div>

      {/* socials */}
      <ul className='lg:col-span-2 flex  justify-between md:mt-6'>
        <li className='text-stone-500 flex flex-col hover:mt-[-10px] duration-300'>
          <a href='https://github.com/VAalchemist' className='ml-2 pb-2'><FaGithubSquare size={30} /></a>
          <p>GitHub</p>
        </li>

        <li className='text-stone-500 flex flex-col hover:mt-[-10px] duration-300'>
          <a href='https://www.linkedin.com/in/charlene-kim-1a9a72226/' className='ml-2 pb-2'><FaLinkedinIn size={30} /></a>
          <p>LinkedIn</p>
        </li>

        <li className='text-stone-500 flex flex-col hover:mt-[-10px] duration-300'>
          <a href='https://stackoverflow.com/users/17519926/char' className='ml-8 pb-2'><FaStackOverflow size={30} /></a>
          <p>StackOverflow</p>
        </li>

        <li  className='text-stone-500 flex flex-col hover:mt-[-10px] duration-300'>
          <a href='https://discord.com/channels/@VAalchemist#3634' className='ml-2 pb-2'><FaDiscord size={30} /></a>
          <p>Discord</p>
        </li>
      </ul>    
    </div>
  )
}
