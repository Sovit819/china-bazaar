export const heroBanners = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
        title: "Summer Sale"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        title: "New Collection"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        title: "Best Sellers"
    }
];

export const todaysDeals = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        title: "Nike Mixed Color Shoe",
        price: "NPR 9,999",
        oldPrice: "NPR 12,999",
        rating: 4.2,
        badge: { text: "New", color: "bg-primary-brand" },
        discount: "-40%"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
        title: "Korean Skin Care Products (Cream & Facewash)",
        price: "NPR 8,888",
        oldPrice: "NPR 12,999",
        rating: 3.5,
        badge: { text: "New", color: "bg-primary-brand" },
        discount: "-40%"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        title: "SkullCrusher Headphone with Noise-Cancellation",
        price: "NPR 12,950",
        oldPrice: "NPR 12,999", // Typo in screenshot? Old price same/lower? Adjusted to be realistic or keep as placeholder
        rating: 4.9,
        badge: { text: "New", color: "bg-primary-brand" },
        discount: "-40%"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop",
        title: "Nike Running Shoe",
        price: "NPR 9,999",
        oldPrice: "NPR 12,999",
        rating: 4.2,
        badge: { text: "New", color: "bg-primary-brand" },
        discount: "-40%"
    }

];

export const skinCareProducts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1673847401550-fd92f05614b9?q=80&w=1170&auto=format&fit=crop",
        price: "NPR 5,999"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=687&auto=format&fit=crop",
        price: "NPR 5,999"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1620917669809-1af0497965de?q=80&w=687&auto=format&fit=crop",
        price: "NPR 5,999"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1556228720-210aabb357b7?q=80&w=687&auto=format&fit=crop",
        price: "NPR 5,999"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=1170&auto=format&fit=crop",
        price: "NPR 5,999"
    }
];

export const shoes = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
        price: "NPR 5,999"
    }
];

export const beds = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
        price: "NPR 59,999"
    }
];


// Banner data
export const singleLargeBannerData = [
    {
        id: 101,
        imageUrl: '/banner1.png',
        linkUrl: '/summer-deals',
        altText: 'Limited Time Summer Sale Banner',
    },
];

export const twoVerticalSmallBannerData = [
    {
        id: 201,
        imageUrl: '/banner1.png',
        linkUrl: '/new-arrivals',
        altText: 'New Arrivals Collection Banner',
    },
    {
        id: 202,
        imageUrl: '/banner1.png',
        linkUrl: '/best-deals',
        altText: 'Best Deals Collection Banner',
    },
];

export const complexGridBannerData = [
    {
        id: 301,
        // The main, large banner (614x415 ratio)
        imageUrl: '/banner2.png',
        linkUrl: '/featured-sneakers',
        altText: 'Big Featured Sneakers Banner',
    },
    {
        id: 302,
        // The top-right small banner (614x202 ratio)
        imageUrl: '/banner3.png',
        linkUrl: '/flash-sale-watches',
        altText: 'Flash Sale on Watches',
    },
    {
        id: 303,
        // The bottom-right small banner (614x202 ratio)
        imageUrl: '/banner4.png',
        linkUrl: '/flash-sale-joystick',
        altText: 'Flash Sale on Joystick',
    },
];