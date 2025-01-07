export default function ContactFormTextArea({
  label,
  name,
  placeholder,
  onChange,
  errorMessage,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  onChange: any;
}) {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-semibold mb-2 font-open">
        {label}
      </p>
      <textarea
        id="txtid"
        name={name}
        rows={5}
        cols={20}
        className="w-full px-3 py-2 outline-none text-black_itm"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      ></textarea>
      <p className="text-red-600 text-xs">
        {errorMessage ? errorMessage : ''}{' '}
      </p>
    </div>
  );
}
