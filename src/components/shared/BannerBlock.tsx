import React from 'react';
import Image from 'next/image';

// Define the shape of a single banner item
interface BannerItem {
    id: string | number;
    imageUrl: string;
    linkUrl: string;
    altText: string;
}

// Define the layout variants
type BannerLayoutVariant = 'single-large' | 'two-vertical-small' | 'complex-grid';

interface BannerBlockProps {
    banners: BannerItem[];
    variant: BannerLayoutVariant;
    className?: string;
}

const BannerBlock: React.FC<BannerBlockProps> = ({ banners, variant, className = '' }) => {

    const renderBanner = (banner: BannerItem, customClasses: string) => (
        <a
            key={banner.id}
            href={banner.linkUrl}
            className={`relative overflow-hidden block group ${customClasses}`}
        >
            <Image
                src={banner.imageUrl}
                alt={banner.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
        </a>
    );

    // --- Layout Logic based on Variant ---

    switch (variant) {
        case 'single-large':
            // Renders one banner of 614x262 (or similar full-width ratio)
            if (banners.length < 1) return null;
            return (
                <div className={`aspect-[1240/262] w-full ${className}`}>
                    {renderBanner(banners[0], 'h-full w-full rounded-[52px]')}
                </div>
            );

        case 'two-vertical-small':
            // Renders one section, typically 614x202 (or full width)
            if (banners.length < 2) return null;
            return (
                // Use a grid with 2 equal columns
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${className}`}>
                    {/* Banner 1 */}
                    <div className="aspect-[614/202] h-full">
                        {renderBanner(banners[0], 'w-full h-full rounded-[52px]')}
                    </div>
                    {/* Banner 2 */}
                    <div className="aspect-[614/202] h-full">
                        {renderBanner(banners[1], 'w-full h-full rounded-[52px]')}
                    </div>
                </div>
            );

        case 'complex-grid':
            // Renders 3 banners: Left (Large) and Right (Two Stacked Small)
            if (banners.length < 3) return null;
            return (
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${className}`}>
                    {/* Left Column */}
                    <div className="aspect-[614/415] h-full">
                        {renderBanner(banners[0], 'w-full h-full rounded-[50px]')}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-3">
                        {/* Top Small Banner */}
                        {renderBanner(banners[1], 'aspect-[614/202] w-full rounded-[42px]')}
                        {/* Bottom Small Banner */}
                        {renderBanner(banners[2], 'aspect-[614/202] w-full rounded-[42px]')}
                    </div>
                </div>
            );

        default:
            return <div className="p-4 text-center text-red-500">Invalid banner variant provided.</div>;
    }
};

export default BannerBlock;