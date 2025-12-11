import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react'; 
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
    variant?: 'default' | 'price-on-image' | 'compact-deal';
    statusBadge?: { text: string; color: string }; 
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
    statusBadge,
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
            console.log(`Action clicked for product: ${id}`);
        }
    };

    const isOverlayVariant = variant === 'price-on-image';
    const isCompactDeal = variant === 'compact-deal';

    const showActionIcon = showCart || isCompactDeal;
    const ActionIcon = isCompactDeal ? Heart : ShoppingCart;


    return (
        <div
            className={`relative group hover:shadow-md transition cursor-pointer bg-white rounded-2xl h-full flex flex-col overflow-hidden ${isOverlayVariant || isCompactDeal ? 'p-0' : 'p-1'}`}
            onClick={handleClick}
        >
            {/* Badges Container (top-left) */}
            <div className="absolute top-4 left-3 z-10 flex gap-2 flex-wrap">
                {badge && (
                    <div className={`${badge.color} text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm`}>
                        <span>{badge.text}</span>
                    </div>
                )}
                {discount && (
                    <div className="bg-[#FF8800] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                        <span>{discount}</span>
                    </div>
                )}
            </div>

            {/* Action Icon (Cart or Wishlist) */}
            {showActionIcon && (
                <div
                    className="absolute top-3 right-4 bg-white p-2 rounded-full text-neutral-n700 hover:text-primary-brand hover:bg-neutral-100 transition z-10 shadow-sm cursor-pointer"
                    onClick={handleCartClick}
                >
                    <ActionIcon size={18} />
                </div>
            )}

            {/* Image Area */}
            <div className={`relative w-full aspect-square ${isOverlayVariant ? 'mb-0' : 'mb-4 rounded-[24px]'} overflow-hidden bg-neutral-50 shrink-0`}>
                <Image
                    src={image}
                    alt={title || "Product"}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Variant: Price on Image Overlay */}
                {isOverlayVariant && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                        <div className="bg-primary-brand/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm flex flex-col items-center min-w-max w-fit text-white">
                            <span className="font-bold text-sm leading-tight">{price}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Area - Only for Default and Compact Variants */}
            {!isOverlayVariant && (
                <div className={`flex flex-col gap-1 grow ${isCompactDeal ? 'p-2 pt-0' : ''}`}>
                    
                    {title && (
                        <h3 className="text-neutral-n900 font-medium text-body-medium line-clamp-2 min-h-[2.5rem]">
                            {title}
                        </h3>
                    )}

                    {/* --- Price and Old Price Row Logic --- */}
                    {isCompactDeal ? (
                        // 💡 COMPACT-DEAL: Price and Old Price in the same row
                        <div className="flex justify-between items-center gap-2 mt-auto pt-2">
                            <span className="text-primary-brand font-medium text-body-large">{price}</span>
                            {oldPrice && (
                                <span className="text-neutral-n400 text-body-xs font-book line-through decoration-1 mr-4">{oldPrice}</span>
                            )}
                        </div>
                    ) : (
                        // DEFAULT: Price and Old Price in separate rows
                        <>
                            <div className="flex items-center gap-2 mt-auto pt-2">
                                <span className="text-primary-brand font-medium text-body-large">{price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {oldPrice && (
                                    <span className="text-neutral-n400 text-body-small font-book line-through decoration-1">{oldPrice}</span>
                                )}
                            </div>
                        </>
                    )}
                    
                    {/* Rating and Status Badge Row */}
                    {(rating || statusBadge) && (
                        // Use flex and justify-between to space rating left and status badge right
                        <div className="flex items-center justify-between mt-1">
                            {rating && (
                                <div className="flex items-center gap-1">
                                    <Star className="fill-secondary-brand text-secondary-brand w-4 h-4" />
                                    <span className="text-neutral-n600 text-sm">{rating}</span>
                                </div>
                            )}
                            
                            {/* 💡 Status Badge (Limited Stock) */}
                            {statusBadge && (
                                <div className={`text-[10px] font-medium text-secondary-brand px-2 py-0.5 rounded-full whitespace-nowrap ${statusBadge.color}`}>
                                    {statusBadge.text}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductCard;