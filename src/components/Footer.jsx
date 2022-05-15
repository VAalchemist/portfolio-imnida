import React from 'react'
import {
  FaGithubSquare,
  FaStackOverflow,
  FaLinkedinIn,
  FaDiscord
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      
      <div className='flex justify-between'>
        <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>Made with stuff</h1>
        <p className='py-4 font-medium text-teal-400'>stuff here for the footer</p>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <a href='https://github.com/VAalchemist' className=''><FaGithubSquare size={25}/></a>
        </div>

        <div>          
          <a href='https://www.linkedin.com/in/charlene-kim-1a9a72226/'><FaLinkedinIn size={25}/></a>
        </div>

        <div>
          <a href='https://stackoverflow.com/users/17519926/char' className=''><FaStackOverflow size={25}/></a>
        </div>

        <div>
          <a href='https://discord.com/channels/@VAalchemist#3634' className=''><FaDiscord size={25}/></a>
        </div>
      </div>      
    </div>
  )
}
