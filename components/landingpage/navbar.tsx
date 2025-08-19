import React, { useState, useEffect } from 'react';
import {
  Menu,
  X
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 0)", "rgba(17, 24, 39, 0.9)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md shadow-black/30 backdrop-blur-sm' : ''
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span
              className="text-2xl font-bold ml-24 px-40 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DT
            </motion.span>

            <div className="hidden md:flex items-center mr-16 space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link>
              <Link href="/contactus" className="text-gray-300 hover:text-green-400 transition-colors">ContactUs</Link>
              <Link href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</Link>
              <Link href="/blogs" className="text-gray-300 hover:text-green-400 transition-colors">Blogs</Link>
              {/* <motion.a
                href="/Dhruv_Tripathi_Resume.pdf"
                download
                className="ml-4 px-6 py-2 bg-green-600 text-white rounded-full flex items-center hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="mr-2" />
                Resume
              </motion.a> */}
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 shadow-lg">
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-green-400">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-green-400">Skills</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-green-400">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-green-400">Contact</a>
            {/* <a
              href="/resume.pdf"
              download
              className="px-3 py-2 rounded-md text-green-400 hover:bg-gray-800 flex items-center"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a> */}
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;