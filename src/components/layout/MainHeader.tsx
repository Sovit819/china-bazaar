import React from 'react';
import SearchBar from './SearchBar';
import { ShoppingCart, Heart, User, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MainHeader: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Top Section */}
            <div className="px-4 md:px-8 xl:px-[100px] mt-[18px] mb-[20.5px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4">

                {/* 1. Left Section: Logo */}
                <div className="flex items-center shrink-0 justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center justify-center cursor-pointer" style={{ width: '153.16px', height: '25.16px' }}>
                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            width={153}
                            height={25}
                            className="object-contain"
                        />
                    </Link>

                    {/* Mobile Only: Icons + Profile (Row 1 Right) */}
                    <div className="flex lg:hidden items-center gap-2">
                        <Link href="/wishlist">
                            <button className="flex items-center justify-center bg-[#CDD6FF20] rounded-full w-[40px] h-[40px] text-primary-brand">
                                <Heart size={20} />
                            </button>
                        </Link>
                        <Link href="/cart">
                            <button className="flex items-center justify-center bg-[#CDD6FF20] rounded-full w-[40px] h-[40px] text-primary-brand">
                                <ShoppingCart size={20} />
                            </button>
                        </Link>
                        <Link href="/profile" className="w-[40px] h-[40px] bg-neutral-n50 rounded-full flex items-center justify-center text-neutral-n800">
                            <User size={20} />
                        </Link>
                    </div>
                </div>

                {/* 2. Middle Section: SearchBar + Desktop Icons */}
                <div className="flex items-center justify-center w-full lg:flex-1 lg:mx-8 order-last lg:order-none mt-2 lg:mt-0">
                    <SearchBar />

                    {/* Desktop Only Icons */}
                    <div className="hidden lg:flex items-center ml-4">
                        {/* Cart Link */}
                        <Link href="/cart">
                            <button
                                className="
                                w-[48px] h-[48px] 
                                flex items-center justify-center 
                                bg-[#CDD6FF20] 
                                rounded-[1000px] 
                                text-primary-brand
                                cursor-pointer
                                hover:bg-[#CDD6FF50]
                                transition
                            "
                            >
                                <ShoppingCart size={20} />
                            </button>
                        </Link>

                        {/* Heart Link */}
                        <Link href="/wishlist">
                            <button
                                className="
                                ml-[6px] 
                                w-[48px] h-[48px] 
                                flex items-center justify-center 
                                bg-[#CDD6FF20] 
                                rounded-[1000px] 
                                text-primary-brand
                                cursor-pointer
                                hover:bg-[#CDD6FF50]
                                transition
                            "
                            >
                                <Heart size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* 3. Right Section: Profile (Desktop Only) */}
                <div className="hidden lg:flex items-center shrink-0">
                    <Link href="/profile" className="flex items-center cursor-pointer group">
                        {/* Profile Icon */}
                        <div className="w-[48px] h-[48px] bg-neutral-n50 rounded-full flex items-center justify-center text-neutral-n800 group-hover:bg-neutral-100 transition">
                            <User size={24} />
                        </div>
                        {/* Profile Text */}
                        <div className="ml-[12px] flex flex-col">
                            <span className="text-neutral-n800 font-medium text-[14px]">Welcome</span>
                            <span className="text-neutral-n700 font-book text-[12px] group-hover:text-primary-brand transition">
                                Sign In / Register
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bottom Section: Blue Navigation Bar */}
            <div className="w-full bg-primary-brand h-[36px] flex items-center overflow-hidden">
                <div className="px-4 xl:px-[100px] w-full flex items-center text-white text-body-small overflow-x-auto no-scrollbar">
                    {/* All Categories Button */}
                    <div className="flex items-center gap-2 cursor-pointer mr-[42px] px-2 py-1 hover:bg-white/10 rounded transition shrink-0">
                        <Menu size={18} />
                        <span className="font-medium whitespace-nowrap">All Categories:</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center">
                        {[
                            'Phone Cases',
                            'Cooking & Utensils',
                            'Electronics',
                            'Watches',
                            'Room Accessories',
                            'Washing Machines',
                            'Men\'s Clothing',
                            'Women\'s Clothing'
                        ].map((category, index, array) => (
                            <React.Fragment key={index}>
                                <span className="cursor-pointer hover:underline hover:text-white/90 transition whitespace-nowrap decoration-1 underline-offset-4">
                                    {category}
                                </span>
                                {index < array.length - 1 && (
                                    <span className="mx-4 text-white/40 font-light select-none">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
