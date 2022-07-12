import React from 'react';
import Me from '../assets/avatar2.png';
// imported on each component that will be using it
import Typed from 'react-typed';


function About() {
  return (


  <div name='about' className='w-full h-full sm:h-screen bg-[#72807A] pb-56'>
      <div className='flex flex-col items-center w-full h-full md:pt-16 lg:pt-28'>
        <div className='flex flex-col md:flex-row items-center mt-12'>
          <h1 className='text-[#192915] py-6 md:pr-6 text-4xl sm:text-6xl font-bold tracking-wide sm:inline'>About Me!</h1> 
        
        <img src={Me} alt="my face" className='rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-60 md:pb-2 md:w-72' />
        </div>        
        <p className='text-indigo-200 font-semibold text-center md:text-lg lg:text-xl py-2 px-12 max-w-[1000px]'>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying <Typed 
              className='md:text-3xl sm:text-2xl text-xl font-bold'
              strings={['singing.', 'voice acting.', 'gaming.', 'sewing.', 'eating.']}
              typeSpeed={120}
              backSpeed={140}
              loop /></p> 
    </div>     
  </div>


  )
}

export default About


    // <div>
    //       <p className='text-[#ffc9dc] '>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>
    //     </div>          
    //   </div>  
