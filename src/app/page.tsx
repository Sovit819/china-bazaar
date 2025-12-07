import TopUtilityBar from "@/components/Header/TopUtilityBar";
import MainHeader from "@/components/Header/MainHeader";
import HeroBanner from "@/components/Hero/HeroBanner";
import ProductSection from "@/components/Products/ProductSection";
import ProductCard from "@/components/Products/ProductCard";
import { todaysDeals, skinCareProducts, shoes, beds } from "@/data/dummyData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopUtilityBar />
      <MainHeader />

      {/* Hero Banner Space */}
      <HeroBanner />

      {/* Main Content Grid */}
      <div className="px-4 md:px-8 xl:px-[100px] mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Today's Deal (approx 40%) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <ProductSection title="Today's Deal">
              <div
                className="flex bg-neutral-n20 p-4 rounded-[32px] items-center justify-center overflow-hidden"
                style={{ width: '100%', maxWidth: '626px', height: 'auto', minHeight: '366px' }} // Using responsive width but targeting 626px max
              >
                <div className="flex gap-4 overflow-x-auto no-scrollbar w-full">
                  {/* Render 3 cards as requested */}
                  {todaysDeals.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      style={{ minWidth: '195px', height: '292px' }}
                      className="shrink-0"
                    >
                      <ProductCard
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        rating={product.rating}
                        badge={product.badge}
                        discount={product.discount}
                        showCart={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ProductSection>
          </div>

          {/* Right Column: Categories (approx 60%) */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6">

            {/* Skin Care Products */}
            <div className="w-full">
              <ProductSection title="Skin Care Products">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {skinCareProducts.map((product) => (
                    <div key={product.id}>
                      <ProductCard
                        image={product.image}
                        price={product.price}
                      />
                    </div>
                  ))}
                </div>
              </ProductSection>
            </div>

            {/* Bottom Split: Shoes & Beds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="h-full">
                <ProductSection title="Shoes">
                  {shoes.map((product) => (
                    <div key={product.id}>
                      <ProductCard
                        image={product.image}
                        price={product.price}
                      />
                    </div>
                  ))}
                </ProductSection>
              </div>
              <div className="h-full">
                <ProductSection title="Beds">
                  {beds.map((product) => (
                    <div key={product.id}>
                      <ProductCard
                        image={product.image}
                        price={product.price}
                      />
                    </div>
                  ))}
                </ProductSection>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}