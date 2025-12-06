"use client";
import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="">
              <motion.span
                className="text-3xl font-bold ml-4 px-2   text-neutral-800 dark:text-white"

              >
                DT
              </motion.span>
            </Link>

            <div className="hidden md:flex font-semibold items-center  space-x-6 ">
              {/* <Link href="/about" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">About</Link> */}
              <Link href="https://x.com/dhruvtripathi77" target='_blank' className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">
                <motion.span
                  initial="initial"
                  whileHover="hover"
                  className="relative inline-flex items-center gap-2 cursor-pointer"
                >
                  {/* Resume Text */}
                  <motion.span
                    className="text-lg font-medium"
                    variants={{
                      // hover: { color: "#38bdf8" } // change color based on theme
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    ContactMe
                  </motion.span>
                  {/* Underline */}
                  <motion.span
                    className="absolute left-0 -bottom-[2px] h-[2px] bg-current w-24"
                    variants={{
                      initial: { scaleX: 0 },
                      hover: { scaleX: 1 }
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />

                  {/* Arrow Animation */}
                  <motion.span
                    className="opacity-0 mt-2 "
                    variants={{
                      hover: { y: -2, opacity: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Link>

              <Link href="/resume.pdf" target="_blank" className="inline-flex items-center">
                <motion.span
                  initial="initial"
                  whileHover="hover"
                  className="relative inline-flex items-center gap-2 cursor-pointer"
                >
                  {/* Resume Text */}
                  <motion.span
                    className="text-lg font-medium"
                    variants={{
                      // hover: { color: "#38bdf8" } // change color based on theme
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    Resume
                  </motion.span>
                  {/* Underline */}
                  <motion.span
                    className="absolute left-0 -bottom-[2px] h-[2px] bg-current w-16"
                    variants={{
                      initial: { scaleX: 0 },
                      hover: { scaleX: 1 }
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />

                  {/* Arrow Animation */}
                  <motion.span
                    className="opacity-0 mt-2 "
                    variants={{
                      hover: { y: -2, opacity: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Link>

            </div>

            <button
              className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800"
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
