import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-teal-900'>
      
      {/* container */}
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>

        <p className='text-[#fdd978] text-sm'>Welcome in, my name is</p>
        <h1 className='text-stone-500 font-bold text-4xl sm:text-7xl'>Charlene Kim</h1>
        <h2 className='text-[#ffc9dc] text-3xl sm:text-7xl pb-4'>I'm an Ambitious<br />Full Stack Developer</h2>

        <div>
          <button className='text-white group text-sm border-2 px-3 py-2 my-2 flex items-center rounded hover:bg-[#ecdbba] hover:border-[#a3a9ae] hover:text-stone-700 hover:font-bold'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home;
