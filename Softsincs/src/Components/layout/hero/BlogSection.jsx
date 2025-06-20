import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blogData from '../../../data/blogData';

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 text-black bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2e35d7]">
          📚 Latest Blogs
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogData.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.03] hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48 transition duration-300 hover:brightness-110"
              />
              <div className="flex flex-col justify-between flex-1 p-6">
                <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                <p className="mb-4 text-gray-600 line-clamp-3">{blog.summary}</p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-auto inline-block text-[#2e35d7] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="zoom-in">
          <Link to="/blog">
            <button className="px-6 py-3 bg-[#2e35d7] text-white rounded-full shadow-md hover:bg-[#1d28b3] hover:shadow-lg transition duration-300">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
