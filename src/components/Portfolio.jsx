import React from 'react';
import One from '../assets/one.png';
import Two from '../assets/two.png';
import Three from '../assets/three.jpg';
import Four from '../assets/four.jpg';
import Five from '../assets/five.jpg';
import Six from '../assets/six.png';


const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full lg:h-screen h-full bg-teal-900 '>
      
      {/* container start */}
      <div className='max-width-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='mt-28 pb-8'>
          <p className='text-5xl md:text-6xl font-bold inline text-[#fdd978]'>
            My Work
          </p>
          <p className='py-6 text-[#ffc9dc]'>
            Check out some of the fun things I recently did
          </p>
        </div>

        {/* job/grid container start*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* card item */}
          <div style={{backgroundImage: `url(${One})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 group-hover:duration-500'>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

          {/* card item */}
          <div style={{backgroundImage: `url(${Two})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 '>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

          {/* card item */}
          <div style={{backgroundImage: `url(${Three})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 '>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

          {/* card item */}
          <div style={{backgroundImage: `url(${Four})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 '>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

          {/* card item */}
          <div style={{backgroundImage: `url(${Five})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 '>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

          {/* card item */}
          <div style={{backgroundImage: `url(${Six})`}}
            className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div className='opacity-0 group-hover:opacity-100 '>                
                <span className='text-2xl font-bold text-[#8d767e] tracking-wider'>
                  Redact JS Application
                </span>

                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-3 py-2 m-2 bg-stone-400 text-cyan-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>


          </div>
          {/* card item */}

        </div>
        {/* job container end */}

      </div>
      {/* container end */}
                
    </div>
  )
}

export default Portfolio;
