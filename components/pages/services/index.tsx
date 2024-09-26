import CallToAction from "@/components/global/callToAction"
import ServicesPageAbout from "@/components/services/about"
import ServicesPageBanner from "@/components/services/banner"

export default function ServicesPage({ params }: any) {
    return <main className="w-full">
        <ServicesPageBanner params={params} />
        <ServicesPageAbout params={params} />
        <CallToAction params={params} />
    </main>
}