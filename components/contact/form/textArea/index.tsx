export default function ContactFormTextArea({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-bold mb-2">{label}</p>
      <textarea
        id="txtid"
        name={name}
        rows={5}
        cols={20}
        className="w-full px-3 py-2"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
