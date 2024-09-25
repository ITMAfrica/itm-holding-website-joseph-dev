import recrutement from '@/public/pages/home/services/recruitment.png';
import placement from '@/public/pages/home/services/placement.png';
import suivi from '@/public/pages/home/services/evaluating.png';
import team from '@/public/pages/home/services/teambuilding.png';
import hr from '@/public/pages/home/services/hrconsulting.png';
import formation from '@/public/pages/home/services/training.png';
import cdFlag from "@/public/assets/flag/cd.png"
import rwFlag from "@/public/assets/flag/rw.png"
import tzFlag from "@/public/assets/flag/tz.png"
import tgFlag from "@/public/assets/flag/tg.png"
import ngFlag from "@/public/assets/flag/ng.png"
import gbFlag from "@/public/assets/flag/gb.png"
import ugFlag from "@/public/assets/flag/ug.png"
import bnFlag from "@/public/assets/flag/bn.png"
import aoFlag from "@/public/assets/flag/ao.png"
import keFlag from "@/public/assets/flag/ke.png"
import cgFlag from "@/public/assets/flag/cg.png"
import cmFlag from "@/public/assets/flag/cm.png"
import zmFlag from "@/public/assets/flag/zm.png"
import zaFlag from "@/public/assets/flag/za.png"
import deFlag from "@/public/assets/flag/de.png"

export const servicesHome: any = {
  fr: [
    {
      name: 'Recrutement',
      icon: recrutement,
      paragraph:
        'Nous ne proposons pas seulement des candidats, mais des collaborateurs qui feront la différence',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de recrutement',
        arrow: true,
      },
    },
    {
      name: 'Placement du personnel',
      icon: placement,
      paragraph:
        "Plus qu'un placement, une expertise pour vous accompagner dans votre croissabce.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Placement du personnel',
        arrow: true,
      },
    },
    {
      name: 'Suivie et évaluation des projets',
      icon: suivi,
      paragraph:
        'Nous assurons un suivi rigoureux et des évaluations précises pour garantir la réussite des vos initiatives.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Suivie et évaluation des projets',
        arrow: true,
      },
    },
    {
      name: 'Team building',
      icon: team,
      paragraph:
        "Un esprit d'équipe solide, c'est la clé de la réussite. Nous vous proposons des expériences uniques pour renforcer la cohésion de vos collaborateurs.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Team building',
        arrow: true,
      },
    },
    {
      name: 'Hr consulting',
      icon: hr,
      paragraph:
        'Nous vous écoutons pour vous proposer des solutions adaptées.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Hr consulting',
        arrow: true,
      },
    },
    {
      name: 'Formation',
      icon: formation,
      paragraph:
        'Développez les compétences de vos équipes et boostez votre compétitivité grâce à nos formations.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Formation',
        arrow: true,
      },
    },
  ],
  en: [
    {
      name: 'Recrutement',
      icon: recrutement,
      paragraph:
        'Nous ne proposons pas seulement des candidats, mais des collaborateurs qui feront la différence',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de recrutement',
        arrow: true,
      },
    },
    {
      name: 'Placement du personnel',
      icon: placement,
      paragraph:
        "Plus qu'un placement, une expertise pour vous accompagner dans votre croissabce.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Placement du personnel',
        arrow: true,
      },
    },
    {
      name: 'Suivie et évaluation des projets',
      icon: suivi,
      paragraph:
        'Nous assurons un suivi rigoureux et des évaluations précises pour garantir la réussite des vos initiatives.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Suivie et évaluation des projets',
        arrow: true,
      },
    },
    {
      name: 'Team building',
      icon: team,
      paragraph:
        "Un esprit d'équipe solide, c'est la clé de la réussite. Nous vous proposons des expériences uniques pour renforcer la cohésion de vos collaborateurs.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Team building',
        arrow: true,
      },
    },
    {
      name: 'Hr consulting',
      icon: hr,
      paragraph:
        'Nous vous écoutons pour vous proposer des solutions adaptées.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Hr consulting',
        arrow: true,
      },
    },
    {
      name: 'Formation',
      icon: formation,
      paragraph:
        'Développez les compétences de vos équipes et boostez votre compétitivité grâce à nos formations.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Détails du service de Formation',
        arrow: true,
      },
    },
  ],
};

export const entities = [
  { fr: "Congo Kinshasa", en: "Congo Kinshasa", href: "/", code: "cd", flag: cdFlag },
  { fr: "Rwanda", en: "Rwanda", href: "/en/rw", code: "rw", flag: rwFlag },
  { fr: "Tanzanie", en: "Tanzania", href: "/en/tz", code: "tz", flag: tzFlag },
  { fr: "Togo", en: "Togo", href: "/en/tg", code: "tg", flag: tgFlag },
  { fr: "Nigéria", en: "Nigeria", href: "/en/ng", code: "ng", flag: ngFlag },
  { fr: "Gabon", en: "Gabon", href: "/en/gb", code: "gb", flag: gbFlag },
  { fr: "Uganda", en: "Uganda", href: "/en/ug", code: "ug", flag: ugFlag },
  { fr: "Bénin", en: "Benin", href: "/fr/bn", code: "bn", flag: bnFlag },
  { fr: "Angola", en: "Angola", href: "/en/ao", code: "ao", flag: aoFlag },
  { fr: "Kenya", en: "Kenya", href: "/en/ke", code: "ke", flag: keFlag },
  { fr: "Congo Brazza", en: "Congo Brazza", href: "/fr/cg", code: "cg", flag: cgFlag },
  { fr: "Cameroun", en: "Cameroun", href: "/fr/cm", code: "cm", flag: cmFlag },
  { fr: "Zambie", en: "Zambia", href: "/en/zm", code: "zm", flag: zmFlag },
  { fr: "Afrique du sud", en: "South Africa", href: "/en/za", code: "za", flag: zaFlag },
  { fr: "Allemagne", en: "Allemagne", href: "/en/de", code: "de", flag: deFlag },
]
export const langs = [{ fr: "Français", en: "French", tag: "" }, { fr: "RDC", en: "RDC", tag: "", code: "CD" }]