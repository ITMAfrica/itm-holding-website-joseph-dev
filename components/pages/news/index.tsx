import Faqs from "@/components/global/faqs"
import Teams from "@/components/global/teams"
import NewsPageBanner from "@/components/news/banner"
import NewsPageMain from "@/components/news/mainNews"
import NewsPageSecondary from "@/components/news/secondaryNews"

export default function NewsPage({ params }: any) {
    return <main className="w-full">
        <NewsPageBanner />
        <NewsPageMain />
        <NewsPageSecondary />
        <Teams />
        <Faqs />
    </main>
}