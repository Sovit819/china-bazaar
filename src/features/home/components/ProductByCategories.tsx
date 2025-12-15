// src/features/home/components/ProductsByCategories.tsx

'use client'; // This component uses state for tabs

import React, { useState } from 'react';
import ProductSectionWrapper from './ProductSectionWrapper';
import ProductCard from '@/components/shared/ProductCard'; 
// Ensure you import both the tab list and the product list
import { todaysDeals, productCategoryTabs } from '@/data/dummyData'; 

const ProductsByCategories: React.FC = () => {
    
    // 1. Manage the active tab state, defaulting to the first tab's key
    const [activeTabKey, setActiveTabKey] = useState(productCategoryTabs[0]?.key || '');
    
    // 2. Prepare the interactive tabs data for the ProductSectionWrapper
    const interactiveTabs = productCategoryTabs.map(tab => ({
        icon: tab.icon,
        label: tab.label,
        // Check if the current tab's key matches the state
        isActive: tab.key === activeTabKey,
        // Update state on click
        onClick: () => {
            setActiveTabKey(tab.key);
            console.log(`Active category switched to: ${tab.key}`);
            // In a real application, this triggers data fetching for the new category
        },
    }));

    // In a final implementation, you would filter dummyProducts or fetch new data 
    // based on the 'activeTabKey'. For now, we show a subset of dummy products.
    const productsToShow = todaysDeals.slice(0, 12); 

    return (
        <div className="py-5"> {/* Add vertical spacing */}
            <ProductSectionWrapper
                tabs={interactiveTabs} // Pass the generated interactive tabs
                viewAllLink="/categories" 
            >
                {/* Render the product grid using the default card variant */}
                {productsToShow.map(product => (
                    <ProductCard 
                        key={product.id} 
                        {...product} 
                        // Using the 'default' variant created earlier
                        variant='compact-deal' 
                        showCart={true}
                        // Example: badge={ {text: 'New', color: 'bg-green-500'} } 
                    />
                ))}
            </ProductSectionWrapper>
        </div>
    );
};

export default ProductsByCategories;