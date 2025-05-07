import Image from "next/image";

const products = [
  {
    name: "Kiwi",
    price: "$5.3/kg",
    image: "/images/kiwi.png",
  },
  {
    name: "Orange",
    price: "$4.2/kg",
    image: "/images/orange.png",
  },
  {
    name: "Guava",
    price: "$2.2/kg",
    image: "/images/guava.png",
  },
  {
    name: "Eggplant",
    price: "$1.2/kg",
    image: "/images/eggplant.png",
  },
];

export default function RelatedProducts() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Related products
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-3xl border border-gray-100 p-4 shadow-[0px_8px_24px_rgba(20,37,63,0.08)]"
          >
            <div className="bg-gray-50 p-6 rounded-2xl mb-4 flex justify-center items-center h-40">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-4">
              {product.price}
            </p>
            <button className="mt-2 w-full py-2 border rounded-lg text-sm hover:bg-[#FF6A1A] hover:text-white transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
