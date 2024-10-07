export default function ContactFormTextArea() {
  return (
    <div className="w-full">
      <p className="text-blue_itm_primary text-xs font-bold mb-2">First name</p>
      <textarea
        id="txtid"
        name="txtname"
        rows={5}
        cols={20}
        className="w-full px-3 py-2"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
        nihil nostrum!"
      ></textarea>
    </div>
  );
}
