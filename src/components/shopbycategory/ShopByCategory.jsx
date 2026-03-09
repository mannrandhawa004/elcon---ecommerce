import React from 'react'
import shop1 from "../../assets/shop1.jpg"
import shop2 from "../../assets/shop2.png"
import banner2 from "../../assets/banner2.jpg"

import { ArrowRight, CheckCircle2, Send } from 'lucide-react'

const ShopByCategory = () => {
    const primaryColor = "#434377";

    const cards = [
        {
            title: "SMART",
            subtitle: "LIFESTYLE",
            image: shop1,
            tag: "New Arrival",
            points: ["AI-Powered Automation", "Energy Efficient Tech", "Voice Control Support", "2-Year Warranty"]
        },
        {
            title: "PURE",
            subtitle: "SOUND",
            image: shop2,
            tag: "Flash Sale",
            points: ["Active Noise Cancellation", "40H Battery Life", "Ultra-Soft Ear Cushions", "Hi-Res Audio Certified"]
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-6">
            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col sm:flex-row min-h-[450px] sm:h-[400px] bg-white overflow-hidden rounded-3xl border border-gray-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(67,67,119,0.2)]"
                    >
                        {/* LEFT SIDE: Image Section (Full width on mobile, 60% on desktop) */}
                        <div className="relative w-full sm:w-[60%] h-64 sm:h-auto overflow-hidden bg-[#e9e9f0]">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>

                        {/* RIGHT SIDE: Content Section (Full width on mobile, 40% on desktop) */}
                        <div className="w-full sm:w-[40%] bg-[#F3F3F7] py-8 px-6 sm:py-10 sm:pr-8 sm:pl-6 flex flex-col justify-center relative z-10">
                            {/* Tag */}
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <span className="h-[2px] w-6 bg-[#434377]"></span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#434377]">{card.tag}</span>
                            </div>

                            {/* Header */}
                            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-none mb-4 sm:mb-5 uppercase tracking-tighter">
                                {card.title} <br />
                                <span className="text-[#434377] italic font-light">{card.subtitle}</span>
                            </h3>

                            {/* Bullet Points */}
                            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {card.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 text-[12px] sm:text-[13px] font-semibold">
                                        <CheckCircle2 size={14} className="text-[#434377] flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <div className="mt-auto">
                                <button className="group/btn w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-[#434377] text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all shadow-xl shadow-[#434377]/20 hover:bg-[#34345d]">
                                    Shop Now
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter Section: Hidden on mobile (hidden), shown on medium screens and up (md:flex) */}
            <div className="hidden md:block w-full max-w-7xl mx-auto py-10 md:py-20">
                <div
                    className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-16"
                    style={{
                        backgroundColor: primaryColor,
                        minHeight: '200px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                >
                    {/* Background Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <img
                            src={banner2}
                            className="w-full h-full object-cover mix-blend-overlay"
                            alt=""
                        />
                    </div>

                    {/* Left Side: Content */}
                    <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                            Subscribe <span className="font-light italic">Newsletter</span>
                        </h2>
                        <p className="text-white/80 text-sm md:text-lg font-medium">
                            Get <span className="text-orange-400 font-bold">25% OFF</span> on your first order after joining!
                        </p>
                    </div>

                    {/* Right Side: Input Box */}
                    <div className="relative z-10 w-full md:w-2/5">
                        <form
                            className="relative flex items-center"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-6 py-4 md:py-5 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all pr-36 shadow-2xl"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 px-6 py-2.5 md:py-3.5 bg-[#434377] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-orange-500 transition-colors flex items-center gap-2 shadow-lg shadow-[#434377]/20"
                            >
                                Subscribe
                                <Send size={14} />
                            </button>
                        </form>
                        <p className="text-[10px] text-white/50 mt-3 ml-6">
                            * No spam, only curated tech deals and updates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory