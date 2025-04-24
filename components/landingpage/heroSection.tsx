import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const HeroSection = () => {
  return (
    <div>
      <header
        className="h-screen flex items-center justify-center bg-white text-gray-800 relative overflow-hidden"
      >
        {/* <div
          className="absolute w-64 h-64 bg-purple-100 opacity-50 rounded-full"
        // style={{
        //   top: "20%",
        //   left: "20%"
        // }}
        /> */}
        {/* <div
          className="absolute w-96 h-96 bg-pink-100 opacity-50 rounded-full"
        // style={{
        //   bottom: "10%",
        //   right: "20%"
        // }}
        /> */}

        <div className="text-center z-10">
          <div className="text-xl sm:text-2xl text-gray-700 mb-6">
            <span className="inline-block text-5xl">👋</span>
            <span className="ml-2">Hi there, I&apos;m</span>
          </div>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-4 text-gray-900"
          >
            Dhruv Tripathi
          </h1>
          <h2
            className="text-2xl sm:text-3xl mb-8 text-green-600"
          >
            Full Stack Developer
          </h2>
          <div
            className="flex space-x-6 justify-center"
          >
            <a
              href="https://github.com/Dhruv7Tripathi"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github size={24} className="text-gray-800" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-tripathi-9848792aa/"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Linkedin size={24} className="text-gray-800" />
            </a>
            <a
              href="/contactus"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Mail size={24} className="text-gray-800" />
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
  )
}

export default HeroSection