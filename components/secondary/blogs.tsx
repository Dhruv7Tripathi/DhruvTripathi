import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
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
      title: "Impact of Technology",
      src: "/blog/w.png",
      href: "/technology"
    },
  ];

  return <FocusCards cards={cards} />;
}

