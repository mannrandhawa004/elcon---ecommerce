import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ShoppingCart, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import tv from "../../assets/tv.jpg"
import refi from "../../assets/ref.png"
import iphone2 from "../../assets/iphone2.png"
import camera2 from "../../assets/camera2.png"
import eliteBook from "../../assets/elitebook.png"
import lg from "../../assets/smartWatch2.jpg"
import smartWatch from "../../assets/smartWatch.png"
import speakers from "../../assets/headphones2.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import QuickAddButton from '../QuickAddButton/QuickAddButton';

const ALL_PRODUCTS = [
    { id: 1, type: 'featured', name: "Noise Cancelling Headphones", price: 299, oldPrice: 350, rating: 5, image: tv },
    { id: 2, type: 'best', name: "Smart Watch Series 7", price: 399, oldPrice: 499, rating: 4, image: refi },
    { id: 3, type: 'featured', name: "Mirrorless 4K Camera", price: 1200, oldPrice: 1500, rating: 5, image: iphone2 },
    { id: 4, type: 'best', name: "Hi-Fi Bluetooth Speaker", price: 89, oldPrice: 120, rating: 4, image: speakers },
    { id: 5, type: 'featured', name: "Mechanical Keyboard", price: 159, oldPrice: 199, rating: 5, image: camera2 },
    { id: 6, type: 'best', name: "Minimalist Desk Lamp", price: 45, oldPrice: 60, rating: 4, image: smartWatch },
    { id: 7, type: 'featured', name: "Ergonomic Mouse", price: 79, oldPrice: 99, rating: 5, image: eliteBook },
    { id: 8, type: 'best', name: "USB-C Hub Multiport", price: 55, oldPrice: 75, rating: 4, image: lg },
];

const TrendingProducts = ({ onAddToCart }) => {
    // const primaryColor = "#434377";
    const [activeTab, setActiveTab] = useState('featured');
    const filteredProducts = ALL_PRODUCTS.filter(p => p.type === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 relative font-sans">
            <div className="mb-2">
                <h2 className="text-2xl md:text-4xl font-black text-[#434377] uppercase tracking-tighter inline border-b-4 border-[#434377]">
                    Trending <span className="font-light italic">Products</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 border-b border-gray-100 pb-6 gap-6 mt-10">
                <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                    {['featured', 'best'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-xs md:text-sm font-black uppercase tracking-[0.1em] transition-all relative pb-2 whitespace-nowrap ${activeTab === tab ? `text-[#434377]` : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab === 'featured' ? 'Featured Products' : 'Best Sellers'}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#434377] rounded-full" />}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <button className="trending-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#434377] hover:text-white transition-all"><ArrowLeft size={18} /></button>
                    <button className="trending-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#434377] hover:text-white transition-all"><ArrowRight size={18} /></button>
                </div>
            </div>

            <Swiper
                key={activeTab}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1.2}
                navigation={{ nextEl: '.trending-next', prevEl: '.trending-prev' }}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="trending-swiper !pb-16"
            >
                {filteredProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="group relative bg-white border border-gray-100 p-3 md:p-4 transition-all duration-500 hover:border-gray-300 h-full">
                            <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-[#F9F9F9]">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 w-full translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 bg-white border-t border-gray-200">
                                    {/* USE REUSABLE BUTTON HERE */}
                                    <QuickAddButton product={product} onAdd={onAddToCart} />
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center gap-0.5 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} fill={i < product.rating ? "#FFD41D" : "none"} stroke={i < product.rating ? "#FFD41D" : "#ccc"} />
                                    ))}
                                </div>
                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-800 mb-2 h-10 line-clamp-2">{product.name}</h3>
                                <div className="flex justify-center items-center gap-3">
                                    <span className="text-xs md:text-sm font-bold text-[#434377]">${product.price.toFixed(2)}</span>
                                    <span className="text-[9px] text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendingProducts;