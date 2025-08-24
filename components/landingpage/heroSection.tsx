import { ExternalLink, Github, Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/contant';
import { FaXTwitter } from 'react-icons/fa6';
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Magnetic } from '../magnit';
import LeetCodeIcon from '../icons/leetcode';
import {
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

const achievements = [
  {
    title: 'Open Source',
    description: 'Active contributor to various open-source projects',
    href: 'https://github.com/Dhruv7Tripathi',
    icon: <Github className="w-6 h-6" />
  },
  {
    title: 'Technical Writing',
    description: 'Regular blog posts about web development',
    href: '/about',
    icon: <ExternalLink className="w-6 h-6" />
  }
];


const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=' bg-gradient-to-br dark:from-black dark:via-gray-800 dark:to-black bg-white'>
      <div>
        <motion.nav
          className={`sticky z-10 top-0 w-full transition-all duration-300 
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.span
                className="text-3xl font-bold ml-11 px-40  text-neutral-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
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
            <div className="px-2 pt-2 pb-3  space-y-1 bg-gray-900 shadow-lg">
              <a href="/about" className="block px-3 py-2 font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">About</a>
              <a href="/contactus" className="block px-3 py-2 font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">ContactUs</a>
              <a href="/yourself" className="block px-3 py-2  font-semibold rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Blogs</a>

            </div>
          </motion.div>
        </motion.nav>
      </div>
      <header
        className="min-h-screen   text-neutral-800 dark:text-white flex  justify-center"
      >

        <div className="z-10 max-w-2xl mt-16">
          <div className="text-xl sm:text-2xl  text-neutral-800 dark:text-white mb-6">
            <span className="inline-block text-5xl">👋</span>
            <span className="ml-2">Hi there, I&apos;m</span>
          </div>
          <h1
            className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-5xl"
          >
            Dhruv Tripathi
          </h1>
          <h2
            className="text-2xl sm:text-2xl mb-8  text-neutral-800 dark:text-white"
          >
            Frontend Developer
          </h2>
          <div className="bg-background max-w-2xl rounded-xl  backdrop-blur-sm bg-opacity-80 ">
            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-lg mb-8">
              I&apos;m a passionate full-stack developer building web applications.
              I specialize in React, Node.js, and modern web technologies. When I&apos;m not coding,
              you can find me contributing to open-source projects or writing technical blog posts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 animate-fade-in-delay">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-6 rounded-xl bg-background border shadow-md border-neutral-200 dark:border-neutral-700 ring ring-white/10   transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-emerald-500 mr-3">{achievement.icon}</div>
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200">{achievement.description}</p>
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 dark:text-neutral-200 hover:underline flex items-center mt-2"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <section
            id="projects"
            className="py-20   max-w-2xl mx-auto"
          >
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-semibold   text-neutral-800 dark:text-white">
                Selected Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Link key={project.title} href={project.link} passHref>
                  <div
                    className="bg-background rounded-xl overflow-hidden shadow-lg group  transition-all duration-300 ring ring-white/10"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">{project.title}</h3>
                      <p className="text-neutral-800 dark:text-neutral-200 mb-4 line-clamp-3">{project.description}</p>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section
            id="contact"
            className="relative py-8  overflow-hidden  bg-background text-white"
          >
            <div className="relative max-w-5xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200 text-lg max-w-2xl mx-auto">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Feel free to reach out through any of these channels.
                  <br />
                  Looking forward to creating something amazing together!
                </p>
              </div>
              <div
                className="flex space-x-6 bg-background"
              >
                {SOCIAL_LINKS.map((link) => (
                  <MagneticSocialLink key={link.link} link={link.link}>
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>
          </section>

        </div>
      </header>
      <footer className="mt-24 border-t max-w-2xl mx-auto bg-background border-zinc-400 py-4 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <a href="https://github.com/dhruv7tripathi" target="_blank">
            <TextLoop className="text-xs text-zinc-800 dark:text-zinc-200">
              <span>Dhruv Tripathi</span>
              <span>FrontEnd Developer</span>
            </TextLoop>
          </a>
          <div className="text-xs text-zinc-400">
            <ThemeSwitch />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;


function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
      </a>
    </Magnetic>
  )
}
type SocialLink = {
  label: React.ReactNode;
  link: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: <Github size={24} className='bg-background' />,
    link: 'https://github.com/dhruv7tripathi',
  },
  {
    label: <FaXTwitter size={24} className='bg-background' />,
    link: 'https://twitter.com/dhruvtripathi77',
  },
  {
    label: <Linkedin size={24} className='bg-background' />,
    link: 'https://www.linkedin.com/in/dhruv-tripathi-9848792aa/',
  },
  {
    label: <LeetCodeIcon />,
    link: 'https://leetcode.com/u/Dhruv_Tripathi0705/',
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-background"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

