import recrutement from '@/public/pages/home/services/service1.png';
import service1 from '@/public/pages/home/services/service1.png';
import service2 from '@/public/pages/home/services/service2.png';
import service3 from '@/public/pages/home/services/service3.png';
import hr from '@/public/pages/home/services/hrconsulting.png';
import formation from '@/public/pages/home/services/training.png';
import cdFlag from '@/public/assets/flag/cd.png';
import rwFlag from '@/public/assets/flag/rw.png';
import tzFlag from '@/public/assets/flag/tz.png';
import tgFlag from '@/public/assets/flag/tg.png';
import ngFlag from '@/public/assets/flag/ng.png';
import gbFlag from '@/public/assets/flag/gb.png';
import ugFlag from '@/public/assets/flag/ug.png';
import bnFlag from '@/public/assets/flag/bn.png';
import aoFlag from '@/public/assets/flag/ao.png';
import keFlag from '@/public/assets/flag/ke.png';
import cgFlag from '@/public/assets/flag/cg.png';
import cmFlag from '@/public/assets/flag/cm.png';
import zmFlag from '@/public/assets/flag/zm.png';
import zaFlag from '@/public/assets/flag/za.png';
import deFlag from '@/public/assets/flag/de.png';
import cdLogo from '@/public/assets/logo/cd.png';
import hrLogo from '@/public/assets/logo/hr.png';
import aoLogo from '@/public/assets/logo/ao.png';
import bnLogo from '@/public/assets/logo/bn.png';
import cgLogo from '@/public/assets/logo/cg.png';
import keLogo from '@/public/assets/logo/ke.png';
import ngLogo from '@/public/assets/logo/ng.png';
import rwLogo from '@/public/assets/logo/rw.png';
import tzLogo from '@/public/assets/logo/tz.png';
import tgLogo from '@/public/assets/logo/tg.png';
import ugLogo from '@/public/assets/logo/ug.png';
import zmLogo from '@/public/assets/logo/zm.png';
import zaLogo from '@/public/assets/logo/za.png';
import projetService from '@/public/assets/services/projet.png';
import avatar from '@/public/assets/bg/bg.avatar.png';
import avatarWomen from "@/public/assets/bg/bg.avatar.women.png"

export const servicesHome: any = {
  fr: [
    {
      name: 'Recrutement',
      icon: service1,
      image: projetService,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
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
      icon: service2,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',

      image: projetService,
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
      icon: service3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',

      image: projetService,
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
      icon: service1,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',

      image: projetService,
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
      icon: service2,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service1,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service2,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service1,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service2,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,

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
      icon: service3,
      description:
        'Lorem ipsum dolor sit amet consectetur. Orci amet feugiat volutpat amet eget tincidunt non cursus orci. Consectetur nec neque imperdiet a sed ornare. Non est purus convallis morbi turpis mauris. Sit sed risus amet consectetur ac senectus faucibus. Lectus cursus purus aliquet sem velit. Platea bibendum vitae luctus purus. Commodo gravida fermentum felis turpis',
      image: projetService,
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
  {
    fr: 'Congo Kinshasa',
    en: 'Congo Kinshasa',
    href: '/',
    code: 'cd',
    flag: cdFlag,
    logo: cdLogo,
  },
  {
    fr: 'Rwanda',
    en: 'Rwanda',
    href: '/en/rw',
    code: 'rw',
    flag: rwFlag,
    logo: rwLogo,
  },
  {
    fr: 'Tanzanie',
    en: 'Tanzania',
    href: '/en/tz',
    code: 'tz',
    flag: tzFlag,
    logo: tzLogo,
  },
  {
    fr: 'Togo',
    en: 'Togo',
    href: '/en/tg',
    code: 'tg',
    flag: tgFlag,
    logo: tgLogo,
  },
  {
    fr: 'Nigéria',
    en: 'Nigeria',
    href: '/en/ng',
    code: 'ng',
    flag: ngFlag,
    logo: ngLogo,
  },
  {
    fr: 'Gabon',
    en: 'Gabon',
    href: '/en/gb',
    code: 'gb',
    flag: gbFlag,
    logo: hrLogo,
  },
  {
    fr: 'Uganda',
    en: 'Uganda',
    href: '/en/ug',
    code: 'ug',
    flag: ugFlag,
    logo: ugLogo,
  },
  {
    fr: 'Bénin',
    en: 'Benin',
    href: '/fr/bn',
    code: 'bn',
    flag: bnFlag,
    logo: bnLogo,
  },
  {
    fr: 'Angola',
    en: 'Angola',
    href: '/en/ao',
    code: 'ao',
    flag: aoFlag,
    logo: aoLogo,
  },
  {
    fr: 'Kenya',
    en: 'Kenya',
    href: '/en/ke',
    code: 'ke',
    flag: keFlag,
    logo: keLogo,
  },
  {
    fr: 'Congo Brazza',
    en: 'Congo Brazza',
    href: '/fr/cg',
    code: 'cg',
    flag: cgFlag,
    logo: cgLogo,
  },
  {
    fr: 'Cameroun',
    en: 'Cameroun',
    href: '/fr/cm',
    code: 'cm',
    flag: cmFlag,
    logo: hrLogo,
  },
  {
    fr: 'Zambie',
    en: 'Zambia',
    href: '/en/zm',
    code: 'zm',
    flag: zmFlag,
    logo: zmLogo,
  },
  {
    fr: 'Afrique du sud',
    en: 'South Africa',
    href: '/en/za',
    code: 'za',
    flag: zaFlag,
    logo: zaLogo,
  },
  {
    fr: 'Allemagne',
    en: 'Allemagne',
    href: '/en/de',
    code: 'de',
    flag: deFlag,
    logo: hrLogo,
  },
];

export const langs = [
  { fr: 'Français', en: 'French', tag: '' },
  { fr: 'RDC', en: 'RDC', tag: '', code: 'CD' },
];

export const testimonies = [
  {
    poste: "Hr supperviseur ",
    name: "Grace Memeta",
    description: "ITM Africa a été notre sauveur pour trouver un profil très spécifique en Afrique. Leur réseau étendu et leur compréhension du marché local nous ont permis de recruter rapidement le candidat idéal. Je recommande vivement leurs services.",
    image: avatarWomen
  },
  {
    poste: "Web developpeur ",
    name: "Jeereq minganda",
    description: "Les formations dispensées par ITM Africa ont été un véritable tournant pour notre entreprise. Les programmes étaient parfaitement adaptés à nos besoins et ont permis d'améliorer significativement les compétences de nos équipes dev.",
    image: avatar
  },
  {
    poste: "Chargé de paie",
    name: "Eric beya",
    description: "ITM Africa nous a simplifié la gestion de notre paie en Afrique. Leur plateforme en ligne est intuitive et leur équipe est toujours disponible pour répondre à nos questions. Nous avons gagné en efficacité et en conformité.",
    image: avatar
  },
  {
    poste: "Drh ",
    name: "Jean René Mukala",
    description: "ITM Africa est un partenaire de confiance qui nous accompagne dans tous nos projets RH. Leur expertise, leur réactivité et leur approche personnalisée font la différence.",
    image: avatar
  },
  {
    poste: "Country Manager ",
    name: "Marcel ilunga",
    description: "Grâce à ITM Africa, nous avons mieux compris la culture d'entreprise africaine et avons pu améliorer nos relations avec nos collaborateurs locaux.",
    image: avatar
  }
]