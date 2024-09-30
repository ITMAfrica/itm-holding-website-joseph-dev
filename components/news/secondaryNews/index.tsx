import Image from "next/image";
import bg from "@/public/assets/bg/bg.news.png"
import CardNews from "../card";

export default function NewsPageSecondary() {
    return <section className="w-full bg-white lg:py-20 py-10">
        <div className="w-11/12 lg:w-10/12 mx-auto h-full ">

            <main className="w-full mr-0">
                <header className="h-fit w-full">
                    <h1 className="font-bold text-blue_itm_good w-full pb-3 text-3xl">
                        Autres nouvelles
                    </h1>
                    <div className="w-1/12 border-blue_itm_good border-b-2 mb-5"></div>
                </header>
                <div className="w-full h-[80vh] pt-5 relative">
                    <Image src={bg} alt="" fill />
                </div>
            </main>
            <aside className="h-full w-full lg:pt-0 pt-5 overflow-y-scroll scrollbar-thin">
                <div className="W-full flex lg:flex-nowrap flex-wrap justify-between">
                    <CardNews />
                    <CardNews />
                    <CardNews />
                    <CardNews />
                </div>
            </aside>
        </div>
    </section>
}