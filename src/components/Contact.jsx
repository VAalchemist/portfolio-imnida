import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-teal-900 flex justify-center items-center px-4 pt-28'>
      <form method="POST" action="https://getform.io/f/de2d0bf5-9f19-40d2-bd26-9f0bff0f15d9" className='flex flex-col max-w-[600px] w-full'>

        <div className='pb-8'>
          <p className='text-[#fdd978] text-4xl sm:text-6xl font-bold tracking-wide inline '>Contact</p>
          <p className='text-[#ffc9dc] p-4'>Submit form the below or email me || charlene.kim927@gmail.com</p>
        </div>

        <input type="text" placeholder="Name" name="name" className='bg-stone-500 p-2 rounded'></input>
        <input type="email" placeholder="Email" name="email" className='my-4 p-2 bg-stone-500 rounded'></input>
        <textarea name="message" rows="10" placeholder='Message' className='bg-stone-500 p-2 rounded'></textarea>

        <button className=' px-3 py-2 mx-auto my-8 flex items-center bg-stone-300 rounded-lg text-emerald-700 font-bold text-lg hover:bg-stone-400 hover:text-shadow-lg'>Let's Collaborate</button>
        
      </form>
      
    </div>
  )
}

export default Contact
