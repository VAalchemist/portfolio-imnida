import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Error() {
  let navigate = useNavigate();

  return (
    <div className='w-full h-screen bg-teal-900 flex justify-between items-center px-4 font-bold text-7xl'>
      NOPE not here..

      <button onClick={() => {
        navigate("/");
      }}
        className='text-white group text-sm border-2 px-3 py-2 my-2 flex items-center rounded hover:bg-[#ecdbba] hover:border-[#a3a9ae] hover:text-stone-700 hover:font-bold'>Go Home
            <span className='group-hover:rotate-180 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
    </div>
  )
}

export default Error
