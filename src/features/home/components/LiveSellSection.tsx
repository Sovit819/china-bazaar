'use client';

import ProductSectionWrapper from './ProductSectionWrapper';
import { liveSellData } from '@/data/dummyData';
import Image from 'next/image';
import { Radio } from 'lucide-react';

const LiveSellSection = () => {

    const handleItemClick = (id: number) => {
        console.log('Live sell item clicked:', id);
    };

    return (
        <ProductSectionWrapper title="Live Sell" viewAllLink="/live" disableGrid>
            <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {liveSellData.slice(0, 4).map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex flex-col gap-3 group cursor-pointer ${index > 1 ? 'hidden md:flex' : 'flex'}`}
                        onClick={() => handleItemClick(item.id)}
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden">
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
                                {/* Live Badge */}
                                <div className="bg-error-text text-neutral-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                                    <Radio size={14} />
                                    <span className="text-body-xs font-medium uppercase tracking-wide">Live</span>
                                </div>

                                {/* Watching Badge */}
                                <div className="bg-neutral-white px-2 py-1 rounded-lg flex items-center gap-0 shadow-sm">
                                    <div className="w-8 h-5 relative">
                                        <Image
                                            src="/watching.gif"
                                            alt="watching"
                                            fill
                                            sizes="32px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-body-xs font-medium text-error-text">{item.viewerCount} watching</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="flex gap-3 items-start mt-1">
                            {/* Host Avatar */}
                            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-100">
                                <Image
                                    src={item.hostAvatar}
                                    alt="Host"
                                    fill
                                    sizes="44px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col gap-0.5 pt-0.5">
                                <h3 className="text-neutral-n900 font-bold text-body-medium line-clamp-1 group-hover:text-primary-brand transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-n500 text-body-small line-clamp-1">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProductSectionWrapper>
    );
};

export default LiveSellSection;
