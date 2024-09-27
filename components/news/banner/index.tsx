import CardNews from "../card";

export default function NewsPageBanner() {
    return <section className="w-full h-[80vh] py-10">
        <div className="w-11/12 lg:w-11/12 mx-auto h-full flex">
            <div className="w-full lg:w-9/12 h-full bg-red-500 mr-5">

            </div>
            <div className="h-full w-3/12 overflow-y-scroll scrollbar-thin">
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
                <CardNews full />
            </div>
        </div>
    </section>
}