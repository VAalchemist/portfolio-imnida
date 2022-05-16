import React from 'react';
import Me from '../assets/avatar2.png';


function About() {
  return (
    <div name='about' className='w-full h-full bg-teal-900 pt-[150px]'>
      <div className='flex flex-col justify-center items-center w-full'>
        
        <div className='px-4 flex flex-col items-center'>
          <h1 className='text-[#fdd978] tracking-widest font-bold text-4xl sm:text-7xl py-2'>About Me!</h1>
        <img src={Me} alt="my face"  className='rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-3/5 md:w-3/4'/>
        </div>

        <p className='text-[#ffc9dc] mx-4 py-4 max-w-[700px]'>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>
        
      </div>
    </div>
  )
}

export default About



