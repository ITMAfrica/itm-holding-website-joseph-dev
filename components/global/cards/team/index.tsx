import avatar from "@/public/assets/teams/avatar.png"
import Image from "next/image"
export default function CardTeam() {
    return <article className="w-[90vw] lg:w-[280px] mx-[5px] h-[475px] relative">
        <Image src={avatar} fill alt="team" objectFit="cover" objectPosition="top" />
        <div className="absolute p-5 h-[175px] left-0 bottom-0 right-0 bg-black/50">
            <h2 className="font-bold um text-white">
                Adelaida
            </h2>
            <h1 className="font-bold text-xl text-blue_itm_secondary py-1">
                Regional Managing Director
            </h1>
            <p className="text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi reiciendis, labore non ducimus beatae quo, quas
            </p>
        </div>
    </article>
}