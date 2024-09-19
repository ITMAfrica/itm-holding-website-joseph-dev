export default function HomeMetricsCard({
  number,
  title,
  description,
  bg = true,
}: {
  number: string;
  title: string;
  description: string;
  bg: boolean;
}) {
  return bg ? (
    <div className="group rounded-lg lg:w-[23%] md:w-[48%] w-full bg-blue_itm_primary mb-4 lg:mb-0 hover:bg-transparent hover:text-black text-white py-4 px-5">
      <h2 className="text-3xl font-bold mb-2 group-hover:text-blue_itm_aqua_marine">
        {number}
      </h2>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  ) : (
    <div className="rounded-lg lg:w-[23%] md:w-[48%] w-full py-4 px-5 group hover:bg-blue_itm_aqua_marine mb-4 lg:mb-0 hover:text-white duration-50">
      <h2 className="text-3xl font-bold mb-2 text-blue_itm_aqua_marine group-hover:text-white duration-0">
        {number}
      </h2>
      <h4 className="text-xl font-bold duration-0">{title}</h4>
      <p className="text-sm duration-0">{description}</p>
    </div>
  );
}
