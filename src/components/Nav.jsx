import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(true);

  return (
    <>
      <header className="top-0 bg-slate-300 z-10 sticky">
        <nav className="flex justify-between h-14">
          <div>
            <h1 className="font-Meow text-5xl translate-x-3 font-bold">
              <Link to="/">Elhalj.</Link>
            </h1>
          </div>

          <div
            className={
              active
                ? "hidden md:flex justify-between gap-36 py-2 px-2 font-Meow tracking-tighter text-4xl"
                : "bg-slate-200 w-full h-52 flex flex-col justify-around items-center font-Meow tracking-tighter text-3xl z-10"
            }
          >
            <h4 className="cursor-pointer">
              <NavLink to="#about">About</NavLink>
            </h4>
            <h4 className="cursor-pointer">
              <NavLink to="#contact">Contact</NavLink>
            </h4>
            <h4 className="cursor-pointer">
              <NavLink to="Blog">Blog</NavLink>
            </h4>
            <h4 className="cursor-pointer">
              <NavLink to="#portfolio">Portfolio</NavLink>
            </h4>
          </div>

          {!active ? (
            <IoIosCloseCircleOutline
              className="cursor-pointer md:hidden z-10 text-3xl color text-purple-500 w-10 rounded-full h-10 absolute right-0"
              onClick={() => setActive(!active)}
            />
          ) : (
            <RiMenu4Line
              className="cursor-pointer md:hidden z-10 text-3xl color text-purple-500 w-10 rounded-full h-10"
              onClick={() => setActive(!active)}
            />
          )}
        </nav>
      </header>
    </>
  );
}

export default Nav;
