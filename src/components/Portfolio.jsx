import React from 'react';
import viper from '../assets/viper.jpg';
import sage from '../assets/sage.png';
import kj from '../assets/kj.jpg';



const Portfolio = () => {
  return (
    <div className='w-ful py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={viper} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Viper main</h2>
        <p className='text-center text-4xl font-bold'>$149</p>

        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
          <p className='py-2 border-b mx-8'>#1 main user</p>
          <p className='py-2 border-b mx-8'>Send up to 2 mollies</p>
        </div>

        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Start Trial</button>
      </div>

      <div className='w-full shadow-xl bg-stone-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={sage} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Sage main</h2>
        <p className='text-center text-4xl font-bold'>$149</p>

        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
          <p className='py-2 border-b mx-8'>#1 main user</p>
          <p className='py-2 border-b mx-8'>Send up to 2 orbs</p>
        </div>

        <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Start Trial</button>
      </div>
      

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={kj} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>KJ main</h2>
        <p className='text-center text-4xl font-bold'>$149</p>

        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
          <p className='py-2 border-b mx-8'>#1 main user</p>
          <p className='py-2 border-b mx-8'>Send up to 2 nanos</p>
        </div>

        <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Start Trial</button>
      </div>
      
      


    </div>
  </div>
  )
}

export default Portfolio;
