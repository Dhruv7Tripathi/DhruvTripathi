import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { education } from "@/contant";
import { FocusCardsDemo } from "@/components/secondary/blogs";
// import Sidebar from "@/components/secondary/sidebar";
import { Footer } from "@/app/Footer";

const AboutPage = () => {
  return (
    <div className="flex bg-white dark:bg-black text-black dark:text-white">
      {/* <Sidebar /> */}
      <div className=" max-w-2xl mx-auto flex flex-col items-center justify-center">

        <div className="min-h-screen   p-8 w-full">
          {/* Hero Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Hello, I&apos;m{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Dhruv Tripathi
                </span>{" "}
                <span className="inline-block text-5xl animate-wave">👋</span>
              </h1>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 mt-4">
                I am a dedicated frontend developer with a strong focus on React, Next.js, and TypeScript. I enjoy crafting seamless user experiences and continuously learning about the latest trends in web development. My goal is to build impactful and efficient web applications.
              </p>
            </div>
          </div>

          <section className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center mb-2">
              <h2 className="text-3xl font-semibold">Education</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 pt-3  ">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="rounded-xl ring-2 ring-white/5 dark:ring-white/10 overflow-hidden"
                >
                  <div className="relative rounded-lg aspect-video">
                    <Image
                      src={edu.imageUrl}
                      alt={edu.institution}
                      className="w-full h-full rounded-xl object-cover"
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

          <section className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-semibold">Blogs</h2>
            </div>
            <div className="rounded-xl ring-1 ring-white/10 overflow-hidden">
              <FocusCardsDemo />
            </div>
          </section>
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
