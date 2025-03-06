// import axios from "axios";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// type Params = { id: string };

// async function getBlogPost(id: string) {
//   try {
//     const response = await axios.get(`${process.env.GHOST_API_URL}/blog/${id}`);
//     return response.data.post;
//   } catch (error) {
//     console.error("Error fetching blog data:", error);
//     return null;
//   }
// }

// export default async function BlogPage({ params }: { params: Params }) {
//   const blog = await getBlogPost(params.id);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Blog Title */}
//       <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

//       {/* Featured Image */}
//       <Image
//         src={blog.feature_image}
//         alt={blog.title}
//         className="w-full h-auto rounded-lg shadow-md"
//         width={1200}
//         height={600}
//       />

//       {/* Blog Content */}
//       <article className="mt-8 prose prose-lg max-w-none">
//         <div dangerouslySetInnerHTML={{ __html: blog.html }} />
//       </article>

//       {/* Back Button */}
//       <div className="mt-10 text-center">
//         <Link
//           href="/blogs"
//           className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           ← Back to Blog List
//         </Link>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import axios from "axios";
// import Link from "next/link";
// import { notFound, useParams } from "next/navigation";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function BlogPage() {

//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchBlogs = async () => {
//     try {
//       // setLoading(true);
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_GHOST_API_URL}/blogs/${id}`);
//       setBlog(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching blogs", error);
//       // setError("Failed to load blogs. Please try again later.");
//     }
//   }

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Blog Title */}
//       <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

//       {/* Featured Image */}
//       <Image
//         src={blog.feature_image}
//         alt={blog.title}
//         className="w-full h-auto rounded-lg shadow-md"
//         width={1200}
//         height={600}
//       />

//       {/* Blog Content */}
//       <article className="mt-8 prose prose-lg max-w-none">
//         <div dangerouslySetInnerHTML={{ __html: blog.html }} />
//       </article>

//       {/* Back Button */}
//       <div className="mt-10 text-center">
//         <Link
//           href="/blogs"
//           className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           ← Back to Blog List
//         </Link>
//       </div>
//     </div>
//   );
// }