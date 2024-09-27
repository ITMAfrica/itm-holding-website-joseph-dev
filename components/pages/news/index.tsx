import Faqs from "@/components/global/faqs"
import Teams from "@/components/global/teams"
import NewsPageBanner from "@/components/news/banner"

export default function NewsPage({ params }: any) {
    console.log(params)
    return <main className="w-full">
        <NewsPageBanner />
        <Teams />
        <Faqs />
    </main>
}