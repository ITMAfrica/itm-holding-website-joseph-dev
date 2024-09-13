import Link from 'next/link';

export default function ButtonBg({
  text,
  link,
  title,
}: {
  text: string;
  link: string;
  title: string;
}) {
  return (
    <Link
      href={link}
      title={title}
      className="block w-40 py-3 text-xs font-semibold text-center text-blue_itm_primary bg-white hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-white hover:border-blue_itm_aqua_marine"
    >
      {text}
    </Link>
  );
}
