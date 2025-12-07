# China Bazaar E-commerce Application

This is a Next.js-based e-commerce application frontend, featuring a responsive homepage with a Hero Banner, varied product sections, and a detailed mobile-first header design.

## 🚀 Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Sovit819/china-bazaar.git
    cd china-bazaar
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tools & Libraries Used

*   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **UI Components**: Custom-built reusable components (`ProductCard`, `ProductSection`, `HeroBanner`, `MainHeader`).

## 📋 Assumptions Made

*   **Data Source**: Since a backend API is not yet connected, the application uses **dummy data** located in `src/data/dummyData.ts` to simulate API responses for banners and products.
*   **Mobile Design**: 
    *   The mobile header layout separates the Logo/Icons (Row 1) from the Search Bar (Row 2) to optimize space, whereas the desktop view keeps them inline.
    *   The "Blue Navigation Bar" on mobile is horizontally scrollable with the scrollbar hidden for a cleaner aesthetic.
*   **Images**: External images are sourced from Unsplash. The `next.config.ts` has been configured to allow the `images.unsplash.com` domain.
*   **Interactions**:
    *   Hero Banner arrows only appear on hover (Desktop) to reduce visual clutter.
    *   The "Today's Deal" section on Desktop is designed as a focused card container rather than a full-width grid.

## 📸 Screenshots

*(Screenshots of the application outputs will be added here upon completion)*

---
*Built for China Bazaar*
