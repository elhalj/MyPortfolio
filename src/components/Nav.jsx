import React, { useState } from 'react'
import { RiMenu4Line } from "react-icons/ri";

function Nav() {

  const [active, setActive] = useState(false)
  return (
    <>
      <header>
        <nav className='sm:bg-slate-100 sm:fle-col sm:justify-center md:bg-blue-300 lg:bg-green-500 md:flex md:justify-between md:p-8   '>
            <div className='font-mono'><h1>logo</h1></div>
            <div className='md:flex md:gap-20 font-mono hidden tracking-widest'>
              <h4 className='cursor-pointer'>About</h4>
              <h4 className='cursor-pointer'>Contact</h4>
              <h4 className='cursor-pointer'>Blog</h4>
              <h4 className='cursor-pointer'>Portfolio</h4>
            </div>
            <RiMenu4Line className='cursor-pointer md:hidden' onClick={() => setActive(true)} />
            {active && (<div className='md:flex md:gap-20 font-mono hidden tracking-widest'>
              <h4 className='cursor-pointer'>About</h4>
              <h4 className='cursor-pointer'>Contact</h4>
              <h4 className='cursor-pointer'>Blog</h4>
              <h4 className='cursor-pointer'>Portfolio</h4>
            </div>)}
        </nav>
      </header>
    </>
  )
}

export default Nav
