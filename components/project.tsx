import React from 'react'
import {
  ExternalLink,
  Briefcase,

} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Project = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Nextjs", "Typescript", "TailwindCSS"]
    },
    {
      title: "Bloggify",
      description: "A blog application where you can write and share your thoughts",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["NextJs", "APIs", "TailwindCSS"]
    },
    {
      title: "Quizzer",
      description: "working Mode write Now",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "Nextjs", "TailwindCSS"]
    }
  ];
  return (
    <div>
      <motion.section
        id="projects"
        className="py-20 px-8 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex items-center mb-12">
          <Briefcase className="mr-4 text-purple-500" size={32} />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Project
