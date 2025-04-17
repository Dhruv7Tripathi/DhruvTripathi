"use client"
import { FocusCards } from "@/components/ui/focus-cards";
import Sidebar from "@/components/secondary/sidebar";
import Rightbar from "@/components/secondary/rightbar";

export default function Blog() {
  const cards = [
    {
      title: "Developer",
      src: "/blog/billa.webp",
      href: "/developer"
    },
    {
      title: "Inspiration",
      src: "/blog/inspiration.jpg",
      href: "/inspiration"
    },
    {
      title: "Friends",
      src: "/blog/trio.jpg",
      href: "/friends"
    },
    {
      title: "Impact of cricket",
      src: "/blog/Kohli.jpg",
      href: "/cricket"
    },
    {
      title: "Impact of Technology",
      src: "/blog/w.png",
      href: "/technology"
    },
    {
      title: "Believe in yourself",
      src: "/blog/shiva.jpg",
      href: "/yourself"
    },
  ];
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-grow">
        <FocusCards cards={cards} />
      </div>
      <Rightbar />
    </div>
  );
}