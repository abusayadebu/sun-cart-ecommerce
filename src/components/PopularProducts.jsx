import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
    const res = await fetch('https://sun-cart-ecommerce.vercel.app/data.json')
    const products = await res.json()
    const topProducts = products.slice(0, 3)

    return (
        <div className="max-w-7xl mx-auto my-20 animate__animated animate__zoomIn animate__slow">
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
                Curated Essentials
                </span>
            <h1 className="text-4xl font-bold mb-10 text-gray-900">Summer Masterpieces</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    topProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;