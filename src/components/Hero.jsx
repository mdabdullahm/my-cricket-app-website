// src/components/Hero.jsx
const Hero = ({ onClaimCredits }) => { 
  return (
    <div className="bg-white pt-8">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl text-white text-center py-16 px-8 shadow-2xl">
          <img src="banner-main.png" alt="Cricket Logo" className="mx-auto h-24 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Get started with a free bonus!
          </p>
          <button 
            onClick={onClaimCredits} 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;