import { FocusCards } from "@/components/ui/focus-cards";

export const cards = [
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
]
export function FocusCardsDemo() {

  return <FocusCards cards={cards} />;
}

