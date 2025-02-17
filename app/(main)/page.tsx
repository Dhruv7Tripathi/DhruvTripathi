'use client';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/heroSection';
import About from '@/components/about';
import Project from '@/components/project';
// import Footer from '@/components/footer';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      {/* <Footer /> */}

    </div>
  );
}