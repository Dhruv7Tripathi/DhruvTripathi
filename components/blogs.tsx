import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Developer",
      src: "/blog/billa.webp",
    },
    {
      title: "Inspiration",
      src: "/blog/inspiration.jpg",
    },
    {
      title: "Friends",
      src: "/blog/trio.jpg",
    },
    {
      title: "Impact of cricket",
      src: "/blog/Kohli.jpg",
    },
    {
      title: "Impact of Technology",
      src: "/blog/w.png",
    },
    {
      title: "Believe in yourself",
      src: "/blog/shiva.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
