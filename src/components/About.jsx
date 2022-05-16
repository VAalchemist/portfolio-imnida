import React from 'react';
import Me from '../assets/avatar2.png';


function About() {
  return (
    <div name='about' className='w-full h-screen bg-teal-900 pt-[150px]'>
      <div className='flex'>
        
        <div>
        <img src={Me} alt="my face" style={{ width: '190px' }} />
        </div>

        <p className='text-[#ffc9dc] py-4 max-w-[700px]'>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>
        
      </div>
    </div>
  )
}

export default About
