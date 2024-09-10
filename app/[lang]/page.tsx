import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import Btn from '@/components/counter';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const cookieStore = cookies();
  const isCountryDefined = cookieStore.has('country');

  if (isCountryDefined) {
    const countryName = cookieStore.get('country');
    permanentRedirect(`/${countryName}`);
  }
  console.log('Country exist', isCountryDefined);

  return (
    <div>
      <h1>Welcome to the ITM Africa web site</h1>
      <div>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{' '}
          {dictionary['server-component']['welcome']}
        </p>
        <Btn />
      </div>
    </div>
  );
}
