
import { Github } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-18">


      <div className="navbar-start">

        <div className="dropdown">

          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>


          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#632EE3] border-b-2 border-[#632EE3] mb-1'
                  : 'text-gray-700 mb-1'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#632EE3] border-b-2 border-[#632EE3] mb-1'
                  : 'text-gray-700 mb-1'
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#632EE3] border-b-2 border-[#632EE3] mb-1'
                  : 'text-gray-700 mb-1'
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>


        <Link className="flex items-center gap-2" to="/">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            HERO.IO
          </span>
        </Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-medium text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#632EE3] border-b-2 border-[#632EE3]'
                : 'text-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? 'text-[#632EE3] border-b-2 border-[#632EE3]'
                : 'text-gray-700'
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? 'text-[#632EE3] border-b-2 border-[#632EE3]'
                : 'text-gray-700'
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">

        <Link
         target='b'
          to="https://github.com/zahirraihan26"
          className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]"
        >
          <Github  className="bg-white rounded-full mr-2" />
          <span className="text-white font-medium">Contribute</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;