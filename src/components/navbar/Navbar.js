import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";
import CV from "../../assets/Ahmed-Karara-CV.pdf";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed flex justify-between items-center shadow-md dark:shadow-[#040c16] w-full h-[70px] px-4 bg-white dark:bg-[#0a192f] dark:text-white z-10">
      {/* Logo */}
      <p className="text-4xl text-pink-600 z-10 font-semibold font-serif">
        <Link
          className="cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          duration={700}
        >
          A.K
        </Link>
      </p>

      {/* Navbar  */}
      <ul className="hidden lg:flex justify-between items-center gap-7 text-lg mr-8">
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="home"
            spy={true}
            smooth={true}
            duration={700}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="about"
            spy={true}
            smooth={true}
            duration={700}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="skills"
            spy={true}
            smooth={true}
            duration={700}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="projects"
            spy={true}
            smooth={true}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="contacts"
            spy={true}
            smooth={true}
            duration={700}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* dark and light mode */}
      <div className="flex justify-center items-center gap-3 text-2xl z-10">
        <MdWbSunny
          className={
            !darkMode ? "divide-slate-400 text-green-600" : "cursor-pointer"
          }
          onClick={() => setDarkMode(false)}
        />
        <div className="w-11 h-4 dark:bg-gray-100 bg-slate-300 rounded-full ">
          <div
            className={
              darkMode
                ? "w-5 h-4 rounded-[50%]  bg-pink-500 cursor-pointer translate-x-[24px] duration-300 ease-out"
                : "w-5 h-4 rounded-[50%]  bg-pink-500 cursor-pointer translate-x-0 duration-300 ease-out"
            }
            onClick={() => setDarkMode(!darkMode)}
          ></div>
        </div>
        <MdNightsStay
          className={
            darkMode ? "divide-slate-400 text-green-600" : "cursor-pointer"
          }
          onClick={() => setDarkMode(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div onClick={handleNav} className="lg:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "absolute left-[100%]"
            : "absolute transition duration-300 ease-out  top-0 left-0 w-full h-screen bg-zinc-100 dark:bg-[#0a192f] flex flex-col justify-center items-center gap-10 text-3xl"
        }
      >
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="home"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="about"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="skills"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleNav}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="projects"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleNav}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            activeClass="text-pink-400"
            to="contacts"
            spy={true}
            smooth={true}
            duration={700}
            onClick={handleNav}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div
        className={
          nav
            ? "flex fixed top-[40%] left-0 text-xl"
            : "hidden lg:flex fixed top-[40%] left-0 text-xl"
        }
      >
        <ul className="flex flex-col gap-1 py-2 text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/ahmed-karara-ba97b4166/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center p-1.5 bg-blue-700 w-[140px] ml-[-100px] hover:ml-0 duration-500"
            >
              <span>Linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ahmed-Karara"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center p-1.5 bg-black w-[140px] ml-[-100px] hover:ml-0 duration-500"
            >
              <span>Github</span>
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://Ahmed-Karara@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center bg-green-500 p-1.5 w-[140px] ml-[-100px] hover:ml-0 duration-500"
            >
              <span>Email</span>
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li>
            <a
              href={CV}
              download={CV}
              className="flex justify-between items-center bg-gray-500 p-1.5 w-[140px] ml-[-100px] hover:ml-0 duration-500"
            >
              <span className="ml-2">CV</span>
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
