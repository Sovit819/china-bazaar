import HeroBanner from "@/features/home/components/HeroBanner";
import TodaysDealSection from "@/features/home/components/TodaysDealSection";
import SkinCareSection from "@/features/home/components/SkinCareSection";
import CategorySplitSection from "@/features/home/components/CategorySplitSection";
import BannerBlock from "@/components/shared/BannerBlock";
import ProductsByCategories from "@/features/home/components/ProductByCategories";

import { singleLargeBannerData, twoVerticalSmallBannerData, complexGridBannerData } from "@/data/dummyData";

export default function Home() {
  return (
    <main>
      {/* Hero Banner Space */}
      <HeroBanner />

      {/* Main Content Grid */}
      <div className="px-4 md:px-8 xl:px-[100px] mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left Column: Today's Deal */}
          <div className="flex flex-col">
            <TodaysDealSection />
          </div>

          {/* Right Column: Categories */}
          <div className="flex flex-col gap-3">
            <SkinCareSection />
            <CategorySplitSection />
          </div>

        </div>
        <BannerBlock banners={singleLargeBannerData} variant="single-large" className="mt-7.5 mb-7.5" />
        <ProductsByCategories  />
        <BannerBlock banners={complexGridBannerData} variant="complex-grid" className="mt-7.5 mb-7.5" />
      </div>
    </main>
  );
}