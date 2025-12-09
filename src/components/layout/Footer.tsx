import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral-n50 border-t border-neutral-n100">
            {/* Top Description Section */}
            <div className="border-b border-neutral-n200">
                <div className="max-w-7xl mx-[20px] lg:mx-[100px] px-4 py-6">
                    <h3 className="text-body-medium font-medium mb-3">ChinaBazaar | E-commerce Bazaar</h3>
                    <p className="text-body-small text-neutral-n600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* Links Grid */}
                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                        {Array.from({ length: 36 }).map((_, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    href="#"
                                    className="text-body-xs text-neutral-n600 hover:text-primary-brand transition-colors mr-2 ml-2"
                                >
                                    Lorem Ipsum
                                </Link>
                                {index < 35 && <span className="text-body-xs text-neutral-n400">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-[20px] lg:mx-[100px] px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                    {/* Company Info & Social */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/Logo.png" alt="Logo" width={197} height={32} />
                        </div>
                        <p className="text-body-xs text-neutral-n600 mb-4">
                            Your destination for the products you love, all in one place
                        </p>

                        <h4 className="text-body-medium font-medium mb-3">Follow Us</h4>
                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-neutral-n300 flex items-center justify-center hover:bg-primary-brand hover:text-white hover:border-primary-brand transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-lg" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-neutral-n300 flex items-center justify-center hover:bg-primary-brand hover:text-white hover:border-primary-brand transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-lg" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border border-neutral-n300 flex items-center justify-center hover:bg-primary-brand hover:text-white hover:border-primary-brand transition-all"
                                aria-label="TikTok"
                            >
                                <FaTiktok className="text-lg" />
                            </Link>
                        </div>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-body-medium font-medium text-neutral-n800 mb-6">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 hover:text-primary-brand transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 hover:text-primary-brand transition-colors">
                                    Cancellations & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 hover:text-primary-brand transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About Chinabazar */}
                    <div>
                        <h4 className="text-body-medium font-medium text-neutral-n800 mb-6">About Chinabazar</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 font-book hover:text-primary-brand transition-colors">
                                    About Chinabazar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 font-book hover:text-primary-brand transition-colors">
                                    Chinabazar Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 font-book hover:text-primary-brand transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-body-small text-neutral-n700 font-book hover:text-primary-brand transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h4 className="text-body-medium font-medium text-neutral-n800 mb-6">Payment Methods</h4>
                        <div className="flex flex-wrap gap-2">
                            <Image src="/esewa.png" alt="eSewa" width={70} height={40} className="object-contain w-[70px] h-[40px] rounded-[10px]" />
                            <Image src="/khalti.png" alt="Khalti" width={70} height={40} className="object-contain w-[70px] h-[40px] rounded-[10px]" />
                            <Image src="/cashondelivery.png" alt="Cash on Delivery" width={70} height={40} className="object-contain w-[70px] h-[40px] rounded-[10px]" />
                        </div>
                    </div>

                    {/* Download App */}
                    <div className="lg:col-span-2">
                        <h4 className="text-body-medium font-medium text-neutral-n800 mb-6">Download</h4>
                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-n800 transition-colors whitespace-nowrap"
                            >
                                <Image src="/Playstore.png" alt="" width={24} height={24} className="object-contain" />
                                <div className="text-left">
                                    <div className="text-[9px]">GET IT ON</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </Link>

                            <Link
                                href="#"
                                className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-n800 transition-colors whitespace-nowrap"
                            >
                                <Image src="/Apple.png" alt="" width={24} height={24} className="object-contain" />
                                <div className="text-left">
                                    <div className="text-[9px]">DOWNLOAD ON</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-n200">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <p className="text-body-xs text-neutral-n800 font-book text-center">
                        Copyright © 2025 "Chinabazar". All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
