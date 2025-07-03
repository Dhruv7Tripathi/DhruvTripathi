import React from 'react';
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/DhruvTripathi',
      color: 'bg-black hover:bg-gray-300 text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/dhruv-tripathi',
      color: 'bg-black hover:bg-blue-200 text-white'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/dhruv_tripathi',
      color: 'bg-black hover:bg-sky-200 text-white'
    }
  ];

  const contactMethods = [
    {
      title: 'Email',
      description: 'Get in touch via email',
      icon: <Mail className="w-6 h-6 text-green-600" />,
      action: 'tripathidhruv366@gmail.com',
      link: 'mailto:tripathidhruv366@gmail.com',
      buttonText: 'Send Email'
    },
    {
      title: 'Chat',
      description: 'Let\'s discuss your project',
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      action: 'Schedule a call',
      link: '/',
      buttonText: 'Schedule Call'
    }
  ];

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
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-gray-700 rounded-xl p-8 text-white shadow-sm border-gray-600 "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    <p className="text-white">{method.description}</p>
                  </div>
                </div>
                <a
                  href={method.link}
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full 
                           hover:bg-green-700 transition-all duration-300"
                >
                  {method.buttonText}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-full 
                       hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 
                          hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
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