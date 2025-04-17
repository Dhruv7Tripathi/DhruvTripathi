"use client"
import { FocusCards } from "@/components/ui/focus-cards";
import Sidebar from "@/components/secondary/sidebar";
import Rightbar from "@/components/secondary/rightbar";
import { cards } from "@/contant/blogCards";
export default function Blog() {
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