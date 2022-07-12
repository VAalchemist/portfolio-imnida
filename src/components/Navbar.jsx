import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 text-[#192915] font-medium'>            
      <NavLink to="/portfolio-imnida">
        <img src={Logo} alt="my initials" style={{ width: '80px' }} />
      </NavLink>

      
      {/* menu */}      
      <ul className='hidden md:flex text-[#192915] font-semibold gap-2'>          
          <NavLink to="/about" className='hover:font-light'>About</NavLink>
          <NavLink to="/portfolio" className='hover:font-light'>Portfolio</NavLink>
          <NavLink to="/contact" className='hover:font-light'>Contact</NavLink>
          <NavLink to="/resume" className='hover:font-light'>Resume</NavLink>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'fixed top-0 left-0 w-full h-screen bg-[#72807A] flex flex-col justify-center items-center'}>
          <Link onClick={handleClick} to="/about" className='py-6 text-3xl text-[#192915] hover:font-semibold text-shadow-lg '>About</Link>
          <Link onClick={handleClick} to="/portfolio" className='py-6 text-3xl text-[#192915] hover:font-semibold text-shadow-lg '>Portfolio</Link>
          <Link onClick={handleClick} to="/contact" className='py-6 text-3xl text-[#192915] hover:font-semibold text-shadow-lg '>Contact</Link>
          <Link onClick={handleClick} to="/resume" className='py-6 text-3xl text-[#192915] hover:font-semibold text-shadow-lg '>Resume</Link>
      </ul>
    </div>

    
  )
}

export default Navbar;
