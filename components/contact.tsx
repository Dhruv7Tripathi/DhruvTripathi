import React from 'react'
import {
  Mail,
  Download,

} from 'lucide-react';
import { motion } from 'framer-motion';
const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  return (
    <div>
      <motion.section
        id="contact"
        className="py-20 px-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="mailto:contact@johndoe.com"
              className="flex items-center px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
