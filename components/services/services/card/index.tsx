import SectionTitle from "@/components/global/section_title"
import Image from "next/image"

export default function CardServices({ name, image, description, left = true }: any) {
    if (left) {
        return <article className="w-full min-h-[400px] group  flex justify-center ease-linear">
            <div className="w-full flex">
                <div className="w-1/2 h-full group-hover:bg-gray_itm_bg/40 py-20">
                    <div className="lg:w-8/12 relative z-10 w-11/12 mx-auto bg-white lg:group-hover:translate-x-2/3 p-10 pl-0 lg:group-hover:p-10 group-hover:p-5 ">
                        <SectionTitle text={"Nos Services"} />
                        <h1 className="font-bold  text-4xl  text-blue_itm_primary">
                            {name}
                        </h1>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="w-1/2 h-full bg-gray_itm_bg/40 relative">
                    <Image src={image} fill alt={name} />
                </div>
            </div>
        </article>
    }
    return <article className="w-full min-h-[400px] group flex justify-center ease-linear">
        <div className="w-full flex">
            <div className="w-1/2 h-full bg-gray_itm_bg/40 relative">
                <Image src={image} fill alt={name} />
            </div>
            <div className="w-1/2 h-full group-hover:bg-gray_itm_bg/40 py-20">
                <div className="lg:w-8/12 relative w-11/12 mx-auto bg-white lg:p-10 p-5 pr-0 lg:group-hover:-translate-x-2/3 lg:group-hover:p-10 group-hover:p-5 ">
                    <SectionTitle text={"Nos Services"} />
                    <h1 className="font-bold  text-4xl  text-blue_itm_primary">
                        {name}
                    </h1>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </article>
}