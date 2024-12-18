'use client';

import ContactFormItem from './item';
import ContactFormTextArea from './textArea';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import axios from 'axios';
import { mail_api_url, notifyError, notifySuccess } from '@/helpers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import contactSchema from './type';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPageForm({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.contact.formSection.form;
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<any>({
    resolver: yupResolver(contactSchema),
  });

  const setError: any = (errors: any, name: string) => {
    return { error: errors[name], errorMessage: errors[name]?.message[lang] };
  };

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
    if (e?.target) {
      const { value, name } = e.target;
      setState((state: any) => ({
        ...state,
        [name]: value,
      }));
      setValue(name, value);
    }
  };

  const onSubmit = handleSubmit(async () => {
    setLoader(true);
    console.log('Form submited');
    const data = {
      lang: lang,
      data: {
        firstName: state.firstName,
        lastName: state.lastName,
        company: state.company,
        email: state.email,
        professionalEmail: state.professionalEmail,
        phoneNumber: state.phoneNumber,
        subject: state.subject,
        message: state.message,
      },
    };
    await axios
      .post(`${mail_api_url}/contact-website`, data)
      .then(() => {
        console.log('Message envoyé avec succès');
        notifySuccess('Success', 'Contact');
        setState({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          professionalEmail: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      })
      .catch(() => {
        setLoader(false);
        notifyError('Error', 'Contact');
        console.log('Erreur');
      });
  });
  return (
    <form
      action=""
      className="flex justify-between items-start flex-wrap px-6 py-10 bg-blue_itm_primary/10 rounded-xl w-full h-fit"
    >
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.firstName}
          {...setError(errors, data.firstName.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.lastName}
          {...setError(errors, data.lastName.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.email}
          {...setError(errors, data.email.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.entreprise}
          {...setError(errors, data.entreprise.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.professionalEmail}
          {...setError(errors, data.professionalEmail.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-[48%] mb-3">
        <ContactFormItem
          {...data.phoneNumber}
          {...setError(errors, data.phoneNumber.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-full mb-3">
        <ContactFormItem
          {...data.subject}
          {...setError(errors, data.subject.name)}
          onChange={onChange}
        />
      </div>
      <div className="w-full">
        <ContactFormTextArea
          {...data.message}
          {...setError(errors, data.message.name)}
          onChange={onChange}
        />
      </div>
      <div>
        <p className="text-black mt-2 mb-5">{data.formWarning}</p>
        <button
          onClick={onSubmit}
          className="bg-blue_itm_primary py-3 px-10 rounded-full"
        >
          {data.btnSend.text}
        </button>
      </div>
    </form>
  );
}
