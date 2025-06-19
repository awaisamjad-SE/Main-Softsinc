import React from "react";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import Hero2 from "../Components/layout/Hero2";
import bgContact from "../assets/Images/background.jpg";

const BlogPage = () => {
  // Sort by newest date
  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const featured = sortedBlogs[0];
  const others = sortedBlogs.slice(1);

  return (
    <>
      <Hero2
        smallTitle="Blogs"
        title="Latest Insights & Stories"
        description="Explore our expert opinions, tutorials, trends, and updates in tech, AI, development, and more."
        buttonText="Start a Project"
        buttonLink="/contact-form"
        backgroundImage={bgContact}
      />

      <section className="bg-gray-50 dark:bg-gray-100 pt-[130px] pb-20">
        <div className="max-w-6xl px-4 mx-auto space-y-12">
          {/* ✅ Featured Blog */}
          <Link
            to={`/blog/${featured.slug}`}
            className="block group lg:grid lg:grid-cols-12 gap-6 hover:no-underline focus:no-underline bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="object-cover w-full h-64 sm:h-96 lg:col-span-7"
            />
            <div className="p-6 lg:col-span-5">
              <h3 className="text-3xl font-bold text-gray-900 group-hover:underline mb-2">
                {featured.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{new Date(featured.date).toLocaleDateString()}</p>
              <p className="text-gray-700 text-base leading-relaxed">
                {featured.summary?.length > 200
                  ? featured.summary.slice(0, 200) + "..."
                  : featured.summary ?? "No summary available"}
              </p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {featured.category || "Blog"}
                </span>
              </div>
            </div>
          </Link>

          {/* ✅ Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((blog, index) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-44"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:underline mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {blog.summary?.length > 100
                      ? blog.summary.slice(0, 100) + "..."
                      : blog.summary ?? "No summary available"}
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {blog.category || "Blog"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 🔁 Load More - Future Enhancements */}
          {/* <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Load More Posts
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
