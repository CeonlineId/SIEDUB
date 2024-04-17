import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  // State untuk mengatur visibilitas dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 px-20 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8 text-lg font-semibold">
          <img src={logo} alt="Logo" className="w-25 h-14" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-black border-b-2 border-black'
                : 'text-black hover:border-b-2 hover:border-black'
            }
          >
            Beranda
          </NavLink>
          <div className="relative">
            <a
              href="#"
              className="text-black"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Edukasi
            </a>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-gray-800 shadow-md rounded-md mt-1 py-2 w-48 font-normal text-sm">
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Banjir
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Kebakaran Hutan
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Longsor
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Tsunami
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Erupsi
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Gempa
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4 px-14">
          <NavLink
            to="/informasi"
            className="border border-[#FF3D00] border-3 hover:bg-[#FF3D00] focus:bg-[#FF3D00] text-black hover:text-white focus:text-white font-semibold py-1 px-5 rounded"
          >
            Informasi
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
