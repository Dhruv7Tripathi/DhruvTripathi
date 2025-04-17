
import "../globals.css";
import Sidebar from "@/components/secondary/sidebar";
import Rightbar from "@/components/secondary/rightbar";
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
        <Rightbar />
      </div>
    </div>
  );
}
