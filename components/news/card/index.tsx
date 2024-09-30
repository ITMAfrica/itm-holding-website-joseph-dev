import bg from "@/public/assets/bg/bg.news.png"
import Image from "next/image"
export default function CardNews({ full = true }: any) {
    if (full) {
        return <article className="w-full h-[100px] flex items-center justify-start mb-3">
            <div className="w-[100px] h-[100px] relative">
                <Image src={bg} alt="" fill />
            </div>
            <div className="w-full">
                <h1 className="font-bold">

                </h1>
                <p className="pl-3 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi vero laboriosam sapiente illo accusantium culpa
                </p>
            </div>
        </article>
    }
    return <article className="w-[20vw] h-[100px] mb-5">
        <div className="w-[100px] h-[100px] relative">
            <Image src={bg} alt="" fill />
        </div>
    </article>
}