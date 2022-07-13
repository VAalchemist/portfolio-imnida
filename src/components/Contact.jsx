import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Contact = () => {
  return (
    <div name="contact" className='w-full h-full sm:h-screen bg-[#72807A] flex justify-center items-center pt-28'>
      <form method="POST" action="https://getform.io/f/de2d0bf5-9f19-40d2-bd26-9f0bff0f15d9" className='flex flex-col max-w-[600px] w-full max-h-lg h-full '>

        <div className='pb-8'>
          <p className='text-[#192915] text-4xl sm:text-6xl font-bold tracking-wide inline '>Contact</p>
          <p className='text-[#8D9ABC] font-bold p-4'>Submit form the below or email me || <a href="mailto:charlene.kim927@gmail.com" className='text-[#192915] hover:text-indigo-200 hover:font-bold'>charlene.kim927@gmail.com</a></p>
        </div>

        <input type="text" placeholder="Name" name="name" className='bg-transparent border-b border-[#192915] focus:outline-none text-[#2B315F] font-bold  placeholder:text-[#8D9ABC] p-2 rounded'></input>
        <input type="email" placeholder="Email" name="email" className='bg-transparent border-b border-[#192915] focus:outline-none text-[#2B315F] font-bold  placeholder:text-[#8D9ABC] my-4 p-2 rounded'></input>
        <textarea name="message" rows="10" placeholder='Message' className='max-h-sm h-full bg-transparent border-b border-[#192915] focus:outline-none text-[#2B315F] font-bold  placeholder:text-[#8D9ABC] p-2 rounded'></textarea>

        
        <div className='text-indigo-200 font-semibold'>
          <a href='/portfolio' className='group text-sm border-2 border-indigo-200 tracking-wide px-3 py-2 my-2 flex items-center rounded hover:border-[#192915] hover:text-[#192915] hover:font-bold w-36'>Collaborate!
            <span className='group-hover:rotate-180 group-hover:ml-4 duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </a>
        </div>
        
      </form>
      
    </div>
  )
}

export default Contact
