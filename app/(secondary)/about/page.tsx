"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { education } from "@/contant";
import { FocusCardsDemo } from "@/components/secondary/blogs";
import Navbar from "@/app/navbar";
import { Footer } from "@/app/Footer";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col">
      {/* Navbar fixed at top */}
      <Navbar className="fixed top-0 left-0 w-full z-30" />

      <div className="flex-1 pt-20 max-w-2xl mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-semibold">
            {/* Hello */}
            {/* <span className="inline-block text-5xl animate-wave">👋</span> */}
            {/* <br /> */}
            I&apos;m{" "}
            <span className="bg-gradient-stop  text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/50 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-4xl"
            >
              Dhruv Tripathi
            </span>{" "}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed sm:text-base mb-6 sm:mb-8 mt-4">
            A results-driven{" "}
            <span className="dark:text-white font-semibold italic text-black">
              FullStack Developer
            </span>{" "}
            specializing in React, Next.js, TypeScript, and modern JavaScript ecosystems. I focus on
            building fast, scalable, and user-centric applications that deliver measurable impact.

            <br /><br />

            I enjoy architecting clean {" "}
            <span className="dark:text-white font-semibold italic text-black">
              Frontend Systems
            </span>{" "}, optimizing performance, and writing
            maintainable, production-ready code. On the backend, I work with Node.js, Prisma,
            PostgreSQL, and REST/GraphQL APIs to create robust and reliable service layers.

            <br /><br />

            I stay updated with the latest industry trends—from UI/UX improvements to modern tooling
            and deployment workflows to ensure the products I build are future-ready. {" "}
            <span className="dark:text-white font-semibold italic text-black">
              My goals
            </span>{" "} is
            to bring a mix of technical depth, product thinking, and continuous learning to every
            project I take on.
          </p>

        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="rounded-xl ring-2 ring-white/5 dark:ring-white/10 overflow-hidden"
              >
                <div className="relative rounded-lg aspect-video">
                  <Image
                    src={edu.imageUrl}
                    alt={edu.institution}
                    className="w-full h-full rounded-xl"
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

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Blogs</h2>
          <div className="rounded-xl  ring-white/10 overflow-hidden">
            <FocusCardsDemo />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
