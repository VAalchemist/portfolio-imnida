import React from 'react';
import Me from '../assets/avatar2.png';


function About() {
  return (


  <div name='about' className='w-full h-screen flex flex-col justify-center items-center bg-teal-900 pt-18'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>

      <div className='sm:text-right pb-6 pl-4'p>
        <h1 className='text-[#fdd978] text-4xl sm:text-6xl mt-12 font-bold sm:inline tracking-wide'>About Me!</h1>        
      </div>
          
          <div></div>
          
    </div>
          <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            
            <div className='sm:text-right text-4xl font-bold'>
              <img src={Me} alt="my face" className='rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-60 md:w-72' />
            </div>

          <div>
            <p className='text-[#ffc9dc] text-center md:text-lg lg:text-xl mx-4 py-2 max-w-[700px]'>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>

          </div>  
          
          </div>                     
    </div>     
  </div>


  )
}

export default About


    // <div>
    //       <p className='text-[#ffc9dc] '>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>
    //     </div>          
    //   </div>  
