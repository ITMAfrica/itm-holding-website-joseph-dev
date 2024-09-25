export default function SectionTitle({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <h2
      className={`font-bold text-center lg:text-left  text-blue_itm_aqua_marine ${
        center ? 'text-center' : ''
      } mb-2`}
    >
      {text}
    </h2>
  );
}
