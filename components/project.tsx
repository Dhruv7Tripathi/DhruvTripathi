import React from 'react';
import { ExternalLink, Briefcase, Github } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      title: "CodeX",
      description: "An Ai platform where you ask your coding questions.",
      link: "https://ai-codexx.vercel.app/",
      github: "https://github.com/Dhruv7Tripathi/CodeX",
      imageUrl: "/FIXLY.AI.png",
      tags: ["Nextjs", "Typescript", "TailwindCSS", "PostgressSql"]
    },
    {
      title: "Bloggify",
      description: "Modern blog platform with markdown support, categories, and social sharing. Includes user authentication and comment system.",
      link: "https://your-blog-project.com",
      github: "https://github.com/yourusername/bloggify",
      imageUrl: "/logo.webp ",
      tags: ["NextJs", "APIs", "TailwindCSS", "MongoDB"]
    },
    {
      title: "Quizzer",
      description: "Interactive quiz application featuring multiple categories, real-time scoring, and leaderboards. Supports both single and multiplayer modes.",
      link: "https://quizzer-navy.vercel.app/",
      github: "https://github.com/Dhruv7Tripathi/quizzer",
      imageUrl: "/q.webp",
      tags: ["TypeScript", "Nextjs", "TailwindCSS", "PostgressSql"]
    },
    {
      title: "Donezo",
      description: "A simple to-do list application with user authentication and real-time updates. and task prioritization.",
      link: "https://donezo-psi.vercel.app/",
      github: "https://github.com/Dhruv7Tripathi/donezo",
      imageUrl: "/l2.webp",
      tags: ["TypeScript", "Nextjs", "TailwindCSS", "PostgressSql"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <section
        id="projects"
        className="py-20 px-4 sm:px-8 max-w-6xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="bg-purple-100 p-3 rounded-xl">
            <Briefcase className="text-purple-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            Featured Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 border border-purple-100/50"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;