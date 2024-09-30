export default function HomeMetricsCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg lg:w-[23%] md:w-[48%] w-full bg-white/20 mb-4 lg:mb-0 hover:bg-transparent text-white py-4 px-5">
      <h2 className="md:text-7xl text-5xl font-bold mb-2 group-hover:text-blue_itm_aqua_marine">
        {number}
      </h2>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
