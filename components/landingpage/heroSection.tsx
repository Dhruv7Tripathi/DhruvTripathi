import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

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
            Full Stack Developer
          </h2>
          <div
            className="flex space-x-6 justify-center"
          >
            <a
              href="https://github.com/Dhruv7Tripathi"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-tripathi-9848792aa/"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="/contactus"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
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