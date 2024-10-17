"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"
export default function CardFaq({ title, description, about = false }: any) {
    const [show, setShow] = useState(false)
    function showUs() {
        setShow(!show)
    }
    if (about) return <article className="w-full group bg-white flex flex-wrap items-center justify-between text-black p-5 pl-0 mb-3 border-b ">
        <div onClick={showUs} className="w-full cursor-pointer h-fit flex justify-between items-start">
            <p className={`text-blue_itm_aqua_marine text-xl font-bold cursor-pointer ${!show ? "text-black" : "text-blue_itm_aqua_marine"}`}>
                {title}
            </p>
            <div className={`w-fit rounded-full p-3 py-0 group-hover:text-blue_itm_aqua_marine ${!show ? "text-black" : "text-blue_itm_aqua_marine"} text-2xl cursor-pointer`}>
                {!show ? <FaPlus /> : <FaMinus />}
            </div>
        </div>
        {show && <p className="w-full group-hover:text-black pt-3">
            {description}
        </p>}
    </article>
    return <article className="w-full group bg-white flex flex-wrap items-center justify-between text-black p-5 mb-3 rounded-lg">
        <p onClick={showUs} className={`group-hover:text-blue_itm_aqua_marine cursor-pointer ${!show ? "text-black" : "text-blue_itm_aqua_marine"}`}>
            {title}
        </p>
        <div onClick={showUs} className={`w-fit rounded-full p-3 group-hover:text-blue_itm_aqua_marine ${!show ? "text-gray_itm_bg" : "text-blue_itm_aqua_marine"} text-2xl cursor-pointer`}>
            {!show ? <FaPlus /> : <FaMinus />}
        </div>
        {show && <p className="w-full group-hover:text-black pt-3">
            {description}
        </p>}
    </article>
}