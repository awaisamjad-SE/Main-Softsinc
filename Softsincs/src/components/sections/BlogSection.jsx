import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blogData from '../../data/blogData';

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          📚 Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blogs</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogData.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-purple-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48 transition duration-300 hover:brightness-110"
              />
              <div className="flex flex-col justify-between flex-1 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">{blog.title}</h3>
                <p className="mb-4 text-gray-300 line-clamp-3">{blog.summary}</p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-auto inline-block text-purple-400 font-semibold hover:text-purple-300 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="zoom-in">
          <Link to="/blog">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transition duration-300">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
