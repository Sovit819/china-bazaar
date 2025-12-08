import HeroBanner from "@/components/Hero/HeroBanner";
import TodaysDealSection from "@/components/Home/TodaysDealSection";
import SkinCareSection from "@/components/Home/SkinCareSection";
import CategorySplitSection from "@/components/Home/CategorySplitSection";

export default function Home() {
  return (
    <main>
      {/* Hero Banner Space */}
      <HeroBanner />

      {/* Main Content Grid */}
      <div className="px-4 md:px-8 xl:px-[100px] mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left Column: Today's Deal (50%) */}
          <div className="flex flex-col">
            <TodaysDealSection />
          </div>

          {/* Right Column: Categories (50%) */}
          <div className="flex flex-col gap-3">
            <SkinCareSection />
            <CategorySplitSection />
          </div>

        </div>
      </div>
    </main>
  );
}