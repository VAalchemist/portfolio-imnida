import React from 'react';
import viper from '../assets/viper.jpg';


const Portfolio = () => {
  return (
    <div className='w-full h-full py-[10rem] pb-96 bg-teal-900'>
      
      {/* Card Content */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mb-12'>
        
      {/* First Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>Forged Ensemble</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className=' text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
            <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              Mongoose ||
              MongoDB</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Send up to 2 mollies</p>
        </div>

          <div className='flex justify-between'>
            <a href='https://github.com/VAalchemist/forged-ensemble' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
        
      {/* Second Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>Duty Call</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className='text-center font-medium '>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
           <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              Mongoose ||
              MongoDB</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Send up to 2 mollies</p>
        </div>

          <div className='flex justify-between'>
            <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
      
    {/* Third Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>KLEC Search</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className='text-center font-medium '>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
           <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              Mongoose ||
              MongoDB</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Send up to 2 mollies</p>
        </div>

          <div className='flex justify-between'>
            <a href='/' className=' bg-amber-100 text-sm hover:text-rose-600 hover:text-base text-center w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
      </div>

      
      {/* Card Content */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
      {/* First Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>Shop It Up</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className='text-center font-medium '>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
           <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              Mongoose ||
              MongoDB</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Send up to 2 mollies</p>
        </div>

          <div className='flex justify-between'>
            <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center  hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
        
      {/* Second Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>Techh Talk</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className='text-center font-medium '>
          <p className='py-2 border-b mx-8 mt-8'>CMS-style blog site similar to a Wordpress site where the user can post and comment.</p>
           <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              MySQL ||
              Sequelize||
              Express-Handlebars ||
            MVC paradigm</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Front End && Back End</p>
        </div>

          <div className='flex justify-between'>
            <a href='/' className=' bg-amber-100 text-sm hover:text-rose-600 hover:text-base w-[100px] text-center rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
      
    {/* Third Card */}
      <div className='bg-teal-700 w-full shadow-xl flex flex-col p-4 sm:mt-4 rounded-lg text-rose-300 hover:scale-105 duration-300' >
        
        <h2 className='text-2xl font-bold text-center py-8'>Inst API</h2>
        <img className='w-20 mx-auto' src={viper} alt="/" />

        <div className='text-center font-medium '>
          <p className='py-2 border-b mx-8 mt-8'>An API for a social network web application.</p>
           <p className='py-2 border-b mx-8'><span className='font-bold'>Tech Used: </span>
              Javascript ||
              Node ||
              Express ||
              Mongoose ||
              MongoDB</p>
          <p className='py-2 border-b mx-8'><span className='font-bold'>Role</span>: Back End</p>
        </div>

          <div className='flex justify-between'>
            <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>Code</a>
          <a href='/' className=' bg-amber-100 text-sm text-center hover:text-rose-600 hover:text-base w-[100px] rounded-md font-bold  text-teal-700 my-8 mx-auto md:mx-0 py-3 '>App</a>
          </div>
        </div>
      </div>      


  </div>
  )
}

export default Portfolio;
