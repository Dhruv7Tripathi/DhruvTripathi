import React from 'react';
import {
  Github,
  Linkedin,
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  // const socialLinks = [
  //   {
  //     name: 'GitHub',
  //     icon: <Github className="w-5 h-5" />,
  //     href: 'https://github.com/Dhruv7Tripathi',
  //     color: 'bg-black hover:bg-gray-300 text-white'
  //   },
  //   {
  //     name: 'LinkedIn',
  //     icon: <Linkedin className="w-5 h-5" />,
  //     href: 'https://www.linkedin.com/in/dhruv-tripathi-9848792aa/',
  //     color: 'bg-black hover:bg-blue-200 text-white'
  //   },
  //   {
  //     name: 'Twitter',
  //     icon: <Twitter className="w-5 h-5" />,
  //     href: 'https://twitter.com/dhruvtripathi77',
  //     color: 'bg-black hover:bg-sky-200 text-white'
  //   }
  // ];

  // const contactMethods = [
  //   {
  //     title: 'Email',
  //     description: 'Get in touch via email',
  //     icon: <Mail className="w-6 h-6 text-green-600" />,
  //     action: 'tripathidhruv366@gmail.com',
  //     link: '/contactus',
  //     buttonText: 'Send Email'
  //   },
  //   // {
  //   //   title: 'Chat',
  //   //   description: 'Let\'s discuss your project',
  //   //   icon: <MessageCircle className="w-6 h-6 text-green-600" />,
  //   //   action: 'Schedule a call',
  //   //   link: '/',
  //   //   buttonText: 'Schedule Call'
  //   // }
  // ];

  return (
    <div>
      <section
        id="contact"
        className="relative py-20 px-8 overflow-hidden  bg-black text-white p-8"
      >
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of these channels.
            </p>
            {/* <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 rounded-full">
              Contact Me
            </Button> */}
          </div>
          {/* <div className="text-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-full 
                       hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div> */}
          <div
            className="flex space-x-6 justify-center"
          >
            <a
              href="https://github.com/Dhruv7Tripathi"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-tripathi-9848792aa/"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="/https://twitter.com/dhruvtripathi77"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <FaXTwitter size={24} className="text-white" />
            </a>
          </div>
        </div>
      </section>
      <div className="bg-black py-6 px-8 text-center border-gray-200 ">
        <p className="text-white">
          Looking forward to creating something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Contact;