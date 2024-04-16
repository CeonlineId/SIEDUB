import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-white text-black p-4 px-20 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8 text-lg font-semibold">
                    <img src={logo} alt="Logo" className="w-25 h-14"/>
                    {/* Replace <a> tag with <NavLink> */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                        }
                    >
                        Beranda
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-black border-b-2 border-black" : "text-black hover:border-b-2 hover:border-black"
                        }
                    >
                        About
                    </NavLink>
                </div>
                <div className="flex gap-4 px-14">
                    <button className="border border-orange-600 border-3 hover:bg-orange-600 focus:bg-orange-600 text-black hover:text-white focus:text-white font-semibold py-1 px-5 rounded">
                        Informasi
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
