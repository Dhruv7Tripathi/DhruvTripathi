
import "../globals.css";
import Sidebar from "@/components/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div> <Sidebar /></div>
      <main className="">{children}</main>
    </div>
  );
}
