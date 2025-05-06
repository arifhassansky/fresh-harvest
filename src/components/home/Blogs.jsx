// app/components/BlogSection.jsx
import Image from "next/image";

const blogPosts = [
  {
    title: "Exploring Seasonal Delights: A Guide to What’s Fresh Right Now",
    date: "May 23, 2024",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads”",
    date: "May 23, 2024",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
    image: "/images/blog3.png",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="py-20 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-green-800 text-green-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Our Blog
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D203E]">
          Fresh Harvest Blog
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="space-y-4">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <h3 className="text-lg font-semibold text-[#1D203E] leading-snug">
              {post.title}
            </h3>
            <a
              href={post.link}
              className="text-orange-500 font-bold hover:underline inline-flex items-center gap-1"
            >
              Read More <span className="text-xl">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
