import React from 'react';
import Link from 'next/link';

interface ProductSectionWrapperProps {
    title?: string;
    subTitle?: string;
    viewAllLink?: string;
    children: React.ReactNode;
    tabs?: { label: string; icon?: string; isActive: boolean; onClick: () => void }[];
    disableGrid?: boolean;
}

const ProductSectionWrapper: React.FC<ProductSectionWrapperProps> = ({
    title,
    subTitle,
    viewAllLink,
    children,
    tabs,
    disableGrid = false,
}) => {
    const showHeader = title || viewAllLink || tabs;

    return (
        <section>

            {/* --- Section Header (Title, Tabs, View All) --- */}
            {showHeader && (
                <div className="flex justify-between items-center mb-6 flex-wrap">

                    {/* Left Side: Title and Tabs Container */}
                    <div className="flex flex-col min-w-0 flex-grow-0">

                        {/* Title */}
                        {title && (
                            <h2 className="text-subtitle01 font-bold text-neutral-n800">{title}</h2>
                        )}

                        {/* SubTitle */}
                        {subTitle && (
                            <p className="text-body-xs font-book text-neutral-n500">{subTitle}</p>
                        )}

                        {/* Tabs */}
                        {tabs && (
                            // Tabs are horizontally scrollable on small screens, full width up to medium breakpoint
                            <div className={`flex gap-4 overflow-x-auto whitespace-nowrap pb-1 
                                ${title || subTitle ? 'mt-3' : 'mt-0'} 
                                w-full md:w-auto`}>
                                {tabs.map(tab => (
                                    <button
                                        key={tab.label}
                                        onClick={tab.onClick}
                                        className={`
                                            text-body-small font-medium py-2.5 px-4 rounded-[1000px]
                                            flex items-center 
                                            flex-shrink-0
                                            ${tab.isActive
                                                ? 'bg-[#7C8BFF14] text-primary-brand font-medium'
                                                : 'text-neutral-n600 hover:bg-neutral-50'
                                            }
                                        `}
                                    >
                                        {tab.icon && (
                                            <img src={tab.icon} alt={tab.label} className="w-4 h-4 mr-1" />
                                        )}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side: View All Link */}
                    {viewAllLink && (
                        <div className="flex-shrink-0 ml-4">
                            <Link href={viewAllLink} className="text-body-small font-medium text-secondary-brand hover:underline">
                                View All
                            </Link>
                        </div>
                    )}
                </div>
            )}

            {/* --- Section Content (The Product Grid or Custom Layout) --- */}
            {disableGrid ? (
                children
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {children}
                </div>
            )}
        </section>
    );
};

export default ProductSectionWrapper;