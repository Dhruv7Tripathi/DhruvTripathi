'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/heroSection';
import About from '@/components/about';
import Project from '@/components/project';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}