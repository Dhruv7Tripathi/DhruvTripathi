'use client';

import { Footer } from "@/app/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="max-w-2xl mx-auto flex flex-col min-h-screen px-4">
        <main className="flex-1 w-full flex flex-col items-center justify-center py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
