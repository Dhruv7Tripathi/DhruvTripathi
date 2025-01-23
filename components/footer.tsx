import React from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="#"
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          <p className="text-gray-400">@dhruvtripathi</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
