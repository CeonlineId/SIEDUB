import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logoW from '../assets/images/logoW.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [informasiBelow, setInformasiBelow] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setInformasiBelow(!informasiBelow);
  };

  return (
    <nav className="bg-white text-black p-4 px-4 md:px-20 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 text-lg font-semibold">
          <Link to="/" className="w-32 h-10">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
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
              <p
                className="text-black hover:cursor-pointer hover:border-b-2 hover:border-black flex gap-1 items-center"
                onClick={toggleDropdown}
              >
                Edukasi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </p>
              {dropdownOpen && (
                <div className={`absolute ${informasiBelow ? 'top-full' : 'bottom-full'} left-0 bg-gray-800 shadow-md rounded-md mt-1 py-2 w-48 font-normal text-sm`}>
                  <NavLink
                    to="/edukasi/banjir"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Banjir
                  </NavLink>
                  <NavLink
                    to="/edukasi/kebakaran-hutan"
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
            onClick={toggleSidebar}
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
        <div className="md:hidden fixed inset-y-0 right-0 bg-[#1E1E1E] z-20 w-64 shadow-md">
          <div className="flex items-center justify-center px-2 mr-10 relative">
            <img src={logoW} alt="Logo" className="w-42 h-10 m-5 mr-10" />
            <a onClick={toggleSidebar} className="flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-white opacity-5 rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col py-4 ">
            <NavLink to="/" className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
              <div className="flex items-start justify-start px-1 py-2">
                <svg xmlns="http://www.w3.org/20040/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <span className="ml-4">Beranda</span>
            </NavLink>

            <NavLink className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
              <div className="relative">
                <div className="flex items-start justify-start px-1 py-2" onClick={toggleDropdown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="ml-5">Edukasi</span>
                </div>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 shadow-lg rounded-md mt-1 py-2 w-48 font-normal text-sm border border-gray-600 ml-8">
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
            </NavLink>
            <NavLink to="/informasi" className={`flex items-center px-4 py-2 text-white hover:bg-gray-700 ${informasiBelow ? 'mt-60' : ''}`}>
              <div className="flex items-start justify-start px-1 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </div>
              <span className="ml-4">Informasi</span>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
