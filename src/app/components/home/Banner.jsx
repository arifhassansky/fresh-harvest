import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative bg-[url('/images/bannerbg.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden">
      <div className="pl-12 grid grid-cols-12">
        {/* Left Side */}
        <div className="z-10 pt-46 col-span-9 relative">
          <span className="text-xl px-3 py-1 text-[#749B3F] font-medium bg-[#749B3F1A]">
            Welcome to Fresh Harvest
          </span>
          <h1 className="mt-4 text-4xl md:text-[80px]  font-medium leading-tight">
            Fresh Fruits and <br className="hidden md:block" /> Vegetables
          </h1>
          <p className="mt-4 font-sm text-gray-600">
            At Fresh Harvest, we are passionate about providing you with the
            freshest <br className="hidden md:block" /> and most flavorful
            fruits and vegetables
          </p>

          <div className="relative">
            <button className="mt-8 bg-[#FF6A1A] text-white text-lgs px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition">
              Shop Now
            </button>

            <Image
              src="/images/vector.png"
              alt="Salad"
              width={55}
              height={37}
              className="absolute -bottom-16 left-30 md:block hidden"
            />
          </div>

          {/* Coupon Card */}
          <div className="mt-6 p-4 bg-[#EBEBEB] rounded-xl shadow-md w-full max-w-fit md:ml-56 flex flex-col md:flex-row items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-[#176D38] font-medium mb-[3px]">
                Special Offer
              </p>
              <p className="text-[24px] md:text-[28px] font-medium">
                Fresh Salad
              </p>
              <p className="text-green-600 font-medium">
                Up to
                <span className="text-black">
                  <span className="font-medium text-2xl">70% </span>off
                </span>
              </p>
              <p className="mt-[9px] text-xs font-bold text-white bg-[#176D38] px-3 py-[6px] w-max mx-auto md:mx-0 rounded-[35px]">
                CODE : <span className="text-[#FAC714]">FRESH25</span>
              </p>
            </div>
            <Image
              src="/images/bannersalad.png"
              alt="Salad"
              width={149}
              height={146}
              className="rounded-full"
            />
          </div>

          {/* App Buttons */}
          <div className="mt-[25px]">
            <p className="text-xs">Download App:</p>
            <div className="mt-6 flex gap-3">
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={120}
                height={40}
              />
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={120}
                height={40}
              />
            </div>
          </div>
          {/* banner left right side leaf image */}
          <Image
            src="/images/leaf1.png"
            alt="Leaf1"
            width={70}
            height={50}
            className="absolute top-16 right-80 rotate-[266deg] mt-24"
          />
        </div>

        {/* Right Side */}
        <div
          className="relative h-[900px] pt-24 col-span-3"
          style={{
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            backgroundColor: "#749B3F",
          }}
        ></div>
        <Image
          src="/images/banner.png"
          alt="Girl with vegetables"
          width={772}
          height={884}
          className="absolute bottom-0 -right-12 z-10 w-[434px] h-[473px] md:w-[772px] md:h-[804px] object-cover"
        />
      </div>

      {/* Decorative Leaf Images */}
      <Image
        src="/images/leaf1.png"
        alt="Leaf1"
        width={90}
        height={70}
        className="absolute top-10 -left-16 rotate-[156deg] mt-24"
      />
      <Image
        src="/images/leaf1.png"
        alt="Leaf2"
        width={54}
        height={34}
        className="absolute bottom-28 left-8 rotate-[266deg]"
      />
    </section>
  );
}
