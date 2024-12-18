import { object, string } from 'yup';

let newsLetterSchema = object({
  email: string()
    .email({
      fr: "L'adresse mail saisie n'est pas valide",
      en: 'The email address entered is not valid',
    })
    .min(5, {
      fr: 'Le mail doit avoir au moins 5 caractères',
      en: 'The email must have at least 5 characters',
    })
    .required({ fr: 'Le mail est requis', en: 'The email is required' }),
});

export default newsLetterSchema;
