import React from "react";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import Hero2 from "../Components/layout/Hero2";
import bgContact from "../assets/Images/background.jpg"; 
const BlogPage = () => {
  const featured = blogData[0];
  const others = blogData.slice(1);

  return (
    <>
      <Hero2
        smallTitle="Blogs"
        title="Let's Connect and Collaborate"
        description="Whether you have a question, a project idea, or just want to say hello — we’d love to hear from you. Reach out and let's explore how we can create something great together."
        buttonText="Send a Message"
        buttonLink="/contact-form"
        backgroundImage={bgContact}
      />
      <section className="dark:bg-gray-100 dark:text-gray-800 pt-[130px]">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

          {/* Featured Blog */}
          <Link
            to={`/blog/${featured.slug}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {featured.title}
              </h3>
              <span className="text-xs dark:text-gray-600">{featured.date}</span>
              <p>
                {featured.summary?.length > 150
                  ? featured.summary.slice(0, 150) + "..."
                  : featured.summary ?? "No summary available"}
              </p>
            </div>
          </Link>

          {/* Blog Grid */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((blog, index) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={index}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {blog.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">{blog.date}</span>
                  <p>
                    {blog.summary?.length > 100
                      ? blog.summary.slice(0, 100) + "..."
                      : blog.summary ?? "No summary available"}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button (Optional) */}
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
