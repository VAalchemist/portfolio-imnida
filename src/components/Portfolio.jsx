import React from 'react';



const Portfolio = () => {
  return (
    <div className='w-full h-screen bg-[#2E4B47]'>
      
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
      
        <p className="text-[#FDD8A7] font-semibold text-center md:text-lg lg:text-xl py-2 px-12 max-w-[1000px]"> You can check out my{' '}
          <a
            href="https://www.youtube.com/watch?v=ABC123XYZ"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold underline hover:text-blue-600"
  >
            latest video
          </a>
          {' '}on YouTube.
        </p>
        <p className="text-[#FDD8A7] font-semibold text-center md:text-lg lg:text-xl py-2 px-12 max-w-[1000px]"> You can check out my{' '}
          <a
            href="https://www.youtube.com/watch?v=ABC123XYZ"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold underline hover:text-blue-600"
  >
            latest video
          </a>
          {' '}on YouTube.
        </p>

      </div>
      


    </div>
  )
}

export default Portfolio;

