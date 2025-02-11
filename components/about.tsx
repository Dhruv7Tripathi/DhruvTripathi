import React from 'react'
import { motion } from 'framer-motion';
import {
  Code2,
  Briefcase,
  User,

} from 'lucide-react';
const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <motion.section
        id="about"
        className="py-20 px-8 max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex items-center mb-8">
          <User className="mr-4 text-purple-500" size={32} />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            I&apos;m a passionate full-stack developer building web applications.
            I specialize in React, Node.js, and modern web technologies. When I&apos;m not coding,
            you can find me contributing to open-source projects or writing technical blog posts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div
              className="flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 size={16} className="mr-2" />
              Clean Code Enthusiast
            </motion.div>
            <motion.div
              className="flex items-center px-4 py-2 bg-pink-50 rounded-full text-pink-600"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase size={16} className="mr-2" />
              Problem Solver
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="py-20 px-8 bg-gray-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code2 className="mr-4 text-purple-500" size={32} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'React', level: '95%' },
              { name: 'Node.js', level: '90%' },
              { name: 'TypeScript', level: '85%' },
              { name: 'JAVA', level: '80%' },
              { name: 'NextJs', level: '75%' },
              { name: 'Data structure', level: '85%' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
