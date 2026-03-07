import { Github, Menu } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';
// We'll use a dynamic text logo instead of image to match the AI aesthetic
// import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 glass-panel border-x-0 border-t-0 bg-[rgba(15,17,26,0.7)] px-4 lg:px-18 py-2">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-300 hover:text-white">
              <Menu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content glass-panel rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-[rgba(255,255,255,0.1)]"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#06b6d4] bg-[rgba(6,182,212,0.1)] rounded-lg p-2 font-medium mb-1'
                    : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg p-2 mb-1'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#06b6d4] bg-[rgba(6,182,212,0.1)] rounded-lg p-2 font-medium mb-1'
                    : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg p-2 mb-1'
                }
              >
                Models
              </NavLink>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#06b6d4] bg-[rgba(6,182,212,0.1)] rounded-lg p-2 font-medium mb-1'
                    : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg p-2 mb-1'
                }
              >
                Installation
              </NavLink>
            </ul>
          </div>

          <Link className="flex items-center gap-2 lg:ml-0 ml-2" to="/">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              H
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              HERO<span className="text-[#06b6d4]">.AI</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium text-sm tracking-wide">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#06b6d4] after:rounded-full after:shadow-[0_0_10px_#06b6d4]'
                  : 'text-gray-400 hover:text-white transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? 'text-white relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#06b6d4] after:rounded-full after:shadow-[0_0_10px_#06b6d4]'
                  : 'text-gray-400 hover:text-white transition-colors'
              }
            >
              Models
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? 'text-white relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#06b6d4] after:rounded-full after:shadow-[0_0_10px_#06b6d4]'
                  : 'text-gray-400 hover:text-white transition-colors'
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <Link
            target="_blank"
            to="https://github.com/zahirraihan26"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-white transition-all shadow-sm"
          >
            <Github size={18} />
          </Link>
          <button className="btn btn-ai rounded-xl px-6 font-medium text-sm h-10 min-h-0 border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;