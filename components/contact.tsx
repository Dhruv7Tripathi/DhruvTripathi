import React from 'react';
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MessageCircle,
  Code2,
  Briefcase,
  User
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
    <div className="min-h-screen bg-background text-foreground">
      <section
        id="about"
        className="py-20 px-8 max-w-5xl mx-auto animate-fade-in"
      >
        <div className="flex items-center mb-8 animate-slide-down">
          <User className="mr-4 text-primary animate-float-slow" size={32} />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="bg-card text-card-foreground rounded-xl shadow-xl p-8 animate-fade-in-up">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            I&apos;m a passionate full-stack developer building web applications.
            I specialize in React, Node.js, and modern web technologies. When I&apos;m not coding,
            you can find me contributing to open-source projects or writing technical blog posts.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-full transition-colors animate-slide-up-delay">
              <Code2 size={16} className="mr-2 animate-wave" />
              Clean Code Enthusiast
            </div>
            <div className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full transition-colors animate-slide-up-delay">
              <Briefcase size={16} className="mr-2 animate-wave" />
              Problem Solver
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-muted text-muted-foreground">
              <Github className="w-6 h-6 mb-3 text-primary" />
              <h3 className="font-semibold text-foreground">Open Source</h3>
              <p>Active contributor to various open-source projects</p>
            </div>
            <div className="p-6 rounded-lg bg-muted text-muted-foreground">
              <ExternalLink className="w-6 h-6 mb-3 text-primary" />
              <h3 className="font-semibold text-foreground">Technical Writing</h3>
              <p>Regular blog posts about web development</p>
            </div>
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