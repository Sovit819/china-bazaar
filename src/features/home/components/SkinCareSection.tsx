"use client";

import ProductSection from '@/components/ui/ProductSection';
import ProductCard from '@/components/shared/ProductCard';
import { skinCareProducts } from '@/data/dummyData';
import { useProductPagination } from '@/hooks/useProductPagination';

const SkinCareSection = () => {
    const {
        visibleItems,
        next,
        prev,
        canNext,
        canPrev
    } = useProductPagination(skinCareProducts, { itemsPerPage: 4, step: 4 });

    return (
        <div className="w-full">
            <ProductSection
                title="Skin Care Products"
                showArrows={true}
                arrowSize={28}
                titleClassName='text-body-large font-medium text-neutral-n800'
                onNext={canNext ? next : undefined}
                onPrev={canPrev ? prev : undefined}
            >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {visibleItems.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                id={product.id}
                                image={product.image}
                                price={product.price}
                                variant="price-on-image"
                                onClick={() => console.log('Skin Care Clicked', product.id)}
                            />
                        </div>
                    ))}
                </div>
            </ProductSection>
        </div>
    );
};

export default SkinCareSection;
