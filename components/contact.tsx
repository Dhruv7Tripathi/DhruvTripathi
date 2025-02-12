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
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/dhruv-tripathi',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/dhruv_tripathi',
      color: 'bg-sky-500 hover:bg-sky-600'
    }
  ];

  const contactMethods = [
    {
      title: 'Email',
      description: 'Get in touch via email',
      icon: <Mail className="w-6 h-6" />,
      action: 'tripathidhruv366@gmail.com',
      link: 'mailto:tripathidhruv366@gmail.com',
      buttonText: 'Send Email'
    },
    {
      title: 'Chat',
      description: 'Let\'s discuss your project',
      icon: <MessageCircle className="w-6 h-6" />,
      action: 'Schedule a call',
      link: '#',
      buttonText: 'Schedule Call'
    }
  ];

  return (
    <div >
      <section
        id="contact"
        className="relative py-20 px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 animate-float-slower opacity-90"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto animate-fade-in-delay">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg mr-4 animate-float-slow">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    <p className="text-white/80">{method.description}</p>
                  </div>
                </div>
                <a
                  href={method.link}
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full 
                           hover:bg-purple-50 transition-all duration-300 animate-fade-in-up-delay"
                >
                  {method.buttonText}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div className="text-center mb-12 animate-fade-in-up">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full 
                       hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2 animate-bounce" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up-delay">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full text-white transition-all duration-300 
                          hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-black py-6 px-8 text-center animate-fade-in">
        <p className="text-white/90">
          Looking forward to creating something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Contact;