// src/components/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="relative bg-white rounded-2xl shadow-lg p-10 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
            <form className="flex flex-col sm:flex-row justify-center items-center max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;