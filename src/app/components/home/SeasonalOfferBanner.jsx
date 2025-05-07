import Image from "next/image";

export default function SeasonalOfferBanner() {
  return (
    <section className="bg-white relative overflow-hidden py-16 px-6 md:px-16">
      {/* Background illustration (vegetable doodles) could be added with CSS background or another image layer */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div className="space-y-6">
          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            Special Offer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Seasonal Fruit Bundle
          </h1>
          <p className="text-xl font-semibold text-gray-800">
            Discount up to <span className="text-orange-500">80% OFF</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-4">
            {["03", "18", "54", "21"].map((time, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-gray-900">{time}</p>
                <p className="text-sm text-gray-600">
                  {["Days", "Hour", "Min", "Second"][i]}
                </p>
              </div>
            ))}
          </div>

          {/* Code Box */}
          <div className="inline-block mt-6 bg-green-800 text-white px-6 py-3 rounded-full font-bold text-lg">
            CODE : <span className="text-yellow-400">FRESH28</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <Image
            src="/images/fruits.png"
            alt="Seasonal Fruits"
            width={627}
            height={380}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
