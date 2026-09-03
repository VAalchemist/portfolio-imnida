import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2E4B47]'>
      
      {/* container */}
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>

        <p className='text-[#90A875] font-semibold text-sm'>Welcome in, my name is</p>
        <h1 className='text-[#90A875] font-bold text-4xl sm:text-7xl'>Charlene Kim</h1>
        <h2 className='text-[#C4C7CC] text-3xl sm:text-7xl pb-4'>I'm an Ambitious<br />Voice Actor</h2>

        <div className='text-[#90A875] '>
          <Link to='/portfolio' className='group text-sm border-2 border-[#90A875] px-3 py-2 my-2 flex items-center rounded hover:border-[#C4C7CC] hover:text-[#C4C7CC] hover:font-bold w-36'>View Portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home;
