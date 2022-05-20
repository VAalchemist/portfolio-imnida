import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-teal-900 text-stone-300 font-medium'>            
      <div>
        <img src={Logo} alt="my initials" style={{ width: '80px' }} />
      </div>

      
      {/* menu */}      
        <ul className='hidden md:flex text-stone-300'>
          <li className='hover:font-semibold'>About</li>
          <li className='hover:font-semibold'>Portfolio</li>
          <li className='hover:font-semibold'>Contact</li>
          <li className='hover:font-semibold'>Resume</li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-teal-900 flex flex-col justify-center items-center'}>
          <li onClick={handleClick} className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>About</li>
          <li onClick={handleClick} className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Portfolio</li>
          <li onClick={handleClick} className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Contact</li>
          <li onClick={handleClick} className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Resume</li>
      </ul>
    </div>

    
  )
}

export default Navbar;
