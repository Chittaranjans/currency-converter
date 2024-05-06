import React from 'react'

function NavBar() {
  return (
    <nav className='bg-gray-800 fixed top-0 left-0 w-full z-10'>
      <div className='flex justify-between p-4'>
        <h3 className='text-white font-bold'>Currency Converter</h3>
        <ul className='flex'>
          <li className='ml-4'>
            <a href='/' className='text-white'>Home</a>
          </li>
          <li className='ml-4'>
            <a href='/Currency-converter' className='text-white'>Currency Converter</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar