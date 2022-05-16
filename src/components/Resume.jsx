import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Resume() {
  return (
    <>
      <div>
        <h1>Proficiencies</h1>
        <div>
          <h2>Front-End</h2>
          <p>HTML | CSS | JavaScript | Git | Responsive Design | Gulp | jQuery | React | Tailwind | SASS | Bootstrap</p>
        </div>

        <div>
          <h2>Back-End</h2>
          <p>Node | Express JS | TDD | OOP | MySQL | Sequelize | MongoDB | Mongoose | REST API | GraphQL | Git | Heroku | MVC | PWA | </p>
        </div>

        <div className='w-full h-[160px] flex flex-col justify-center items-center px-4 py-4 text-stone-500'>
          <a href='https://github.com/VAalchemist' className= 'hover:text-cyan-800 hover:mt-[-10px] duration-300 '><BsFillPersonLinesFill size={30} /></a>
          <p className='font-semibold'>You can download my resume here!</p>
        </div>
      </div>
    </>
  )
}

export default Resume
