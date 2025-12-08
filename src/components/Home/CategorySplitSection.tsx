"use client";

import ProductSection from '@/components/Products/ProductSection';
import ProductCard from '@/components/Products/ProductCard';
import { shoes, beds } from '@/data/dummyData';
import { useProductPagination } from '@/hooks/useProductPagination';

const CategorySplitSection = () => {
    const shoesData = useProductPagination(shoes, { itemsPerPage: 1, step: 1 });
    const bedsData = useProductPagination(beds, { itemsPerPage: 1, step: 1 });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <div className="h-full">
                <ProductSection
                    title="Shoes"
                    showArrows={true}
                    arrowSize={28}
                    titleClassName='text-body-large font-medium text-neutral-n800'
                    onNext={shoesData.canNext ? shoesData.next : undefined}
                    onPrev={shoesData.canPrev ? shoesData.prev : undefined}
                >
                    <div className="flex items-center justify-center h-full">
                        {shoesData.visibleItems.map((product) => (
                            <div key={product.id} className="w-1/2">
                                <ProductCard
                                    id={product.id}
                                    image={product.image}
                                    price={product.price}
                                    variant="price-on-image"
                                    onClick={() => console.log('ShoesClicked', product.id)}
                                />
                            </div>
                        ))}
                    </div>
                </ProductSection>
            </div>
            <div className="h-full">
                <ProductSection
                    title="Beds"
                    showArrows={true}
                    arrowSize={28}
                    titleClassName='text-body-large font-medium text-neutral-n800'
                    onNext={bedsData.canNext ? bedsData.next : undefined}
                    onPrev={bedsData.canPrev ? bedsData.prev : undefined}
                >
                    <div className="flex items-center justify-center h-full">
                        {bedsData.visibleItems.map((product) => (
                            <div key={product.id} className="w-1/2">
                                <ProductCard
                                    id={product.id}
                                    image={product.image}
                                    price={product.price}
                                    variant="price-on-image"
                                    onClick={() => console.log('Beds Clicked', product.id)}
                                />
                            </div>
                        ))}
                    </div>
                </ProductSection>
            </div>
        </div>
    );
};

export default CategorySplitSection;
