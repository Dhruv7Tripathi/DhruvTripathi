// import axios from "axios";
// import Link from "next/link";
// import { notFound } from "next/navigation";

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
//       <img
//         src={blog.feature_image}
//         alt={blog.title}
//         className="w-full h-auto rounded-lg shadow-md"
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