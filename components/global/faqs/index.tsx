import SectionTitle from "@/components/global/section_title";
import CardFaq from "@/components/global/cards/faq";

export default function Faqs({ faqs = Array.from({ length: 10 }) }) {
    return <section className="w-full py-20">
        <div className="w-11/12 lg:w-10/12 mx-auto lg-fit lg:h-[500px] lg:flex">
            <div className="w-full lg:w-1/3">
                <SectionTitle text="QUESTIONS" />
                <h1 className="font-bold  text-4xl  text-blue_itm_primary">
                    Foire aux questions
                </h1>
                <p className="pt-5">
                    N'hésitez pas à nous poser toutes vos questions <br />
                    Nous sommes là pour vous
                </p>
            </div>
            <div className="w-full lg:w-2/3 h-fit lg:h-full overflow-y-scroll lg:pt-0 pt-5 scrollbar-thin">
                {faqs.map(function (item: any, index: number) {
                    return <CardFaq {...item} key={index} />
                })}
            </div>
        </div>
    </section>
}