import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductProps {
    id?: string | number;
    image: string;
    title?: string;
    price: string;
    oldPrice?: string;
    rating?: number;
    badge?: { text: string; color: string };
    discount?: string;
    showCart?: boolean;
    variant?: 'default' | 'price-on-image';
    onClick?: (id: string | number) => void;
    onAddToCart?: (id: string | number) => void;
}

const ProductCard: React.FC<ProductProps> = ({
    id,
    image,
    title,
    price,
    oldPrice,
    rating,
    badge,
    discount,
    showCart = false,
    variant = 'default',
    onClick,
    onAddToCart
}) => {

    const handleClick = () => {
        if (onClick && id) {
            onClick(id);
        }
    };

    const handleCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onAddToCart && id) {
            onAddToCart(id);
        } else {
            console.log(`Add to cart clicked for product: ${id}`);
        }
    };

    const isOverlayVariant = variant === 'price-on-image';

    return (
        <div
            className={`relative group hover:shadow-md transition cursor-pointer bg-white rounded-2xl h-full flex flex-col overflow-hidden ${isOverlayVariant ? 'p-0' : 'p-2'}`}
            onClick={handleClick}
        >
            {/* Badges Container */}
            <div className="absolute top-8 left-6 z-10 flex gap-2 flex-wrap">
                {/* New Badge */}
                {badge && (
                    <div className={`${badge.color} text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm`}>
                        <span>{badge.text}</span>
                    </div>
                )}
                {/* Discount Badge */}
                {discount && (
                    <div className="bg-[#FF8800] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                        <span>{discount}</span>
                    </div>
                )}
            </div>

            {/* Cart Icon (Optional) */}
            {showCart && (
                <div
                    className="absolute top-6 right-6 bg-white p-2 rounded-full text-neutral-n700 hover:text-primary-brand hover:bg-neutral-100 transition z-10 shadow-sm cursor-pointer"
                    onClick={handleCartClick}
                >
                    <ShoppingCart size={18} />
                </div>
            )}

            {/* Image Area */}
            <div className={`relative w-full aspect-square ${isOverlayVariant ? 'mb-0' : 'mb-4 rounded-xl'} overflow-hidden bg-neutral-50 shrink-0`}>
                <Image
                    src={image}
                    alt={title || "Product"}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Variant: Price on Image Overlay */}
                {isOverlayVariant && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                        <div className="bg-primary-brand/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm flex flex-col items-center min-w-max w-fit text-white">
                            <span className="font-bold text-sm leading-tight">{price}</span>
                            {/* Old price usually not shown on minimal overlay if user just wanted price. User said "price should be background of primary blue and text of white". Did not explicitly say old price. Reference: "price should be background...". I'll keep it minmal.*/}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Area - Only for Default Variant */}
            {!isOverlayVariant && (
                <div className="flex flex-col gap-1 grow">
                    {title && (
                        <h3 className="text-neutral-n900 font-medium text-body-medium line-clamp-2 min-h-[2.5rem]">
                            {title}
                        </h3>
                    )}

                    <div className="flex items-center gap-2 mt-auto pt-2">
                        <span className="text-primary-brand font-bold text-lg">{price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {oldPrice && (
                            <span className="text-neutral-n400 text-sm line-through decoration-1">{oldPrice}</span>
                        )}
                    </div>
                    {rating && (
                        <div className="flex items-center gap-1 mt-1">
                            <Star className="fill-secondary-brand text-secondary-brand w-4 h-4" />
                            <span className="text-neutral-n600 text-sm">{rating}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductCard;
