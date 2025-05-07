"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { fetchCategories } from "@/redux/features/categorySlice";
import { fetchProducts } from "@/redux/features/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { categoryName, loading: categoryLoading } = useSelector(
    (state) => state.category
  );
  const { products, loading: productLoading } = useSelector(
    (state) => state.product
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = ["All", ...categoryName.map((cat) => cat.categoryName)];

  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 8)
      : products
          .filter((p) => {
            const catObj = categoryName.find((c) => c.id === p.categoryId);
            return catObj?.categoryName === selectedCategory;
          })
          .slice(0, 8);

  return (
    <section className="px-12 text-center">
      <p className="text-xl font-medium text-[#749B3F] bg-[#749B3F1A] inline-block px-3 py-1 rounded-md mb-4">
        Our Products
      </p>
      <h2 className="text-5xl font-medium mb-4">Our Fresh Products</h2>
      <p className="text-[#4A4A52] text-sm mb-4">
        We pride ourselves on offering a wide variety of fresh and flavorful
        fruits,
        <br className="hidden md:block" /> vegetables, and salad ingredients.
      </p>

      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-lg border transition ${
              selectedCategory === cat
                ? "bg-[#6A983C] text-white"
                : "bg-white text-[#A6A6A6] border-[#D9D9D9]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {categoryLoading || productLoading ? (
        <p className="text-gray-500 text-lg mb-10">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      )}

      <Link
        href="/products"
        className="bg-white text-[#FF6A1A] border border-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white transition px-8 py-4 rounded-md text-lg font-semibold"
      >
        See All Products
      </Link>
    </section>
  );
}
