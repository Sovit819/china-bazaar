import { useState } from 'react';

interface UseProductPaginationOptions {
    itemsPerPage: number;
    step?: number;
}

export const useProductPagination = <T,>(data: T[], { itemsPerPage, step }: UseProductPaginationOptions) => {
    const [startIndex, setStartIndex] = useState(0);
    const stepSize = step || itemsPerPage;

    const canNext = startIndex + stepSize < data.length;
    const canPrev = startIndex > 0;

    const next = () => {
        if (canNext) {
            setStartIndex(prev => prev + stepSize);
        }
    };

    const prev = () => {
        if (canPrev) {
            setStartIndex(prev => Math.max(0, prev - stepSize));
        }
    };

    const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

    return {
        startIndex,
        visibleItems,
        next,
        prev,
        canNext,
        canPrev
    };
};
