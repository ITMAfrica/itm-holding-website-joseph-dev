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
import recruitmentService from '@/public/assets/services/recruitment.png';
import personnelService from '@/public/assets/services/personnel.png';
import formationService from '@/public/assets/services/formation.png';
import avatar from '@/public/assets/bg/bg.avatar.png';
import avatarWomen from '@/public/assets/bg/bg.avatar.women.png';

export const servicesHome: any = {
  fr: [
    {
      name: 'Recrutement et externalisation du personnel',
      icon: service1,
      description:
        "La gestion d'une main-d'œuvre flexible et qualifiée dans plusieurs régions peut s'avérer difficile. Nous proposons des services de recrutement et d'externalisation de la main-d'œuvre sur mesure qui s'adaptent aux besoins de votre entreprise. Que vous ayez besoin de personnel temporaire ou d'une gestion du personnel à long terme, nous nous occupons du recrutement, de l'intégration et de la conformité. En outre, nos solutions de gestion des effectifs vous permettent de vous concentrer sur votre cœur de métier, tandis que nous gérons toutes les responsabilités en matière de ressources humaines pour votre personnel. Les employés travaillent sous votre contrôle opérationnel, mais ils sont contractés et gérés par nous, ce qui transfère les risques liés à l'emploi et les charges administratives à notre équipe.",
      image: recruitmentService,
      paragraph:
        "Donnez à votre entreprise les moyens de disposer de la main-d'œuvre adéquate, quand vous en avez besoin, et laissez-nous nous occuper du reste.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Recrutement et externalisation du personnel',
        arrow: true,
      },
    },
    {
      name: 'Recrutement et acquisition de talents',
      icon: service2,
      description:
        "Trouver les bonnes personnes est essentiel pour la croissance. Nos services de recherche de talents vous mettent en relation avec les meilleurs candidats, que vous cherchiez à pourvoir des postes spécialisés ou à embaucher à grande échelle. Nous utilisons une combinaison de technologie et d'expertise locale pour trouver la bonne personne pour votre entreprise.",
      image: personnelService,
      paragraph:
        'Découvrez les talents qui feront progresser votre entreprise.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Recrutement et acquisition de talents',
        arrow: true,
      },
    },
    {
      name: "TalentPro: Votre carrefour d'opportunités de carrière",
      icon: service3,
      description:
        "Prêt pour votre prochaine évolution de carrière ? TalentPro met en relation des professionnels qualifiés et des postes à pourvoir dans toute l'Afrique. C'est la plateforme idéale pour que les demandeurs d'emploi et les employeurs se rencontrent.",
      image: projetService,
      paragraph:
        'Trouvez votre prochaine opportunité ou embauchez les meilleurs talents.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: "TalentPro: Votre carrefour d'opportunités de carrière",
        arrow: true,
      },
    },
    {
      name: 'Payroll Management',
      icon: service1,
      description:
        'Payroll can be tricky, especially when dealing with different regions. We handle payroll management for you, ensuring employees are paid on time and in full compliance with local laws.',
      image: projetService,

      paragraph: 'Make payroll stress-free with our expert services.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Payroll Management',
        arrow: true,
      },
    },
    {
      name: 'HR Advisory Services',
      icon: service2,
      description:
        'Every business has unique HR challenges. Our HR advisory services help you navigate everything from planning your workforce to staying compliant with regulations. We work with you to create HR strategies that meet your company’s needs.',
      image: projetService,
      paragraph: 'Let’s solve your HR challenges together.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'HR Advisory Services',
        arrow: true,
      },
    },
    {
      name: 'KaziPro: Your HR Technology Solution',
      icon: service3,
      description:
        'Upgrade your HR processes with our easy-to-use HR software. From managing payroll to tracking performance, our technology solutions help make your HR tasks easier and more efficient.',
      image: formationService,
      paragraph:
        'Take your HR operations to the next level with smart technology.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'KaziPro: Your HR Technology Solution',
        arrow: true,
      },
    },
    {
      name: 'Training and Skills Development',
      icon: service3,
      description:
        'Investing in your team’s development is the key to long-term success. Our training and skills programs help your employees grow, whether they need to enhance existing skills or develop new ones. We customize programs to fit your needs.',
      image: formationService,
      paragraph: 'Help your team grow and succeed with tailored training.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Training',
        arrow: true,
      },
    },
    {
      name: 'Executive Leadership Programs',
      icon: service3,
      description:
        'Our leadership programs are designed for senior managers and rising stars in your company. These programs help build the skills needed to lead teams and navigate complex challenges, especially in fast-growing markets.',
      image: formationService,
      paragraph: 'Prepare your leaders for the future.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Executive Leadership Programs',
        arrow: true,
      },
    },
    {
      name: 'Learning and Development Hub',
      icon: service3,
      description:
        'With our online Learning and Development Hub, your employees can access training materials and courses anytime, anywhere. It’s a flexible and convenient way to keep your team learning and growing.',
      image: formationService,
      paragraph: 'Enable continuous learning with our online platform.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Learning and Development Hub',
        arrow: true,
      },
    },
    {
      name: 'Team Building Solutions',
      icon: service3,
      description:
        'Strong teams lead to strong businesses. Our team-building activities are designed to improve communication, teamwork, and productivity. They’re fun, engaging, and tailored to your team’s needs.',
      image: formationService,
      paragraph: 'Bring your team together with activities that build trust.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Team Building Solutions',
        arrow: true,
      },
    },
    {
      name: 'Employee Benefits and Salary Benchmarking',
      icon: service3,
      description:
        'Offering competitive benefits is key to keeping your team happy and productive. We help you design benefits packages and conduct salary surveys across industries, countries, and roles to make sure you stay competitive.',
      image: formationService,
      paragraph: 'Retain top talent with great benefits and fair pay.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Employee Benefits and Salary Benchmarking',
        arrow: true,
      },
    },
    {
      name: 'Performance Management',
      icon: service3,
      description:
        'Keeping track of performance is crucial for a productive team. We help you set up systems to track goals, give feedback, and ensure your team stays motivated. It’s all about keeping people on track to achieve great things.',
      image: formationService,
      paragraph: 'Boost your team’s performance with simple, effective tools.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Performance Management',
        arrow: true,
      },
    },
    {
      name: 'Expatriate Management',
      icon: service3,
      description:
        'When expanding into new regions, managing expatriates can be a challenge. We take care of visas, housing, and all the paperwork, so your employees can settle in smoothly and focus on their work.',
      image: formationService,
      paragraph: 'Make expatriate assignments easy and hassle-free.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Expatriate Management',
        arrow: true,
      },
    },
    {
      name: 'Workforce Insights and Analytics',
      icon: service3,
      description:
        'Make informed decisions with data-driven insights. Our workforce analytics service helps you understand employee performance, engagement, and turnover, so you can make smarter HR decisions.',
      image: formationService,
      paragraph: 'Turn data into actionable insights for better HR decisions.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/service-detail',
        title: 'Workforce Insights and Analytics',
        arrow: true,
      },
    },
  ],
  en: [
    {
      name: 'Staffing and Workforce Outsourcing',
      icon: service1,
      description:
        'Managing a flexible and skilled workforce across multiple regions can be challenging. We provide tailored staffing and workforce outsourcing services that adapt to your business needs. Whether you require temporary staffing or long-term workforce management, we handle recruitment, onboarding, and compliance. Additionally, our Managed Workforce Solutions allow you to focus on your core business while we manage all HR responsibilities for your staff. Employees work under your operational control, but they are contracted and managed by us, shifting employment risks and administrative burdens to our team.',
      image: recruitmentService,
      paragraph:
        'Empower your business with the right workforce, whenever you need it, and let us handle the rest.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Staffing and Workforce Outsourcing',
        arrow: true,
      },
    },
    {
      name: 'Recrutment and Talent Acquisition',
      icon: service2,
      description:
        "Finding the right people is essential for growth. Our talent sourcing services connect you with the best candidates, whether you're looking to fill specialized roles or hire at scale. We use a combination of technology and local expertise to find the right fit for your company.",
      image: personnelService,
      paragraph: 'Discover the talent that will drive your business forward.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Recrutment and Talent Acquisition',
        arrow: true,
      },
    },
    {
      name: 'TalentPro: Your Career Opportunities Hub',
      icon: service3,
      description:
        'Ready for your next career move? TalentPro connects skilled professionals with the right roles across Africa. It’s the perfect platform for job seekers and employers to meet.',
      image: projetService,
      paragraph: 'Find your next opportunity or hire the best talent.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'TalentPro: Your Career Opportunities Hub',
        arrow: true,
      },
    },
    {
      name: 'Payroll Management',
      icon: service1,
      description:
        'Payroll can be tricky, especially when dealing with different regions. We handle payroll management for you, ensuring employees are paid on time and in full compliance with local laws.',
      image: projetService,

      paragraph: 'Make payroll stress-free with our expert services.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Payroll Management',
        arrow: true,
      },
    },
    {
      name: 'HR Advisory Services',
      icon: service2,
      description:
        'Every business has unique HR challenges. Our HR advisory services help you navigate everything from planning your workforce to staying compliant with regulations. We work with you to create HR strategies that meet your company’s needs.',
      image: projetService,
      paragraph: 'Let’s solve your HR challenges together.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'HR Advisory Services',
        arrow: true,
      },
    },
    {
      name: 'KaziPro: Your HR Technology Solution',
      icon: service3,
      description:
        'Upgrade your HR processes with our easy-to-use HR software. From managing payroll to tracking performance, our technology solutions help make your HR tasks easier and more efficient.',
      image: formationService,
      paragraph:
        'Take your HR operations to the next level with smart technology.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'KaziPro: Your HR Technology Solution',
        arrow: true,
      },
    },
    {
      name: 'Training and Skills Development',
      icon: service3,
      description:
        'Investing in your team’s development is the key to long-term success. Our training and skills programs help your employees grow, whether they need to enhance existing skills or develop new ones. We customize programs to fit your needs.',
      image: formationService,
      paragraph: 'Help your team grow and succeed with tailored training.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Training',
        arrow: true,
      },
    },
    {
      name: 'Executive Leadership Programs',
      icon: service3,
      description:
        'Our leadership programs are designed for senior managers and rising stars in your company. These programs help build the skills needed to lead teams and navigate complex challenges, especially in fast-growing markets.',
      image: formationService,
      paragraph: 'Prepare your leaders for the future.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Executive Leadership Programs',
        arrow: true,
      },
    },
    {
      name: 'Learning and Development Hub',
      icon: service3,
      description:
        'With our online Learning and Development Hub, your employees can access training materials and courses anytime, anywhere. It’s a flexible and convenient way to keep your team learning and growing.',
      image: formationService,
      paragraph: 'Enable continuous learning with our online platform.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Learning and Development Hub',
        arrow: true,
      },
    },
    {
      name: 'Team Building Solutions',
      icon: service3,
      description:
        'Strong teams lead to strong businesses. Our team-building activities are designed to improve communication, teamwork, and productivity. They’re fun, engaging, and tailored to your team’s needs.',
      image: formationService,
      paragraph: 'Bring your team together with activities that build trust.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Team Building Solutions',
        arrow: true,
      },
    },
    {
      name: 'Employee Benefits and Salary Benchmarking',
      icon: service3,
      description:
        'Offering competitive benefits is key to keeping your team happy and productive. We help you design benefits packages and conduct salary surveys across industries, countries, and roles to make sure you stay competitive.',
      image: formationService,
      paragraph: 'Retain top talent with great benefits and fair pay.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Employee Benefits and Salary Benchmarking',
        arrow: true,
      },
    },
    {
      name: 'Performance Management',
      icon: service3,
      description:
        'Keeping track of performance is crucial for a productive team. We help you set up systems to track goals, give feedback, and ensure your team stays motivated. It’s all about keeping people on track to achieve great things.',
      image: formationService,
      paragraph: 'Boost your team’s performance with simple, effective tools.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Performance Management',
        arrow: true,
      },
    },
    {
      name: 'Expatriate Management',
      icon: service3,
      description:
        'When expanding into new regions, managing expatriates can be a challenge. We take care of visas, housing, and all the paperwork, so your employees can settle in smoothly and focus on their work.',
      image: formationService,
      paragraph: 'Make expatriate assignments easy and hassle-free.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Expatriate Management',
        arrow: true,
      },
    },
    {
      name: 'Workforce Insights and Analytics',
      icon: service3,
      description:
        'Make informed decisions with data-driven insights. Our workforce analytics service helps you understand employee performance, engagement, and turnover, so you can make smarter HR decisions.',
      image: formationService,
      paragraph: 'Turn data into actionable insights for better HR decisions.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Workforce Insights and Analytics',
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

export const organisations = [
  { name: 'IFS', slogant: 'Your busness Solutions partner' },
  { name: 'ITM SARL', slogant: 'Your busness Solutions partner' },
  { name: 'GEOKATANGA', slogant: 'Your busness Solutions partner' },
  { name: 'DENDIS WORLD', slogant: 'Your busness Solutions partner' },
];
export const langs = [
  { fr: 'Français', en: 'French', tag: '' },
  { fr: 'RDC', en: 'RDC', tag: '', code: 'CD' },
];

export const testimonies = [
  {
    poste: 'Hr supperviseur ',
    name: 'Grace Memeta',
    description:
      'ITM Africa a été notre sauveur pour trouver un profil très spécifique en Afrique. Leur réseau étendu et leur compréhension du marché local nous ont permis de recruter rapidement le candidat idéal. Je recommande vivement leurs services.',
    image: avatarWomen,
  },
  {
    poste: 'Web developpeur ',
    name: 'Jeereq minganda',
    description:
      "Les formations dispensées par ITM Africa ont été un véritable tournant pour notre entreprise. Les programmes étaient parfaitement adaptés à nos besoins et ont permis d'améliorer significativement les compétences de nos équipes dev.",
    image: avatar,
  },
  {
    poste: 'Chargé de paie',
    name: 'Eric beya',
    description:
      'ITM Africa nous a simplifié la gestion de notre paie en Afrique. Leur plateforme en ligne est intuitive et leur équipe est toujours disponible pour répondre à nos questions. Nous avons gagné en efficacité et en conformité.',
    image: avatar,
  },
  {
    poste: 'Drh ',
    name: 'Jean René Mukala',
    description:
      'ITM Africa est un partenaire de confiance qui nous accompagne dans tous nos projets RH. Leur expertise, leur réactivité et leur approche personnalisée font la différence.',
    image: avatar,
  },
  {
    poste: 'Country Manager ',
    name: 'Marcel ilunga',
    description:
      "Grâce à ITM Africa, nous avons mieux compris la culture d'entreprise africaine et avons pu améliorer nos relations avec nos collaborateurs locaux.",
    image: avatar,
  },
];
