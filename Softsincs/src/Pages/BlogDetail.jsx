import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import Hero2 from "../Components/layout/Hero2";
import bgContact from "../assets/Images/background.jpg";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
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
        <div className="p-10 text-center text-red-600 text-xl">Blog not found</div>
      </>
    );
  }

  return (
    <>
      <Hero2
        smallTitle="Blogs"
        title={blog.title}
        description="Dive deep into our latest insights, stories, and updates."
        buttonText="Back to Blogs"
        buttonLink="/blog"
        backgroundImage={bgContact}
      />

      <article className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          {blog.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 text-sm mb-6">
          <p>
            By{" "}
            <span className="font-semibold text-gray-800">{blog.author}</span>{" "}
            • {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className="italic">Estimated read time: {blog.readTime}</p>
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-4 mb-10">
            <h3 className="text-lg font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg w-full h-auto mb-10 shadow-lg object-cover max-h-[500px]"
          />
        )}

        <div
          className="prose max-w-none prose-lg prose-slate dark:prose-invert leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </>
  );
};

export default BlogDetail;
