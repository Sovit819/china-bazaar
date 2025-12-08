"use client";

import ProductSection from '@/components/Products/ProductSection';
import ProductCard from '@/components/Products/ProductCard';
import { todaysDeals } from '@/data/dummyData';
import { useProductPagination } from '@/hooks/useProductPagination';

const TodaysDealSection = () => {
    const {
        visibleItems: visibleProducts,
        next,
        prev,
        canNext,
        canPrev,
        startIndex
    } = useProductPagination(todaysDeals, { itemsPerPage: 4, step: 3 });

    const handleProductClick = (id: string | number) => {
        console.log(`Product clicked: ${id}`);
        // Future navigation logic here
    };

    return (
        <ProductSection
            title="Today's Deal"
            onNext={canNext ? next : undefined}
            onPrev={canPrev ? prev : undefined}
            titleClassName="text-h6 font-bold text-neutral-n800"
            arrowSize={36}
        >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 h-full">
                {visibleProducts.map((product, index) => (
                    <div
                        key={`${product.id}-${startIndex}-${index}`}
                        className={`
                            ${index === 3 ? 'lg:hidden' : ''} 
                            h-full
                        `}
                    >
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            rating={product.rating}
                            badge={product.badge}
                            discount={product.discount}
                            showCart={true}
                            variant="default"
                            onClick={handleProductClick}
                        />
                    </div>
                ))}
            </div>
        </ProductSection>
    );
};

export default TodaysDealSection;
