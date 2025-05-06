"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-6 bg-white">
      {/* Left side - Image*/}
      <div className="relative w-full md:w-1/2">
        {/* Background semi-circle */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-300 rounded-full -z-10"></div>

        {/* Image */}
        <Image
          src="/images/farmer.png"
          alt="Happy Farmer"
          width={686}
          height={574}
          className="z-10"
        />

        {/* Logo tag */}
        <div className="absolute bottom-40 left-60 bg-white rounded px-4 py-2 shadow-md flex items-center gap-2">
          <Image
            src="/images/Logo-icon.png"
            alt="Leaf"
            width={24}
            height={24}
          />
          <span className="font-bold text-gray-800">Fresh Harvests</span>
        </div>

        {/* Product card */}
        <div className="absolute -bottom-10 right-60 bg-white rounded-xl p-[6px] shadow-md text-center">
          <Image
            src="/images/letus.png"
            alt="Lettuce"
            width={106}
            height={106}
            className="mx-auto"
          />
          <p className="font-semibold text-[9px] mt-[6px]">Mushroom</p>
          <p className="text-[9px] text-gray-600">$2.3/kg</p>
          <button className="w-full mt-[6px] text-[9px] border border-gray-300 rounded-md py-1 hover:bg-gray-100">
            Add to cart
          </button>
        </div>

        {/* orange vector */}
        <div className="absolute bottom-32 right-44">
          <Image
            src="/images/quote-decor.png"
            alt="Leaf"
            width={50}
            height={50}
            className="rotate-45"
          />
        </div>

        {/* leaf */}
        <div className="absolute top-8 right-32">
          <Image
            src="/images/leaf1.png"
            alt="Leaf"
            width={66}
            height={50}
            className="-rotate-[85deg]"
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="inline-block bg-green-100 text-[#749B3F] font-semibold px-3 py-1 rounded-lg mb-4">
          About us
        </div>
        <h2 className="text-5xl font-meduim mb-4">About Fresh Harvest</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="mt-2 px-8 py-4 border border-orange-500 text-orange-500 text-lg font-semibold hover:bg-orange-500 hover:text-white rounded-lg transition">
          Read More
        </button>
      </div>
    </section>
  );
}
