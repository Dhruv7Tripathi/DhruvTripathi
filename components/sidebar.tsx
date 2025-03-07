"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, X } from "lucide-react";
import Image from "next/image";
const LeetCodeIcon = () => (
  <Image
    src="https://simpleicons.org/icons/leetcode.svg"
    alt="LeetCode"
    width={30}
    height={30}
  />
);

interface NavItem {
  href: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const navItems: NavItem[] = [
    { href: "https://github.com/dhruv7tripathi", icon: <Github size={30} /> },
    { href: "https://www.linkedin.com/in/dhruv-tripathi-9848792aa/", icon: <Linkedin size={30} /> },
    { href: "https://x.com/DhruvTripathi77", icon: <X size={30} /> },
    { href: "https://leetcode.com/u/Dhruv_Tripathi0705/", icon: <LeetCodeIcon /> },
  ];

  return (
    <>
      {/* Glassy Sidebar for Desktop */}
      <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex justify-center items-center p-3 text-gray-600 rounded-md hover:bg-gray-100/30 hover:text-gray-900 w-full transition duration-200"
                >
                  <span className="text-gray-500 hover:text-gray-700">{item.icon}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Glassy Bottom Navbar for Mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white/30 backdrop-blur-lg border-t border-white/20 shadow-lg z-10">
        <div className="flex justify-around">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-center py-2 px-2 text-xs text-gray-600"
            >
              <span className="mb-1">{item.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
