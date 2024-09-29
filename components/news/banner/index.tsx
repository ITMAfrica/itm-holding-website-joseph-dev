import CardNews from "../card";

export default function NewsPageBanner() {
    return <section className="w-full h-fit lg:h-[80vh] py-10">
        <div className="w-11/12 lg:w-11/12 mx-auto h-full flex lg:flex-nowrap flex-wrap">
            <div className="w-full lg:w-9/12 h-[80vh] lg:h-full bg-red-500 border lg:mr-5 mr-0 relative">

            </div>
            <div className="h-full w-3/12  lg:pt-0 pt-5 overflow-y-scroll scrollbar-thin">
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
            </div>
        </div>
    </section>
}