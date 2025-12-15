"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSectionProps {
    title: string;
    children: React.ReactNode;
    showArrows?: boolean;
    onNext?: () => void;
    onPrev?: () => void;
    titleClassName?: string;
    arrowSize?: number;
}

const ProductSection: React.FC<ProductSectionProps> = ({
    title,
    children,
    showArrows = true,
    onNext,
    onPrev,
    titleClassName = "text-h6 font-bold text-neutral-n900",
    arrowSize = 32
}) => {
    // scale icon relative to button size, roughly 60%
    const iconSize = Math.floor(arrowSize * 0.6);

    return (
        <div className="w-full bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className={titleClassName}>{title}</h2>

                {showArrows && (
                    <div className="flex gap-2">
                        <button
                            onClick={onPrev}
                            className="rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-primary-brand hover:text-white transition active:scale-95 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                            style={{ width: arrowSize, height: arrowSize }}
                            disabled={!onPrev}
                        >
                            <ChevronLeft size={iconSize} />
                        </button>
                        <button
                            onClick={onNext}
                            className="rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-primary-brand hover:text-white transition active:scale-95 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                            style={{ width: arrowSize, height: arrowSize }}
                            disabled={!onNext}
                        >
                            <ChevronRight size={iconSize} />
                        </button>
                    </div>
                )}
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
};

export default ProductSection;
