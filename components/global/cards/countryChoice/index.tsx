import { useParams } from "next/navigation"
import bg from "@/public/assets/bg/bg.country.png"
import Image from "next/image"
import Link from "next/link"
import { setCookie } from "@/helpers"

export default function CardCountryChoice(props: any) {
    const params: any = useParams()
    const lang: string = params.lang
    return <Link
        href={props.href}
        onClick={function (e: any) {
            setCookie("country", props.code)
            return e
        }}
        title={props[lang]}
        className="w-[200px] group block relative relative h-[100px] mb-5 relative overflow-hidden rounded-2xl shadow-2xl"
    >
        <div className="w-full h-full shadow-2xl absolute bottom-0 z-10 right-0 p-5">
            <h3 className="font-medium group-hover:font-bold group-hover:text-blue_itm_aqua_marine">
                {props[lang]}
            </h3>
            <div className="w-fit absolute bottom-5 right-5">

                <div className="relative w-[65px] h-[45px] rounded-lg overflow-hidden">
                    <Image src={props.flag} alt={`Flag ${props[lang]}`} fill ></Image>
                </div>
            </div>
        </div>
        <Image src={bg} alt="Bg" fill ></Image>
    </Link>
}