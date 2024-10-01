"use client"
import { servicesHome } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from 'react-simply-carousel';
import CardServices from "./card";

export default function ServicesPageServices({ params }: { params: any }) {
    const lang = params.lang
    const [toShow] = useState(3)
    const [activeSlide, setActiveSlide] = useState(0);
    return <section className="w-full min-h-[80vh] flex items-center relative">
        <div className="w-10/12 shadow-2xl shadow-black rounded-2xl my-20 overflow-hidden mx-auto relative top-0 min-h-[80vh] left-0 right-0 bottom-0">
            <Image alt="" src={servicesHome[lang][activeSlide]?.image} fill objectFit="cover" className="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-transparent to-black/70">
                <article className="w-full lg:w-2/5 h-full flex items-center justify-center text-white">
                    <div className="w-10/12 h-10/12 lg:w-8/12 h-8/12">
                        <h1 className="font-bold text-5xl">
                            {servicesHome[lang][activeSlide]?.name}
                        </h1>
                        <p className="pt-3">
                            {servicesHome[lang][activeSlide]?.description}
                        </p>
                        <div className="w-full pt-5 flex">
                            <div className="w-fit py-2 px-4 rounded-md bg-white text-black mr-2">
                                Nous contacter
                            </div>
                            <div className="w-fit py-2 px-4 rounded-md bg-white text-black">
                                Nous contacter
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div className="w-full absolute z-10 top-0 left-0 right-0 bottom-0 lg:flex  items-center justify-center">
            <article className="w-full lg:w-2/5 h-full flex items-center justify-center text-white">
            </article>
            <div className="relative lg:w-3/5 w-full lg:flex hidden h-fit flex-row">
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
                <div className="w-full absolute z-20 bottom-0 left-0 h-fit pb-5 flex items-center justify-start translate-y-full">
                    <div
                        onClick={() => {
                            if (activeSlide != 0) {
                                setActiveSlide(activeSlide - 1)
                            } else {
                                setActiveSlide(servicesHome[lang].length - 1)
                            }
                        }} className="cursor-pointer p-3 bg-white mr-4 rounded-md hover:text-blue_itm_aqua_marine hover:scale-125"
                    >

                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div
                        onClick={() => {
                            if (activeSlide != servicesHome[lang].length - 1) {
                                setActiveSlide(activeSlide + 1);
                            } else {
                                setActiveSlide(0)
                            }
                        }} className="cursor-pointer p-3 hover:scale-125 bg-white hover:text-blue_itm_aqua_marine text-black rounded-md"
                    >
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </div>
            <div className="w-full lg:absolute lg:z-20 bottom-0 left-0 h-fit p-5 flex lg:hidden items-center justify-center">
                <div
                    onClick={() => {
                        if (activeSlide != 0) {
                            setActiveSlide(activeSlide - 1)
                        } else {
                            setActiveSlide(servicesHome[lang].length - 1)
                        }
                    }} className="cursor-pointer p-3 bg-blue_itm_aqua_marine text-white mr-4 rounded-md hover:scale-125"
                >

                    <MdOutlineKeyboardArrowLeft />
                </div>
                <div
                    onClick={() => {
                        if (activeSlide != servicesHome[lang].length - 1) {
                            setActiveSlide(activeSlide + 1);
                        } else {
                            setActiveSlide(0)
                        }
                    }} className="cursor-pointer p-3 hover:scale-125 bg-blue_itm_aqua_marine text-white hover:text-white rounded-md"
                >
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </div>
    </section>
}