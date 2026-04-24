import bg from "@/public/assets/bg/bg.news.card.3.png"
import bg2 from "@/public/assets/bg/bg.news.card.4.png"
import { CiCalendar } from "react-icons/ci";
import Image from "next/image"

export default function CardNews({ full = false, index }: any) {
    if (full) {
        return <article className="w-full h-fit group cursor-pointer flex items-start justify-start mb-5">
            <div className="w-[200px] rounded-md overflow-hidden h-[130px] relative">{
                index % 2 == 0 ?
                    <Image src={bg} alt="" fill style={{ objectFit: 'cover' }} /> :
                    <Image src={bg2} alt="" fill style={{ objectFit: 'cover' }} />}
            </div>
            <div className="w-full h-full pl-3">
                <div className="w-full flex items-center justify-between mb-2 font-bold">
                    <CiCalendar className="text-blue_itm_aqua_marine group-hover:text-blue_itm_good" />
                    <h1 className="text-gray_itm group-hover:text-blue_itm_good font-thin group-hover:font-bold text-left w-full pl-2">
                        5 decembre 2024
                    </h1>
                </div>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi vero laboriosam sapiente
                </p>
            </div>
        </article>
    }
    return <article className="w-full rounded-md overflow-hidden relative lg:w-[25vw] cursor-pointer group h-fit mb-10 flex items-start justify-start">
        <div className="absolute  rounded-sm overflow-hiddenss z-10 bg-green-500 top-3 left-3 text-sm px-2 py-1 text-white ">
            review
        </div>
        <div className="w-[200px] h-[130px] relative  rounded-md overflow-hidden" >{
            index % 2 == 0 ?
                <Image src={bg} alt="" fill style={{ objectFit: 'cover' }} /> :
                <Image src={bg2} alt="" fill style={{ objectFit: 'cover' }} />}
        </div>
        <div className="w-fit h-full pl-3">
            <div className="w-full flex items-center justify-between mb-2 font-bold">
                <CiCalendar className="text-blue_itm_aqua_marine group-hover:text-blue_itm_good" />
                <h1 className="text-gray_itm group-hover:text-blue_itm_good font-thin text-left w-full pl-2">
                    5 decembre 2024
                </h1>
            </div>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi vero laboriosam sa
            </p>
        </div>
    </article>
}