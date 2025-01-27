import React, { useState } from 'react'
import { RiMenu4Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

function Nav() {

  const [active, setActive] = useState(true)

  return (
    <>
      <header className='top-0 bg-slate-300 z-10 sticky'>
        <nav className='flex justify-between h-14'>
            <div><h1 className='font-Meow text-5xl translate-x-3 font-bold'><Link to="/">Elhalj.</Link></h1></div>
            <div className="sm:hidden md:flex md:flex-row sm:flex-col font-mono tracking-widest sm:bg-purple-500 md:bg-slate-300 sm:h-64 md:h-10 sm:w-[118px] md:w-auto justify-between gap-36 py-2 px-2 md:translate-x-0  sm:translate-x-[90px]">
              <h4 className='cursor-pointer'><NavLink to="#about">About</NavLink></h4>
              <h4 className='cursor-pointer'><NavLink to="#contact">Contact</NavLink></h4>
              <h4 className='cursor-pointer'><NavLink to="Blog">Blog</NavLink></h4>
              <h4 className='cursor-pointer'><NavLink to="#portfolio">Portfolio</NavLink></h4>
            </div>
            {!active && <div className=" md:flex md:flex-row sm:flex-col font-mono tracking-widest sm:bg-slate-200 md:bg-slate-300 sm:h-64 md:h-10 sm:w-[130px] overflow-hidden md:w-auto justify-between gap-36 py-2 px-2 md:translate-x-0  sm:translate-x-[90px] duration-300">
              <h4 className='cursor-pointer my-4'><NavLink to="#about">About</NavLink></h4>
              <h4 className='cursor-pointer my-4'><NavLink to="#contact">Contact</NavLink></h4>
              <h4 className='cursor-pointer my-4'><NavLink to="Blog">Blog</NavLink></h4>
              <h4 className='cursor-pointer my-4'><NavLink to="#portfolio">Portfolio</NavLink></h4>
            </div>}
            {active && <RiMenu4Line className='cursor-pointer md:hidden z-10 text-3xl color text-purple-500 w-10 rounded-full h-10' onClick={() => setActive(!active)}/>}
            {!active && <IoIosCloseCircleOutline className='cursor-pointer md:hidden z-10 text-3xl color text-purple-500 w-10 rounded-full h-10' onClick={() => setActive(!active)}/>}
        </nav>
      </header>
    </>
  )
}

export default Nav
