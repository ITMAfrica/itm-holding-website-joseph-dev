import ContactFormItem from './item';
import ContactFormTextArea from './textArea';
import { getDictionary } from '@/get-dictionary';

export default function ContactPageForm({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.contact.formSection.form;
  return (
    <form
      action=""
      className="flex justify-between items-start flex-wrap px-6 py-10 bg-blue_itm_primary/10 rounded-xl w-full h-fit"
    >
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.firstName} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.lastName} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.email} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.entreprise} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.professionalEmail} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.phoneNumber} />
      </div>
      <div className="w-full mb-3">
        <ContactFormItem {...data.subject} />
      </div>
      <div className="w-full">
        <ContactFormTextArea {...data.message} />
      </div>
      <div>
        <p className="text-black mt-2 mb-5">{data.formWarning}</p>
        <button className="bg-blue_itm_primary py-3 px-10 rounded-full">
          {data.btnSend.text}
        </button>
      </div>
    </form>
  );
}
