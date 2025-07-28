// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white">CricketTeam</h2>
          <img
            src="/logo-footer.png" 
            alt="CricketTeam Footer Logo" 
            className="w-32 mt-4" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-white mb-4">ABOUT US</h3>
            <p className="text-sm">
              We are dedicated to providing the best fantasy cricket experience. Assemble your dream team and compete with others.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">Players</a></li>
              <li><a href="#" className="hover:text-yellow-400">Team</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">SUBSCRIBE</h3>
            <p className="text-sm mb-4">Get the latest updates by subscribing to our newsletter.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-white focus:outline-none"
              />
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r-md">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-500 border-t border-slate-800 mt-12 pt-6 text-sm">
          <p>© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;