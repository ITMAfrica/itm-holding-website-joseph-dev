import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ITM Africa',
    alternateName: 'ITM HR',
    url: 'https://itmafrica.com',
    logo: 'https://itmafrica.com/assets/logo/logo.png',
    description:
      locale === 'en'
        ? 'ITM HR is your strategic partner in HR solutions in Africa. With a proven track record of managing over 15,000 employees in 18 countries.'
        : 'ITM HR est votre partenaire stratégique en solutions RH en Afrique. Avec une expérience éprouvée dans la gestion de plus de 15 000 employés dans 18 pays.',
    sameAs: [
      'https://www.facebook.com/ITMAfrica',
      'https://www.linkedin.com/company/itm-africa',
      'https://twitter.com/ITMAfrica',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CD',
      addressLocality: 'Kinshasa',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['en', 'fr'],
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Democratic Republic of Congo' },
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'Angola' },
      { '@type': 'Country', name: 'Benin' },
      { '@type': 'Country', name: 'Cameroon' },
      { '@type': 'Country', name: 'Congo' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Togo' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Zambia' },
      { '@type': 'Country', name: 'Burundi' },
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'Senegal' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
    ],
    foundingDate: '2010',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15000,
    },
    knowsAbout: [
      'Human Resources',
      'Recruitment',
      'Payroll Management',
      'Employee Training',
      'HR Compliance',
      'Workforce Management',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ITM Africa',
    url: 'https://itmafrica.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://itmafrica.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'fr'],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
