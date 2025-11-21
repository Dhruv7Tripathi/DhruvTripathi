"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <motion.nav
        className={`sticky z-10 top-0 w-full transition-all duration-300 
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span
              className="text-3xl font-bold  lg:ml-11 px-2 lg:px-44  text-neutral-800 dark:text-white"

            >
              DT
            </motion.span>

            <div className="hidden md:flex font-semibold items-center mr-20 space-x-8">
              <Link href="/about" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">About</Link>
              <Link href="/contactus" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">ContactUs</Link>
              <Link href="/yourself" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">Blogs</Link>
              {/* <motion.a
                href="/Dhruv_Tripathi_Resume.pdf"
                download
                className="ml-4 px-6 py-2 bg-white text-white rounded-full flex items-center hover:bg-white transition-colors"
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
          <div className="px-2 pt-2 pb-3  space-y-1 bg-neutral-950 shadow-lg">
            <a href="/about" className="block px-3 py-2 font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">About</a>
            <a href="/contactus" className="block px-3 py-2 font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">ContactUs</a>
            <a href="/yourself" className="block px-3 py-2  font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Blogs</a>

          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
