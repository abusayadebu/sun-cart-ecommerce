import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px]">

      {/* Background Image */}
      <Image
        src="/banner4.png"
        alt="Summer Sale"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-0">

        <div className="max-w-xl text-white">

      {/* Badge */}
            <span
            className="
                inline-flex
                items-center
                gap-2
                 bg-yellow-400
                 text-black
                 text-xs
                font-semibold
                px-4
                py-2
                rounded-full
                mb-6
                uppercase
            "
            >
            <FaArrowRightLong className="text-sm" />
            Curated Essentials
            </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Summer Sale
          </h1>

          <h2 className="text-5xl md:text-7xl font-extrabold text-orange-400 mt-2">
            50% OFF !
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-200 leading-relaxed">
            Stay cool. Stay stylish. Elevate your vacation wardrobe
            with our curated collection of high-end summer essentials.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <button className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-7 py-3
              rounded-full
              font-semibold
              transition
            ">
              Start Shopping
            </button>

            <button className="
              border border-white/50
              text-white
              px-7 py-3
              rounded-full
              backdrop-blur-md
              hover:bg-white/10
              transition
            ">
              View Lookbook
            </button>

          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;