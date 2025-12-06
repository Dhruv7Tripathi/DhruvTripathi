import { ArrowUpRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/contant';
import { FaXTwitter } from 'react-icons/fa6';
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Magnetic } from './ui/magnit';
import LeetCodeIcon from './icons/leetcode';
import {
  Menu,
  X,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GithubContributions from './secondary/github-canvas';
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


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='dark:bg-black bg-white'>
      <div>
        <motion.nav
          className="sticky z-10 top-0 w-full transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.span
                className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white"
              >
                DT
              </motion.span>

              <div className="hidden md:flex font-semibold items-center space-x-4 lg:space-x-6">
                <Link href="/about" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">About</Link>
                <Link href="/contactus" className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">ContactUs</Link>
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
                className="md:hidden p-2 rounded-md text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-950 shadow-lg border-t dark:border-neutral-800">
              <a href="/about" className="block px-3 py-2 font-semibold rounded-md text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white">About</a>
              <a href="/contactus" className="block px-3 py-2 font-semibold rounded-md text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white">ContactUs</a>
              <a href="/resume.pdf"
                target="_blank"
                className="block px-3 py-2 font-semibold rounded-md text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white">Resume</a>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      <header className="min-h-screen text-neutral-800 dark:text-white flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="z-10 w-full max-w-2xl mt-8 sm:mt-12 lg:mt-16">
          {/* Hero Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-6">
            <div className="flex-1">
              <div className="text-lg sm:text-xl lg:text-2xl text-neutral-800 dark:text-white mb-4 sm:mb-6">
                <span className="inline-block text-4xl sm:text-5xl">👋</span>
                <span className="ml-2">Hi there, I&apos;m</span>
              </div>
              <h1 className="bg-gradient-stop bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tighter text-transparent">
                Dhruv Tripathi
              </h1>
              {/* <h2 className="text-xl sm:text-2xl mt-4 mb-4 text-neutral-800 dark:text-white">
                FullStack Developer
              </h2> */}
            </div>

            <div className="shrink-0">
              <Image
                src="/goku.jpg"
                alt="Dhruv Tripathi"
                width={240}
                height={240}
                className="rounded-xl border dark:border-neutral-900 border-neutral-100 sm:w-[180px] sm:h-[180px]"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-background rounded-xl backdrop-blur-sm bg-opacity-80 mb-8">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
              I&apos;m a passionate Full-Stack Developer who loves turning ideas into smooth, scalable, and user-friendly web experiences.
              I specialize in React, Next.js, Node.js, and modern web technologies — with a little pinch of {" "}
              <span className='dark:text-white font-semibold italic text-black'>
                Frontend magic ✨
              </span>
              <br />
              When I&apos;m not crafting beautiful interfaces, I dive into{" "}
              <a
                href='https://leetcode.com/u/Dhruv_Tripathi0705/'
                className='dark:text-white font-semibold italic text-black'>Data Structures & Algorithms</a> to sharpen my problem-solving mindset.
              <br />
              I also enjoy contributing to {" "}
              <a className='dark:text-white italic font-semibold text-black'
                href="https://github.com/dhruv7tripathi"
              >
                Open-Source Projects
              </a>
              {" "}writing technical blogs, and exploring new tools that push the web forward.

              With a blend of creativity and logic, I&apos;m always excited to build products that truly help people.

            </p>

            {/* GitHub Contributions */}
            <div className="w-full overflow-x-hidden mb-6 sm:mb-8  -mx-4 px-0 ml-0.5 sm:mx-0 sm:px-0">
              <div className='flex flex-row mb-2'>

                <h1 className='dark:text-white font-semibold text-base text-black'>CanvasCraft </h1>
                <p className='italic dark:text-neutral-400 text-sm mt-0.5 text-neutral-600'>{" "}-where every update shapes your vision.</p>
              </div>
              <GithubContributions />
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-delay">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-4 sm:p-6 rounded-xl bg-background border shadow-md border-neutral-200 dark:border-neutral-800  transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-emerald-500 mr-3">{achievement.icon}</div>
                    <h3 className="font-semibold text-base sm:text-lg">{achievement.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">{achievement.description}</p>
                  <a
                    href={achievement.href}
                    aria-label={`Visit ${achievement.title}`}
                    className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 hover:underline flex items-center mt-2"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <section id="projects" className="py-12 sm:py-16 lg:py-20">
            <div className="flex items-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-white">
                Selected Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  passHref
                >
                  <div className="bg-background rounded-lg overflow-hidden shadow-lg group transition-all duration-300 border border-white/10 hover:border-1 hover:border-neutral-100 dark:hover:border-neutral-900">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full p-2 rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-100  duration-200"
                        width={500}
                        height={300}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2 sm:p-3">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-800 dark:text-white">{project.title}</h3>
                      <p className="text-sm sm:text-sm text-neutral-800 dark:text-neutral-200 mb-4 line-clamp-3">{project.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-8 sm:py-12 overflow-hidden bg-background text-white">
            <div className="relative">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-neutral-800 italic dark:text-neutral-200 text-sm sm:text-base">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Feel free to reach out through any of these channels.
                  <br className="hidden sm:block" />
                  Looking forward to creating something amazing together!
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 bg-background">
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

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 lg:mt-24  border-t p-1 sm:p-2 max-w-2xl mx-auto bg-background border-zinc-400 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <a href="https://github.com/dhruv7tripathi" target="_blank">
            <TextLoop className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
              <span>Dhruv Tripathi</span>
              <span>FullStack Developer</span>
            </TextLoop>
          </a>
          <div className="text-xs text-neutral-400">
            <ThemeSwitch />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


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
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-xl bg-neutral-100 px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm text-black transition-colors duration-200 hover:bg-neutral-950 hover:text-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-900"
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
    label: <Github size={20} className='bg-background sm:w-6 sm:h-6' />,
    link: 'https://github.com/dhruv7tripathi',
  },
  {
    label: <LeetCodeIcon />,
    link: 'https://leetcode.com/u/Dhruv_Tripathi0705/',
  },
  {
    label: <FaXTwitter size={20} className='bg-background sm:w-6 sm:h-6' />,
    link: 'https://twitter.com/dhruvtripathi77',
  },
  {
    label: <Linkedin size={20} className='bg-background sm:w-6 sm:h-6' />,
    link: 'https://www.linkedin.com/in/dhruv-tripathi-9848792aa/',
  },
  {
    label: <FileText />,
    link: '/resume.pdf',
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