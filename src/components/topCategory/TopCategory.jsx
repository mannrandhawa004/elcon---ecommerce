import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import watchImg from "../../assets/watch.jpg"
import stickImg from "../../assets/stick.jpg"
import laptopImg from "../../assets/laptop.jpg"
import iphone from "../../assets/iphone14.png"
import headphoneImg from "../../assets/headphones.jpg"
import fanImg from "../../assets/fan.png"
import cameraImg from "../../assets/camera.jpg"
import banner2 from "../../assets/banner2.jpg"
import mobiles from "../../assets/mobiles.png"

const CATEGORIES = [
    { id: 1, name: "Watches", image: watchImg },
    { id: 2, name: "Accessories", image: stickImg },
    { id: 3, name: "Laptops", image: laptopImg },
    { id: 4, name: "Smartphones", image: iphone },
    { id: 5, name: "Audio", image: headphoneImg },
    { id: 6, name: "Appliances", image: fanImg },
    { id: 7, name: "Cameras", image: cameraImg },
];

const TopCategory = () => {
    const primaryColor = "#434377";

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 relative">
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-pagination .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: #ccc;
                    opacity: 1;
                    transition: all 0.3s;
                    border-radius: 2px;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    width: 24px;
                    background: ${primaryColor} !important;
                }
            `}} />

            {/* Header Section */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#434377] uppercase tracking-tighter border-b-4 border-[#434377]">
                        Top <span className="font-light italic">Category</span>
                    </h2>
                </div>

                {/* Navigation Buttons - Hidden on mobile for cleaner UI */}
                <div className="hidden sm:flex gap-3">
                    <button className="category-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 hover:text-white" style={{ backgroundColor: 'transparent' }}>
                        <ArrowLeft size={18} />
                    </button>
                    <button className="category-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 hover:text-white" style={{ backgroundColor: 'transparent' }}>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Category Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={2.2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.category-next',
                    prevEl: '.category-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination'
                }}
                breakpoints={{
                    480: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 25 },
                    1024: { slidesPerView: 6, spaceBetween: 30 },
                }}
                className="!pb-12"
            >
                {CATEGORIES.map((cat) => (
                    <SwiperSlide key={cat.id}>
                        <div className="group flex flex-col items-center cursor-pointer">
                            <div className="relative w-full aspect-square overflow-hidden mb-3 border-2 border-transparent transition-all duration-300 group-hover:border-[#434377] p-4 md:p-6 bg-white rounded-lg"
                                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-[10px] md:text-sm font-bold text-gray-700 uppercase tracking-tight transition-colors group-hover:text-[#434377] text-center">
                                {cat.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Container */}
            <div className="custom-pagination flex justify-center mt-2 gap-2"></div>

            {/* Banner Section - HIDDEN ON MOBILE (hidden md:flex) */}
            <div className="hidden md:flex w-full mt-16 mb-10">
                <div
                    className="relative w-full rounded-xl flex items-center justify-between overflow-visible"
                    style={{ backgroundColor: primaryColor, minHeight: '140px' }}
                >
                    {/* Left Side: Text Content */}
                    <div className="flex-1 px-10 py-8 text-white z-10">
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Get every sunday <span className="font-bold text-orange-400">40% discount</span> & free delivery on orders above $200!
                        </p>
                    </div>

                    {/* Right Side: Pop-out Image */}
                    <div className="relative w-1/3 h-full flex justify-end px-10">
                        <img
                            src={mobiles}
                            alt="Mobiles"
                            className="absolute bottom-0 right-10 h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
                            style={{
                                transform: 'translateY(15%)',
                                filter: 'drop-shadow(0 20px 15px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none rounded-xl overflow-hidden">
                        <img src={banner2} className="w-full h-full object-cover mix-blend-overlay" alt="" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .category-prev:hover, .category-next:hover {
                    background-color: ${primaryColor} !important;
                    border-color: ${primaryColor};
                }
            `}</style>
        </div>
    );
};

export default TopCategory;