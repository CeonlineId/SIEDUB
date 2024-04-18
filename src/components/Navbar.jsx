import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logoW from '../assets/images/logoW.png';

const Navbar = () => {
  // State untuk mengatur visibilitas dropdown dan sidebar
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [informasiClicked, setInformasiClicked] = useState(false);

  return (
    <nav className="bg-white text-black p-4 px-4 md:px-20 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 text-lg font-semibold">
          <img src={logo} alt="Logo" className="w-32 h-10" />
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive })  =>
                isActive
                  ? 'text-black border-b-2 border-black'
                  : 'text-black hover:border-b-2 hover:border-black'
              }
            >
              Beranda
            </NavLink>
            <div className="relative">
              <p
                className="text-black hover:cursor-pointer hover:border-b-2 hover:border-black flex gap-1 items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Edukasi
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </p>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-gray-800 shadow-md rounded-md mt-1 py-2 w-48 font-normal text-sm">
                  <NavLink
                    to="/edukasi/banjir"
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
        </div>
        <div className="flex gap-4 px-4 md:px-14">
          <NavLink
            to="/informasi"
            className={
              location.pathname === '/informasi'
                ? 'bg-[#FF3D00] text-white font-semibold py-1 px-5 rounded border border-[#FF3D00] hidden md:flex'
                : 'hover:bg-[#FF3D00] focus:bg-[#FF3D00] text-black hover:text-white focus:text-white font-semibold py-1 px-5 rounded border border-[#FF3D00] hidden md:flex'
            }
          >
            Informasi
          </NavLink>
          {/* Tombol hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 bg-[#1E1E1E]  z-20 w-64 h-full shadow-md ">
          <img src={logoW} alt="Logo" className="w-42 h-10 m-5" />
          <div className="flex flex-col py-4 ">
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:bg-gray-200"
            >
              Beranda
            </NavLink>
            <NavLink
              to="/edukasi"
              className="block px-4 py-2 text-white hover:bg-gray-200"
            >
              Edukasi
            </NavLink>
            <NavLink
              to="/informasi"
              className="block px-4 py-2 text-white hover:bg-gray-200"
            >
              Informasi
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
