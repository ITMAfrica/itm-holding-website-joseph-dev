"use client"
import CardEntity from '@/components/global/cards/entity';
import { organisations } from '@/lib/data';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
export default function AboutPageEntities() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [toShow] = useState(1)
    return <section className="w-full ">
        <div className="w-full h-fit mx-auto relative ">
            <Carousel
                infinite
                itemsToShow={toShow}
                onRequestChange={setActiveSlide}
                easing="linear"
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 760,
                    },
                ]}
                activeSlideIndex={activeSlide}
                speed={1000}
            >
                {organisations.map((item: any, index: number) => (
                    <CardEntity {...item} setActiveSlide={setActiveSlide} index={index} total={organisations.length} activeSlide={activeSlide} key={index} />
                ))}
            </Carousel>
        </div>
    </section>
}