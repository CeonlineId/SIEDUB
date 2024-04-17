import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logoW.png';

const Navbar = () => {
    // State untuk mengatur visibilitas dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#FF3D00] text-white p-4 px-20 fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-8 text-lg font-semibold">
                        <img src={logo} alt="Logo" className="w-25 h-14"/>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-white border-b-2 border-white" : "text-white hover:border-b-2 hover:border-white"
                            }
                        >
                            Beranda
                        </NavLink>
                        <div 
                            className="relative"
                        >
                            <a href="#" className="text-white" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                Edukasi
                            </a>
                            {dropdownOpen && (
                                <div className="absolute top-full left-0 bg-gray-800 shadow-md rounded-md mt-1 py-2 w-48 font-normal text-sm">
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Banjir</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Kebakaran Hutan</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Longsor</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Tsunami</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Erupsi</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-white hover:bg-gray-700">Gempa</NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-4 px-14">
                        <NavLink
                            to="/informasi"
                            className="border border-white border-3 hover:bg-white focus:bg-white text-white hover:text-[#FF3D00] focus:text-[#FF3D00] font-semibold py-1 px-5 rounded"
                        >
                            Informasi
                        </NavLink>
                    </div>
                </div>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FF3D00" fillOpacity="1" d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,170.7C373.3,192,427,224,480,245.3C533.3,267,587,277,640,256C693.3,235,747,181,800,144C853.3,107,907,85,960,101.3C1013.3,117,1067,171,1120,181.3C1173.3,192,1227,160,1280,160C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </>
    );
};

export default Navbar;
