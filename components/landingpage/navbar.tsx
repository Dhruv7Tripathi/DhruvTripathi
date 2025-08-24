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
    <nav className=" z-50 w-full bg-white dark:bg-black shadow-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <motion.span
            className="text-3xl font-bold text-neutral-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DT
          </motion.span>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-semibold items-center space-x-8">
            <Link href="/about" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">About</Link>
            <Link href="/contactus" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">ContactUs</Link>
            <Link href="/yourself" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">Blogs</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden overflow-hidden`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-100 dark:bg-gray-900">
          <Link href="/about" className="block px-3 py-2 font-semibold rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800">About</Link>
          <Link href="/contactus" className="block px-3 py-2 font-semibold rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800">ContactUs</Link>
          <Link href="/yourself" className="block px-3 py-2 font-semibold rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800">Blogs</Link>
        </div>
      </motion.div>
    </nav>

  );
};

export default Navbar;
