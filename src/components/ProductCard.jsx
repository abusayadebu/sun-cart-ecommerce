"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, price, rating, description, image } = product;

  return (
    <div className="bg-[#f3f3f3] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto">
      
      {/* Image Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-[320px] object-cover rounded-2xl"
        />

        {/* NEW Badge */}
        <span className="absolute top-4 right-4 bg-white text-orange-400 font-semibold text-sm px-4 py-1 rounded-full shadow">
          NEW
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        {/* Title + Rating */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1f1f1f]">{name}</h2>

          <div className="flex items-center gap-1 text-orange-400 font-semibold">
            <FaStar className="text-sm" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-lg leading-8 line-clamp-2">
          {description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-8">
          <h3 className="text-2xl font-bold text-orange-400">
            ${price}.00
          </h3>

          <button className="text-[#9b6a00] text-lg font-semibold hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;