import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function ButtonOulined({
  text,
  link,
  title,
  arrow = false,
}: {
  text: string;
  link: string;
  title: string;
  arrow: boolean;
}) {
  return (
    <Link
      href={link}
      title={title}
      className="block w-44 py-4 text-xs font-semibold text-center text-blue_itm_good hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-blue_itm_good hover:border-blue_itm_aqua_marine transition duration-800"
    >
      <span className="flex justify-center items-center">
        {text}
        {arrow ? (
          <span className="ml-1 text-sm">
            <BsArrowRight />
          </span>
        ) : (
          ''
        )}
      </span>
    </Link>
  );
}
