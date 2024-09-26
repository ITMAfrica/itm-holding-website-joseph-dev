"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"
export default function CardFaq() {
    const [show, setShow] = useState(false)
    function showUs() {
        setShow(!show)
    }
    return <article className="w-full group bg-white flex flex-wrap items-center justify-between text-black p-5 mb-5 rounded-lg">
        <p onClick={showUs} className={`group-hover:text-blue_itm_aqua_marine cursor-pointer ${!show ? "text-black" : "text-blue_itm_aqua_marine"}`}>
            Comment puis je suivre l'etat d'une offre ?
        </p>
        <div onClick={showUs} className={`w-fit rounded-full p-3 group-hover:text-blue_itm_aqua_marine ${!show ? "text-gray_itm_bg" : "text-blue_itm_aqua_marine"} text-xl cursor-pointer`}>
            {!show ? <FaPlus /> : <FaMinus />}
        </div>
        {show && <div className="w-full group-hover:text-black pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iure itaque perspiciatis pariatur omnis praesentium ipsam, veritatis sed corrupti vel amet magni, libero asperiores dolorum laboriosam soluta, numquam tenetur placeat.
        </div>}
    </article>
}