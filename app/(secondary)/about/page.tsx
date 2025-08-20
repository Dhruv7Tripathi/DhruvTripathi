import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { education } from "@/contant";
import { FocusCardsDemo } from "@/components/secondary/blogs";
// import Sidebar from "@/components/secondary/sidebar";

const AboutPage = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="min-h-screen bg-black text-white p-8 w-full">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Dhruv Tripathi
              </span>{" "}
              <span className="inline-block text-5xl animate-wave">👋</span>
            </h1>
            <p className="text-sm text-neutral-200 mt-4">
              Frontend Developer specializing in React, Next.js, and TypeScript. Passionate about building modern web applications and exploring new technologies.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-semibold">Education</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 pt-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="rounded-xl ring-1 ring-white/10 overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={edu.imageUrl}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                  <p className="text-muted-foreground mb-2">{edu.degree}</p>
                  <p className="text-muted-foreground mb-2">{edu.performance}</p>
                  <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-semibold">Blogs</h2>
          </div>
          <div className="rounded-xl ring-1 ring-white/10 overflow-hidden">
            <FocusCardsDemo />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
