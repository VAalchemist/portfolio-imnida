import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#72807A]'>
      
      {/* container */}
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>

        <p className='text-[#2B315F] font-semibold text-sm'>Welcome in, my name is</p>
        <h1 className='text-[#2B315F] font-bold text-4xl sm:text-7xl'>Charlene Kim</h1>
        <h2 className='text-[#8D9ABC] text-3xl sm:text-7xl pb-4'>I'm an Ambitious<br />Full Stack Developer</h2>

        <div className='text-indigo-200 '>
          <a href='/portfolio' className='group text-sm border-2 border-indigo-200 px-3 py-2 my-2 flex items-center rounded hover:border-[#192915] hover:text-[#192915] hover:font-bold w-36'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Home;
