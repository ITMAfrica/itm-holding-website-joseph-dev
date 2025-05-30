export default function CardLandingPage({
  text,
  title,
}: {
  text: String;
  title: String;
}) {
  return (
    <article className="w-[31%] bg-blue_itm_title_blue h-[300px] rounded-lg flex items-center justify-center px-10">
      <div className="w-fit h-fit text-white">
        <h2 className="text-3xl mb-3 font-sans">{title}</h2>
        <p className="">{text}</p>
      </div>
    </article>
  );
}
