"use client"
import { servicesHome } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Carousel from 'react-simply-carousel';
import CardServices from "./card";

export default function ServicesPageServices({ params }: { params: any }) {
    const lang = params.lang
    const [toShow] = useState(3)
    const [activeSlide, setActiveSlide] = useState(0);
    return <section className="w-full min-h-[80vh] lg:py-20 py-10 flex items-center bg-white relative">
        <Image alt="" src={servicesHome[lang][activeSlide]?.image} fill objectFit="cover" />
        <div className="w-full bg-gradient-to-l from-transparent to-black absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <article className="w-full lg:w-1/2 h-full flex items-center justify-center text-white">
                <div className="w-10/12 h-10/12 lg:w-8/12 h-8/12">
                    <h1 className="font-bold text-5xl">
                        {servicesHome[lang][activeSlide]?.name}
                    </h1>
                   
                    <p className="pt-3">
                        {servicesHome[lang][activeSlide]?.description}
                    </p>
                    <div className="w-full pt-5 flex">
                        <div className="w-fit py-2 px-4 rounded-lg bg-white text-black mr-2">
                            Nous contacter
                        </div>
                        <div className="w-fit py-2 px-4 rounded-lg bg-white text-black">
                            Nous contacter
                        </div>
                    </div>
                </div>
            </article>
            <div className="relative lg:w-1/2 w-full lg:flex hidden h-fit flex-row">
                <Carousel
                    infinite={true}
                    itemsToShow={toShow}
                    onRequestChange={setActiveSlide}
                    easing="linear"
                    responsiveProps={[
                        {
                            itemsToShow: toShow,
                            itemsToScroll: 1,
                            minWidth: 768,
                        },
                    ]}
                    preventScrollOnSwipe
                    activeSlideIndex={activeSlide}
                    speed={1000}

                >
                    {servicesHome[lang].map(function (item: any, index: number) {
                        return <CardServices {...item} index={index} activeSlide={activeSlide} setActiveSlide={setActiveSlide} left={index % 2 == 0} key={index} />
                    })}
                </Carousel>
                <div className="w-full absolute z-20 bottom-0 left-0 h-fit py-5 flex items-center justify-start translate-y-full">
                    <div
                        onClick={() => {
                            if (activeSlide != 0) {
                                setActiveSlide(activeSlide - 1)
                            } else {
                                setActiveSlide(servicesHome[lang].length - 1)
                            }
                        }} className="cursor-pointer p-3 bg-white mr-4 rounded-lg hover:scale-125"
                    >

                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={() => {
                            if (activeSlide != servicesHome[lang].length - 1) {
                                setActiveSlide(activeSlide + 1);
                            } else {
                                setActiveSlide(0)
                            }
                        }} className="cursor-pointer p-3 hover:scale-125 bg-white text-black rounded-lg"
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="w-full absolute z-20 bottom-0 left-0 h-fit py-5 flex lg:hidden items-center justify-center">
                <div
                    onClick={() => {
                        if (activeSlide != 0) {
                            setActiveSlide(activeSlide - 1)
                        } else {
                            setActiveSlide(servicesHome[lang].length - 1)
                        }
                    }} className="cursor-pointer p-3 bg-white mr-4 rounded-lg hover:scale-125"
                >

                    <FaArrowLeft />
                </div>
                <div
                    onClick={() => {
                        if (activeSlide != servicesHome[lang].length - 1) {
                            setActiveSlide(activeSlide + 1);
                        } else {
                            setActiveSlide(0)
                        }
                    }} className="cursor-pointer p-3 hover:scale-125 bg-white text-black rounded-lg"
                >
                    <FaArrowRight />
                </div>
            </div>
        </div>

    </section>
    return (
        <section className="w-full h-fit  bg-white">
            {servicesHome[lang].map(function (item: any, index: number) {
                return <CardServices {...item} left={index % 2 == 0} key={index} />
            })}
        </section>
    );
}