import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 text-stone-300 font-medium'>            
      <NavLink to="/portfolio-imnida">
        <img src={Logo} alt="my initials" style={{ width: '80px' }} />
      </NavLink>

      
      {/* menu */}      
      <ul className='hidden md:flex text-stone-300 gap-2'>          
          <NavLink to="/about" className='hover:font-semibold'>About</NavLink>
          <NavLink to="/portfolio" className='hover:font-semibold'>Portfolio</NavLink>
          <NavLink to="/contact" className='hover:font-semibold'>Contact</NavLink>
          <NavLink to="/resume" className='hover:font-semibold'>Resume</NavLink>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'fixed top-0 left-0 w-full h-screen bg-teal-900 flex flex-col justify-center items-center'}>
          <Link onClick={handleClick} to="/about" className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>About</Link>
          <Link onClick={handleClick} to="/portfolio" className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Portfolio</Link>
          <Link onClick={handleClick} to="/contact" className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Contact</Link>
          <Link onClick={handleClick} to="/resume" className='py-6 text-3xl text-stone-400 text-shadow-lg hover:text-stone-500'>Resume</Link>
      </ul>
    </div>

    
  )
}

export default Navbar;
