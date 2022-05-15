import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  return (
    <div className='fixed bg-slate-800 w-full h-[80px] flex justify-between items-center px-4 text-lime-300 text-2xl font-bold'>            
      <div>
        <img src={Logo} alt="my initials" style={{ width: '90px' }} />
      </div>

      <div>
        <ul>
          <li>Charlene Kim</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>

    
  )
}

export default Navbar
