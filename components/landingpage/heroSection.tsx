import React from 'react';
const HeroSection = () => {
  return (
    <div>
      <header
        className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white flex items-center justify-center"
      >

        <div className="text-center z-10">
          <div className="text-xl sm:text-2xl text-gray-300 mb-6">
            <span className="inline-block text-5xl">👋</span>
            <span className="ml-2">Hi there, I&apos;m</span>
          </div>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-4 text-white"
          >
            Dhruv Tripathi
          </h1>
          <h2
            className="text-2xl sm:text-3xl mb-8 text-green-400"
          >
            Frontend Developer
          </h2>

          <div className="mt-12">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;