import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
const heroSection = () => {
  return (
    <div>
      <motion.header
        className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute w-64 h-64 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: "20%",
            left: "20%"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            bottom: "10%",
            right: "20%"
          }}
        />

        <div className="text-center z-10">
          <div className="text-xl sm:text-2xl text-white/90 mb-6 animate-slide-down">
            <span className="inline-block text-5xl animate-wave">👋</span>
            <span className="ml-2">Hi there, I&apos;m</span>
          </div>
          <motion.h1
            className="text-6xl sm:text-7xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Dhruv Tripathi
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl mb-8 text-purple-100"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.div
            className="flex space-x-6 justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/Dhruv7Tripathi"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhruv-tripathi-9848792aa/"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="/contactus"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          <div className="mt-12 animate-fade-in-up-delay">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              View My Work
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  )
}

export default heroSection
