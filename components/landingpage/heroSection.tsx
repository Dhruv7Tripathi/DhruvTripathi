import { Briefcase, Code2, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const achievements = [
  {
    title: 'Open Source',
    description: 'Active contributor to various open-source projects',
    href: 'https://github.com/Dhruv7Tripathi',
    icon: <Github className="w-6 h-6" />
  },
  {
    title: 'Technical Writing',
    description: 'Regular blog posts about web development',
    href: '/blogs',
    icon: <ExternalLink className="w-6 h-6" />
  }
];


const HeroSection = () => {
  return (
    <div>
      <header
        className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white flex  justify-center"
      >

        <div className="z-10 mt-28">
          <div className="text-xl sm:text-2xl text-neutral-300 mb-6">
            <span className="inline-block text-5xl">👋</span>
            <span className="ml-2">Hi there, I&apos;m</span>
          </div>
          <h1
            className="text-6xl sm:text-5xl font-semibold mb-4 text-white"
          >
            Dhruv Tripathi
          </h1>
          <h2
            className="text-2xl sm:text-2xl mb-8 text-neutral-100"
          >
            Frontend Developer
          </h2>

          {/* <div className="mt-12">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
          </div> */}
          <div className="bg-background max-w-xl rounded-xl shadow-xl backdrop-blur-sm bg-opacity-80 animate-fade-in-up">
            <p className="text-neutral-200 leading-relaxed text-lg mb-8">
              I&apos;m a passionate full-stack developer building web applications.
              I specialize in React, Node.js, and modern web technologies. When I&apos;m not coding,
              you can find me contributing to open-source projects or writing technical blog posts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 animate-fade-in-delay">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-6 rounded-2xl bg-gray-600 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-emerald-500 mr-3">{achievement.icon}</div>
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  </div>
                  <p className="text-white">{achievement.description}</p>
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:underline flex items-center mt-2"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
