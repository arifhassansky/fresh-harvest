"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import {
  clearSingleProduct,
  fetchSingleProduct,
} from "@/redux/features/singleProductSlice";
import RelatedProducts from "@/components/home/ProductDetailsPage/RelatedProducts";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.singleProduct
  );
  const [activeTab, setActiveTab] = useState("description"); // State to track active tab

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id));
    }

    return () => {
      dispatch(clearSingleProduct());
    };
  }, [id, dispatch]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error)
    return <p className="text-center mt-20 text-red-500">Error: {error}</p>;
  if (!product) return null;

  const productImage = product.images && product.images[0];

  return (
    <div className="mt-[150px]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Product Info Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={productImage}
              alt="Product Image"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Right - Info */}
          <div className="flex-1">
            <p className="inline-block text-sm bg-[#749B3F]/10 text-[#749B35] font-semibold px-3 py-1 rounded-lg mb-1">
              {product.category || "Category"}
            </p>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-yellow-500 text-sm mb-2">
              ★★★★★ {product.rating || 5.0} ({product.reviews || 0} reviews)
            </p>
            <p className="text-2xl font-semibold text-[#FF6A1A] mb-4">
              ${product.price}/kg
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Quantity & Actions */}
            <div className="flex gap-3 products-center mb-4">
              <p className="text-lg">Quantity: </p>
              <select className="border px-3 py-1 rounded">
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                Save to Favorites
              </button>
              <button className="px-6 py-2 rounded-lg bg-[#FF6A1A] text-white hover:bg-[#e05a14] transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex gap-6 mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 rounded-lg text-lg ${
                activeTab === "description"
                  ? "bg-[#749B3F] text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 rounded-lg text-lg ${
                activeTab === "reviews"
                  ? "bg-[#749B3F] text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white w-[894px] h-[248px] rounded-xl p-6 shadow-sm text-gray-700 leading-relaxed">
            {activeTab === "description"
              ? product.description || "No additional description available."
              : product.info || "No reviews available right now."}
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
