import React from 'react';
import { FaGlobe, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#020b1f] text-gray-300 px-8 md:px-20 py-16 rounded-t-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">SunCart</h2>

          <p className="text-sm leading-relaxed mb-6">
            Curating the finest summer essentials for your golden hours.
            From Mediterranean coasts to your backyard oasis, we bring the sun to you.
          </p>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0b1a3a] rounded-full hover:bg-[#13265a] cursor-pointer">
              <FaGlobe size={14} />
            </div>
            <div className="p-3 bg-[#0b1a3a] rounded-full hover:bg-[#13265a] cursor-pointer">
              <FaEnvelope size={14} />
            </div>
            <div className="p-3 bg-[#0b1a3a] rounded-full hover:bg-[#13265a] cursor-pointer">
              <FaPhoneAlt size={14} />
            </div>
          </div>
        </div>

        {/* Shop Summer */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">SHOP SUMMER</h3>
          <ul className="space-y-2 text-sm">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Sunglasses</li>
            <li>Beachwear</li>
            <li>Sun Care</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-sm">
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Our Story */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">OUR STORY</h3>
          <ul className="space-y-2 text-sm">
            <li>About SunCart</li>
            <li>Sustainability</li>
            <li>Press</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#0b1a3a] mt-12 pt-6 text-center text-xs text-gray-400">
        © 2024 SunCart. Premium Summer Essentials. ALL RIGHTS RESERVED.
      </div>
    </footer>
    );
};

export default Footer;