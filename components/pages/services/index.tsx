import CallToAction from "@/components/global/callToAction"
import ServicesPageBanner from "@/components/services/banner"

export default function ServicesPage({ params }: any) {
    return <main className="w-full">
        <ServicesPageBanner params={params} />
        <CallToAction params={params} />
    </main>
}