import Image from "next/image";

const ProductCard = ({ product }) => {
  const productImage = product.images && product.images[0];

  return (
    <div className="bg-white px-3 py-[10px] rounded-xl shadow-sm hover:shadow-md flex flex-col items-center">
      {productImage ? (
        <Image
          src={productImage}
          alt={product.productName}
          width={200}
          height={200}
          className="mb-2 rounded-2xl w-[200px] h-[200px] object-cover"
        />
      ) : (
        <div className="mb-2 w-24 h-24 bg-gray-300 rounded-2xl">
          Image Not Found
        </div>
      )}
      <p className="font-semibold text-lg">{product.productName}</p>
      <p className="text-lg mb-3">${product.price}</p>
      <button
        className={`w-full rounded-lg border border-[#D9D9D9] px-4 py-2 text-lg hover:bg-[#FF6A1A] hover:text-white transition-all`}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
