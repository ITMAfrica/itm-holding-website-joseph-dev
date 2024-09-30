import Image from "next/image";
import bg from "@/public/assets/bg/bg.news.png"
import CardNews from "../card";

export default function NewsPageBanner() {
    return <section className="w-full h-fit lg:h-[80vh] py-10">
        <div className="w-11/12 lg:w-11/12 mx-auto h-full flex lg:flex-nowrap flex-wrap">
            <div className="w-full lg:w-9/12 h-[60vh] lg:h-[80vh] lg:h-full lg:mr-5 mr-0 relative">
                <Image src={bg} alt="" fill />
            </div>
            <div className="h-full w-full lg:w-3/12  lg:pt-0 pt-5 overflow-y-scroll scrollbar-thin">
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
            </div>
        </div>
    </section>
}