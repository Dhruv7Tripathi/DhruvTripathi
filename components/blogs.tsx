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
      title: "Impact of Technology",
      src: "/blog/w.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
