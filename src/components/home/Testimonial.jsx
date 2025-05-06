import Image from "next/image";

export default function Testimonial() {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <div className="inline-block bg-green-800 text-green-200 px-4 py-1 rounded-full text-sm font-semibold mb-3">
          Testimonial
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D203E]">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Don’t just take our word for it—here’s what some of our customers have
          to say about their experience with Fresh Harvest.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto relative">
        {/* Customer image */}
        <div className="relative">
          <Image
            src="/images/customer.jpg"
            alt="Customer"
            width={287}
            height={396}
            className="rounded-full object-cover"
          />
          <Image
            src="/images/quote-decor.png"
            alt="Quote decoration"
            width={40}
            height={40}
            className="absolute top-4 left-4"
          />
        </div>

        {/* Testimonial box */}
        <div className="bg-[#F4F5F7] text-black p-6 md:p-8 rounded-3xl max-w-xl shadow-lg">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            "I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs."
          </p>
          <p className="font-bold text-[#1D203E]">
            Jane Doe{" "}
            <span className="font-normal text-gray-600">
              – Professional chef
            </span>
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        <span className="w-3 h-3 bg-green-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
