"use client";

import React, { useState, useEffect } from 'react'; // 👈 Import useEffect
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroBanners } from '@/data/dummyData';

const SLIDE_DURATION = 5000; // 5 seconds

const HeroBanner: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Helper function to advance to the next slide, handling array loop
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === heroBanners.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? heroBanners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    // 🔄 Auto-slide implementation using useEffect and setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); 
        }, SLIDE_DURATION);

        // Cleanup function to clear the interval when the component unmounts or state changes
        return () => clearInterval(interval);
    }, [currentIndex]); // 👈 Re-run effect/reset interval after manual interaction

    return (
        <div className="w-full h-[200px] md:h-[250px] lg:h-[233px] relative group bg-neutral-100">
            <div
                style={{ backgroundImage: `url(${heroBanners[currentIndex].image})` }}
                className="w-full h-full bg-center bg-cover duration-500 ease-in-out"
            >
            </div>

            {/* Left Arrow - visible on hover */}
            <div className="hidden group-hover:block absolute top-[35%] -translate-y-[-30%] z-10 text-2xl rounded-lg p-2 bg-[#00000050] text-neutral-white cursor-pointer">
                <ChevronLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow - visible on hover */}
            <div className="hidden group-hover:block absolute top-[35%] -translate-y-[-30%] right-0 z-10 text-2xl rounded-lg p-2 bg-[#00000050] text-neutral-white cursor-pointer">
                <ChevronRight onClick={nextSlide} size={30} />
            </div>

            {/* Pagination Dots */}
            <div className='flex justify-center absolute bottom-4 w-full gap-2 z-10'>
                {heroBanners.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer w-2 h-2 rounded-full transition-all ${currentIndex === slideIndex ? 'bg-primary-brand w-6' : 'bg-white/50'
                            }`}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;