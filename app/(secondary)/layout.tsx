import Sidebar from "@/components/secondary/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Sidebar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
