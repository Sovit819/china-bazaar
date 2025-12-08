import React from 'react';
import Link from 'next/link';

interface ProductSectionWrapperProps {
    title?: string;
    viewAllLink?: string;
    children: React.ReactNode;
    tabs?: { label: string; isActive: boolean; onClick: () => void }[];
}

const ProductSectionWrapper: React.FC<ProductSectionWrapperProps> = ({
    title,
    viewAllLink,
    children,
    tabs,
}) => {
    const showHeader = title || viewAllLink || tabs;

    return (
        <section>

            {/* --- Section Header (Title, Tabs, View All) --- */}
            {showHeader && (
                <div className="flex justify-between items-end mb-6 flex-wrap">

                    {/* Left Side: Title and Tabs Container */}
                    <div className="flex flex-col min-w-0 flex-grow-0">

                        {/* Title */}
                        {title && (
                            <h2 className="text-body-xs font-book text-neutral-n600">{title}</h2>
                        )}

                        {/* Tabs */}
                        {tabs && (
                            // Tabs are horizontally scrollable on small screens, full width up to medium breakpoint
                            <div className={`flex gap-4 overflow-x-auto whitespace-nowrap pb-1 
                                ${title ? 'mt-3' : 'mt-0'} 
                                w-full md:w-auto`}>
                                {tabs.map(tab => (
                                    <button
                                        key={tab.label}
                                        onClick={tab.onClick}
                                        className={`
                                            text-sm font-medium py-1 px-3 rounded-full transition 
                                            flex-shrink-0
                                            ${tab.isActive
                                                ? 'bg-primary-brand text-white font-medium shadow-md'
                                                : 'text-neutral-n600 hover:bg-neutral-50'
                                            }
                                        `}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side: View All Link */}
                    {viewAllLink && (
                        <div className="flex-shrink-0 ml-4">
                            <Link href={viewAllLink} className="text-body-xs font-medium text-secondary-brand hover:underline">
                                View All
                            </Link>
                        </div>
                    )}
                </div>
            )}

            {/* --- Section Content (The Product Grid) --- */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {children}
            </div>
        </section>
    );
};

export default ProductSectionWrapper;