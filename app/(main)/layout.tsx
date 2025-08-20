import { Footer } from "@/app/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark:bg-black min-h-screen bg-white text-black dark:text-white">
      <div className="max-w-2xl mx-auto flex flex-col ">
        <main className="w-full flex  flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
