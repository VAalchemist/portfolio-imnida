import React from 'react';
import One from '../assets/one.png';
// import Two from '../assets/two.png';
// import Three from '../assets/three.jpg';
// import Four from '../assets/four.jpg';
// import Five from '../assets/five.jpg';
// import Six from '../assets/six.png';


const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full h-screen bg-teal-900 '>
      
      {/* container start */}
      <div className='max-width-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bol inline border-b-4 border-cyan-600 text-gray-300'>
            Work
          </p>
          <p className='py-6'>
            WorkWorkWorkWorkWork
          </p>
        </div>

        {/* job/grid container start*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* card item */}
          <div className='shadow-lg shadow-stone-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover fx */}
              <div>                
                <span></span>

                <div>
                  <a href="/">
                    <button>

                    </button>
                  </a>

                  <a href="/">
                    <button>
                      
                    </button>
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
