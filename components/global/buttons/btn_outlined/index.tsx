import Link from 'next/link';

export default function ButtonOulined({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="block w-44 py-4 text-xs font-semibold text-center text-blue_itm_primary hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-blue_itm_primary hover:border-blue_itm_aqua_marine"
    >
      {text}
    </Link>
  );
}
