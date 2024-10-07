import ContactFormItem from './item';
import ContactFormTextArea from './textArea';

export default function ContactPageForm() {
  return (
    <form
      action=""
      className="flex justify-between items-start flex-wrap px-6 py-10 bg-blue_itm_primary/10 rounded-xl w-full h-fit"
    >
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem />
      </div>
      <div className="w-full mb-3">
        <ContactFormItem />
      </div>
      <div className="w-full">
        <ContactFormTextArea />
      </div>
      <p className="text-black mt-2 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        nobis illum incidunt voluptate impedit et sunt eligendi nostrum, rem
        recusandae
      </p>
      <button className="bg-blue_itm_primary py-3 px-10 rounded-full">
        Envoyer
      </button>
    </form>
  );
}
