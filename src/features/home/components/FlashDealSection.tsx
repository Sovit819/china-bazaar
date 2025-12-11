'use client';

import React from 'react';
import ProductSectionWrapper from './ProductSectionWrapper';
import ProductCard from '@/components/shared/ProductCard';
import { flashDealProducts } from '@/data/dummyData';

const FlashDealSection: React.FC = () => {

    return (
        <ProductSectionWrapper
            // 💡 Pass title and subtitle to the wrapper's built-in header logic
            title="Flash Deals"
            subTitle="Upto 30% Off"
            viewAllLink="/flash-deals"
        >
            
            {flashDealProducts.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    rating={product.rating}
                    discount={product.discount}
                    statusBadge={product.statusBadge}
                    variant="compact-deal"
                    badge={product.badge}
                    showCart={false}
                />
            ))}
        </ProductSectionWrapper>
    );
};

export default FlashDealSection;