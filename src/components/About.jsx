import React, { useEffect, useState } from 'react';
import Me from '../assets/avatar2.png';

const words = ['singing.', 'coding.', 'gaming.', 'sewing.', 'eating.'];

function About() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div
      name="about"
      className="w-full h-full sm:h-screen bg-[#23322D] pb-56"
    >
      <div className="flex flex-col items-center w-full h-full md:pt-16 lg:pt-28">
        <div className="flex flex-col md:flex-row items-center mt-12">
          <h1 className="text-[#90A875] py-6 md:pr-6 text-4xl sm:text-6xl font-bold tracking-wide sm:inline">
            About Me!
          </h1>

          <img
            src={Me}
            alt="my face"
            className="rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-60 md:pb-2 md:w-72"
          />
        </div>

        <p className="text-[#FDD8A7] font-semibold text-center md:text-lg lg:text-xl py-2 px-12 max-w-[1000px]">
          From the eclectic array of interests I acquired throughout the
          decades of my existence, voice acting has eagerly entered
          my arsenal of skills. My professional path has taken me through many
          twists and turns, yet I've always sought challenges and opportunities
          that are meaningful to me. If I'm not in booth,
          you can find me skillfully enjoying{' '}

          <span className="md:text-3xl sm:text-2xl text-xl font-bold">
            {displayText}
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;











//OLD CODE 09/02/26
//import React from 'react';
//import Me from '../assets/avatar2.png';
// imported on each component that will be using it
//import Typed from 'react-typed';


//function About() {
  //return (


  //<div name='about' className='w-full h-full sm:h-screen bg-[#72807A] pb-56'>
      //<div className='flex flex-col items-center w-full h-full md:pt-16 lg:pt-28'>
        //<div className='flex flex-col md:flex-row items-center mt-12'>
          //<h1 className='text-[#192915] py-6 md:pr-6 text-4xl sm:text-6xl font-bold tracking-wide sm:inline'>About Me!</h1> 
        
        //<img src={Me} alt="my face" className='rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-60 md:pb-2 md:w-72' />
        //</div>        
        //<p className='text-indigo-200 font-semibold text-center md:text-lg lg:text-xl py-2 px-12 max-w-[1000px]'>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying <Typed 
              //className='md:text-3xl sm:text-2xl text-xl font-bold'
              //strings={['singing.', 'voice acting.', 'gaming.', 'sewing.', 'eating.']}
              //typeSpeed={120}
              //backSpeed={140}
              //loop /></p> 
    //</div>     
  //</div>


  //)
//}

//export default About


    // <div>
    //       <p className='text-[#ffc9dc] '>From the eclectic array of interests I acquired  throughout the decades of my existence, full stack development has eagerly entered  my arsenal of skills. My professional path has taken me through many twists and turns, yet I've always sought challenges and opportunities that are meaningful to me. If I'm not tickling the ivory key caps, you can find me skillfully enjoying :word transitions: singing, voice acting, gaming, sewing, eating</p>
    //     </div>          
    //   </div>  
