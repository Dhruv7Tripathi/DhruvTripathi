import "../globals.css";
import Sidebar from "@/components/sidebar";
import Rightbar from "@/components/rightbar";
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
