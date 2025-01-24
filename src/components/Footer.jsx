import React from 'react'
import { MdContactMail, MdMoreTime } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className="bg-slate-800 text-white p-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Features</h1>
          <div className="mt-2 md:flex md:justify-around">
            <h2 className="text-xl">Contact Page <MdContactMail className='inline m-2' /></h2>
            <h2 className="text-xl">Blog Page <FaBloggerB className='inline m-2'/></h2>
            <h2 className="text-xl">Project Page <GoProjectSymlink className='inline m-2'/></h2>
            <h2 className="text-xl">And More <MdMoreTime className='inline m-2'/></h2>
          </div>
          <hr className='my-4'/>
          <div className="mt-4">
            <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
