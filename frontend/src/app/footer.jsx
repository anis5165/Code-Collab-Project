'use client';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className=' bg-gray-900 text-white'>
        <div className=''>
          <div className='text-xl text-center py-4 sm:pt-10'>
            <h2>C o d e   C o l l a b</h2>
          </div>
          <div className='flex justify-between items-center p-4 lg:px-20 md:px-10'>
            <div className='hidden sm:block w-52'>
              <img src="cc logo.png" alt="" />
            </div>
            <div className=''>
              <h2 className='mb-2 text-lg sm:text-xl'>Contact us</h2>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><span>+91 97297 06784</span></h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><span>ryan51@tomorjerry.com</span></h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><span>Lucknow, 226001</span></h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><span>Mon-Fri: 10-20, Sun: 12-16</span></h3>
            </div>
            <div className='pl-2'>
              <h2 className='mb-2 text-lg'>Our Services</h2>
              <h4 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><Link href="/">Home</Link></h4>
              <h4 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><Link href="/about">About</Link></h4>
              <h4 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><Link href="/contact">Contact</Link></h4>
              <h4 className='text-gray-300 text-sm mb-1 hover:text-gray-100'><Link href="/cprojects">Projects</Link></h4>
            </div>
            <div className='pl-2'>
              <h2 className='mb-2 text-lg'>Quick Links</h2>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'>Hiring</h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'>Knowledge Base</h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'>FAQ</h3>
              <h3 className='text-gray-300 text-sm mb-1 hover:text-gray-100'>Contact</h3>
            </div>
          </div>
          <div className='bg-gray-950 text-sm text-center p-4'>
            <div className='px-4'>Copyright &copy; 2024 All rights reserved | Block is made with by <Link href="/"><span className='text-blue-400 hover:text-blue-700'>Code Collab</span></Link></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer