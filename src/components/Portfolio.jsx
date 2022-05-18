import React from 'react';
import One from '../assets/one.png';
// import Two from '../assets/two.png';
// import Three from '../assets/three.jpg';
// import Four from '../assets/four.jpg';
// import Five from '../assets/five.jpg';
// import Six from '../assets/six.png';


const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full h-screen bg-teal-900'>
      {/* container */}

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-[#fdd978]'>My Work</p>
          <p className='py-6 text-[#ffc9dc]'>Check out some of the fun things I recently did</p>
        </div>

        {/* project/grid container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* card item */}
          <div style={{backgroundImage: `url(${One})`}}
            className='shadow-2xl shadow-stone-400 group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-500'>
              <div>
                
                <span className='text-2xl font-bold text-[#ffc9dc] tracking-wider'>
                  First Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
        
      </div>            
    </div>
  )
}

export default Portfolio;
