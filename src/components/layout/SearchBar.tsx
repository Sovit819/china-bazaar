// src/components/Header/SearchBar.tsx

import React from 'react';
import { Search, Camera } from 'lucide-react';

const SearchBar: React.FC = () => {
    return (
        <div
            className="flex items-center 
            w-full max-w-[549px] h-[40px] md:h-[48px] 
            border-[1.4px] 
            border-primary-brand 
            rounded-[100px] 
            overflow-hidden 
            shadow-sm 
            bg-white"
        >
            {/* 1. Search Icon */}
            <Search className="w-4 h-4 ml-4 md:ml-6 text-neutral-n500 shrink-0" />

            {/* 2. Input Field */}
            <input
                type="text"
                placeholder="Search for products & more..."
                className="flex-grow p-2 md:p-3 pl-2 
                border-none 
                outline-none 
                text-[13px] md:text-body-medium 
                font-book 
                text-neutral-n700 
                placeholder-neutral-n400"
            />

            {/* 3. Camera/Image Search Button */}
            <button
                title="Search by image"
                className="h-[32px] w-[44px] md:h-[40px] md:w-[58px] 
                flex items-center 
                justify-center 
                bg-[#CDD6FF20] rounded-[1000px] 
                cursor-pointer 
                hover:bg-[#CDD6FF50] 
                transition 
                mr-2 
                text-primary-brand"
            >
                <Camera className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* 4. Search Button */}
            <button
                className="h-[32px] w-[80px] md:h-[40px] md:w-[111px] 
                flex items-center 
                justify-center 
                bg-primary-brand 
                rounded-[1000px] mr-1.5 
                text-white text-[12px] md:text-body-medium 
                cursor-pointer 
                hover:bg-[#3A42C1] transition"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;