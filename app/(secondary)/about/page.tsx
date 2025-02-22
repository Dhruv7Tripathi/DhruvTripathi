import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, School, Code } from "lucide-react";
import Image from "next/image";
import { skills } from "@/contant";
import { education } from "@/contant";
const AboutPage = () => {
  // const education = [
  //   {
  //     institution: "GLA University",
  //     degree: "Bachelor of Computer Science",
  //     year: "2023-2027",
  //     performance: "cpi : 7.7",
  //     description: "Try to become a full-stack developer",
  //     imageUrl: "/university.jpeg",
  //   },
  //   {
  //     institution: "SR public School",
  //     performance: "percentage : 88%",
  //     degree: "12th standard",
  //     year: "2018-2022",
  //     description: "Science student",
  //     imageUrl: "/school.avif",
  //   },
  // ];

  // const skills = [
  //   "React",
  //   "Node.js",
  //   "Java",
  //   "Next.js",
  //   "JavaScript",
  //   "Docker",
  //   "Data Structure",
  //   "TypeScript",
  // ];

  return (
    <div className="min-h-screen bg-white text-foreground p-8 w-full">
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Dhruv Tripathi
            </span>{" "}
            <span className="inline-block text-5xl animate-wave">👋</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer | AI Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/dhruv7tripathi"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-tripathi-9848792aa/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="/contactus"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <section className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center mb-8">
          <School className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={edu.imageUrl}
                  alt={edu.institution}
                  className="object-cover w-full h-full transition-transform duration-500"
                  width={500}
                  height={300}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                <p className="text-muted-foreground mb-2">{edu.performance}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
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
