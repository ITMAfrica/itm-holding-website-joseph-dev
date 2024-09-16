export default function HomeMetricsCard({
  number,
  name,
  paragraph,
  bg = true,
}: {
  number: string;
  name: string;
  paragraph: string;
  bg: boolean;
}) {
  return bg ? (
    <div className="group rounded-lg w-[23%] bg-blue_itm_primary hover:bg-transparent hover:text-black text-white py-4 px-5">
      <h2 className="text-3xl font-bold mb-2 group-hover:text-blue_itm_aqua_marine">
        {number}
      </h2>
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-sm">{paragraph}</p>
    </div>
  ) : (
    <div className="rounded-lg w-[23%] py-4 px-5 group hover:bg-blue_itm_aqua_marine hover:text-white duration-50">
      <h2 className="text-3xl font-bold mb-2 text-blue_itm_aqua_marine group-hover:text-white duration-0">
        {number}
      </h2>
      <h4 className="text-xl font-bold duration-0">{name}</h4>
      <p className="text-sm duration-0">{paragraph}</p>
    </div>
  );
}
