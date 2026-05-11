import React from 'react';
import { FaTint } from 'react-icons/fa';
import { FaArrowRightLong, FaEye, FaRegSun, FaSun } from 'react-icons/fa6';

const SummerCare = () => {
    return (
        <section className="w-full bg-[#F7ECE1] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
                SUMMER SKIN RITUALS
                </span>

        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold mb-5 text-gray-900">
            Expert Summer Care Guide
          </h2>

          <p className="text-[#726961] text-[15px] sm:text-[17px] leading-[1.9] max-w-2xl">
            Protect your glow and maintain your style with our professional tips for the sunny season and stay radiant, confident, and protected.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1 */}
          <div className="bg-[#F8F8F8] rounded-[34px] p-4 text-center min-h-[390px] flex flex-col items-center justify-center">
            
            {/* Icon Circle */}
            <div className="w-[78px] h-[78px] rounded-full bg-[#F7E6C8] flex items-center justify-center">
              <FaTint className="text-[#F0A01A] text-[26px]" />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold text-[#1f1f1f]">
              Pure Hydration
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#7A716A] leading-[2] max-w-[280px]">
              Drink 3+ liters of mineral water daily to keep your skin luminous
              and energy high.
            </p>
          </div>

          {/* Center Highlight Card */}
          <div className="bg-[#FF5A00] rounded-[34px] p-4 text-center min-h-[390px] flex flex-col items-center justify-center shadow-sm">
            
            {/* Icon Circle */}
            <div className="w-[78px] h-[78px] rounded-full bg-[#FF7A2C] flex items-center justify-center">
              <FaSun className="text-white text-[26px]" />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold font-bold text-white tracking-[-0.5px]">
              Total SPF Shield
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#FFE2D0] text-[17px] leading-[2] font-medium max-w-[280px]">
              Reapply broad-spectrum SPF 50 every two hours for comprehensive
              luxury skin protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F8F8] rounded-[34px] p-4 text-center min-h-[390px] flex flex-col items-center justify-center">
            
            {/* Icon Circle */}
            <div className="w-[78px] h-[78px] rounded-full bg-[#F7E6C8] flex items-center justify-center">
              <FaEye className="text-[#E5B000] text-[26px]" />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold text-[#231F1C] tracking-[-0.5px]">
              Vision Guard
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#7A716A] text-[17px] leading-[2] font-medium max-w-[280px]">
              Ensure your eyewear is UV-rated to protect your eyes from intense
              coastal glare.
            </p>
          </div>

        </div>
      </div>
    </section>
    );
};

export default SummerCare;