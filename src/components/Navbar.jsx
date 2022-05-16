import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed bg-teal-900 w-full h-[70px] flex justify-between items-center px-4 text-stone-300 font-medium'>            
      <div>
        <img src={Logo} alt="my initials" style={{ width: '90px' }} />
      </div>

      
      {/* menu */}      
        <ul className='hidden md:flex '>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-teal-900 flex flex-col justify-center items-center'}>
          <li className='py-6 text-3xl'>About</li>
          <li className='py-6 text-3xl'>Portfolio</li>
          <li className='py-6 text-3xl'>Contact</li>
          <li className='py-6 text-3xl'>Resume</li>
      </ul>
    </div>

    
  )
}

export default Navbar
