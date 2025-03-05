// "use client"
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Link from 'next/link'
// import { FocusCards } from '@/components/ui/focus-cards'

// type Blog = {
//   id: string,
//   title: string;
//   src: string;
// }

// export default function Blog() {
//   const [blogs, setBlogs] = useState<Blog[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_GHOST_API_URL}/blogs`);
//         setBlogs(response.data);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching blogs", error);
//         setError("Failed to load blogs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen p-4">
//         <h2 className="text-xl font-bold text-red-500 mb-4">Failed to load blogs</h2>
//         <p className="text-gray-600 mb-6">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   // Fallback to demo content if no blogs are loaded
//   if (!blogs || blogs.length === 0) {
//     const demoCards = [
//       {
//         id: "1",
//         title: "Developer",
//         src: "/blog/billa.webp",
//       },
//       {
//         id: "2",
//         title: "Inspiration",
//         src: "/blog/inspiration.jpg",
//       },
//       {
//         id: "3",
//         title: "Friends",
//         src: "/blog/trio.jpg",
//       },
//       {
//         id: "4",
//         title: "Impact of cricket",
//         src: "/blog/Kohli.jpg",
//       },
//       {
//         id: "5",
//         title: "Impact of Technology",
//         src: "/blog/w.png",
//       },
//       {
//         id: "6",
//         title: "Believe in yourself",
//         src: "/blog/shiva.jpg",
//       },
//     ];

//     return <FocusCards cards={demoCards} />;
//   }

//   // Successfully loaded blogs
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//             <Link href={`/blogs/${blog.id}`}>
//               <div className="cursor-pointer">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={blog.src}
//                     alt={blog.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold">{blog.title}</h2>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // Alternative: Use FocusCards component if you prefer
//   // return <FocusCards cards={blogs} />;
// }

import { FocusCards } from "@/components/ui/focus-cards";
import Sidebar from "@/components/sidebar";
export default function Blog() {
  const demoCards = [
    {
      id: "1",
      title: "Developer",
      src: "/blog/billa.webp",
    },
    {
      id: "2",
      title: "Inspiration",
      src: "/blog/inspiration.jpg",
    },
    {
      id: "3",
      title: "Friends",
      src: "/blog/trio.jpg",
    },
    {
      id: "4",
      title: "Impact of cricket",
      src: "/blog/Kohli.jpg",
    },
    {
      id: "5",
      title: "Impact of Technology",
      src: "/blog/w.png",
    },
    {
      id: "6",
      title: "Believe in yourself",
      src: "/blog/shiva.jpg",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <FocusCards cards={demoCards} />
    </div>);
}
