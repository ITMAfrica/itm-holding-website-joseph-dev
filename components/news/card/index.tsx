import bg from "@/public/assets/bg/bg.news.card.png"
import { CiCalendar } from "react-icons/ci";
import Image from "next/image"

export default function CardNews({ full = false }: any) {
    if (full) {
        return <article className="w-full h-[80px] group cursor-pointer flex items-center justify-start mb-3">
            <div className="w-[100px] h-[80px] relative">
                <Image src={bg} alt="" fill objectFit="fill" />
            </div>
            <div className="w-fit h-full pl-3">
                <div className="w-full flex items-center justify-between mb-2 font-bold">
                    <CiCalendar className="text-blue_itm_aqua_marine group-hover:text-blue_itm_good" />
                    <h1 className="text-gray group-hover:text-blue_itm_good font-thin text-left w-full pl-2">
                        vendredi 5 decembre 2024
                    </h1>
                </div>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi vero laboriosam sapiente illo accusantium culpa
                </p>
            </div>
        </article>
    }
    return <article className="w-full lg:w-[25vw] cursor-pointer group h-[120px] mb-5 flex items-center justify-start">
        <div className="w-[200px] h-[120px] relative">
            <Image src={bg} alt="" fill objectFit="fill" />
            <div className="absolute bg-green-500 top-3 left-3 text-xs px-2 text-white ">
                review
            </div>
        </div>
        <div className="w-fit h-full pl-3">
            <div className="w-full flex items-center justify-between mb-2 font-bold">
                <CiCalendar className="text-blue_itm_aqua_marine group-hover:text-blue_itm_good" />
                <h1 className="text-gray group-hover:text-blue_itm_good font-thin text-left w-full pl-2">
                    vendredi 5 decembre 2024
                </h1>
            </div>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi vero laboriosam sapiente illo accusantium culpa
            </p>
        </div>
    </article>
}