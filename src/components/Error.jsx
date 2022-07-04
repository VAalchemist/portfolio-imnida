import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Err from "../assets/error.gif";

function Error() {
  let navigate = useNavigate();

  return (
    <div className='w-full h-screen flex justify-center items-center font-bold text-7xl'style={{ backgroundImage:`url(${Err})`,backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <button onClick={() => {
        navigate("/portfolio-imnida");
      }}
        className='text-purple-300 font-bold group text-sm border-2 px-3 py-2 my-2 flex items-center rounded hover:text-[#ecdbba] hover:border-[#a3a9ae] hover:text-stone-700 hover:font-bold'>Go Home
            <span className='group-hover:rotate-180 duration-300 ml-2'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
    </div>
  )
}

export default Error