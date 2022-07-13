import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Resume() {
  return (
    <>
      <div name="resume" className='w-full h-screen flex flex-col justify-center items-center bg-[#72807A] pt-20'>
        
        <h1 className='text-[#192915] tracking-widest font-bold text-4xl sm:text-6xl py-2'>Proficiencies</h1>

        <div className='flex flex-col sm:flex-row justify-center items-center max-w-4xl w-full mt-16'>
          <div className='flex flex-col items-center text-[#192915] font-bold text-center md:text-lg lg:text-xl mx-4 max-w-[700px]'>
            <h2 className='my-4 text-xl shadow-lg rounded-lg shadow-[#2B315F]/50 w-2/3'>Front-End</h2>
            <p className='text-[#2B315F] font-semibold'>| HTML | CSS(Tailwind) | JavaScript | Git/Github | React | Responsive Design |</p>
          </div>

          <div className='flex flex-col items-center text-[#2B315F] font-bold text-center md:text-lg lg:text-xl mx-4 max-w-[700px'>
            <h2 className=' my-4 text-[#192915] text-xl text-shadow-xl shadow-lg rounded-lg shadow-[#2B315F]/50 w-2/3'>Back-End</h2>
            <p className='text-[#2B315F] font-semibold'>| Node | Express JS | TDD | OOP | MySQL | MongoDB | GraphQL | Heroku | PWA | </p>
            </div>
          </div>  

        <div className='w-full h-[160px] flex sm:flex-row flex-col justify-center items-center px-4 py-4 text-[#8D9ABC]'>
          <p className='font-semibold pr-4  tracking-wide'>You can download my resume here!</p>
          <a href={process.env.PUBLIC_URL + "/Resume 2022.pdf"} className= 'hover:text-[#2B315F] hover:mt-[-5px] md:hover:mt-[-10px] duration-300 '><BsFillPersonLinesFill size={30} /></a>          
        </div>      
      </div>
    </>
  )
}

export default Resume;
