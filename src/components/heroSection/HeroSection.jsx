import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from "../../assets/hero.jpg";
import dellLogo from "../../assets/dell.png"
import asusLogo from "../../assets/asus.png"
import jblLogo from "../../assets/jbl.png"
import appleLogo from "../../assets/apple.png"
import samLogo from '../../assets/sam.png'

const logos = [
    { name: 'Company One', url: dellLogo },
    { name: 'Company Two', url: asusLogo },
    { name: 'Company Three', url: jblLogo },
    { name: 'Company Four', url: appleLogo },
    { name: 'Company Five', url: samLogo },
];

const HeroSection = () => {
    const primaryColor = "#434377";
    return (
        <section className='p-4 md:p-10'> {/* Adjusted padding for mobile */}
            <div className="relative h-[80vh] md:h-[90vh] overflow-hidden bg-gray-900 rounded-lg ">
                <img
                    src={heroImage}
                    alt="Hero Tech"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* 3. Content Container */}
                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white">

                    {/* Small Tagline */}
                    <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
                        <span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase text-[var(--primary-color)]">
                            Special offer 2025
                        </span>
                    </div>

                    {/* Main Heading - Added responsive font sizes */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl mb-6 max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-1000 text-black font-bold">
                        On Mobile Phones  <br />
                        <span>sale upto <span className='text-[var(--primary-color)]'>30%</span> off</span>
                    </h1>

                    <span className='text-black font-semibold tracking-widest capitalize'>start form $140.50</span>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 mt-10">
                        <button
                            style={{ backgroundColor: primaryColor }}
                            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:pr-10 active:scale-95 shadow-xl shadow-black/20 text-white"
                        >
                            Shop now
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Trusted Brands - Added 'hidden md:block' to hide on small screens */}
            <div className="hidden md:block py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Trusted by Industry Leaders
                    </h2>

                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex h-24 w-40 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 
                         shadow-sm transition-all duration-300 ease-in-out 
                         hover:-translate-y-1 hover:scale-110 hover:border-blue-400 hover:shadow-xl cursor-pointer"
                            >
                                <img
                                    className="max-h-full w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                                    src={logo.url}
                                    alt={logo.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;