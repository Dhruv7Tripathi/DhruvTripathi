import React from 'react'
import Navbar from './navbar'
import HeroSection from './heroSection'
import About from './about'
import Project from './project'
import Contact from './contact'

const landingpage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Contact />

    </div>
  )
}

export default landingpage
