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
    <section className="py-20 text-black bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          📚 Latest <span className="text-black">Blogs</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogData.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-gray-600"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48 transition duration-300 hover:brightness-110"
              />
              <div className="flex flex-col justify-between flex-1 p-6">
                <h3 className="mb-2 text-xl font-semibold text-black">{blog.title}</h3>
                <p className="mb-4 text-black line-clamp-3">{blog.summary}</p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-auto inline-block text-black font-semibold hover:text-gray-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="zoom-in">
          <Link to="/blog">
            <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-600 hover:shadow-xl transition duration-300">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
