export default function CardNews({ full = true }: any) {
    if (full) {
        return <article className="w-full h-[100px] flex items-center justify-start mb-3 bg-yellow-500"></article>
    }
    return <article className="w-[20vw] h-[100px] mb-5 bg-yellow-500"></article>
}