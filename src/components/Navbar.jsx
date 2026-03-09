import React from "react";
import { Link, NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
  const [isOpen, setisopen] = useState(false);

  const toggleMenu = () => {
    setisopen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-20 w-full items-center justify-between bg-[#0f0f0f] px-5 text-[#A78BFA] lg:h-22 fixed z-10">
        <NavLink to="/"><h1 className="cursor-pointer text-xl font-bold">
          Aung Khant Si / Web Developer
        </h1></NavLink>

        {/* Mobile View Nav */}
        <span onClick={toggleMenu} className="cursor-pointer text-xl lg:hidden hover:text-">
          &#9776;
        </span>
        <ul
          className={`  fixed inset-0 flex transform flex-col items-center justify-center gap-15 bg-[#A78BFA] text-3xl font-bold text-[#ffffff] opacity-85 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-135"} duration-300`}
        >
          <li>
            <NavLink to="/" onClick={toggleMenu} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="About" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Projects" onClick={toggleMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop View Nav  */}

        <ul className="hidden gap-4 text-xl lg:flex text-[#ffffff] ">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "text-[#A78BFA]" : "text-[#ffffff] hover:text-[#A78BFA] transform duration-300" }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({isActive}) => isActive ? "text-[#A78BFA]" : "text-[#ffffff] hover:text-[#A78BFA] transform duration-300"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={({isActive}) => isActive ? "text-[#A78BFA]" : "text-[#ffffff] hover:text-[#A78BFA] transform duration-300"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({isActive}) => isActive ? "text-[#A78BFA]" : "text-[#ffffff] hover:text-[#A78BFA] transform duration-300"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
