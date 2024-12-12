import { object, string, number } from 'yup';

let contactSchema = object({
  firstName: string()
    .min(2, {
      fr: 'Le prénom doit avoir au moins 2 caractères',
      en: 'The first name must have at least 2 characters',
    })
    .required({ fr: 'Le prénom est requis', en: 'The first name is required' }),
  lastName: string()
    .min(2, {
      fr: 'Le nom doit avoir au moins 2 caractères',
      en: 'The last name must have at least 2 characters',
    })
    .required({ fr: 'Le nom est requis', en: 'The last name is required' }),
  company: string().min(2, {
    fr: "Le nom de l'entreprise doit avoir au moins 2 caractères",
    en: 'The company name must have at least 2 characters',
  }),
  email: string()
    .email()
    .min(5, {
      fr: 'Le mail doit avoir au moins 5 caractères',
      en: 'The email must have at least 5 characters',
    })
    .required({ fr: 'Le mail est requis', en: 'The email is required' }),
  professionalEmail: string().email().min(5, {
    fr: 'Le mail professionel doit avoir au moins 5 caractères',
    en: 'The professional email must have at least 5 characters',
  }),
  phoneNumber: string()
    .min(10, {
      fr: 'Le numéro de téléphone doit avoir au moins 10 caractères',
      en: 'The phone number must have at least 10 characters',
    })
    .required({
      fr: 'Le numéro de téléphone est requis',
      en: 'The phone number is required',
    }),
  subject: string().required({
    fr: 'Le sujet est requis',
    en: 'The subject is required',
  }),
  message: string().required({
    fr: 'Le message est requis!',
    en: 'The message is required',
  }),
});

export default contactSchema;
