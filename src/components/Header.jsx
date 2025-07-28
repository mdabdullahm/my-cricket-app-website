// src/components/Header.jsx
import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';
import { CgMenu, CgClose } from "react-icons/cg";

const Header = ({ coins }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className='flex justify-center items-center gap-2'>
          <img className='w-10' src="/logo.png" alt="CricketTeam Logo" />
          <a href="#" className="text-xl font-bold text-gray-800">CricketTeam</a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-600 hover:text-yellow-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500">Players</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500">Team</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500">Schedule</a>
        </div>
        
        <div className="flex items-center gap-4"> 
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
            <FaCoins className="text-yellow-500 text-lg" />
            <span className="font-semibold text-gray-700">
              Coin {coins.toLocaleString()}
            </span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <CgClose className="text-2xl text-gray-700" />
              ) : (
                <CgMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`md:hidden bg-white shadow-lg absolute left-0 w-full transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'top-full opacity-100 visible' 
            : 'top-0 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg">Home</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg">Players</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg">Team</a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg">Schedule</a>
        </div>
      </div>
    </header>
  );
};

export default Header;