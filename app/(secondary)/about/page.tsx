import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, School, Code, } from 'lucide-react';

const AboutPage = () => {
  const education = [
    {
      institution: "GLA University",
      degree: "Bachelor of Computer Science",
      year: "2023-2027",
      description: "Try to become a full stack developer"
    },
    {
      institution: "Example High School",
      degree: "High School Diploma",
      year: "2018-2020",
      description: "Science and Mathematics focus"
    }
  ];

  // const hackathons = [
  //   {
  //     name: "Global Hack 2024",
  //     position: "1st Place",
  //     project: "AI-Powered Healthcare Solution",
  //     description: "Developed an innovative healthcare platform using machine learning"
  //   },
  //   {
  //     name: "CodeFest 2023",
  //     position: "2nd Place",
  //     project: "Smart City Initiative",
  //     description: "Created a sustainable urban planning solution"
  //   }
  // ];

  const skills = [
    "React", "Node.js", "Java", "NextJs",
    "JavaScript", "Docker", "DataStructure", "TypeScript"
  ];

  return (
    <div className="min-h-screen bg-white text-foreground p-8">
      {/*  */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Dhruv Tripathi
            </span>{" "}
            👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer | AI Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/dhruv7tripathi" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center mb-8">
          <School className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/*  */}
      {/* <section className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center mb-8">
          <Trophy className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Hackathon Achievements</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{hackathon.name}</h3>
                  <Badge variant="secondary">{hackathon.position}</Badge>
                </div>
                <p className="font-medium mb-2">{hackathon.project}</p>
                <p className="text-muted-foreground">{hackathon.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      {/* </section> */}

      {/* */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-base py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;