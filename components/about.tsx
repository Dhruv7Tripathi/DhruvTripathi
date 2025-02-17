import React from 'react';
import { Code2, Briefcase, User, Github, ExternalLink } from 'lucide-react';
// import Link from 'next/navigation';
const About = () => {
  const skills = [
    {
      name: 'React',
      level: '95%',
      description: 'Modern React with Hooks, Context, Redux',
      color: 'bg-emerald-500'
    },
    {
      name: 'Node.js',
      level: '60%',
      description: 'Express, REST APIs',
      color: 'bg-emerald-500'
    },
    {
      name: 'TypeScript',
      level: '30%',
      description: 'Type-safe development, Interfaces',
      color: 'bg-emerald-500'
    },
    {
      name: 'JAVA',
      level: '80%',
      description: 'Classes, object Oriented Programming',
      color: 'bg-emerald-500'
    },
    {
      name: 'NextJs',
      level: '75%',
      description: 'SSR, ISR, API Routes',
      color: 'bg-emerald-500'
    },
    {
      name: 'Data Structures',
      level: '85%',
      description: 'Algorithms, Problem Solving',
      color: 'bg-emerald-500'
    }
  ];

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
      href: 'https://bloggify-two.vercel.app/',
      icon: <ExternalLink className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* <Link href="/about"> */}
      <section
        id="about"
        className="py-20 px-8 max-w-5xl mx-auto animate-fade-in"
      >
        <div className="flex items-center mb-8 animate-slide-down">
          <User className="mr-4 text-purple-500 animate-float-slow" size={32} />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80 animate-fade-in-up">
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            I&apos;m a passionate full-stack developer building web applications.
            I specialize in React, Node.js, and modern web technologies. When I&apos;m not coding,
            you can find me contributing to open-source projects or writing technical blog posts.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 hover:bg-purple-100 transition-colors animate-slide-up-delay">
              <Code2 size={16} className="mr-2 animate-wave" />
              Clean Code Enthusiast
            </div>
            <div className="flex items-center px-4 py-2 bg-pink-50 rounded-full text-pink-600 hover:bg-pink-100 transition-colors animate-slide-up-delay">
              <Briefcase size={16} className="mr-2 animate-wave" />
              Problem Solver
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-delay">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="text-emerald-500 mr-3">{achievement.icon}</div>
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
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
      </section>

      <section
        id="skills"
        className="py-20 px-8 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center mb-12 animate-slide-down">
            <Code2 className="mr-4 text-purple-500 animate-float-slow" size={32} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up-delay"
              >
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`${skill.color} h-full rounded-full animate-slide-up-delay`}
                    style={{
                      width: skill.level,
                      transition: `width 1s ease-out ${index * 0.1}s`
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 mt-2 block">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* </Link> */}
    </div>
  );
};

export default About;