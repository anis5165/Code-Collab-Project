'use client';
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='bg-slate-100 flex items-center flex-wrap px-2 md:px-6'>
        <div className='w-24'><img className='pt-2' src="cc logo.png" alt="" /></div>
        <button
          className='inline-flex p-3 rounded lg:hidden ml-auto outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'bg-slate-300 rounded-xl ' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='gap-3 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link
               href="/"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Home
              </Link>

              <Link
               href="/about"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                About us
            </Link>

              <Link 
              href="/cprojects"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Project24
              </Link>


              <Link
               href="/contact"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Contact us
              </Link>
              <Link
               href="/login"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 bg-blue-500 rounded-lg items-center justify-center hover:bg-blue-700'>
                Sign In
              </Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar