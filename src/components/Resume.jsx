import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Resume() {
  return (
    <>
      <div name="resume" className='w-full h-screen flex flex-col justify-center items-center bg-teal-900 pt-20'>
        
        <h1 className='text-[#fdd978] tracking-widest font-bold text-4xl sm:text-6xl py-2'>Proficiencies</h1>

        <div className='flex flex-col sm:flex-row justify-center items-center bg-teal-900 w-full mt-16'>
          <div className='text-[#ffc9dc] text-center md:text-lg lg:text-xl mx-4 py-6 max-w-[700px]'>
            <h2 className='text-lg font-bold'>Front-End</h2>
            <p>| HTML | CSS(Tailwind) | JavaScript | Git/Github | React | Responsive Design |</p>
          </div>

          <div className='text-[#ffc9dc] text-center md:text-lg lg:text-xl mx-4 py-6 max-w-[700px]'>
            <h2 className='text-lg font-bold'>Back-End</h2>
            <p>| Node | Express JS | TDD | OOP | MySQL | MongoDB | GraphQL | Heroku | PWA | </p>
            </div>
          </div>  

        <div className='w-full h-[160px] flex sm:flex-row flex-col justify-center items-center px-4 py-4 text-stone-500'>
          <p className='font-semibold pr-4  tracking-wide'>You can download my resume here!</p>
          <a href='https://github.com/VAalchemist' className= 'hover:text-[#fdd978] hover:mt-[-5px] md:hover:mt-[-10px] duration-300 '><BsFillPersonLinesFill size={30} /></a>          
        </div>      
      </div>
    </>
  )
}

export default Resume;
