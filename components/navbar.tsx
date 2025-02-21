import React, { useState, useEffect } from 'react'
import {
  Download,
  Menu,
  X
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className={`px-4 py-2 transition-colors relative group ${isScrolled ? 'text-gray-800' : 'text-white'
        }`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  );
  return (
    <div>
      {/* Floating Navbar */}
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm' : ''
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span
              className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DT
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="/about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="/contactus">Contact</NavLink>
              <motion.a
                href="/Dhruv_Tripathi_Resume.pdf"
                download
                className="ml-4 px-6 py-2 bg-purple-500 text-white rounded-full flex items-center hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="mr-2" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-500">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-500">Skills</a>
            <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-500">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-500">Contact</a>
            <a
              href="/resume.pdf"
              download
              className=" px-3 py-2 rounded-md text-purple-500 hover:bg-purple-50 flex items-center"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  )
}

export default Navbar
