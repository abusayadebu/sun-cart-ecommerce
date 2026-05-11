"use client";

import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { FaArrowRightLong } from "react-icons/fa6";

const TopBrands = () => {
  const brands = [
    "/brands/logo1.png",
    "/brands/logo2.png",
    "/brands/logo3.png",
    "/brands/logo4.png",
    "/brands/logo5.png",
    "/brands/logo6.png",
    "/brands/logo7.png",
    "/brands/logo8.png",
  ];

  // 🔥 duplicate for seamless infinite loop
  const loopBrands = [...brands, ...brands];

  return (
    <div className="mt-20 mb-4 bg-[#F7ECE1] pb-8">
        
        <div className="max-w-7xl mx-auto py-15 overflow-hidden">
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
                    mb-3
                    uppercase
                "
                >
                <FaArrowRightLong className="text-sm" />
                CURATED LABELS
                </span>
            {/* Heading */}
          <h2 className="text-4xl font-bold mb-5 text-gray-900">
            Luxury Partners
          </h2>
        <p className="text-[#726961] text-[15px] sm:text-[17px] leading-[1.9] max-w-2xl mb-8">
            Luxury Partners connects premium brands and trusted collaborators to deliver a refined, high-quality experience.
          </p>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={40}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {loopBrands.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex items-center justify-center"
          >
            <img
              src={logo}
              alt="brand"
              className="h-15 w-auto object-contain grayscale hover:grayscale-0 transition rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default TopBrands;