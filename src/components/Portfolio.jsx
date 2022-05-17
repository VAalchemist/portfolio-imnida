import React from 'react';
import One from '../assets/one.png';
import Two from '../assets/two.png';
import Three from '../assets/three.jpg';
import Four from '../assets/four.jpg';
import Five from '../assets/five.jpg';
import Six from '../assets/six.png';


const Portfolio = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-teal-900 pt-28'>
      <div className='flex flex-col justify-center items-center bg-teal-900 w-full mt-16'>

        <div>
          <img src={One} alt="my werk stuff" style={{ width: '90px' }} />
        </div>

        <div>
          <img src={Two} alt="my werk stuff" style={{ width: '90px' }} />
        </div>
      
        <div>
          <img src={Three} alt="my werk stuff" style={{ width: '90px' }} />
        </div>
      
        <div>
          <img src={Four} alt="my werk stuff" style={{ width: '90px' }} />
        </div>
      
        <div>
          <img src={Five} alt="my werk stuff" style={{ width: '90px' }} />
        </div>
      
        <div>
          <img src={Six} alt="my werk stuff" style={{ width: '90px' }} />
        </div>
        
      </div>            
    </div>
  )
}

export default Portfolio
