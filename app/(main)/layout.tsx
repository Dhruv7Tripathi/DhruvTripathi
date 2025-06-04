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
        <main className="bg-black text-white">{children}</main>
        <Rightbar />
      </div>
    </div>
  );
}
