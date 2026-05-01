import Image from "next/image";
import React from "react";
import { FaStar, FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ProductDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://sun-cart-ecommerce.vercel.app/data.json')
    const products = await res.json();

    const product = products.find(p=> p.id == id);
    const { name, price, rating, description, image, brand, category } = product;

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 mt-20">
      
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Image */}
        <div>
          {/* Image */}
          <div className="bg-[#f6f4f1] rounded-2xl p-3 shadow-md">
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              priority
              className="w-full h-[420px] md:h-[550px] object-cover rounded-2xl"
            />
          </div>

          {/* Wishlist Button */}
          <button className="w-full mt-5 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3">
            <FaHeart />
            Add to Wishlist
          </button>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          
          {/* Category */}
          <p className="uppercase tracking-[4px] text-sm font-semibold text-orange-500">
            {category} Collection
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1 text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-gray-600 font-medium">
              {rating} / 5.0 (124 Reviews)
            </p>
          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-gray-900">
            ${price}.00
          </h2>

          {/* Stock */}
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ● In Stock — Ships Today
          </div>

          {/* Description */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Description
            </h3>

            <p className="text-gray-500 leading-8 text-lg">
              {description}
            </p>
          </div>

          {/* Brand */}
          <div className="pt-4">
            <p className="text-gray-500 font-medium mb-3">
              Brand: <span className="text-gray-900 font-semibold">{brand}</span>
            </p>

            {/* Color Dots */}
            <div className="flex gap-3 mt-2">
              <span className="w-8 h-8 rounded-full bg-[#d5b07a] border-2 border-orange-400"></span>
              <span className="w-8 h-8 rounded-full bg-gray-800"></span>
              <span className="w-8 h-8 rounded-full bg-gray-400"></span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-3">
            <FaShoppingBag />
            Buy Now
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetailsPage;