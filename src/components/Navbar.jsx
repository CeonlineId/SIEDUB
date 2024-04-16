import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState('/');

  const menuItems = [
    { path: '/', label: 'Beranda' },
    { path: '/edukasi', label: 'Edukasi' },
    { path: '/informasi', label: 'Informasi' },
  ];

  const handleMenuClick = path => {
    setSelectedMenu(path);
  };

  return (
    <nav className="bg-white shadow-md flex flex-col items-center justify-between p-4 md:flex-row md:space-x-4">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My App
        </Link>
      </div>
      <ul className="mt-4 md:mt-0 flex space-x-4">
        {menuItems.map(item => (
          <li
            key={item.path}
            className={`text-gray-500 hover:text-gray-700 px-3 py-2 rounded cursor-pointer ${
              selectedMenu === item.path ? 'text-blue-500' : ''
            }`}
            onClick={() => handleMenuClick(item.path)}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
