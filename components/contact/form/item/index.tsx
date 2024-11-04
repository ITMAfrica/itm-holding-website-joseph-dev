export default function ContactFormItem() {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-bold mb-2">First name</p>
      <input
        type="text"
        className="px-3 py-2 text-black bg-white w-full rounded"
        placeholder="Your first name"
      />
    </div>
  );
}
