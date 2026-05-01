import ProductCard from '@/components/ProductCard';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const AllProductsPage = async () => {
    const res = await fetch('https://sun-cart-ecommerce.vercel.app/data.json')
    const products = await res.json()
    console.log(products);
    return (
        <div className='max-w-7xl mx-auto mt-25'>
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
                                mb-3
                                uppercase
                            "
                            >
                            <FaArrowRightLong className="text-sm" />
                            Summer Collection 2026
                            </span>
            <h2 className='text-4xl font-bold text-gray-900'>Summer Catalog</h2>
            <p className='text-gray-500 w-full md:w-3/5 my-3 text-lg'>Experience the warmth of the Mediterranean with our hand-selected luxury goods. Each piece is crafted to elevate your leisure lifestyle.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>
                {
                    products.map(product =><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProductsPage;