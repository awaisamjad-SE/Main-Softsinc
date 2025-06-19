import { Link } from "react-router-dom";
import blogData from '../../../data/blogData'; // ✅ Use this only

const BlogSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2e35d7]">
          📚 Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.summary}
                </p>
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

        <div className="mt-12 text-center">
          <Link to="/blog">
            <button className="px-6 py-3 bg-[#2e35d7] text-white rounded-full shadow hover:bg-[#1d28b3] transition">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
