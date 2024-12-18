interface Input {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: boolean;
  errorMessage: string;
  onChange: () => void;
}

export default function ContactFormItem({
  label,
  name,
  type,
  placeholder,
  onChange,
  errorMessage,
}: Input): React.ReactElement {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-bold mb-2">{label}</p>
      <input
        name={name}
        type={type}
        className="px-3 py-2 text-black bg-white w-full rounded outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-red-600 text-xs">
        {errorMessage ? errorMessage : ''}{' '}
      </p>
    </div>
  );
}
