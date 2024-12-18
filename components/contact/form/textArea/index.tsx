export default function ContactFormTextArea({
  label,
  name,
  placeholder,
  type,
  errorMessage,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
}) {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-bold mb-2">{label}</p>
      <textarea
        id="txtid"
        name={name}
        rows={5}
        cols={20}
        className="w-full px-3 py-2 outline-none text-black"
        placeholder={placeholder}
      ></textarea>
      <p className="text-red-600 text-xs">
        {errorMessage ? errorMessage : ''}{' '}
      </p>
    </div>
  );
}
