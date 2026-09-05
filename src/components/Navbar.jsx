import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/initials.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 text-[#192915] font-medium z-50">

      {/* Logo */}
      <NavLink to="/">
        <img
          src={Logo}
          alt="my initials"
          style={{ width: '80px' }}
        />
      </NavLink>

      {/* Desktop menu */}
      <ul className="hidden md:flex text-[#FDD8A7] font-semibold gap-2">

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'font-bold'
              : 'hover:font-light'
          }
        >
          About
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? 'font-bold'
              : 'hover:font-light'
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'font-bold'
              : 'hover:font-light'
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? 'font-bold'
              : 'hover:font-light'
          }
        >
          Resume
        </NavLink>

      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 hover:cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 left-0 w-full h-screen bg-[#A6A0A4] flex flex-col justify-center items-center'
        }
      >

        <NavLink
          onClick={handleClick}
          to="/about"
          className={({ isActive }) =>
            `py-6 text-3xl text-[#B96248] hover:font-semibold text-shadow-lg ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          onClick={handleClick}
          to="/portfolio"
          className={({ isActive }) =>
            `py-6 text-3xl text-[#B96248] hover:font-semibold text-shadow-lg ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          onClick={handleClick}
          to="/contact"
          className={({ isActive }) =>
            `py-6 text-3xl text-[#18161A] hover:font-semibold text-shadow-lg ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          onClick={handleClick}
          to="/resume"
          className={({ isActive }) =>
            `py-6 text-3xl text-[#18161A] hover:font-semibold text-shadow-lg ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          Resume
        </NavLink>

      </ul>

    </div>
  );
};

export default Navbar;
