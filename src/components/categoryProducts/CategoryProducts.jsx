import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ShoppingCart, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import bannerImg from "../../assets/bannerImg.jpg"
import watchImg from "../../assets/watch.jpg"
import stickImg from "../../assets/stick.jpg"
import laptopImg from "../../assets/laptop.jpg"
import iphone from "../../assets/iphone14.png"
import headphoneImg from "../../assets/headphones.jpg"
import fanImg from "../../assets/fan.png"
import cameraImg from "../../assets/camera.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import QuickAddButton from '../QuickAddButton/QuickAddButton';

const PRODUCTS = [
    {
        id: 1,
        name: "Premium Wireless Noise Cancelling Headphones",
        price: 299.00,
        oldPrice: 350.00,
        discount: "New Season",
        rating: 5,
        image: watchImg
    },
    {
        id: 2,
        name: "Smart Watch Series 7 - Minimal Edition",
        price: 399.00,
        oldPrice: 499.00,
        discount: "20% Off",
        rating: 4,
        image: stickImg
    },
    {
        id: 3,
        name: "Professional Mirrorless 4K Camera",
        price: 1200.00,
        oldPrice: 1500.00,
        discount: "Exclusive",
        rating: 5,
        image: laptopImg
    },
    {
        id: 4,
        name: "Portable Hi-Fi Bluetooth Speaker",
        price: 89.00,
        oldPrice: 120.00,
        discount: "Best Seller",
        rating: 4,
        image: fanImg
    },
    {
        id: 5,
        name: "Portable Hi-Fi Bluetooth Speaker",
        price: 89.00,
        oldPrice: 120.00,
        discount: "Best Seller",
        rating: 4,
        image: iphone
    },
    {
        id: 6,
        name: "Portable Hi-Fi Bluetooth Speaker",
        price: 89.00,
        oldPrice: 120.00,
        discount: "Best Seller",
        rating: 4,
        image: headphoneImg
    },
    {
        id: 7,
        name: "Portable Hi-Fi Bluetooth Speaker",
        price: 89.00,
        oldPrice: 120.00,
        discount: "Best Seller",
        rating: 4,
        image: cameraImg
    }
];

const CategoryProducts = ({ onAddToCart }) => {
    const primaryColor = "#434377";

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-16 relative overflow-hidden">

            {/* Header Section - Stacked on tiny devices, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-12 gap-4">
                <div className="border-b-4 border-[#434377] pb-1 self-start">
                    <h2 className="text-2xl xs:text-3xl md:text-4xl font-black text-[#434377] uppercase tracking-tighter">
                        Category <span className="font-light italic text-[#434377]/80">Products</span>
                    </h2>
                </div>

                {/* Navigation - Visible on sm+ screens */}
                <div className="hidden sm:flex gap-2">
                    <button className="prev-btn w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#434377] hover:text-white transition-all duration-300">
                        <ArrowLeft size={18} />
                    </button>
                    <button className="next-btn w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#434377] hover:text-white transition-all duration-300">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Product Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={12}
                slidesPerView={1.2} // Essential for mobile "swipe" hint
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination'
                }}
                breakpoints={{
                    340: { slidesPerView: 1.4, spaceBetween: 12 },
                    480: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 2.5, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="!pb-14"
            >
                {PRODUCTS.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto">
                        <div className="group relative bg-white border border-gray-100 p-2 sm:p-4 transition-all duration-500 hover:shadow-xl hover:border-gray-200 h-full flex flex-col rounded-md">

                            {/* Tags & Actions */}
                            <div className="absolute top-2 left-2 z-10">
                                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-tighter bg-white px-1.5 py-0.5 border border-[#434377]">
                                    {product.discount}
                                </span>
                            </div>

                            <button className="absolute top-2 right-2 z-10 p-1.5 bg-white/90 rounded-full md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500 shadow-sm touch-manipulation">
                                <Heart size={16} />
                            </button>

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] sm:aspect-square mb-3 overflow-hidden bg-[#F9F9F9] rounded-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-2 sm:p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Mobile-Optimized Quick Add (Hidden on Desktop hover only) */}
                                <div className="absolute bottom-0 left-0 w-full md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 bg-white border-t border-gray-100">
                                    
                                        <QuickAddButton product={product} onAdd={onAddToCart} />
                                    
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center mt-auto px-1">
                                <div className="flex justify-center gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={8} className="md:w-[10px]" fill={i < product.rating ? "#FFD41D" : "none"} stroke={i < product.rating ? "#FFD41D" : "#ccc"} />
                                    ))}
                                </div>
                                <h3 className="text-[11px] sm:text-[13px] md:text-sm font-semibold text-gray-800 mb-2 leading-tight line-clamp-2 h-7 sm:h-9">
                                    {product.name}
                                </h3>
                                <div className="flex flex-wrap justify-center items-center gap-2">
                                    <span className="text-xs sm:text-sm md:text-base font-bold text-[#434377]">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-400 line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="custom-pagination flex justify-center mb-4 sm:mb-8 gap-1.5"></div>

            {/* Banner - Completely hidden below MD (768px) */}
            <div className="hidden md:block w-full mt-6">
                <div className="relative w-full aspect-[21/9] lg:h-[400px] overflow-hidden rounded-2xl group shadow-lg">
                    <img
                        src={bannerImg}
                        alt="Season Sale"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>

                    <div className="relative z-10 h-full flex flex-col justify-center items-end px-8 lg:px-20 text-white text-right">
                        <div className="max-w-md">
                            <span className="text-[10px] lg:text-sm font-bold tracking-[0.4em] uppercase mb-2 lg:mb-4 text-orange-400 block">
                                Limited Time Offer
                            </span>
                            <h2 className="text-2xl lg:text-5xl font-serif leading-tight mb-4 lg:mb-6">
                                Hurry Up! <br />
                                <span className="italic font-light">Upto 20% Off</span> <br />
                                <span className="text-xl lg:text-4xl">on Premium Tech</span>
                            </h2>
                            <button
                                style={{ backgroundColor: primaryColor }}
                                className="inline-flex items-center gap-2 lg:gap-3 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all hover:pr-10 shadow-xl"
                            >
                                Shop Now
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-pagination .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: #ccc;
                    opacity: 1;
                    transition: all 0.3s ease;
                    border-radius: 99px;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    width: 18px;
                    background: ${primaryColor} !important;
                }
                @media (min-width: 768px) {
                    .custom-pagination .swiper-pagination-bullet { width: 8px; height: 4px; border-radius: 2px; }
                    .custom-pagination .swiper-pagination-bullet-active { width: 28px; }
                }
            `}} />
        </div>
    );
};

export default CategoryProducts;