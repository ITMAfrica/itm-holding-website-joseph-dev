import Image from "next/image"
import { useParams } from "next/navigation"

export default function CardServices({ name, index, image, activeSlide, setActiveSlide, description }: any) {

    return <article
        onClick={function () {
            setActiveSlide(index)
        }} className={`h-[50vh] group w-[20vw] shadow-2xl hover:shadow-2xl shadow-white ${index == activeSlide ? 'shadow-2xl shadow-black' : ''} cursor-pointer overflow-hidden mr-5  relative`}>
        <Image src={image} alt="" fill objectFit="cover" />
        <div className="absolute top-0 text-white bg-gradient-to-b from-transparent to-black left-0 right-0 bottom-0 p-5 lg:p-10 flex items-end justifty-center">
            <div className="w-full">
                <h1 className={`font-bold text-xl group-hover:text-blue_itm_aqua_marine ${index == activeSlide ? 'text-blue_itm_aqua_marine' : 'text-white'}`}>
                    {name}
                </h1>
                <p className={`pt-3 text-xs`}>
                    {description.slice(0, 100)}...
                </p>
            </div>
        </div>
    </article>
}