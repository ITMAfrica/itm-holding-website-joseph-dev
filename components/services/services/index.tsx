import { servicesHome } from "@/lib/data";
import CardServices from "./card";

export default function ServicesPageServices({ params }: { params: any }) {
    const lang = params.lang
    return (
        <section className="w-full h-fit  bg-white">
            {servicesHome[lang].map(function (item: any, index: number) {
                return <CardServices {...item} left={index % 2 == 0} key={index} />
            })}
        </section>
    );
}