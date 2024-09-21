export default function AboutPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full h-[70vh] bg-blue_itm_aqua_marine/10 py-10">
      <div className="flex items-center w-11/12 mx-auto text-white bg-blue_itm_good h-full rounded-xl">
        <section className="w-1/2 ml-20">
          <h1 className="text-5xl font-bold mb-4">A PROPOS DE NOUS</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            commodi debitis, accusamus saepe, cum quos iure ea odit earum et
            porro obcaecati sint ipsa accusantium repellat nobis soluta
            repudiandae non!
          </p>
        </section>
      </div>
    </section>
  );
}
