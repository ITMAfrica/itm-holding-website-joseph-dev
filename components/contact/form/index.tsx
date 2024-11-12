'use client';

import ContactFormItem from './item';
import ContactFormTextArea from './textArea';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';

export default function ContactPageForm({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.contact.formSection.form;

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    professionalEmail: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const onChange = (e: any) => {
    console.log(state);
    if (e?.target) {
      const { value, name } = e.target;
      setState((state: any) => ({
        ...state,
        [name]: value,
      }));
    }
  };
  return (
    <form
      action=""
      className="flex justify-between items-start flex-wrap px-6 py-10 bg-blue_itm_primary/10 rounded-xl w-full h-fit"
    >
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.firstName} onChange={onChange} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.lastName} onChange={onChange} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.email} onChange={onChange} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.entreprise} onChange={onChange} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.professionalEmail} onChange={onChange} />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem {...data.phoneNumber} onChange={onChange} />
      </div>
      <div className="w-full mb-3">
        <ContactFormItem {...data.subject} onChange={onChange} />
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
