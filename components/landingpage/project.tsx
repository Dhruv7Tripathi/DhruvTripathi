import React from 'react';
import { ExternalLink, Briefcase, Github } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/contant';
const Project = () => {
  return (
    <div className="min-h-screen bg-black text-foreground p-8">
      <section
        id="projects"
        className="py-20 px-4 sm:px-8 max-w-6xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="bg-white p-3 rounded-xl">
            <Briefcase className="text-foreground" size={32} />
          </div>
          <h2 className="text-3xl font-bold ml-4 text-white">
            Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-700 rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 border border-foreground/10"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-emerald-400 rounded-full text-sm font-medium border border-foreground/10"
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
                    className="inline-flex items-center px-4 py-2 bg-foreground text-green-500 rounded-lg hover:bg-foreground/90 transition-colors duration-300"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-foreground/20 text-white rounded-lg hover:bg-gray-500 transition-colors duration-300"
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